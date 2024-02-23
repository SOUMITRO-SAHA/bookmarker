import { Logger, ILogObj } from "tslog";
import { IS_PRODUCTION } from "./constants.js";

export const logger: Logger<ILogObj> = new Logger({
  minLevel: !!process.env.NEXT_PUBLIC_DEBUG ? 2 : 4,
  maskValuesOfKeys: [
    "password",
    "passwordConfirmation",
    "credentials",
    "credential",
  ],
  prettyLogTimeZone: IS_PRODUCTION ? "UTC" : "local",
  prettyErrorStackTemplate:
    " * {{fileName}}\t{{method}}\n\t{{filePathWithLine}}",
  prettyErrorTemplate:
    "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",
  prettyLogTemplate: "{{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}",
  stylePrettyLogs: true,
  prettyLogStyles: {
    name: "yellow",
    dateIsoStr: "blue",
  },
});
