import { useRef, useEffect } from 'react';

export default function Inner() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handlePointerLockChange = () => {
      if (document.pointerLockElement === iframeRef.current) {
        console.log('Pointer locked');
      } else {
        console.log('Pointer unlocked');
      }
    };

    document.addEventListener('pointerlockchange', handlePointerLockChange);

    return () => {
      document.removeEventListener('pointerlockchange', handlePointerLockChange);
    };
  }, []);

  const handleClick = () => {
    if (iframeRef.current) {
      iframeRef.current.requestPointerLock();
    }
  };

  return (
    <iframe
      ref={iframeRef}
      src="WebSockets Wasm Doom.html"
      sandbox="allow-scripts allow-same-origin allow-pointer-lock"
      style={{
        width: '100%',
        height: '600px',
        border: 'none',
        cursor: document.pointerLockElement === iframeRef.current ? 'none' : 'pointer'
      }}
      title="DOOM Game"
      onClick={handleClick}
    />
  );
}
