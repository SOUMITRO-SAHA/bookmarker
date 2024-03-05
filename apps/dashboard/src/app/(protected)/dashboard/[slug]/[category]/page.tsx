import React from "react";

interface CategoryPageProps {
  params: { slug: string };
}

const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
  // TODO: It will have the access of `slug`
  console.log(params.slug);
  return <div>CategoryPage</div>;
};

export default CategoryPage;
