import RenderNewsContainer from "@/components/render-news-container";
import React from "react";

const Health = ({ route }: { route: any }) => {
  const { category } = route.params;

  return <RenderNewsContainer category={category} />;
};

export default Health;
