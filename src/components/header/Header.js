import React, { useEffect, useState } from "react"
import "./Header.scss"
import { Link } from "react-router-dom"
// import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
          window.removeEventListener("scroll", isSticky);
        };
      }, []);
    
      const isSticky = (e) => {
        const header = document.querySelector(".header");
        const scrollTop = window.scrollY;
        scrollTop >= 20
          ? header.classList.add("is-sticky")
          : header.classList.remove("is-sticky");
      };

      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
  
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/" className="behzod"><div className="div"><span>Behzod</span></div></Link>
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    Movies
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem className='items' onClick={handleClose}><Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link></MenuItem>
                    <MenuItem className='items' onClick={handleClose}><Link to="/movies/now_playing" style={{textDecoration: "none"}}><span>Now Playing</span></Link></MenuItem>
                    <MenuItem className='items' onClick={handleClose}><Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link></MenuItem>
                    <MenuItem className='items' onClick={handleClose}><Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>BEST</span></Link></MenuItem>
                  </Menu>
                </div>

            </div>
        </div>
    )
}

export default Header