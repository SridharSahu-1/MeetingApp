import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Room() {
  const {roomID} = useParams();
  let myMeeting = async (element) => {
    // generate Kit Token
     const appID = 1094119135;
     const serverSecret = "a520f0899c36d264c296b1d2450a6e24";
     const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"Random");

     const zp = ZegoUIKitPrebuilt.create(kitToken);
     // start the call
     zp.joinRoom({
       container: element,
       sharedLinks: [
         {
           name: 'Copy Link',
           url:`http://localhost3000/room/${roomID}`
         },
       ],
       scenario: {
         mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
       },
       showRoomTimer:true,
     });
  }

  return (
    <div ref={myMeeting} style={{height:"100vh"}}></div>
  )
}

export default Room
