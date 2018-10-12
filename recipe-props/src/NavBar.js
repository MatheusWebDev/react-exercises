import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
    render(){
        
        return (
                <header>
                    <nav>
                        <div className="logo">Recipe App</div>
                        <div className="nav-links">
                            <a>New Recipe</a>
                            <a>Home</a>
                            <a>About</a>
                            <a>Contact</a>
                        </div>
                    </nav>
                </header>
                );
    }
}

export default NavBar;