import "katex/dist/katex.min.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeFigure from "rehype-figure";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkToc from "remark-toc";

// type Props = {
//   userInput: string;
// };
const Editor = ({}) => {
  const text =
    "  # This is **not** a heading, it’s an indented code block $log_2 x^4$.  # This is **not** a heading, it’s an indented code block $log_2 x^4$  # This is **not** a heading, it’s an indented code block $log_2 x^4$ # This is **not** a heading, it’s an indented code block $log_2 x^4$ # This is **not** a heading, it’s an indented code block $log_2 x^4$ # This is **not** a heading, it’s an indented code block $log_2 x^4$ # This is **not** a heading, it’s an indented code block $log_2 x^4$";
  return (
    <ReactMarkdown
      children={text}
      rehypePlugins={[rehypeRaw, rehypeKatex, rehypeFigure]}
      remarkPlugins={[remarkGfm, remarkMath, remarkToc]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              children={String(children).replace(/\n$/, "")}
              style={materialLight}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default Editor;
