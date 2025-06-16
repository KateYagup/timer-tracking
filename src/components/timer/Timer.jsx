import React, { useEffect, useState } from 'react';
import './timer.scss';
import moment from 'moment';

const Timer = ({
  id,
  timerName,
  startTime,
  removeTimer,
  pauseTimer,
  handleToggle,
  handleStartTime,
}) => {
  const [currentTime, setCurrentTime] = useState(Number(startTime));
  const [timeFormated, setTimeFormated] = useState('');

  useEffect(() => {
    if (!pauseTimer) {
      handleStartTime(id, currentTime);
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentTime(t => t + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [pauseTimer]);

  useEffect(() => {
    const hours = Math.trunc(currentTime / 3600);
    const minutes = Math.trunc((currentTime - hours * 3600) / 60);
    const seconds = currentTime - hours * 3600 - minutes * 60;
    const hoursString = hours > 10 ? hours : `0${hours}`;
    const minutesString = minutes > 10 ? minutes : `0${minutes}`;
    const secondsString = seconds > 10 ? seconds : `0${seconds}`;

    setTimeFormated(`${hoursString} : ${minutesString} : ${secondsString}`);
    return () => {
      handleStartTime(id, currentTime);
    };
  }, [currentTime]);

  return (
    <div className="track">
      <div className="track__name track__common">
        <p className="track__name-text">{timerName}</p>
      </div>
      <div
        className={
          pauseTimer
            ? 'track__time track__common track__active'
            : 'track__time track__common track__passive'
        }
      >
        <p className="track__time-text">{timeFormated}</p>
      </div>
      <button className="track__button" onClick={() => handleToggle(id)}>
        {pauseTimer ? (
          <img src="src/components/timer/playButton.png" alt="" />
        ) : (
          <img src="src/components/timer/pauseButton.png" alt="" />
        )}
      </button>
      <button className="track__button" onClick={() => removeTimer(id)}>
        <img src="src/components/timer/deleteButton.png" alt="" />
      </button>
    </div>
  );
};

export default Timer;
