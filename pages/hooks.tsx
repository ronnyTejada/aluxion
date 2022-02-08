import { useState, useEffect } from 'react';

function getWindowDimensions() {

    // browser code
  
    const Window =  typeof window !== 'undefined';
    const width = Window ? window.innerWidth:null;
    const height = Window ? window.innerHeight:null;
    
    return {
      width,
      height
    };
  
  
  
}

export default function useWindowDimensions() {
  
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}