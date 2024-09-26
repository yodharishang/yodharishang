import React from 'react';

function NavBar({children}){
	return(
		<>
		<nav className="bg-white text-red-600">
		<h1>Ini NavBar</h1>
		{children}
		</nav>
		</>
  );
}

export default NavBar;