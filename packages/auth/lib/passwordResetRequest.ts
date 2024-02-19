import dayjs from "dayjs";
import { User, db } from "@repo/db";

export const PASSWORD_RESET_EXPIRY_HOURS = 6;

const RECENT_MAX_ATTEMPTS = 3;
const RECENT_PERIOD_IN_MINUTES = 5;

export const createPasswordReset = async (email: string): Promise<string> => {
  const expiry = dayjs().add(PASSWORD_RESET_EXPIRY_HOURS, "hours").toDate();

  const createdResetPasswordRequest = await db.resetPasswordRequest.create({
    data: {
      email,
      expires: expiry,
    },
  });

  return `${process.env.NEXT_PUBLIC_WEBAPP_URL}/auth/forgot-password/${createdResetPasswordRequest.id}`;
};

const guardAgainstTooManyPasswordResets = async (email: string) => {
  const recentPasswordRequestsCount = await db.resetPasswordRequest.count({
    where: {
      email,
      createdAt: {
        gt: dayjs().subtract(RECENT_PERIOD_IN_MINUTES, "minutes").toDate(),
      },
    },
  });
  if (recentPasswordRequestsCount >= RECENT_MAX_ATTEMPTS) {
    throw new Error(
      "Too many password reset attempts. Please try again later."
    );
  }
};

export const passwordResetRequest = async (
  user: Pick<User, "email" | "name">
) => {
  const { email } = user;

  if (email) {
    await guardAgainstTooManyPasswordResets(email);

    const resetLink = await createPasswordReset(email);
    // send email in user language
    await sendPasswordResetEmail({
      language: t,
      user,
      resetLink,
    });
  }
};
