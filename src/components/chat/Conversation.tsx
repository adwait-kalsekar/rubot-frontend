export default function Conversation() {
  const messages = [
    { sender: 'Human', text: 'Hello!' },
    { sender: 'AI', text: 'Hi there! How can I assist you today?' },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-950  pr-52 pl-52">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`mb-4 ${
            msg.sender === 'Human' ? 'text-right' : 'text-left'
          }`}
        >
          <span
            className={`inline-block p-2 rounded ${
              msg.sender === 'Human' ? 'bg-gray-700' : 'bg-gray-950'
            }`}
          >
            {msg.text}
          </span>
        </div>
      ))}
    </div>
  );
}
