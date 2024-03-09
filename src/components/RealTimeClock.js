import React, { useState, useEffect } from 'react';
import { Fomatdate } from '../helper/suport';
function RealTimeClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Clean up the interval
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div style={{padding:"10px 10px"}}>
      <h1>ເວລາປັດຈຸບັນ</h1>
      <p><Fomatdate mydate={currentTime.toLocaleString()}/></p>
    </div>
  );
}

export default RealTimeClock;
