import { GetServerSidePropsContext } from "next";
import * as React from "react";

type WithLayoutParams<T extends Record<string, any>> = {
  getLayout: (page: React.ReactElement) => React.ReactNode | null;
  Page?: (props: T) => React.ReactElement | null;
  getData?: (args: GetServerSidePropsContext) => Promise<T | undefined>;
};

const WithLayout = () => {
  return <div>WithLayout</div>;
};

export default WithLayout;
