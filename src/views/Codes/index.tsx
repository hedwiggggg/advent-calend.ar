import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';

import gifts from 'src/gifts';
import { GiftImport } from 'src/gifts/types';

const giftsArray = Object.values(gifts);

function RenderGift({ importGift }: { importGift: () => GiftImport }) {
  const [qrCode, setQrCode] = useState<string>();
  const [giftName, setGiftName] = useState<string>();

  useEffect(() => {
    importGift().then((giftImport) => {
      const Gift = giftImport.default;

      setGiftName(Gift.name);
      setQrCode(Gift.qrCode);
    })
  }, [importGift]);

  return (
    <div>
      <img src={qrCode} alt="qr-code" />
      <span>{ giftName }</span>
    </div>
  );
}

function Codes() {
  return (
    <div className={styleGiftsContainer}>
      { giftsArray.map((gift, i) => <RenderGift key={i} importGift={gift} />) }
    </div>
  );
}

const styleGiftsContainer = css`
  position: relative;

  div {
    position: relative;
    float: left;

    width: 33.33%;
    border: 2.5px solid black;
    box-sizing: border-box;

    span {
      display: inline-block;
      width: 100%;
      text-align: center;
      border-top: 2px solid black;
    }

    img {
      max-width:100%;
    }
  }
`;

export default Codes;
