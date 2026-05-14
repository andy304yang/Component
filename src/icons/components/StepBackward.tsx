import type { SVGProps } from "react";
export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string,
};
const SvgStepBackward = ({
  size = 24,
  width = size,
  height = size,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    overflow="visible"
    preserveAspectRatio="none"
    style={{
      display: "block",
    }}
    width={width}
    height={height}
    viewBox="0 0 17.859 24.75"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.85}
      d="m3.15 12.97 13.472 10.584c.5.393 1.237.038 1.237-.596V1.792c0-.635-.736-.99-1.237-.596L3.15 11.78a.757.757 0 0 0 0 1.192m-.619 11.78H.281A.28.28 0 0 1 0 24.469V.28A.28.28 0 0 1 .281 0h2.25a.28.28 0 0 1 .281.281V24.47a.28.28 0 0 1-.28.281"
    />
  </svg>
);
export default SvgStepBackward;
