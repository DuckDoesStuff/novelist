import React, { useState } from "react";
import GenreList from '../GenreList/GenreList.js';
import UserNav from "../UserNav/UserNav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMoon, faCaretDown, faSearch, faUserLarge } from '@fortawesome/free-solid-svg-icons';

import "./Header.css"; // Import the CSS file

function Header() {
  const [showGenres, setShowGenres] = useState(false); // Define showGenres state here
  const [showUserNav, setShowUserNav] = useState(false); // Define showGenres state here

  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchInputKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/search`);
    }
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };
  const toggleUserNav = () => {
    setShowUserNav(!showUserNav);
  };

  const toggleGenres = () => {
    setShowGenres(!showGenres);
  };

  return (
    <div className="header">
      <div className="headlogo">
          <Link to={"/"}>
              <img   src="logo.svg" alt ="logo"/>
          </Link>
      </div>
        <button 
          className={`headbtn ${showGenres?'clicked':''}` }
          onClick={toggleGenres}>Genres <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </button>
        {showGenres && <GenreList />}
      <div style={{ position: "relative" }}>
          <FontAwesomeIcon
          icon={faSearch}
          className="searchIcon"
          />
          <input
            type="text"
            placeholder="Search..."
            className="searchInput"
            value={searchInput}
            onChange={handleSearchInputChange}
            onKeyPress={handleSearchInputKeyPress}
            />
      </div>
      <div className="btnContainer">
        {isSignedIn ? (
          <div>
            <button 
              className={`headbtn ${showUserNav?'clicked':''}` }
              style={{borderRadius:'50%',width:'36px',marginRight:'10px'}} 
              onClick={toggleUserNav}>
              <FontAwesomeIcon icon={faUserLarge} flip="horizontal" size="lg" />
            </button>
            {showUserNav && <UserNav/>}

          </div>
        ) : (
          <div>
            <Link to="/signup">
              <button className="headbtn" onClick={handleSignIn}>Sign Up</button>
            </Link>
            <Link to="/signin">
              <button className="headbtn" onClick={handleSignIn}>Sign In</button>
            </Link>
          </div>     
          )}
        
        <button className="headbtn themebtn">
            <FontAwesomeIcon icon={faMoon} flip="horizontal" size="2x" />
        </button>
        
      </div>
      
    </div>
  );
}

export default Header;
