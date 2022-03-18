import { data } from 'autoprefixer';
import moment from 'moment';
import React,{ useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import SelectBox from '../Microcomponents/SelectBox/SelectBox';
import './styles.css';

const News = ({simplifed}) => {
  const placeholderImg = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  const { data: cryptoData } = useGetCryptosQuery(50);
  const coinData = cryptoData?.data?.coins;
  const [category,setCategory] = useState("Cryptocurrency");
  const { data,isFetching } = useGetCryptoNewsQuery({category,limit : simplifed ? "6" : '13'});

  if(isFetching) return (<div>Loading...</div>);

  return (
    <div className={`cyptoverse__news ${simplifed ? "pt-8" : "px-8"}`}>
      <div className='cryptoverse__news-header'>
        <h1>Latest Crypto News</h1>
        {
          !simplifed ? (

            <SelectBox setState={setCategory} state={category} options={coinData.map((coin) => coin.name)} />

          ) : (<Link to="/news"><h3 className='cryptoverse__news-link'>Read More</h3></Link>)
        }
      </div>
      <div className='cryptoverse___news-cards-container'>
        {
          data?.value?.map((article) => (
            <Link to={``} key={article.name}>
              <div className='cryptoverse__news-card'>
                <div className='cryptoverse__news-card__header'>
                  <img src={ article.image?.thumbnail?.contentUrl || placeholderImg } alt="Content Thumbnail" />
                  <h1>{ article.name }</h1>
                </div>
                <div className='cryptoverse__news-card__contents'>
                  <p className='cryptoverse__news-card__contents-description'>{ article.description.substr(0,150)+"..." }</p>
                </div>
                <div className='cryptoverse__news-card__footer'>
                    <div className='cryptoverse__news-card__footer-provider'>
                      <img src={ article.provider[0].image?.thumbnail?.contentUrl || placeholderImg } alt="Provider Icon" />
                      <p>{ article.provider[0].name }</p>
                    </div>
                    <p className='cryptoverse__news-card__footer-time'>{ moment(article.datePublished).startOf('ss').fromNow() }</p>
                </div>
              </div>
            </Link>
          ))
        }
        
      </div>
    </div>
  )
}

export default News;