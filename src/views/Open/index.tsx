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
        const content = await $Day.__content();
        setContent(content);
      })
  }, [loadDay]);

  return (
    <div className={styleDaysContainer}>
      <span className={styleBackLink} onClick={history.goBack}>
        Zurück
      </span>

      <div className={styleOverlayLeft} />
      <div className={styleOverlayRight} />

      <div className={styleContentContainer}>
        <div
          className={styleContent}
          dangerouslySetInnerHTML={{
            __html: content ?? '<h3>Lädt ..</h3>',
          }}
        />
      </div>
    </div>
  );
}

const styleOverlay = css`
  position: absolute;
  top: 0;
  height: 100%;
  width: 20px;
  z-index: 2;
`;

const styleOverlayLeft = css`
  ${styleOverlay}

  left: 0;
  background: linear-gradient(90deg, rgba(184, 170, 189, 1) 0%, rgba(184, 170, 189, 0) 100%);
`;

const styleOverlayRight = css`
  ${styleOverlay}

  right: 0;
  background: linear-gradient(270deg, rgba(184, 170, 189, 1) 0%, rgba(184, 170, 189, 0) 100%);
`;

const styleDaysContainer = css`
  position: relative;

  width: 100%;
  height: 100%;

  padding: 20px 0;
  box-sizing: border-box;

  font-size: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const styleBackLink = css`
  flex: 0 1 auto;
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
  margin-bottom: 20px;
  margin-left: 20px;
`;

const styleContentContainer = css`
  max-width: 100%;
  box-sizing: border-box;
  flex: 1 1 auto;
  white-space: nowrap;
  overflow: scroll;
  position: relative;
`;

const styleContent = css`
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  white-space: nowrap;

  & > :first-child {
    margin-block-start: 0em;
  }

  & blockquote {
    border-left: 3px solid #947f9c;
    padding-inline-start: 20px;
    margin-inline-start: 10px;
  }
`;

export default Open;
