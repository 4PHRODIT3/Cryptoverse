import React from 'react';
import { useGetCryptosQuery } from '../../services/cryptoApi';

const Home = () => {
    const { data,isFetching,isError } = useGetCryptosQuery();
    return (
        <div>Home</div>
    )
}

export default Home;