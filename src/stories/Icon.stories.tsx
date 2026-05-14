import type { Meta, StoryObj } from '@storybook/react-vite';
import * as Icons from '../icons/components';
import type { IconProps } from '../icons/components/StepBackward';

type IconName = keyof typeof Icons;

type PlaygroundArgs = IconProps & { iconName: IconName };

const meta = {
  title: 'Icons',
  argTypes: {
    iconName: {
      control: 'select',
      options: Object.keys(Icons) as IconName[],
      description: '选择图标',
    },
    size: { control: { type: 'range', min: 12, max: 128, step: 4 }, description: '大小' },
    color: { control: 'color', description: '颜色' },
  },
} satisfies Meta;

export default meta;

// 单个图标调试
export const Playground: StoryObj<PlaygroundArgs> = {
  args: {
    iconName: Object.keys(Icons)[0] as IconName,
    size: 24,
    color: 'currentColor',
  },
  render: ({ iconName, ...rest }) => {
    const Icon = Icons[iconName];
    return <Icon {...rest} />;
  },
};

// 全部图标预览
export const Gallery: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: 16 }}>
      {Object.entries(Icons).map(([name, Icon]) => (
        <div
          key={name}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: 80 }}
        >
          <Icon size={24} />
          <span style={{ fontSize: 11, color: '#888', textAlign: 'center', wordBreak: 'break-all' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};
