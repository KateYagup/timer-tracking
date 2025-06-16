import React, { useState, useEffect } from 'react';
import Timer from '../timer/Timer';
import './timers.scss';
// import buttonImage from './images/Base.jpg';

const Timers = () => {
  const [timers, setTimers] = useState([]);
  const [timerInput, setTimerInput] = useState('');
  const [numberOfTimer, setNumerOfTimer] = useState(1);

  useEffect(() => {
    const objTimers = localStorage.getItem('timers');
    setTimers(JSON.parse(objTimers));
    setNumerOfTimer(localStorage.getItem('numberOfTimer'));

  }, []);

  useEffect(() => {
    localStorage.setItem('timers', JSON.stringify(timers));
    localStorage.setItem('numberOfTimer', numberOfTimer);
  }, [timers, numberOfTimer]);

  const createNewTimer = e => {
    let newTimer;
    if (timerInput) {
       newTimer = {
        id: Math.random().toString(36).substr(2, 9),
        timerName: timerInput,
        startTime: 0,
        endTime: 0,
        pauseTimer: false,
      };
      
    } else{
        newTimer = {
          id: Math.random().toString(36).substr(2, 9),
          timerName: `Timer name ${numberOfTimer}`,
          startTime: 0,
          endTime: 0,
          pauseTimer: false,
        };
        setNumerOfTimer(Number(numberOfTimer) + 1);
    }

    setTimers([...timers, newTimer]);
      setTimerInput('');
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      createNewTimer(e);
    }
  };

  const removeTimer = id => {
    setTimers([...timers.filter(timers => timers.id !== id)]);
  };

  const handleToggle = id => {
    setTimers([
      ...timers.map(timer =>
        id === timer.id ? { ...timer, pauseTimer: !timer.pauseTimer } : { ...timer },
      ),
    ]);
  };

  const handleStartTime = (id, newTime) => {
    setTimers([
      ...timers.map(timer =>
        id === timer.id ? { ...timer, startTime: newTime } : { ...timer },
      ),
    ]);
  };

  return (
    <div className="track-zone">
      <div className="whyUse">
        <p className="whyUse__header">
          <span className="whyUse__header-bold">Why</span> do we use it?
        </p>
        <p className="whyUse__text">
          This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red
          Queen. To her surprise, she lost sight of her in a moment.
        </p>
      </div>
      <div className="createTimers">
        <input
          className="inputName"
          type="text"
          placeholder="Timer name"
          value={timerInput}
          onChange={e => setTimerInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="button button__orange" onClick={createNewTimer}>
          Create Timer
        </button>
      </div>
      <div className="separateLine"></div>
      <ul>
        {timers.map(timer => (
          <Timer
            key={timer.id}
            {...timer}
            removeTimer={removeTimer}
            handleToggle={handleToggle}
            handleStartTime={handleStartTime}
          />
        ))}
      </ul>
    </div>
  );
};

export default Timers;
