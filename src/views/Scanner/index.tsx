import { css } from '@emotion/css';
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useScanner from 'src/lib/scanner';

function Scanner() {
  const history = useHistory();
  const canvasVideoRef = useRef<HTMLCanvasElement>(null);
  const canvasOverlayRef = useRef<HTMLCanvasElement>(null);
  
  const Day = useScanner(canvasVideoRef, canvasOverlayRef);

  const openDay = () => {
    if (Day !== null) {
      history.push(`/open/${Day.__hash}`);
    }
  };

  return (
    <>
      <div className={styleClicker} onClick={openDay} />
  
      <canvas className={styleCanvasVideo} ref={canvasVideoRef} />
      <canvas className={styleCanvasOverlay} ref={canvasOverlayRef} />
    </>
  );
}

const styleCanvasVideo = css`
  position: absolute;
  z-index: 1;
`;

const styleCanvasOverlay = css`
  position: absolute;
  transform-origin: 0 0;
  z-index: 2;
`;

const styleClicker = css`
  position: absolute;

  width: 100vw;
  width: calc(var(--vw, 1vw) * 100);
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 3;
`;

export default Scanner;
