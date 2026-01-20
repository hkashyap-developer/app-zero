type IconProps = {
  className?: string;
};

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 8.25H4.5V6.75H19.5V8.25Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 12.75H4.5V11.25H19.5V12.75Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 17.25H4.5V15.75H19.5V17.25Z"
      />
    </svg>
  );
}
