import React, { useState, useEffect } from 'react';
import MessageService from './../Services/MessageService';

function MessageComponent() {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    MessageService.sendMessage(topic, message);
    setTopic('');
    setMessage('');
  };

  return (
    <div>
      <h1>Message App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default MessageComponent;
