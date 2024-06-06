import Markdown, { type Components } from "react-markdown";

const markdownComponents = {
  h1: (props) => {
    return <h1 className="mt-12 border-b text-4xl font-bold" {...props} />;
  },
  h2: (props) => {
    return <h2 className="mt-10 border-b pb-2 text-3xl font-bold" {...props} />;
  },
  h3: (props) => {
    return <h3 className="mt-8 text-2xl font-bold" {...props} />;
  },
  img: (props) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img className="mx-auto mt-6" {...props} />;
  },
  p: (props) => {
    return <p className="mt-6" {...props} />;
  },
  a: (props) => {
    return <a className="text-blue-500 hover:underline" {...props} />;
  },
} satisfies Components;

const MarkdownContent = ({ content }: { content: string }) => {
  return <Markdown components={markdownComponents}>{content}</Markdown>;
};
export default MarkdownContent;
