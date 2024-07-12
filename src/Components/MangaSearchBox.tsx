import React from "react";
import "../styles/MangaSearchBox.css";

interface MangaSearchResultProps {
    title: string;
    image: string;
    author: string;
}

export const MangaSearchContainer: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState<string>("");
    const [searchResults, setSearchResults] = React.useState<MangaSearchResultProps[]>([]);

    const handleClick = async (query: string) => {
        setSearchQuery(query);
        await fetchSearchResults(query);
    };

    const fetchSearchResults = async (query: string) => {
        try {
            const response = await fetch(`http://localhost:3001/search?term=${query}`);
            const data = await response.json();
            if (data) {
                const results = data.map((result: MangaSearchResultProps) => ({
                    title: result.title,
                    image: result.image,
                    author: result.author,
                }));
                setSearchResults(results);
            } else {
                console.error('No results found in response:', data);
                setSearchResults([]);
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
            setSearchResults([]);
        }
    };

    return (
        <div className="manga-search-container">
            <MangaSearchBox onClick={handleClick} />
            <MangaSearchResults searchResults={searchResults} />
        </div>
    );
};

const MangaSearchBox: React.FC<{ onClick: (query: string) => void }> = ({ onClick }) => {
    const [currentText, setCurrentText] = React.useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentText(e.target.value);
    };

    const handleClick = () => {
        onClick(currentText);
    };

    return (
        <div className="manga-search-box">
            <div className="searchbox-text">Search for a Manga</div>
            <div className="searchbox-input">
                <input type="text" placeholder="Search for a manga" onChange={handleChange} />
                <button onClick={handleClick}>🔍</button>
            </div>
        </div>
    );
};

const MangaSearchResults: React.FC<{ searchResults: MangaSearchResultProps[] }> = ({ searchResults }) => {
    return (
        <div className="manga-search-results">
            <h1>Search Results</h1>
            <div className="search-results-container">
                {searchResults.map((result, index) => (
                    <MangaSearchResultItem key={index} {...result} />
                ))}
            </div>
        </div>
    );
};

const MangaSearchResultItem: React.FC<MangaSearchResultProps> = ({ title, image, author }) => {
    return (
        <div className="manga-search-result-item">
            <img src={image} alt={title} style={{width:"105px", height:"auto", display:"flex"}}/>
            <h3>{title}</h3>
            <p>{author}</p>
        </div>
    );
};
