import React from 'react';
import '../styles/MangaSearchPage.css';
import MangaSearchDisplay from '../Components/MangaSearchDisplay';
import SeriesInfoDisplay from '../Components/SeriesInfoDisplay';
const MangaSearchPage = () => {
  const [selectedMangaId, setSelectedMangaId] = React.useState<string>('');
  const handleMangaSelect = (mid: string) => {
    setSelectedMangaId(mid);
    console.log(mid);
  };
  return (
    <div className="manga-search-page">
      <MangaSearchDisplay onClick={handleMangaSelect} />
      <SeriesInfoDisplay selectedMangaId={selectedMangaId} />
    </div>
  );
};

export default MangaSearchPage;
