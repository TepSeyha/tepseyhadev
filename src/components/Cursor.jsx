import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 10 + 'px';
        cursorRef.current.style.top = e.clientY - 10 + 'px';
      }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 2 + 'px';
        dotRef.current.style.top = e.clientY - 2 + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}