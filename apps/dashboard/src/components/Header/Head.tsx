import React from "react";

interface HeadProps {
  title: string;
  description: string;
  image: string;
  siteName?: string;
  url?: string;
  canonical?: string;
}

const buildMeta = (props: HeadProps) => {
  const { title, description, image, canonical, siteName } = props;
  return {
    title: title,
    canonical: canonical,
    openGraph: {
      site_name: siteName,
      type: "website",
      title: title,
      description: description,
      images: [
        {
          url: image,
        },
      ],
    },
    additionalMetaTags: [
      {
        property: "name",
        content: title,
      },
      {
        property: "description",
        content: description,
      },
      {
        name: "description",
        content: description,
      },
      {
        property: "image",
        content: image,
      },
    ],
  };
};

// TODO: Optimized if for the SEO Purposes
const Head: React.FC<HeadProps> = (props) => {
  const { title, description, image, canonical, siteName } = props;
  return <div>Head</div>;
};

export default Head;
