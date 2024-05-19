export type PreviewPacket = { w: number; h: number; b64: string };

export type BookImages = {
  smallImage: string | null;
  smallImagePreview: string | PreviewPacket | null;
};

export type Book = {
  id: number;
  title: string;
  authors: string[];
} & BookImages;
