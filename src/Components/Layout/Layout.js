import React from 'react';
import {BaseContainer} from '../Containers';
import {Header} from '../Header';
import {Footer} from '../Footer';

function Layout({children}){
	return(
		<>
		<BaseContainer>
			<Header />
			{children}
			<Footer />
		</BaseContainer>
		</>
   );
 }

export default Layout;