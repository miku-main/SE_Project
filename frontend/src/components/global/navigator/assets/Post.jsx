import * as React from "react"
const Post = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 32 32"
    {...props}
  >
    <title>{"plus-circle"}</title>
    <path
      fill="#FFFFFF"
      fillRule="evenodd"
      d="M16 30C8.268 30 2 23.73 2 16S8.268 2 16 2s14 6.27 14 14-6.268 14-14 14Zm0-30C7.163 0 0 7.16 0 16s7.163 16 16 16 16-7.16 16-16S24.837 0 16 0Zm6 15h-5v-5a1.001 1.001 0 0 0-2 0v5h-5a1.001 1.001 0 0 0 0 2h5v5a1.001 1.001 0 0 0 2 0v-5h5a1.001 1.001 0 0 0 0-2Z"
    />
  </svg>
)
export default Post;
