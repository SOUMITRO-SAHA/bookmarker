import * as React from "react";

export function useCopy() {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => setIsCopied(true))
        .catch((error) => console.error("Copy to clipboard failed:", error));
    }
  };

  const resetCopyStatus = () => {
    setIsCopied(false);
  };

  React.useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(resetCopyStatus, 3000); // Reset copy status after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return { isCopied, copyToClipboard, resetCopyStatus };
}
