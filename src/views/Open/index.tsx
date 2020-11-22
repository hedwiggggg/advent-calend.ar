import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import days from 'src/days';

function Open() {
  const history = useHistory();
  const [content, setContent] = useState<string>();

  const { day } = useParams<{ day: string }>();
  const loadDay = days[day];

  useEffect(() => {
    loadDay()
      .then(async ({ default: $Day }) => {
        const content = await $Day.content();
        setContent(content);
      })
  }, [loadDay]);

  return (
    <div className={styleDaysContainer}>
      <span className={styleBackLink} onClick={history.goBack}>
        Zurück
      </span>

      <br />

      <div
        dangerouslySetInnerHTML={{
          __html: content ?? '<h3>Lädt ..</h3>',
        }}
      />
    </div>
  );
}

const styleBackLink = css`
  position: relative;
  display: inline-block;
  color: #d4c7d9;
  background-color: #543a5f;
  padding: 2px 5px;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
`;

const styleDaysContainer = css`
  position: relative;

  min-width: 100%;
  height: 100%;

  padding: 20px;
  box-sizing: border-box;

  font-size: 24px;

  div {
    position: relative;
    white-space: nowrap;
  }
`;

export default Open;
