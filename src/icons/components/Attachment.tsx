import type { SVGProps } from "react";
export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string,
};
const SvgAttachment = ({
  size = 24,
  width = size,
  height = size,
  ...rest
}: IconProps) => {
  const props = {
    width,
    height,
    ...rest,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.7}
        d="M18.074 5.17 5.317 17.926a7.732 7.732 0 0 0 10.934 10.935l15.187-15.187a5.155 5.155 0 0 0-7.29-7.29L8.962 21.572a2.577 2.577 0 1 0 3.645 3.645l12.756-12.757"
      />
    </svg>
  );
};
export default SvgAttachment;
