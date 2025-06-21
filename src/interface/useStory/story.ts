export interface createStorybody {
  title: string;
  category: string;
}
export interface sendStorybody {
  book_id: string;
  prompt: string;
}
export interface finishStorybody {
  book_id: string;
  created_at: string;
  is_finished: boolean;
}
