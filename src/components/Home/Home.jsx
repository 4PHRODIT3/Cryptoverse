import React from 'react';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { millify } from 'millify'
import './styles.css';
import { intro,totalCryptos,exchange,volume,marketCup,totalMarket } from '../../images';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies';
import News from '../News/News';

const Home = () => {
    const { data,isFetching,isError } = useGetCryptosQuery(50);
    const globalData = data?.data?.stats;
    if(isFetching) return (<div>Loading...</div>)
    return (
        <div className='cryptoverse__home section__padding'>
            <div className='cryptoverse__home-intro bg-intro-bg'>
                <div className='text-white cryptoverse__home-intro__contents'>
                    <h1 className='unique-text'>What is Cryptoverse?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ex consectetur ut perspiciatis esse corrupti, cumque nobis unde! Rerum at deleniti eperiam quidem fuga. Lorem ipadipisicing elit. Voluptatum totam tenetur suscipit dolorem dolores quas nesciunt nulla sapi.</p>
                    <button>Get Started</button>
                </div>
                <div className='cryptoverse__home-intro__img'>
                    <img src={intro} alt="Cryptoverse Intro Illustration" />
                </div>
            </div>
            <div className='cryptoverse__home-stats'>
                <div className='cryptoverse__home-stats-card'>
                    <img src={totalCryptos} alt="total cryptocurrencies illustration" />
                    <h1>{ millify(globalData.total) }</h1>
                    <p>Total Cryptocurrencies</p>
                </div>
                <div className='cryptoverse__home-stats-card'>
                    <img src={totalMarket} alt="total cryptocurrencies illustration" />
                    <h1>{ millify(globalData.totalMarkets) }</h1>
                    <p>Total Markets</p>
                </div>
                <div className='cryptoverse__home-stats-card'>
                    <img src={marketCup} alt="total cryptocurrencies illustration" />
                    <h1>{ millify(globalData.totalMarketCap) }</h1> 
                    <p>Total Market Cap</p>
                </div>
                <div className='cryptoverse__home-stats-card'>
                    <img src={exchange} alt="total cryptocurrencies illustration" />
                    <h1>{ millify(globalData.totalExchanges) }</h1>
                    <p>Total Exchanges</p>
                </div>
                <div className='cryptoverse__home-stats-card'>
                    <img src={volume} alt="total cryptocurrencies illustration" />
                    <h1>{ millify(globalData.total24hVolume) }</h1>
                    <p>Total Cryptocurrencies</p>
                </div>
            </div>
            <div>
                <Cryptocurrencies simplifed={true} />
            </div>
            <div>
                <News simplifed={true} />
            </div>
        </div>
    )
}

export default Home;