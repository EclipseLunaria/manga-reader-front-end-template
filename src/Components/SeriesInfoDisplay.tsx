import React from "react";
import "../styles/SeriesInfoDisplay.css";
const SeriesInfoDisplay = () => {
    const metadata = [
        {
            key: "Author",
            value: "Meguru Ueno",
            icon: "https://img.icons8.com/ios/452/book.png"
        },
        {
            key: "Status",
            value: "Ongoing",
            icon: "https://img.icons8.com/ios/452/paint-palette.png"
        },
        {
            key: "Genre",
            value: "Romance, Comedy, Ecchi",
            icon: "https://img.icons8.com/ios/452/genre.png"
        },
        {
            key: "Updated",
            value: "Jul 09,2024 - 09:19 AM",
            icon: "https://img.icons8.com/ios/452/calendar"
        },
        {
            key: "Views",
            value: "1,000,000",
            icon: "https://img.icons8.com/ios/452/visible.png"
        },
        {
            key: "Rating",
            value: "4.5/5",
            icon: "https://img.icons8.com/ios/452/star.png"
        }
    ];
    return (
        <div className="series-info-display-container">
            <div className="series-info-header">
                <div className="series-meta-info">
                    <img src="https://avt.mkklcdnv6temp.com/49/z/13-1583489684.jpg" alt="Series Cover" />
                    <SeriesMetaInfoTable metadata={metadata}/>
                    {/* <div className="series-meta-info-item">Status: Ongoing</div>
                    <div className="series-meta-info-item">Views: 1,000,000</div>
                    <div className="series-meta-info-item">Rating: 4.5/5</div> */}
                </div>
                <div className="series-info-title-container">
                    <div className="series-info-title"><h3>Hajimete no Gal</h3></div>
                    <div className="series-info-description">Spring. The "season of love" has arrived and it seems that finding himself a girlfriend was harder than Jun'ichi believed. To break the status quo, Jun'ichi's friends have forced him into confessing to the gyaru, Yame Yukana. However, things do not go quite as he expected. A series of "firsts" begins!</div>
                </div>
            </div>
        </div>
    );
};

interface SeriesMetaInfo {
    key: string;
    value: string;
    icon: string;
}

const SeriesMetaInfoTable = (props:{metadata: SeriesMetaInfo[]}) => {
    return (
        <div className="series-meta-info-table">
            <h3>Series Information</h3>

            <div className="series-meta-info-container">
                {
                    props.metadata.map((info : SeriesMetaInfo, index) => {
                        return (
                            <div key={index} className="series-meta-info-item">
                                <img src={info.icon} alt={info.key} />
                                <div className="series-meta-info-key">{info.key}: </div>
                                <div className="series-meta-info-value">{info.value}</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SeriesInfoDisplay;