import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import gifts from 'src/gifts';
import { Gift } from 'src/gifts/types';

function Open() {
  const [OpenGift, setOpenGift] = useState<typeof Gift>();
  const { gift } = useParams<{ gift: string }>();

  const loadGift = gifts[gift];

  useEffect(() => {
    loadGift()
      .then(($Gift) => setOpenGift(() => $Gift.default))
  }, [loadGift]);

  return (
    <div className={styleGiftsContainer}>
      <div dangerouslySetInnerHTML={{ __html: OpenGift?.content ?? '' }} />
    </div>
  );
}

const styleGiftsContainer = css`
  position: relative;
  display: flex;

  width: 100%;
  max-width: 100%;

  height: 100%;

  padding: 0 20px;
  box-sizing: border-box;

  div {
    position: relative;
  }
`;

export default Open;
