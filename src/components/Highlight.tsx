import hljs from 'highlight.js';
import { useEffect } from 'react';

type Props = {};

const Highlight: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach(block => {
      try {
        hljs.highlightBlock(block as HTMLMapElement);
      } catch (e) {
        console.log(e);
      }
    });
  }, []);
  return (
    <pre>
      <code>{children}</code>
    </pre>
  );
};

export default Highlight;
