import React from "react";

const FlutterLogo: React.FC<SvgProps> = ({
  fill = "#000000",
  width = "800px",
  height = "800px",
}) => {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Flutter logo</title>
      <path d="M18.909 14.84l-8.086 8.070 8.085 8.085h9.214l-8.073-8.083 8.073-8.073h-9.212zM18.892 1.004l-15.013 14.996 4.624 4.624 19.599-19.603h-9.194z"></path>
    </svg>
  );
};

export default FlutterLogo;
