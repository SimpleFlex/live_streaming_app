import React from "react";
import { useParams } from "react-router-dom";
import { appId, secret } from "../components/variables";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { id } = useParams();

  const liveStream = (element) => {
    const appID = appId;
    const serverSecret = secret;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "devPrimo"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
      sharedLinks: [
        {
          name: "copy link",
          url: `http://localhost:5173/${id}`,
        },
      ],
    });
  };
  return (
    <>
      <div ref={liveStream} />
    </>
  );
};

export default Room;
