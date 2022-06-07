import React, { useCallback, useRef, useState } from "react";
import { WbAuto } from "@material-ui/icons";
import Webcam from "react-webcam";
import "./Add.css";
import ReactDOM from "react-dom";
import VideoFooterIcon from "./VideoFooterIcon";

function WebcamStreamCapture() {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);


  const videoConstraints = {
    width: 500,
    height: 2000,
    facingMode: "user",
  };


  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: default";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <div className="add__cam">
      {/* // <> */}
      <Webcam
        audio={false}
        ref={webcamRef}
        // height={5000}
        videoConstraints={videoConstraints}
      />
      {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      {recordedChunks.length > 0 && <button onClick={handleDownload}></button>}
      {/* // </> */}
      
    </div>
  );
}
ReactDOM.render(
  <WebcamStreamCapture />,
  document.getElementById("root")
);

export default WebcamStreamCapture;
{
}

{
  /* // https://www.npmjs.com/package/react-webcam */
}

// const WebcamCapture = () => {
//     const webcamRef = React.useRef(null);
//     const [imgSrc, setImgSrc] = React.useState(null);

//     const capture = React.useCallback(() => {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setImgSrc(imageSrc);
//     }, [webcamRef, setImgSrc]);

//     return (
//       <>
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//         />
//         <button onClick={capture}>Capture photo</button>
//         {imgSrc && (
//           <img
//             src={imgSrc}
//           />
//         )}
//       </>
//     );
//   };
