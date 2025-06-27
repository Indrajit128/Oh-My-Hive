import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I assist you with renewable energy today?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    // Simulate bot response (placeholder)
    setTimeout(() => {
      const botMessage = { from: 'bot', text: 'This is a placeholder response from the chatbot.' };
      setMessages((msgs) => [...msgs, botMessage]);
    }, 1000);
  };

  return (
    <div>
      <h2>Chatbot</h2>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '200px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.from === 'user' ? 'right' : 'left' }}>
            <p><strong>{msg.from === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
