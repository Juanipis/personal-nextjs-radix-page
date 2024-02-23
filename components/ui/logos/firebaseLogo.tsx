import React from "react";

const FirebaseLogo: React.FC<SvgProps> = ({
  fill = "#000000",
  width = "800px",
  height = "800px",
}) => (
  <svg
    fill={fill}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Firebase logo</title>
    <path d="M18.874 9.935l-2.274-4.351c-0.116-0.217-0.341-0.363-0.6-0.363s-0.484 0.145-0.598 0.359l-0.002 0.004-9.985 17.894zM26.852 25.202l-2.812-17.495c-0.052-0.325-0.331-0.571-0.667-0.571-0.189 0-0.359 0.077-0.482 0.202l-0 0-17.744 17.865 9.817 5.532c0.286 0.163 0.628 0.26 0.992 0.26s0.707-0.096 1.002-0.265l-0.010 0.005zM5.865 20.589l2.955-19.008c0.051-0.328 0.331-0.577 0.67-0.577 0.258 0 0.483 0.144 0.597 0.357l0.002 0.004 3.178 5.962z"></path>
  </svg>
);

export default FirebaseLogo;
