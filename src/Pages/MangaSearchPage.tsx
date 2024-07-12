import React from "react";
import "../styles/MangaSearchPage.css";
import MangaSearchDisplay from "../Components/MangaSearchDisplay";
import SeriesInfoDisplay from "../Components/SeriesInfoDisplay";
const MangaSearchPage = () => {
    return (
        <div className="manga-search-page">
            <MangaSearchDisplay />
            <SeriesInfoDisplay />
        </div>
    );
};

export default MangaSearchPage;