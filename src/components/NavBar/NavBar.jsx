import "./navbar.css";

const NavBar= () => {
    return (
        <div class="container-fluid bike_container">
		    <header>	
			    <div id="menu">
				    <nav class="nav1">
					    	<a href="index.html"><img id="logo_aero" src="img/LogoAero.jpg" alt="aero bikes logo"></a>
					    <ul>
					    	<li><a href="">Home</a></li>
					    	<li><a href="">About Us</a></li>
					    	<li><a href="">Bike Shop</a></li>
					    	<li><a href="">Accesories</a></li>
					    	<li><a href="">Contact</a></li>
					    	<li><a href="">LogIn</a></li>
				    	</ul>
				    </nav>
				    <div class="fake-line"></div>
			    </div>
            </header>
        </div>
            
    );
}

export default NavBar;