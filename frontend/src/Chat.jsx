// src/components/ChatPage.js
import React, { useState } from 'react';
import Message from './components/Message';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await fetch('http://localhost:8000/api/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const botMessage = { text: data.response.output_text, sender: 'bot' };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-700">Chat with Bot</h1>
      </div>
      <div className="p-4 h-96 overflow-y-scroll">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
