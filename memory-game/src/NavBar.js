import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
	static defaultProps = {
		onShowForm() { }
	}

	render() {
		return (
			<header>
				<nav>
					<div className="logo">Memory Game</div>
					<div className="nav-links">
						<li><a onClick="">Novo Jogo</a></li>
					</div>
				</nav>
			</header>
		);
	}
}

export default NavBar;