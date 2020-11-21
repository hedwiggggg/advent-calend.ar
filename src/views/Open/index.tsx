import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import days from 'src/days';
import { Day } from 'src/days/types';

function Open() {
  const [$Day, setOpen$Day] = useState<typeof Day>();
  const { day } = useParams<{ day: string }>();

  const loadDay = days[day];

  useEffect(() => {
    loadDay()
      .then(($Day) => setOpen$Day(() => $Day.default))
  }, [loadDay]);

  return (
    <div className={styleDaysContainer}>
      <Link className={styleBackLink} to={"/"}>Zurück</Link>
      <div dangerouslySetInnerHTML={{ __html: $Day?.content ?? '' }} />
    </div>
  );
}

const styleBackLink = css`
  position: relative;
`;

const styleDaysContainer = css`
  position: relative;

  min-width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 20px;
  box-sizing: border-box;

  div {
    position: relative;
    white-space: nowrap;
  }
`;

export default Open;
