import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import days from 'src/days';
import { DayImport, Day } from 'src/days/types';

const allDayImports = Object.values(days).reverse();

function RenderDay({ importDay }: { importDay: () => DayImport }) {
  const [$Day, setThe$Day] = useState<typeof Day>();

  useEffect(() => {
    importDay().then(
      (dayImport) => setThe$Day(
        () => dayImport.default
      )
    )
  }, [importDay]);

  return (
    <Link to={`/open/${$Day?.__hash}`} id={$Day?.__hash}>
      <img src={$Day?.__qrCode} alt="qr-code" />
      <code>{ $Day?.__name }</code>
    </Link>
  );
}

function Codes() {
  return (
    <div className={styleDayssContainer}>
      { allDayImports.map(($day, i) => <RenderDay key={i} importDay={$day} />) }
    </div>
  );
}

const styleDayssContainer = css`
  position: relative;
  float: left;

  width: 100%;
  min-width: 100%;
  max-width: 100%;

  a {
    position: relative;
    float: left;

    width: 33.33%;
    min-width: 33.33%;
    max-width: 33.33%;

    border: 2.5px solid black;
    box-sizing: border-box;

    break-inside: avoid;

    code, span {
      font-size: 2vw;

      display: block;
      width: 100%;
      text-align: center;
      border-top: 2px solid black;
    }

    img {
      max-width:100%;
    }

    @media (max-width: 380px) {
      width: 100%;
      min-width: 100%;
      max-width: 100%;

      code, span {
        font-size: 6vw;
      }
    }

    @media (min-width: 380px) and (max-width: 620px) {
      width: 50%;
      min-width: 50%;
      max-width: 50%;

      code, span {
        font-size: 3vw;
      }
    }
  }
`;

export default Codes;
