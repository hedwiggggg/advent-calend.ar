import React, { useEffect, useRef } from 'react';
import useScanner from 'src/lib/scanner';

function Scanner() {
  const canvasVideoRef = useRef<HTMLCanvasElement>(null);
  const canvasOverlayRef = useRef<HTMLCanvasElement>(null);
  
  const Gift = useScanner(canvasVideoRef, canvasOverlayRef);

  useEffect(() => {
    console.log('new gift', Gift?.content);
  }, [Gift]);

  return (
    <>
      <canvas style={{ position: 'absolute' }} ref={canvasVideoRef} />
      <canvas
        ref={canvasOverlayRef}
        style={{
          position: 'absolute',
          transformOrigin: '0 0',
        }}
      />
    </>
  );
}

export default Scanner;
