import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';

import gifts from 'src/gifts';
import { GiftImport, Gift } from 'src/gifts/types';

const giftsArray = Object.values(gifts);

function RenderGift({ importGift }: { importGift: () => GiftImport }) {
  const [TheGift, setTheGift] = useState<typeof Gift>();

  useEffect(() => {
    importGift().then((giftImport) => {
      setTheGift(() => giftImport.default);
    })
  }, [importGift]);

  return (
    <div>
      <img src={TheGift?.qrCode} alt="qr-code" />
      <code>{ TheGift?.name }</code>
      <code>{ TheGift?.hash }</code>
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
  float: left;

  width: 100%;
  min-width: 100%;
  max-width: 100%;

  div {
    position: relative;
    float: left;

    width: 33.33%;
    min-width: 33.33%;
    max-width: 33.33%;

    border: 2.5px solid black;
    box-sizing: border-box;

    break-inside: avoid;

    code, span {
      font-size: 18px;

      @media print {
        font-size: 48px;
      }

      display: block;
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
