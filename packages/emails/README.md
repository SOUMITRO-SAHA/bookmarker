# JSX email templates

- `components` Holds reusable patterns
- `templates` A template equals a type of email sent

## Usage

```ts
import { renderEmail } from "@repo/emails";

await renderEmail("Features Update", {
  from: "admin@example.com",
  to: "free@example.com",
});
```

The first argument is the template name as defined inside `templates/index.ts`. The second argument are the template props.

## Development

You can use an API endpoint to preview the email HTML, there's already one on `/apps/dashboard/pages/api/email.ts` feel free to change the template to the one you're currently working on.
