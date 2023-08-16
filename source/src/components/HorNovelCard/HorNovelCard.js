import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";

import "./HorNovelCard.css";

const HorNovelCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { thumbnailSrc, name, genres, author, likes, script } = props;

  return (
    <div className={`HorNovelCardContainer ${isHovered ? "Hovered" : ""}`}>
      <Link to ="/novelinfo">
        <div  className="ThumbnailContainer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src ={thumbnailSrc}
            className="ThumbImg"
            alt="thumbnail"
            />
          {isHovered && (
              <FontAwesomeIcon icon={faPlay} className="ThumbIcon"/>
          )}
        </div>
        </Link>
      <div className="HorContentContainer">
        <Link to="/novelinfo"><h1 className="NovelTitle">{name}</h1></Link>
        <div className="GenresContainer">
          {genres.map((genre, index) => (
            <button className="GenreBtn" key={index}  title="genre">{genre}</button>
          ))}
        </div>
        <Link to ="/profile" className="AuthorName">Author: {author}</Link>
        <span className="Likes">Likes: {likes} <FontAwesomeIcon icon={faHeart} style={{color: 'red'}}/></span>
        <p className="Script">{script}</p>
      </div>
    </div>
  );
};

export default HorNovelCard;