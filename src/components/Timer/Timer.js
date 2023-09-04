import React, { useEffect } from "react";
import styled from "styled-components";

const getCurrentSlide = () => {
  const url = window.location.href;
  const match = url.match(/#\/(\d+)/);

  if (match && match[1]) {
    return parseInt(match[1], 10);
  }
  return null;
};

const Timer = ({ totalSlides, talkDurationInMinutes, elapsedTime, setElapsedTime }) => {
  const currentSlide = getCurrentSlide();
  const timePerSlide = (talkDurationInMinutes * 60) / totalSlides;
  const expectedTime = currentSlide * timePerSlide;
  const timeDifference = elapsedTime - expectedTime;

  let circleColor = "green";
  if (timeDifference > 2 * timePerSlide) {
    circleColor = "red";
  } else if (timeDifference > timePerSlide) {
    circleColor = "orange";
  }

  const updateElapsedTime = () => {
    setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
  };

  useEffect(() => {
    if (currentSlide === 1) {
      setElapsedTime(0);
    }
    const timerInterval = setInterval(updateElapsedTime, 1000);
    return () => clearInterval(timerInterval);
  }, [currentSlide]);

  return (
    <Wrapper>
      <svg width="16" height="16">
        <circle cx="8" cy="8" r="6" fill={circleColor} />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div `
  position: absolute;
  bottom: 10px;
  right: 70px;
`;

export default Timer;
