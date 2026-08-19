import { css, type Handle, type RemixNode } from "remix/ui";

export interface ModalProps {
  children?: RemixNode;
  title: string;
  open?: boolean;
  actions?: RemixNode;
}

export function Modal(handle: Handle<ModalProps>) {
  return () => {
    const { actions, children, open = true, title } = handle.props;

    if (!open) {
      return null;
    }

    return (
      <div aria-modal="true" role="dialog" mix={overlayStyles}>
        <section mix={modalStyles}>
          <header mix={headerStyles}>
            <h2 mix={titleStyles}>{title}</h2>
          </header>
          <div mix={contentStyles}>{children}</div>
          {actions ? <footer mix={actionsStyles}>{actions}</footer> : null}
        </section>
      </div>
    );
  };
}

const overlayStyles = css({
  position: "fixed",
  inset: 0,
  zIndex: 1000,
  display: "grid",
  placeItems: "center",
  padding: "1rem",
  backgroundColor: "rgba(15, 23, 42, 0.62)",
});

const modalStyles = css({
  width: "min(100%, 32rem)",
  maxHeight: "calc(100vh - 2rem)",
  overflow: "auto",
  backgroundColor: "var(--bg-surface)",
  color: "var(--text-main)",
  border: "1px solid var(--border-color)",
  borderRadius: "var(--radius-md)",
  boxShadow: "var(--shadow-soft)",
});

const headerStyles = css({
  padding: "1.25rem 1.25rem 0",
});

const titleStyles = css({
  margin: 0,
  fontSize: "1.25rem",
  lineHeight: 1.3,
});

const contentStyles = css({
  padding: "1rem 1.25rem",
  color: "var(--text-muted)",
  lineHeight: 1.5,
});

const actionsStyles = css({
  display: "flex",
  justifyContent: "flex-end",
  gap: "0.75rem",
  flexWrap: "wrap",
  padding: "0 1.25rem 1.25rem",
});
