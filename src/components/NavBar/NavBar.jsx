import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import LogoAero from "../../assets/images/LogoAero.jpg";
import './NavBar.css';
import { Link, NavLink } from "react-router-dom";

const styles= {
	logo_aero:{
		width: "70px",
		height: "80px"
	}
} 


const NavBar= () => {
    return (
		<>
        	<div className="container-fluid bike_container">
		    	<header>
			    	<div id="menu">
				    	<nav className="nav1">
							<NavLink to='/'><img src={LogoAero} alt="LogoAero" style={styles.logo_aero}></img></NavLink>
					    	<ul>
							<li><NavLink to='/'>Home</NavLink></li>
					    	<li><NavLink to='/road'>Road Bikes</NavLink></li>
							<li><NavLink to='/mountain'>Mountain Bikes</NavLink></li>
							<Link to="/Cart">
								<li><a href="/"><CartWidget /></a></li>
							</Link>
					    	<li><a href="/about">About Us</a></li>
							<li><a href="/">Contact</a></li>
							<li><a href="/">LogIn</a></li>
				    		</ul>
				    	</nav>
				    	<div className="fake-line"></div>
						
			    	</div>
            	</header>
        	</div>
		</>
            
    );
}

export default NavBar;