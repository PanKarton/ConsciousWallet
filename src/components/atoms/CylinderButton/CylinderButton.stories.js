import { CylinderButton } from './CylinderButton';

export default {
  title: 'Components/Atoms/CylinderButton',
  component: CylinderButton,
  argTypes: {
    text: { control: 'text' },
  },
};

// Trzeba  ogarnąć błąd Cannot read properties of undefined (reading 'displayName')
const Template = (args) => <CylinderButton {...args}>Click me</CylinderButton>;

export const Defauls = Template.bind({});
Defauls.args = {};
