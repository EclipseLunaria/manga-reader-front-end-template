import React from 'react';
import { Link } from 'react-router-dom';

import './ChapterList.css';

const ChapterList = (props: {
  chapters: { title: string; link: string }[];
}) => {
  return (
    <div className="chapter-list-container">
      <div className="chapter-container-title">Chapters</div>
      <div className="chapter-list">
        {props.chapters.map((chapter) => {
          return <Chapter title={chapter.title} link={chapter.link} />;
        })}
      </div>
    </div>
  );
};

const Chapter = (props: { link: string; title: string }) => {
  return (
    <div className="chapter-item">
      <Link to={props.link}>{props.title}</Link>
    </div>
  );
};

export default ChapterList;
