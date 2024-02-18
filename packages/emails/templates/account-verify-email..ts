import BaseEmail from "./base-email";

export type EmailVerifyLink = {
  user: {
    name?: string | null;
    email: string;
  };
  verificationEmailLink: string;
};

export default class AccountVerifyEmail extends BaseEmail {
  verifyAccountInput: EmailVerifyLink;

  constructor(passwordEvent: EmailVerifyLink) {
    super();
    this.name = "SEND_ACCOUNT_VERIFY_EMAIL";
    this.verifyAccountInput = passwordEvent;
  }

  protected async getNodeMailerPayload(): Promise<Record<string, unknown>> {
    return {
        to: `${this.verifyAccountInput.user.name} <${this.verifyAccountInput.user.email}>`
        from: `${APP_NAME}`,
    }
  }
}
