import React from 'react';

import MessageComponent from './../Components/MessageComponent';
import SubscribeComponent from './../Components/SubscribeComponent';

const MessagesRoute = () => {
  return (
    <>
      <h1>Welcome to the Messages route</h1>
      <MessageComponent />
      <SubscribeComponent topic="1" />
      <SubscribeComponent topic="2" />
    </>
  );
};

export default MessagesRoute;
