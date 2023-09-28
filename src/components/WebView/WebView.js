import React from "react";

const WebView = ({ src, title } = props) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignContent: "center",
      flexWrap: "wrap",
      justifyContent: "center"
    }}
  >
    <iframe
      style={{
        width: "100%",
        height: "80%"
      }}
      src={src}
      title={title}
    />
  </div>
);

export default WebView;
