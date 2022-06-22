import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const NavBar= () => {
    return (
        <div class="container-fluid bike_container">
		    <header>	
			    <div id="menu">
				    <nav class="nav1">
                        
					    <ul>
					    	<li>Home</li>
					    	<li>About Us</li>
					    	<li>Bike Shop</li>
                            <CartWidget />
					    	<li>Accesories</li>
					    	<li>Contact</li>
					    	<li>LogIn</li>
				    	</ul>
				    </nav>
				    <div class="fake-line"></div>
			    </div>
            </header>
        </div>
            
    );
}

export default NavBar;