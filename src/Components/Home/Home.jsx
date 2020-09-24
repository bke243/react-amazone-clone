import React, { Component } from 'react'
import Product from '../Product/Product';

import './Home.css';

export class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className="home__container">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className='home__image' alt="imageBanner"/>

                    <div className="home__row">
                        <Product title='The lean startup' 
                        id={4687144}
                        price={29.99}  
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
                        rating={4}
                        />
                        <Product title='Kenwood '
                        id={468714457}
                        price={329.99}  
                        image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg' 
                        rating={4}
                        />
                    </div>
                    <div className="home__row">
                        <Product title='Apple watch'
                        id={468714458818}

                        price={1090.99}  
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGi8OWBTQxnuSVFW7BjslLic_12QDRJq-QGAkYN_FabfjIF_JTb7hop53ACjHLAN4TMr2Z_5A&usqp=CAc' 
                        rating={4}
                        />
                        <Product title='Amazonn Echo' 
                        id={46871818}
                        price={109.99}  
                        image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$' 
                        rating={4}
                        />
                        <Product title='New appl IPad pro'
                        id={468758818}
                        price={2000}  
                        image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg' 
                        rating={4}
                        />
                        
                    </div>
                    <div className="home__row">
                        <Product title='Samsung Tv '
                        id={6544652}
                        price={800}  
                        image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' 
                        rating={4}
                        />
                    </div>

                </div>
            </div>
        )
    }
}

export default Home
