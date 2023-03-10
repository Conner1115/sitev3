import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import Tw from "react-twemoji";
import { useMemo } from "react";

const clean = (dirty: string) =>
  sanitizeHtml(dirty, {
    allowedTags: [
      "i",
      "em",
      "strong",
      "a",
      "img",
      "p",
      "code",
      "br",
      "s",
      "strike",
      "br",
      "ul",
      "ol",
      "li",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
    },
    allowedIframeHostnames: [],
  });

export const Markdown = ({ markdown }) => {
  const renderedMarkdown = useMemo(
    () => clean(DOMPurify.sanitize(marked.parse(markdown || ""))),
    [markdown]
  );

  return (
    <Tw>
      <span
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: renderedMarkdown,
        }}
      />
    </Tw>
  );
};
