import React, { useEffect, useState, useMemo } from 'react';
import './timer.scss';

import moment from 'moment';

const Timer = ({
  id,
  timerName,
  startTime,
  endTime,
  removeTimer,
  pauseTimer,
  handleToggle,
  handleStartTime,
  handleNewStartTime,
  handleCurrentTime,
  handleEndTime,
}) => {
  const [currentTime, setCurrentTime] = useState(Number(startTime)); //это избыточно
  const [timeFormated, setTimeFormated] = useState('');

  useEffect(() => {
    let intervalId;
    if (pauseTimer) {
      console.log('!!!');
      handleStartTime(id, currentTime);
      handleEndTime(id); // устанавливаем суммарное количество секунд
      //здесь записать endTime
      // return;
    }
    if (!pauseTimer) {
      // handleStartTime(id, 10);
      // setCurrentTime(currentTime + moment().diff(startTime, 'seconds'));
      console.log('moment ' + moment().format('HH:mm:ss'));
      // console.log('startTime ' + startTime);
      // console.log('startTime ' + moment(startTime).format('HH:mm:ss'));
      // console.log('currentTime ' + currentTime);
      // console.log('currentTime ' + moment(currentTime).format('HH:mm:ss'));
      console.log('endTime ' + endTime);
      console.log('endTime ' + moment(endTime).format('HH:mm:ss'));
      console.log('Разница '+ moment().diff(endTime, 'seconds'));
      intervalId = setInterval(() => {
        setCurrentTime(t => t + 1);
      }, 1000);
      // return;
    }

    // const intervalId = setInterval(() => {
    //   setCurrentTime(t => t + 1);
    // }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [pauseTimer]);

  useEffect(() => {
    if (pauseTimer) {
      // handleCurrentTime(id, startTime, endTime);
      console.log('Pause');
      console.log(endTime);
      // return;
    }
  }, [pauseTimer]);

  useEffect(() => {
    const hours = Math.trunc(currentTime / 3600);
    const minutes = Math.trunc((currentTime - hours * 3600) / 60);
    const seconds = currentTime - hours * 3600 - minutes * 60;
    const hoursString = hours >= 10 ? hours : `0${hours}`;
    const minutesString = minutes >= 10 ? minutes : `0${minutes}`;
    const secondsString = seconds >= 10 ? seconds : `0${seconds}`;

    setTimeFormated(`${hoursString} : ${minutesString} : ${secondsString}`);
  }, [currentTime]);

  useMemo(() => {
    handleStartTime(id, currentTime);// тут должна быть handle end
  }, [currentTime]);

  return (
    <div className="track">
      <div className="track__name track__common">
        <p className="track__name-text">{timerName}</p>
        {/* {timerName} */}
      </div>
      <div className="track__control">
        <div
          className={
            pauseTimer
              ? 'track__time track__common track__active'
              : 'track__time track__common track__passive'
          }
        >
          <p className="track__time-text">{timeFormated}</p>
        </div>
        <button
          className="track__button"
          onClick={pauseTimer ?
             () => {handleToggle(id); handleNewStartTime}
              : 
             () => {handleToggle(id); handleEndTime}}
        >
          {pauseTimer ? (
            <img src="/public/control_buttons/playButton.png" alt="" />
          ) : (
            <img src="/public/control_buttons/pauseButton.png" alt="" />
          )}
        </button>
        <button className="track__button" onClick={() => removeTimer(id)}>
          <img src="/public/control_buttons/deleteButton.png" alt="" />
        </button>
        <div>{moment().format('HH:mm:ss')}</div>
        {/* <div>endTime{endTime}</div> */}
        {/* <div>{startTime + moment().diff(endTime, 'seconds')}</div> */}
      </div>
    </div>
  );
};

export default Timer;
