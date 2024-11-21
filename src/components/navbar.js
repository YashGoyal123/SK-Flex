import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const handleSearch = () => {
    const sectionMap = {
      'neon sign boards': '/neon-sign',
      'acp elevation': '/acp-elevation',
      'acp': '/acp-elevation',
      'pillow': '/pillow-printing',
      'pillow printing': '/pillow-printing',
      'pillow print': '/pillow-printing',
      'neon sign': '/neon-sign',
      'neon': '/neon-sign',
      'acrylic': '/acrylic',
      'acrylic letters': '/acrylic',
      'stainless steel': '/stainless-steel',
      'stainless steel letters': '/stainless-steel',
      '3d wallpaper': '/wallpaper',
      'wallpaper': '/wallpaper',
      'flex hoarding': '/flex-hoarding',
    };

    const route = sectionMap[searchTerm.toLowerCase()];

    if (route) {
      navigate(route);
      setSearchResult(null);
    } else {
      setSearchResult('No results found');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src='logo.png' alt="Logo" className="logo-img" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/"><button>Home</button></Link></li>
        <li><Link to="/about"><button>About Us</button></Link></li>
        <li className="dropdown" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="dropdown-button">Types of Work</button>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/acp-elevation">ACP Elevation</Link></li><hr />
              <li><Link to="/acrylic">Acrylic</Link></li><hr />
              <li><Link to="/stainless-steel">Stainless Steel</Link></li><hr />
              <li><Link to="/neon-sign">Neon Sign</Link></li><hr />
              <li><Link to="/glow-sign">Glow Sign Boards</Link></li><hr />
              <li><Link to="/wallpaper">3D Wallpaper</Link></li><hr />
              <li><Link to="/flex-hoarding">Flex Hoarding</Link></li><hr />
              <li><Link to="/cup-printing">Cup Printing</Link></li><hr />
              <li><Link to="/pillow-printing">Pillow Printing</Link></li><hr />
            </ul>
          )}
        </li>
      </ul>

      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {searchResult && <p className="search-result">{searchResult}</p>}
    </nav>
  );
};

export default Navbar;
