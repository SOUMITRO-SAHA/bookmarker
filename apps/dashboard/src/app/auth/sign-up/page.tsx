"use client";
import * as React from "react";
import * as z from "zod";

interface pageProps {
  //Props
}

interface FormData {
  name: string;
  password: string;
}
const formDataInitialState = {
  name: "",
  password: "",
};

const page: React.FC<pageProps> = () => {
  const [formData, setFormData] = React.useState(formDataInitialState);
  const formSchema = z
    .object({
      email: z.string().min(1).email(`${"enter_valid_email"}`),
      password: z.string().min(1),
    })
    .passthrough();

  return <main className=""></main>;
};

export default page;
