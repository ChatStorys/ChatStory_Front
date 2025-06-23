export interface Archivebody {
  bookId: string;
  title: string;
  createdAt: string;
}
export interface Music {
  title: string;
  artist: string;
}
export interface Chapter {
  chapter_num: number;
  content: string;
  recommended_music: Music[];
}

export interface ArchiveContent {
  bookId: string;
  title: string;
  chapters: Chapter[];
  createdAt: string;
}
