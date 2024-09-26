import React from 'react';
import {NavBar} from '../NavBar';


function Header({children}){
	return(
		<>
		<header className="bg-blue-600">
		<h1>Ini Header</h1>
		<NavBar/>
		{children}
		</header>
		</>
  );
}

export default Header;