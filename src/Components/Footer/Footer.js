import React from 'react';

function Footer({children}){
	return(
		<>
		<footer className="bg-orange-700">
		<h1>Ini Footer</h1>
		{children}
		</footer>
		</>
  );
}

export default Footer;