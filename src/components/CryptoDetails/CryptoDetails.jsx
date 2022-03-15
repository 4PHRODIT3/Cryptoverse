import React from 'react';
import { useParams } from 'react-router-dom';

const CryptoDetails = () => {
  const params = useParams();
  return (
    <div>CryptoDetails- id {params.coinID}</div>
  )
}

export default CryptoDetails;