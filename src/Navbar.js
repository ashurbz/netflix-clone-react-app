import React from 'react';
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import NotificationIcon from "@material-ui/icons/Notifications"

function NavBar() {
    return (
        <div className="navbar">
            <span> <img className="navbar__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" srcSet=""/> </span>
             <span>Home</span>
             <span>TV Shows</span>
             <span>Movies</span>
             <span>Latest</span>
             <span>My List</span>
             <span>Kids</span>
             <span><SearchIcon/></span>
             <span><NotificationIcon/></span>
             <span><StoreFrontIcon/></span>

            
        </div>
    )
}

export default NavBar
