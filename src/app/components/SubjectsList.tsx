import { FC } from "react";

export const SubjectsList: FC<{ subjects: any[] }> = ({ subjects }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg font-bold leading-none">Subjects</h1>
      <div>
        {subjects.map((subject) => (
          <div key={subject.id} className="flex gap-3">
            <span>{subject.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
