import React from 'react';

function Message({ message }) {
  const { text, sender } = message;
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`p-3 rounded-lg max-w-xs ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
        {text}
      </div>
    </div>
  );
}

export default Message;