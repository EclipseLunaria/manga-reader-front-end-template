import React from "react";
// import "../styles/NavBar.css";
import searchIcon from "./searchIcon.png";
import { Link, Outlet } from "react-router-dom";
import "../styles/Layout.css";
const Layout = () => {
    return (
        <div className="layout-container">
            <div className="layout-nav-header">
                <h1>Manga Reader</h1>
            </div>
            <div className="layout-contents">
                <div className="layout-nav-sidebar">
                    <SidebarOption name="Search" icon={searchIcon} link="search"/>
                </div>
                
                    <Outlet />
            </div>
            
        </div>
        
);
};

const SidebarOption = (props: {name:string, icon:string, link:string}) => {
    return (
        <Link to={props.link} className="nav-option-container">
            <div className="manga-reader-sidebar-option" style={{backgroundImage:`url("${props.icon}")`, backgroundSize: "100% 100%", height: "40px", width: "40px"}}>
            
            </div>
        </Link>

    );
}

export default Layout;