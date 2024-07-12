import React, {useEffect, useState} from "react";
import "../styles/MangaSearchDisplay.css";

type MangaSearchInfo = {
    title: string;
    image: string;
    description: string;
}

const MangaSearchDisplay = () => {
    const [currentText, setCurrentText] = useState<string>("");
    const [selectedManga, setSelectedManga] = useState<string>('');
    const handleSearch = (query: string) => {
        console.log(query);
        setCurrentText(query);
    }
    return (
        <div className="manga-search-container">
            <MangaSearchHeader onClick={handleSearch} />
            <MangaSearchContents searchTerm={currentText}/>
        </div>
        
    );
};

const MangaSearchHeader = (props: {onClick: (query:string)=>void}) => { 
    const [currentText, setCurrentText] = React.useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentText(e.target.value);
    };

    const handleClick = () => {
        props.onClick(currentText);
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
}

const MangaSearchContents = (props:{searchTerm:string}) => {
    const [searchResults, setSearchResults] = useState<MangaSearchInfo[]>([]);
    const [currentManga, setCurrentManga] = useState<string>('');

    useEffect(() => {
        const search = () => {
            fetch(`http://localhost:3001/search?term=${props.searchTerm}`)
            .then(response => response.json())
            .then((data: MangaSearchInfo[]) => {
                setSearchResults(data)
            });

        }
        console.log(props.searchTerm);
        if (props.searchTerm)
            search();
    }, [props.searchTerm]);
    return (
        <div className="manga-search-contents">
            {
                searchResults.map((manga, index) => {
                return (
                    
                    <MangaSearchResult key={index} title={manga.title} image={manga.image} description={manga.description}/>
                );

            })}
        </div>
    );
}

const MangaSearchResult = (props:MangaSearchInfo) => {
    return (
        <div className="manga-search-result">
            <div className="manga-search-result-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="manga-search-result-info">
                <div className="manga-result-title">{props.title}</div>
            </div>
        </div>
    );
}

export default MangaSearchDisplay;