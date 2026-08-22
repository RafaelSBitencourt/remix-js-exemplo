import button from "remix/ui/button";
import { attrs, css, type Handle, type Props, type RemixNode } from "remix/ui";

export type ButtonVariant = "primary" | "secondary" | "danger";

type VariantProps = {
  variant?: ButtonVariant;
};

type ButtonElementProps = VariantProps &
  Props<"button"> & {
    children?: RemixNode;
    href?: never;
  };

type LinkElementProps = VariantProps &
  Props<"a"> & {
    children?: RemixNode;
    href: string;
  };

export type ButtonProps = ButtonElementProps | LinkElementProps;

export function Button(handle: Handle<ButtonProps>) {
  return () => {
    if (handle.props.href !== undefined) {
      return LinkElement(handle.props);
    }

    return ButtonElement(handle.props);
  };
}

function ButtonElement(props: ButtonElementProps) {
  const { children, variant = "primary", mix, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      mix={[
        attrs<HTMLButtonElement>({ type: "button" }),
        button(),
        buttonStyles,
        variantStyles[variant],
        ...(mix ?? []),
      ]}
    >
      {children}
    </button>
  );
}

function LinkElement(props: LinkElementProps) {
  const { children, variant = "primary", href, mix, ...linkProps } = props;

  return (
    <a
      href={href}
      {...linkProps}
      mix={[button(), buttonStyles, variantStyles[variant], ...(mix ?? [])]}
    >
      {children}
    </a>
  );
}

const buttonStyles = css({
  appearance: "none",
  boxSizing: "border-box",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  height: "auto",
  minHeight: "42px",
  padding: "0.7rem 1.1rem",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: 700,
  letterSpacing: "0.01em",
  lineHeight: 1.2,
  whiteSpace: "nowrap",
  textDecoration: "none",
  textShadow: "none",
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
