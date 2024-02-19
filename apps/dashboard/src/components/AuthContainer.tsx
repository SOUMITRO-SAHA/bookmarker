import React from "react";

interface AuthContainerProps {
  title: string;
  description: string;
  footer: string;
  showLogo?: boolean;
  heading?: string;
  loading?: boolean;
}

const AuthContainer: React.FC<AuthContainerProps> = (props) => {
  const { title, description, footer, showLogo, heading, loading } = props;

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-subtle dark:bg-darkgray-50 sm:px-6 lg:px-8">
      AuthContainer
    </div>
  );
};

export default AuthContainer;
