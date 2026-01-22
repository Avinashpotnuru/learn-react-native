import RenderNewsContainer from "@/components/render-news-container";
import React from "react";

const Science = ({ route }: { route: any }) => {
  const { category } = route.params;

  return <RenderNewsContainer category={category} />;
};

export default Science;
