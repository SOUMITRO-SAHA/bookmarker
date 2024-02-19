import { Check, Circle, Info, X } from "lucide-react";
import type { FieldValues } from "react-hook-form";
import { useFormContext } from "react-hook-form";

type hintsOrErrorsProps = {
  hintErrors?: string[];
  fieldName: string;
};

export function HintsOrErrors<T extends FieldValues = FieldValues>({
  hintErrors,
  fieldName,
}: hintsOrErrorsProps) {
  const methods = useFormContext() as ReturnType<typeof useFormContext> | null;
  if (!methods) return null;
  const { formState } = methods;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const fieldErrors: FieldErrors<T> | undefined = formState.errors[fieldName];

  if (!hintErrors && fieldErrors && !fieldErrors.message) {
    return (
      <div className="flex items-center mt-2 text-sm text-gray text-default">
        <ul className="ml-2">
          {Object.keys(fieldErrors).map((key: string) => {
            return (
              <li key={key} className="text-blue-700">
                {`${fieldName}_hint_${key}`}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  if (hintErrors && fieldErrors) {
    // hints passed, field errors exist
    return (
      <div className="flex items-center mt-2 text-sm text-gray text-default">
        <ul className="ml-2">
          {hintErrors.map((key: string) => {
            const submitted = formState.isSubmitted;
            const error = fieldErrors[key] || fieldErrors.message;
            return (
              <li
                key={key}
                data-testid="hint-error"
                className={
                  error !== undefined
                    ? submitted
                      ? "bg-yellow-200 text-red-700"
                      : ""
                    : "text-green-600"
                }
              >
                {error !== undefined ? (
                  submitted ? (
                    <X
                      size="12"
                      strokeWidth="3"
                      className="inline-block -ml-1 ltr:mr-2 rtl:ml-2"
                    />
                  ) : (
                    <Circle
                      fill="currentColor"
                      size="5"
                      className="inline-block ltr:mr-2 rtl:ml-2"
                    />
                  )
                ) : (
                  <Check
                    size="12"
                    strokeWidth="3"
                    className="inline-block -ml-1 ltr:mr-2 rtl:ml-2"
                  />
                )}
                {`${fieldName}_hint_${key}`}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  if (fieldErrors) {
    return (
      <div
        data-testid="field-error"
        className="flex items-center mt-2 text-sm text-red-700 text-gray gap-x-2"
      >
        <div>
          <Info className="w-3 h-3" />
        </div>
        <p>{fieldErrors.message}</p>
      </div>
    );
  }

  if (!hintErrors) return null;

  // hints passed, no errors exist, proceed to just show hints
  return (
    <div className="flex items-center mt-2 text-sm text-gray text-default">
      <ul className="ml-2">
        {hintErrors.map((key: string) => {
          // if field was changed, as no error exist, show checked status and color
          const dirty = formState.dirtyFields[fieldName];
          return (
            <li key={key} className={!!dirty ? "text-green-600" : ""}>
              {!!dirty ? (
                <Check
                  size="12"
                  strokeWidth="3"
                  className="inline-block -ml-1 ltr:mr-2 rtl:ml-2"
                />
              ) : (
                <Circle
                  fill="currentColor"
                  size="5"
                  className="inline-block ltr:mr-2 rtl:ml-2"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
