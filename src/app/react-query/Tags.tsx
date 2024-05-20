import { FC } from "react";
import { TagsList } from "../components/TagsList";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Tags: FC<{}> = async () => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ["tags-query"],
    queryFn: () => fetch("http://localhost:3000/api/tags").then((resp) => resp.json()),
  });

  const { tags } = data;

  return (
    <div>
      <TagsList tags={tags} />
    </div>
  );
};
