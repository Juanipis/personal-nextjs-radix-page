import React from "react";

const FastapiLogo: React.FC<SvgProps> = ({
  fill = "#000000",
  width = "800px",
  height = "800px",
}) => (
  <svg
    fill={fill}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>FastAPI logo</title>
    <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z" />
  </svg>
);

export default FastapiLogo;
