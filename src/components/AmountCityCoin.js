import React, { useEffect, useState } from 'react';
import { getCityCoinBalance } from '../lib/citycoin';
import { CITYCOIN_SYMBOL } from '../lib/constants';

export function AmountCityCoin({ stxAddress }) {
  const [cityCoinBalance, setCityCoinBalance] = useState();

  useEffect(() => {
    getCityCoinBalance(stxAddress)
      .then(result => {
        setCityCoinBalance(result);
      })
      .catch(e => {
        setCityCoinBalance(0);
        console.log(e);
      });
  }, [stxAddress]);

  return (
    <li>
      {cityCoinBalance === undefined ? cityCoinBalance : cityCoinBalance.toLocaleString()} &nbsp;
      {CITYCOIN_SYMBOL}
    </li>
  );
}
