import SmartToyIcon from '@mui/icons-material/SmartToy';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkBreaks from 'remark-breaks';

import './messages.css';
import { Message } from '@/types/chat';

interface SingleMessageProps {
  msg: Message;
}

function SingleMessage({ msg }: SingleMessageProps) {
  const components = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code({ inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <div>
          <div
            style={{
              fontSize: '14px',
              color: '#888',
              marginBottom: '5px',
              marginTop: '5px',
            }}
          >
            {match[1].toUpperCase()}
          </div>
          <SyntaxHighlighter
            style={oneDark}
            language={match[1]}
            PreTag="div"
            showLineNumbers
            lineNumberStyle={{ color: '#888', fontSize: '12px' }}
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <div className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
      <span
        className={`inline-block p-3 rounded-2xl ${
          msg.role === 'user' ? 'bg-blue-500' : 'bg-gray-950'
        }`}
      >
        {msg.role === 'assistant' ? (
          <div className="flex flex-row">
            <SmartToyIcon className="mr-5" />
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkBreaks]}
                components={components}
              >
                {msg.content}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          <>{msg.content}</>
        )}
      </span>
    </div>
  );
}
export default SingleMessage;
