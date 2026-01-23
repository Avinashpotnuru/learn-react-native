import RenderNewsContainer from "@/components/render-news-container";
import React from "react";

const Technology = ({ route }: { route: any }) => {
  const { category } = route.params;

  return <RenderNewsContainer category={category} />;
};

export default Technology;
