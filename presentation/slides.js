import React from "react";
import { Heading, Slide } from "spectacle";
import { MDXProvider } from "@mdx-js/tag";
import components from "./components";

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide bgColor="#12071f" contentStyles={{
    maxHeight: "100vh",
    maxWidth: "1400px"
  }}{...rest}
  >
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>);

// DARK LAYOUT

const lightComponents = {
  ...components,
  h1: ({ children }) => (
    <Heading size={1} textColor="#000">
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading size={2} textColor="#000">
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading size={3} textColor="#000">
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading size={4} textColor="#000">
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading size={5} textColor="#000">
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading size={6} textColor="#000">
      {children}
    </Heading>
  ),
  p: ({ children }) => {
    const Paragraph = components.p;

    return <Paragraph style={{ color: "#000" }}>{children}</Paragraph>;
  }
};

export const LightSlide = ({ children, ...rest }) => (
  <Slide bgColor="FFFFF0" contentStyles={{ maxHeight: "100vh" }} {...rest}>
    <MDXProvider components={lightComponents}>{children}</MDXProvider>
  </Slide>
);

export const ChapterSlide = ({ children, ...rest }) => (
  <Slide bgColor="#12071f" contentStyles={{ maxHeight: "100vh" }} {...rest}>
    <MDXProvider components={lightComponents}>{children}</MDXProvider>
  </Slide>
);

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" contentStyles={{ maxHeight: "100vh" }} {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);


export const R3FSlide = ({ children, ...rest }) => (
  <Slide bgColor="#12071f" contentStyles={{
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
    height: "100%",
    padding: "0",
    margin: "0"
  }} {...rest}
  >
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);

export const RetroSlide = ({ children, ...rest }) => {
  const minutes = new Date().getMinutes();
  const time = `${new Date().getHours()}:${minutes < 10 ? `0${minutes}` : minutes}`;
  return (
    <Slide bgColor="#1d1f21" contentStyles={{
      maxHeight: "100%",
      maxWidth: "100%",
      width: "100%",
      height: "100%",
      padding: "0",
      margin: "0"
    }} {...rest}
    >
      <MDXProvider components={components}>{
        <div>
          <div className="scanlines" />
          <div className="intro-wrap">
            <div className="noise" />
            <div className="noise noise-moving" />
            <div className="play">Tim Beeren</div>
            <div className="time">{time}</div>
            <div className="recordSpeed">Sept,2023</div>
            <div className="content">
              {children}
            </div>
          </div>
        </div>
      }</MDXProvider>
    </Slide>
  );
};

export const LandingSlide = ({ children, ...rest }) => (
  <Slide bgColor="#12071f" contentStyles={{
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
    height: "100%",
    padding: "0",
    margin: "0"
  }} {...rest}
  >
    <MDXProvider components={components}>{
      <div>
        <div className="intro-wrap">
          <div className="play">Tim Beeren</div>
          <div className="recordSpeed">Sept 2023</div>
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    }</MDXProvider>
  </Slide>
);

export const IntroSlide = ({ children, ...rest }) => (
  <Slide bgColor="#0000A4" contentStyles={{
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
    height: "100%"
  }} {...rest}
  >
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);

export const DarkSlide = ({ children, ...rest }) => (
  <Slide bgColor="#12071f" contentStyles={{
    maxHeight: "100vh",
    maxWidth: "1200px",
    width: "100%",
    height: "100%"

  }}{...rest}
  >
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);

