import { Button } from "@/common/Button";
import LoginForm from "@/components/auth/Login/LoginForm";
import { X } from "lucide-react";
import { useRouter } from "next/router";

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-10 bg-zinc-900/20">
      <div className="container flex items-center h-full max-w-lg mx-auto">
        <div className="relative w-full px-2 py-20 bg-white rounded-lg h-fit">
          <div className="absolute top-4 right-4">
            <Button onClick={() => router.back()}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;
