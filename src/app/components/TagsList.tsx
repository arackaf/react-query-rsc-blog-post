import { FC } from "react";

export const TagsList: FC<{ tags: any[] }> = ({ tags }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg font-bold leading-none">Tags</h1>
      <div>
        {tags.map((tag) => (
          <div key={tag.id} className="flex gap-3">
            <span>{tag.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
