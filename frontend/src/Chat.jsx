import React, { useState } from 'react';


const Message = ({ message }) => {
  return (
    <div className={`flex ${message.type === 'bot' ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-xs md:max-w-md p-4 rounded-lg ${message.type === 'bot' ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}>
        {message.text}
      </div>
    </div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { type: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });
      
      const data = await response.json();
      setMessages([...newMessages, { type: 'bot', text: data.response.output_text }]);
    } catch (error) {
      setMessages([...newMessages, { type: 'bot', text: 'Error fetching response' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl">
        <div className="p-4 border-b border-gray-200 bg-blue-500 text-white rounded-t-lg">
          <h1 className="text-xl font-semibold">Chat with Bot</h1>
        </div>
        <div className="p-4 h-96 overflow-y-scroll bg-gray-50">
          {messages.map((msg, index) => (
            <Message key={index} message={msg} />
          ))}
          {isLoading && (
            <div className="flex justify-center my-4">
              <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-200 bg-blue-500 rounded-b-lg">
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
              className="bg-blue-700 text-white rounded-lg px-4 py-2"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
