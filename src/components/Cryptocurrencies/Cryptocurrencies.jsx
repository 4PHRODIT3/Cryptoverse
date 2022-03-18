import millify from 'millify';
import React,{ useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import Loader from '../Microcomponents/Loader/Loader';
import './styles.css';

const Cryptocurrencies = ({simplifed}) => {
  const count = simplifed ? 10 : 50;
  const { data,isFetching } = useGetCryptosQuery(count);
  const cryptoData = data?.data?.coins;
  const [ searchValue,setSearchValue ] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);

  useEffect(() => {
    if(!isFetching){
      let filteredData = cryptoData?.filter((data) => data?.name.toLowerCase().includes(searchValue.trim()?.toLowerCase()));
      setFilteredValues(filteredData);
    }
  },[searchValue,data]);

  if(isFetching) return (<Loader />);
  
  return (
    <div className={`cyptoverse__cryptocurrencies ${simplifed ? "pt-8" : "px-8"}`}>
      <div className='cryptoverse__cryptocurrencies-header unique-text'>
        <h1>Cryptocurrencies List</h1>
        {
          !simplifed ? (<form><input type="text" placeholder='Filter Coins By Name' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} /></form>) : (<Link to="/cryptocurrencies"><h3 className='cryptoverse__cryptocurrencies-link'>Explore More</h3></Link>)
        }
      </div>
      <div className='crytoverse__cryptocurrencies-cards-container'>
      {
          filteredValues?.map((data,index) => (
            <Link  key={data.name+index} to={`/cryptocurrency/${data.uuid}`}>
              <div className='cyptoverse__cryptocurrencies-card'>
              <div className='cyptoverse__cryptocurrencies-card-header'>
                <h1>{`${index+1}. ${data.name}`}</h1>
                <img src={data.iconUrl} alt="Coin Logo" />
              </div>
              <div className='cyptoverse__cryptocurrencies-card-contents'>
                <h1>Price: { millify(data.price) }</h1>
                <h1>Market Cap: { millify(data.marketCap) }</h1>
                <h1>Daily Change: { millify(data.change) }</h1>
              </div>
            </div>
            </Link>
          ))
      }
      </div>
    </div>
  )
}

export default Cryptocurrencies;