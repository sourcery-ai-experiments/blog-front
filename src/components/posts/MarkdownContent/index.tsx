import Markdown, { type Components } from "react-markdown";

const markdownComponents = {
  h1: (props) => {
    return <h1 className="mb-4 border-b text-3xl font-bold" {...props} />;
  },
  h2: (props) => {
    return <h2 className="my-8 border-b pb-2 text-2xl font-bold" {...props} />;
  },
  h3: (props) => {
    return <h3 className="my-8 text-xl font-bold" {...props} />;
  },
  img: (props) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img className="mx-auto my-12" {...props} />;
  },
  p: (props) => {
    return <p className="my-6" {...props} />;
  },
  a: (props) => {
    return <a className="text-blue-500 hover:underline" {...props} />;
  },
} satisfies Components;

const MarkdownContent = ({ content }: { content: string }) => {
  return <Markdown components={markdownComponents}>{content}</Markdown>;
};
export default MarkdownContent;
