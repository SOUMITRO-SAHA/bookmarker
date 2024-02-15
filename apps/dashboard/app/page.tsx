import { Button } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main className="flex items-center justify-center w-screen h-screen text-3xl text-white bg-blue-500">
      <div className="text-center">
        <div className="my-3">Home Page</div>
        <Button>Testing</Button>
      </div>
    </main>
  );
}
