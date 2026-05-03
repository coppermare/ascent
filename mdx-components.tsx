import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        style={{ fontSize: "32px", fontWeight: 300, letterSpacing: "-0.02em", color: "#0A0A0A", lineHeight: 1.15, marginBottom: "24px", marginTop: "48px" }}
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        style={{ fontSize: "24px", fontWeight: 400, letterSpacing: "-0.01em", color: "#0A0A0A", lineHeight: 1.25, marginBottom: "16px", marginTop: "40px" }}
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        style={{ fontSize: "20px", fontWeight: 600, color: "#0A0A0A", lineHeight: 1.35, marginBottom: "12px", marginTop: "32px" }}
        {...props}
      />
    ),
    p: (props) => (
      <p
        style={{ fontSize: "17px", lineHeight: 1.75, color: "#3F3F46", marginBottom: "20px" }}
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        style={{ paddingLeft: "24px", marginBottom: "20px", color: "#3F3F46" }}
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        style={{ paddingLeft: "24px", marginBottom: "20px", color: "#3F3F46" }}
        {...props}
      />
    ),
    li: (props) => (
      <li style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "8px" }} {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        style={{
          borderLeft: "3px solid #5A4FCF",
          paddingLeft: "24px",
          margin: "32px 0",
          fontStyle: "normal",
        }}
        {...props}
      />
    ),
    code: (props) => (
      <code
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: "13px",
          background: "#F5F1EA",
          padding: "2px 6px",
          borderRadius: "4px",
          color: "#0A0A0A",
        }}
        {...props}
      />
    ),
    strong: (props) => (
      <strong style={{ fontWeight: 600, color: "#0A0A0A" }} {...props} />
    ),
    a: (props) => (
      <a
        style={{ color: "#5A4FCF", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "2px" }}
        {...props}
      />
    ),
    hr: () => (
      <hr style={{ border: "none", borderTop: "1px solid #E4E4E7", margin: "48px 0" }} />
    ),
    ...components,
  };
}
