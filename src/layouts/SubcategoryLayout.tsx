import ChristianityMasonry from './ChristianityMasonry';
import IslamTimeline from './IslamTimeline';
import JudaismStripedGrid from './JudaismStripedGrid';
import BooksStaggered from './BooksStaggered';
import MoviesSplitColumns from './MoviesSplitColumns';
import PoetryFlipCards from './PoetryFlipCards';
import PhilosophyGrouped from './PhilosophyGrouped';
import ScienceByYear from './ScienceByYear';
import SocietyLeaderboard from './SocietyLeaderboard';
import type { SubcategoryKey, Quote } from '../types';

export default function SubcategoryLayout({ keyName, items }: { keyName: SubcategoryKey; items: Quote[] }) {
  switch (keyName) {
    case 'christianity':
      return <ChristianityMasonry items={items} />;
    case 'islam':
      return <IslamTimeline items={items} />;
    case 'judaism':
      return <JudaismStripedGrid items={items} />;
    case 'books':
      return <BooksStaggered items={items} />;
    case 'movies':
      return <MoviesSplitColumns items={items} />;
    case 'poetry':
      return <PoetryFlipCards items={items} />;
    case 'philosophy':
      return <PhilosophyGrouped items={items} />;
    case 'science':
      return <ScienceByYear items={items} />;
    case 'society':
      return <SocietyLeaderboard items={items} />;
    default:
      return null;
  }
}
