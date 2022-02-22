import React from 'react';

function Header({children}){
	return(
		<>
		<header>
		<h1>Ini Header</h1>
		{children}
		</header>
		</>
  );
}

export default Header;