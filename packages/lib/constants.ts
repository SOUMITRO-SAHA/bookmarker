export const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_DEV = process.env.NODE_ENV === "development";
export const IS_PRODUCTION_BUILD = process.env.NODE_ENV === "production";
export const WEBAPP_URL =
  process.env.NEXT_PUBLIC_WEBAPP_URL || "http://localhost:3000";

export const BASE_URL = WEBAPP_URL;
export const WEBSITE_URL =
  process.env.NEXT_PUBLIC_WEBSITE_URL || "https://bookmarker.com";
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Bookmarker";
export const SUPPORT_MAIL_ADDRESS =
  process.env.NEXT_PUBLIC_SUPPORT_MAIL_ADDRESS || "help@bookmarker.com";
export const SENDER_ID = process.env.NEXT_PUBLIC_SENDER_ID || "Bookmarker";
export const SENDER_NAME =
  process.env.NEXT_PUBLIC_SENDGRID_SENDER_NAME || "bookmarker.com";

/** @deprecated use `WEBAPP_URL` */
export const NEXT_PUBLIC_BASE_URL =
  process.env.NEXT_PUBLIC_WEBAPP_URL || `https://${process.env.VERCEL_URL}`;
export const LOGO = "/bookmarker-logo-white-word.svg";
export const LOGO_ICON = "/bookmarker-icon-white.svg";
export const AVATAR_FALLBACK = "/avatar.svg";
export const FAVICON_16 = "/favicon-16x16.png";
export const FAVICON_32 = "/favicon-32x32.png";
export const APPLE_TOUCH_ICON = "/apple-touch-icon.png";
export const MSTILE_ICON = "/mstile-150x150.png";
export const ANDROID_CHROME_ICON_192 = "/android-chrome-192x192.png";
export const ANDROID_CHROME_ICON_256 = "/android-chrome-256x256.png";
export const ROADMAP = "";
export const DESKTOP_APP_LINK = "";
export const JOIN_DISCORD = "";

// Config
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;
export const NEXTAUTH_EXPIRY = process.env.NEXTAUTH_EXPIRY;
