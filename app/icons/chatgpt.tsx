interface IconProps {
  className?: string;
  fillColor?: string;
  width?: string | number;
  height?: string | number;
}

export default function ChatGPTIcon(props: IconProps) {
  const { className, fillColor, width, height } = props;
  return (
    <svg
      className={className}
      width={width || "29"}
      height={height || "28"}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14.5" cy="14" r="14" fill="url(#paint0_linear_133_19467)" />
      <g clipPath="url(#clip0_133_19467)">
        <path
          d="M14.4994 5.25L6.84375 9.625V18.375L8.30215 19.2082V10.4709L14.4994 6.92976L20.6981 10.4709V17.5285L14.4994 21.0702L11.2188 19.1953V12.1634L14.4994 10.2887L17.7812 12.1634V15.8357L14.4994 17.7107L14.1356 17.5029V13.8563L15.9691 12.808L14.4994 11.9685L12.6772 13.0104V18.3488L14.4994 19.3904L19.2397 16.6817V11.3175L14.4994 8.60956L9.76056 11.3175V20.0412L14.4994 22.75L22.1562 18.375V9.625L14.4994 5.25Z"
          fill="#F7F8FD"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_133_19467"
          x1="14.5"
          y1="0"
          x2="14.5"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fillColor || "#3C1EEE"} />
          <stop offset="1" stop-color={fillColor || "#5D4CC2"} />
        </linearGradient>
        <clipPath id="clip0_133_19467">
          <rect
            width="17.5"
            height="17.5"
            fill="white"
            transform="translate(5.75 5.25)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
