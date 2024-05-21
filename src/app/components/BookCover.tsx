"use client";

import type { BookImages } from "../types";
import type { FC } from "react";

type BookImagesPassed = Partial<BookImages>;

export const BookCover: FC<{ book: BookImagesPassed }> = (props) => {
  const { book } = props;
  const noCoverMessage = "No Cover";
  const previewToUse = book.smallImagePreview!;

  const previewString = previewToUse == null ? "" : typeof previewToUse === "string" ? previewToUse : previewToUse.b64;
  const sizingStyle = previewToUse != null && typeof previewToUse === "object" ? { width: `${previewToUse.w}px`, height: `${previewToUse.h}px` } : {};

  const urlToUse = book.smallImage;

  let noCoverClasses: string = "";
  let noCoverCommonClasses = "bg-primary-4 text-primary-9 text-center";

  noCoverClasses = noCoverCommonClasses + " ";
  noCoverClasses += "w-[50px] h-[65px] pt-2 text-sm";

  return (
    <div className="overlay-holder overflow-hidden" style={sizingStyle}>
      {previewString ? (
        <span className="z-[1] blur-sm" style={{ background: `url('${previewString}') no-repeat`, backgroundSize: "cover", ...sizingStyle }} />
      ) : null}
      {urlToUse ? (
        <img className="z-[2] {imgClasses}" alt="Book cover" src={urlToUse} style={sizingStyle} />
      ) : (
        <div className={noCoverClasses}>
          <div>{noCoverMessage}</div>
        </div>
      )}
    </div>
  );
};
