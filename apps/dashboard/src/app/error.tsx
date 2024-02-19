"use client";

// import type { NextPage } from "next";
// import type { ErrorProps } from "next/error";
// import React from "react";

// import { HttpError } from "@repo/lib/http-error";
// import logger from "@repo/lib/logger";
// import { redactError } from "@repo/lib/redactError";

// import { ErrorPage } from "@components/error/error-page";

// type NextError = Error & { digest?: string };

// export type DefaultErrorProps = {
//   error: NextError;
//   reset: () => void; // A function to reset the error boundary
// };

// type AugmentedError = NextError | HttpError | null;

// type CustomErrorProps = {
//   err?: AugmentedError;
//   statusCode?: number;
//   message?: string;
// } & Omit<ErrorProps, "err" | "statusCode">;

// const log = logger.getSubLogger({ prefix: ["[error]"] });

// const CustomError: NextPage<DefaultErrorProps> = (props) => {
//   const { error } = props;
//   let errorObject: CustomErrorProps = {
//     message: error.message,
//     err: error,
//   };

//   if (error instanceof HttpError) {
//     const redactedError = redactError(error);
//     errorObject = {
//       statusCode: error.statusCode,
//       title: redactedError.name,
//       message: redactedError.message,
//       err: {
//         ...redactedError,
//         ...error,
//       },
//     };
//   }

//   log.debug(`${error?.toString() ?? JSON.stringify(error)}`);
//   log.info("errorObject: ", errorObject);

//   return (
//     <ErrorPage statusCode={errorObject.statusCode} error={errorObject.err} message={errorObject.message} />
//   );
// };

// export default CustomError;
