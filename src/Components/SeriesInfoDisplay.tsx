import React, { useState } from 'react';
import '../styles/SeriesInfoDisplay.css';
import ChapterList from './ChapterList/ChapterList';

interface MangaSeriesData {
  title: string;
  author: string | null;
  image: string;
  rating: { ratingAvg: string; totalVotes: string };
  description: string;
  status: string;
  genres: string[];
  totalChapters: number;
  chapters: { title: string; link: string }[];
}

const SeriesInfoDisplay = (props: { selectedMangaId: string }) => {
  const [mangaSeriesData, setMangaSeriesData] =
    React.useState<MangaSeriesData | null>(null);
  // React.useEffect(() => {
  //   // console.log(`http://localhost:6969/manga-${props.selectedMangaId}`);
  //   // fetch(`http://localhost:6969/manga-${props.selectedMangaId}`).then(
  //   //   (response) => {
  //   //     response.json().then((data) => {
  //   //       setMangaSeriesData(data);
  //   //       console.log(data);
  //   //     });
  //   //   },
  //   // );
  // }, [props.selectedMangaId]);

  if (!mangaSeriesData) {
    return <div className="series-info-display-container">Loading...</div>;
  }
  return (
    <div className="series-info-display-container">
      <div className="series-info-header">
        <div className="series-meta-info">
          <img src={mangaSeriesData?.image} alt="Series Cover" />
          <SeriesMetaInfoTable
            metadata={[
              {
                key: 'Author',
                value: mangaSeriesData?.author,
                icon: 'https://img.icons8.com/ios/452/book.png',
              },
              {
                key: 'Status',
                value: mangaSeriesData?.status,
                icon: 'https://img.icons8.com/ios/452/paint-palette.png',
              },
              {
                key: 'Genre',
                value: mangaSeriesData?.genres.join(', '),
                icon: 'https://img.icons8.com/ios/452/genre.png',
              },
              {
                key: 'Updated',
                value: 'Jul 09,2024 - 09:19 AM',
                icon: 'https://img.icons8.com/ios/452/calendar',
              },
              {
                key: 'Rating',
                value: `${mangaSeriesData?.rating.ratingAvg}/5`,
                icon: 'https://img.icons8.com/ios/452/star.png',
              },
              {
                key: 'Chapters',
                value: mangaSeriesData?.totalChapters.toString(),
                icon: 'https://img.icons8.com/ios/452/book.png',
              },
              {
                key: 'Latest Chapter',
                value: mangaSeriesData?.chapters[0].title,
                icon: 'https://img.icons8.com/ios/452/book.png',
              },
            ]}
          />
        </div>
        <div className="series-info-title-container">
          <div className="series-info-title">
            <h3>{mangaSeriesData?.title}</h3>
          </div>
          <div className="series-info-description">
            {mangaSeriesData?.description}
          </div>
        </div>
        <div className="series-info-chapters">
          <ChapterList chapters={mangaSeriesData.chapters} />
        </div>
      </div>
    </div>
  );
};

interface SeriesMetaInfo {
  key?: string;
  value?: string | null;
  icon?: string;
}

const SeriesMetaInfoTable = (props: { metadata: SeriesMetaInfo[] }) => {
  return (
    <div className="series-meta-info-table">
      <h3>Series Information</h3>

      <div className="series-meta-info-container">
        {props.metadata.map((info: SeriesMetaInfo, index) => {
          return (
            <div key={index} className="series-meta-info-item">
              <img
                src={info.icon}
                alt={info.key}
                className="icons"
                style={{ color: 'green' }}
              />
              <div className="series-meta-info-key">{info.key}: </div>
              <div className="series-meta-info-value">{info.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeriesInfoDisplay;
