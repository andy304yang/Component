function iconTemplate({ componentName, jsx }, { tpl }) {
  return tpl`
import type { SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

const ${componentName} = ({ size = 24, width = size, height = size, ...rest }: IconProps) => {
  const props = { width, height, ...rest };
  return ${jsx};
};

export default ${componentName};
`;
}

module.exports = iconTemplate;
