import type { SVGProps } from "react";
export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string,
};
const SvgJoin = ({
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
        fill="currentColor"
        d="M18 1.547a8.297 8.297 0 0 1 5.113 14.832q.324.095.643.204a1.266 1.266 0 1 1-.815 2.397 14.5 14.5 0 0 0-4.67-.77c-7.058 0-12.991 5.07-14.241 11.83l-.035.194H18c.692 0 1.254.556 1.265 1.245v.021c0 .692-.555 1.254-1.244 1.266H2.567a1.266 1.266 0 0 1-1.263-1.36c.529-7.037 5.315-12.834 11.741-14.907A8.297 8.297 0 0 1 18 1.547m9.158 18.105c.692 0 1.255.556 1.266 1.245v4.046h3.99a1.266 1.266 0 0 1 .021 2.531h-4.011v3.99a1.266 1.266 0 0 1-2.531.022v-4.011h-4.026a1.266 1.266 0 0 1-.02-2.532h4.046v-4.025c0-.699.566-1.266 1.265-1.266M18 4.078a5.766 5.766 0 1 0 0 11.531 5.766 5.766 0 0 0 0-11.53"
      />
    </svg>
  );
};
export default SvgJoin;
