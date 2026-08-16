import { css, type Handle, type RemixNode } from "remix/ui";

export type ButtonVariant = "primary" | "secondary" | "danger";

export interface ButtonProps {
  children?: RemixNode;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  href?: string;
  disable?: boolean;
}

export function Button(handle: Handle<ButtonProps>) {
  return () => {
    const {
      children,
      variant = "primary",
      type = "button",
      href,
      disable = false,
    } = handle.props;

    const sharedProps = {
      mix: [buttonStyles, variantStyles[variant]],
    };

    if (href) {
      return (
        <a href={href} {...sharedProps}>
          {children}
        </a>
      );
    }

    return (
      <button type={type} {...sharedProps} disabled={disable}>
        {children}
      </button>
    );
  };
}

const buttonStyles = css({
  appearance: "none",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  minHeight: "42px",
  padding: "0.7rem 1.1rem",
  fontWeight: 700,
  letterSpacing: "0.01em",
  lineHeight: 1.2,
  whiteSpace: "nowrap",
  textDecoration: "none",
  transition: "filter 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
  boxShadow: "inset 0 0 0 1px rgba(15, 23, 42, 0.05)",
  "&:hover": {
    filter: "brightness(0.96)",
  },
  "&:active": {
    transform: "translateY(1px)",
  },
});

const variantStyles = {
  primary: css({
    background: "var(--color-primary)",
    color: "#0f172a",
  }),
  secondary: css({
    background: "var(--bg-surface-strong)",
    color: "var(--text-main)",
    border: "1px solid var(--border-color)",
  }),
  danger: css({
    background: "var(--color-danger)",
    color: "#ffffff",
  }),
} satisfies Record<ButtonVariant, ReturnType<typeof css>>;
