import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Redbox from "redbox-react";
import { Deck } from "spectacle";
import slides, { transitions } from "./presentation/index.mdx";
import { createRoot } from "react-dom/client";
import theme from "./presentation/theme";
import Timer from "./src/components/Timer";

require("normalize.css");

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

const container = document.getElementById("root");
const root = createRoot(container);

const Presentation = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  return (
    <>
      <Deck controls={false} progress="none" transition={["fade"]} theme={theme}>
        {slides.map((S, i) => {
          const transition = transitions[i] || null;
          return (
            <S transition={transition} key={`slide-${i}`}/>
          );
        })}
      </Deck>
      <Timer totalSlides={50} talkDurationInMinutes={35} elapsedTime={elapsedTime} setElapsedTime={setElapsedTime}/>
    </>);
};

root.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Presentation />
  </AppContainer>
);

const creeperTransition = (transitioning, forward) => {
  const offset = forward ? 100 : -100;
  return {
    transform: `
      translate3d(0,${transitioning ? offset : 0}%, 0)
    `
  };
};

if (module.hot) {
  module.hot.accept(() => {
    const newTheme = require("./presentation/theme").default;
    const newSlides = require("./presentation/index.mdx").default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <Deck
          controls={false}
          progress="none"
          transition={[creeperTransition]}
          transitionDuration={300}
          theme={newTheme}
        >
          {newSlides.map((S, i) => {
            const transition = transitions[i] || null;
            return <S transition={transition} key={`slide-${i}`} />;
          })}
        </Deck>
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
