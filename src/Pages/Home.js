import React from 'react';
import { Layout } from '../Components';

function Home(){
	return(
		<>
    <Layout>
     <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h1 className="font-semibold text-4xl text-orange-600">
                openStreetResto 
              </h1>
              <h2>"Applikasi web opensource berbasis react dan leaflet."</h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                openStreetResto pilihan para pelaku usaha UKM untuk menjemput konsumen dengan lebih mudah.            
               </p>
              <div className="mt-12">
                <a
                  href=""
                  target="_blank"
                  className="get-started text-orange-600 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-white hover:bg-orange-500 hover:text-white uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                Ayo mulai!
                </a>
                <a
                  href=""
                  className="github-star ml-1 text-orange-600 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 hover:bg-orange-500 hover:text-white uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
       </section>
      </Layout>
    </>
	);
}

export default Home;