import { FC } from "react";
import { TagsList } from "../components/TagsList";

export const Tags: FC<{}> = async () => {
  const tagsResp = await fetch("http://localhost:3000/api/tags");
  const { tags } = await tagsResp.json();

  return (
    <div>
      <TagsList tags={tags} />
    </div>
  );
};
