import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';

const someValidPath = "#"; //coloca um '#' nos links

const NavBar = ({ onNewGame }) => (
	<header>
		<nav>
			<div className="logo">Memory Game</div>
			<div className="nav-links">
				<li><a onClick={onNewGame} href={someValidPath}>Novo Jogo</a></li>
			</div>
		</nav>
	</header>
);

NavBar.propTypes = {
	onNewGame: PropTypes.func.isRequired
}

export default NavBar;