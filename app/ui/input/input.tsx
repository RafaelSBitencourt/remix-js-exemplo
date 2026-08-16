import { css, type Handle } from "remix/ui";

type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "time"
  | "checkbox"
  | "radio"
  | "submit"
  | "button"
  | "reset"
  | "color"
  | "range"
  | "hidden"
  | "image"
  | "datetime-local"
  | "month"
  | "week";

interface InputProps {
  id: string;
  name: string;
  type?: InputType;
  label: string;
  value: string | number;
}

export function Input(handle: Handle<InputProps>) {
  return () => {
    const { id, name, type = "text", label, value = "" } = handle.props;

    return (
      <div mix={containerStyles}>
        <label htmlFor={`input-${id}`} mix={labelStyles}>
          {label}
        </label>
        <input
          id={`input-${id}`}
          name={name}
          type={type as any}
          mix={inputStyles}
          defaultValue={value}
        />
      </div>
    );
  };
}

const containerStyles = css({
  display: "grid",
  gap: "0.5rem",
});

const labelStyles = css({
  color: "var(--text-main)",
  fontSize: "0.95rem",
  fontWeight: 600,
  lineHeight: 1.4,
});

const inputStyles = css({
  width: "100%",
  minHeight: "42px",
  padding: "0.7rem 0.85rem",
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--border-color)",
  background: "var(--bg-surface)",
  color: "var(--text-main)",
  boxShadow: "inset 0 1px 2px rgba(15, 23, 42, 0.04)",
  transition:
    "border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
  "&:focus": {
    outline: "none",
    borderColor: "var(--color-primary)",
    boxShadow: "0 0 0 3px rgba(15, 255, 247, 0.18)",
  },
  "&::placeholder": {
    color: "var(--text-muted)",
  },
});
