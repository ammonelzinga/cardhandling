export type Quote = {
  text: string;
  author?: string;
  source?: string;
  year?: number | string;
  tags?: string[];
};

export type SubcategoryKey =
  | 'christianity'
  | 'islam'
  | 'judaism'
  | 'books'
  | 'movies'
  | 'poetry'
  | 'philosophy'
  | 'science'
  | 'society';
