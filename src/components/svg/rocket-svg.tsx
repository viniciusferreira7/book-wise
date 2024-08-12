import * as React from 'react'

type RocketSVGProps = React.ComponentProps<'svg'>

export function RocketSVG(props: RocketSVGProps) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.145 20.376a1.14 1.14 0 01-.722 1.445c-1.944.65-2.977 2.274-3.53 3.925-.22.655-.352 1.286-.432 1.808.525-.08 1.16-.211 1.819-.43 1.66-.55 3.292-1.577 3.945-3.51a1.149 1.149 0 011.453-.719c.6.201.924.848.722 1.445-.98 2.901-3.406 4.29-5.396 4.95a13.607 13.607 0 01-3.705.66c-.03.002-.052.002-.07.002H3.2c-.001 0-.002 0-.002-1.14L2.05 28.81v-.031a5.476 5.476 0 01.011-.309 13.402 13.402 0 01.655-3.447c.663-1.978 2.06-4.39 4.976-5.366.6-.2 1.251.12 1.453.718zM3.197 28.81H2.05c0 .63.514 1.141 1.147 1.141v-1.14zM28.187 3.955c-1.331-.191-4.608-.263-7.962 3.073L11.3 15.905l4.873 4.847 8.925-8.877c3.354-3.336 3.281-6.596 3.09-7.92zm.333-2.258c-1.831-.264-5.913-.266-9.918 3.717l-9.735 9.684a1.138 1.138 0 000 1.614l6.495 6.46a1.152 1.152 0 001.622 0l9.736-9.684c4.005-3.983 4.002-8.043 3.737-9.864a2.249 2.249 0 00-.642-1.288 2.27 2.27 0 00-1.295-.639z"
        fill="#8381D9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.288 13.152c.634 0 1.148.51 1.148 1.141v9.229a2.276 2.276 0 01-.683 1.592l-4.63 4.619a2.297 2.297 0 01-2.287.569 2.296 2.296 0 01-1.034-.652 2.277 2.277 0 01-.55-1.086l-1.203-5.975a1.141 1.141 0 01.899-1.343 1.147 1.147 0 011.35.895l1.205 5.977 4.639-4.628v-9.197c0-.63.513-1.14 1.146-1.14zM8.515 6.692h9.278c.634 0 1.148.51 1.148 1.14 0 .63-.514 1.142-1.148 1.142H8.547l-.009.009-4.644 4.605h.002l6.008 1.198a1.141 1.141 0 11-.451 2.237l-6.006-1.197h-.001a2.298 2.298 0 01-1.092-.547 2.28 2.28 0 01-.686-2.245c.101-.4.31-.767.603-1.059l.002-.002 4.641-4.602a2.3 2.3 0 011.6-.68z"
        fill="#8381D9"
      />
    </svg>
  )
}
