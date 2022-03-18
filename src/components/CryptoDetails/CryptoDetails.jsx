import React,{useState,useEffect} from 'react';
import { CurrencyDollarIcon,LightningBoltIcon,BadgeCheckIcon,ShieldCheckIcon,PresentationChartBarIcon,ScaleIcon,SelectBox,millify,HTMLReactParser,BanIcon,CheckCircleIcon,LinkIcon } from './index';
import { useParams } from 'react-router-dom';
import Chart from '../../components/Microcomponents/Chart/Chart';
import { useGetCryptoDetailsQuery } from '../../services/cryptoApi';
import { useGetCryptoHistoryQuery } from '../../services/cryptoApi';
import './styles.css';
import Loader from '../Microcomponents/Loader/Loader';

const CryptoDetails = () => {
  const params = useParams();
  const {data : cryptoDetailsObj,isFetching} = useGetCryptoDetailsQuery(params.coinID);
  const [interval,setInterval] = useState('7d');
  const {data : coinHistory,isFetching : coinHistoryIsFetching } = useGetCryptoHistoryQuery({coinID : params.coinID , timePeriod : interval});
  const cryptoDetailsData = cryptoDetailsObj?.data?.coin;
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  if(isFetching || coinHistoryIsFetching) return (<Loader />);
  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetailsData?.price && millify(cryptoDetailsData?.price)}`, icon: <CurrencyDollarIcon  /> },
    { title: 'Rank', value: cryptoDetailsData?.rank, icon: <BadgeCheckIcon  /> },
    { title: '24h Volume', value: `$ ${cryptoDetailsData["24hVolume"] && millify(cryptoDetailsData["24hVolume"])}`, icon: <LightningBoltIcon  /> },
    { title: 'Market Cap', value: `$ ${cryptoDetailsData?.marketCap && millify(cryptoDetailsData?.marketCap)}`, icon: <CurrencyDollarIcon  /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetailsData?.allTimeHigh?.price && millify(cryptoDetailsData?.allTimeHigh?.price)}`, icon: <CurrencyDollarIcon  /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetailsData?.numberOfMarkets, icon: <PresentationChartBarIcon  /> },
    { title: 'Number Of Exchanges', value: cryptoDetailsData?.numberOfExchanges, icon: <ScaleIcon  /> },
    { title: 'Aprroved Supply', value: cryptoDetailsData?.supply?.confirmed ? <CheckCircleIcon className='text-white h-5'  /> : <BanIcon className='text-white h-5'  />, icon: <ShieldCheckIcon  /> },
    { title: 'Total Supply', value: `$ ${ cryptoDetailsData?.supply?.total ? millify(cryptoDetailsData?.supply?.total) : "No Data"} `, icon: <ShieldCheckIcon  /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetailsData?.supply?.circulating && millify(cryptoDetailsData?.supply?.circulating)}`, icon: <CurrencyDollarIcon  /> },
  ];
  return (
    <div className="cryptoverse__cryptodetails section__padding">
        <div className='cryptoverse__cryptodetails-header'>
          <h1 className='unique-text'>{ cryptoDetailsData.name }({cryptoDetailsData.symbol})</h1>
          <div className='cryptoverse__cryptodetails-header__description'>{ HTMLReactParser(cryptoDetailsData.description) }</div>
        </div>
        
        <div className='cryptoverse__cryptodetails-statisic'>
          <div className='cryptoverse__cryptodetails-statisic__subheader'>
            <h1 className='unique-text'>Latest Statisic About { cryptoDetailsData?.name}</h1>
            <div>
              <SelectBox options={time} setState={setInterval} state={interval} />
            </div>
          </div>
          <div className='cryptoverse__cryptodetails-statisic-comparison'>
            <div className='cryptoverse__cryptodetails-statisic-comparison__container'>
              <div className='cryptoverse__cryptodetails-statisic-comparison__container-intro'>
                <h1 >{cryptoDetailsData?.name} Value Statistics</h1>
                <p className='text-white'>An overview showing the statistics of {cryptoDetailsData.name}, such as the base and quote currency, the rank, and trading volume</p>
              </div>
              <div className='cryptoverse__cryptodetails-statisic-comparison__container-stats'>
                {
                  stats.map((stat) => (
                    <div className='cryptoverse__cryptodetails-statisic-comparison__container-stats__item' key={stat.title}>
                        <div className='flex items-center'><span>{ stat.icon }</span> {stat.title }</div>
                        <p>{ stat.value }</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='cryptoverse__cryptodetails-statisic-comparison__container'>
              <div className='cryptoverse__cryptodetails-statisic-comparison__container-intro'>
                <h1 >Overall Value Statistics</h1>
                <p className='text-white'>An overview showing the statistics of overall cryptos, such as the base and quote currency, the rank, and trading volume</p>
              </div>
              <div className='cryptoverse__cryptodetails-statisic-comparison__container-stats'>
                {
                  genericStats.map((stat) => (
                    <div className='cryptoverse__cryptodetails-statisic-comparison__container-stats__item' key={stat.title}>
                        <p className='flex items-center'><span>{ stat.icon }</span> {stat.title }</p>
                        <p>{ stat.value }</p>
                    </div>
                  ))
                }
              </div>
            </div>
            
          </div>
          <div className='cryptoverse__cryptodetails-chart'>
            <div className='cryptoverse__cryptodetails-chart__title'>
              <h1 className='text-white'>{cryptoDetailsData?.name} Price During {interval}</h1>
            </div>
            <div className='cryptoverse__cryptodetails-chart__container'>
              <Chart coinHistory={coinHistory} />
            </div>
          </div>
          <div className='cryptoverse__cryptodetails-footer'>
                <h1 className='unique-text'>Communities</h1>
                <div className='cryptoverse__cryptodetails-footer__sources'>
                  {
                    cryptoDetailsData?.links?.map((link,index) => (
                      <div className='cryptoverse__cryptodetails-footer__sources-link' key={link.name + index}>
                        <a href={link.url} target="_blank"><LinkIcon /> {link.type} @ { link.name }</a>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CryptoDetails;