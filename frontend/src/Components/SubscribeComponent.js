import React, { useState, useEffect } from 'react';
import MessageService from './../Services/MessageService';

function SubscribeComponent({ topic }) {
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
    const subscription = MessageService.receiveMessage(topic).subscribe((msg) => {
      setReceivedMessage(msg.message);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Subscribe App (topic="{topic}")</h1>
      <div>
        <h2>Received Message:</h2>
        <p>{receivedMessage}</p>
      </div>
    </div>
  );
}

export default SubscribeComponent;
