export interface Archivebody {
  bookId: string;
  title: string;
  createdAt: string;
}

export interface Chapter {
  content: string;
  musicTitle: string;
  composer: string;
}

export interface ArchiveContent {
  bookId: string;
  title: string;
  chapter: Chapter[];
  createdAt: string;
}
