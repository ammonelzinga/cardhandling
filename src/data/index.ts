import type { SubcategoryKey, Quote } from '../types';
import { christianity } from './christianity';
import { islam } from './islam';
import { judaism } from './judaism';
import { books } from './books';
import { books_modern } from './books_modern';
import { movies } from './movies';
import { movies_extra } from './movies_extra';
import { poetry } from './poetry';
import { philosophy } from './philosophy';
import { science } from './science';
import { society } from './society';

export type SubcategoryData = Record<SubcategoryKey, Quote[]>;

export const quotes: SubcategoryData = {
  christianity,
  islam,
  judaism,
  books: [...books, ...books_modern],
  movies: [...movies, ...movies_extra],
  poetry,
  philosophy,
  science,
  society,
};
