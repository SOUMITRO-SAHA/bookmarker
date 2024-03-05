"use client";
import React from "react";

interface DynamicPageProps {
  params: { slug: string };
}

const DynamicPage: React.FC<DynamicPageProps> = ({ params }) => {
  // TODO: It will have the access of `slug`
  console.log(params.slug);

  return <div>DynamicPage</div>;
};

export default DynamicPage;
