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

type Props = {
  note: string;
};
const Editor = ({ note }: Props) => {
  return (
    <ReactMarkdown
      // eslint-disable-next-line
      children={note}
      rehypePlugins={[rehypeRaw, rehypeKatex, rehypeFigure]}
      remarkPlugins={[remarkGfm, remarkMath, remarkToc]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            /* eslint-disable */
            <SyntaxHighlighter
              // eslint-disable-next-line
              {...props}
              // eslint-disable-next-line react/no-children-prop
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
