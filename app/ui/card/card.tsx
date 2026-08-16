import { css, type Handle, type RemixNode } from "remix/ui";

export interface CardProps {
  children?: RemixNode;
  title?: RemixNode;
}

export function Card(handle: Handle<CardProps>) {
  return () => {
    const { children, title } = handle.props;

    return (
      <section mix={cardStyles}>
        {title ? <h2 mix={cardTitleStyles}>{title}</h2> : null}
        {children}
      </section>
    );
  };
}

const cardStyles = css({
  background: "var(--bg-surface)",
  border: "1px solid var(--border-color)",
  borderRadius: "12px",
  boxShadow: "var(--shadow-soft)",
  padding: "1.5rem",
});

const cardTitleStyles = css({
  margin: "0 0 1rem",
  fontSize: "1.2rem",
  fontWeight: 700,
});
