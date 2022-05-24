import CylinderButton from './CylinderButton';

export default {
  title: 'Components/Atoms/CylinderButton',
  component: CylinderButton,
  argTypes: {
    children: {
      control: 'text',
    },
    bgColor: {
      control: 'text',
    },
    textColor: {
      control: 'text',
    },
  },
};

const Template = (args) => <CylinderButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Jestem poteznym przyciskiem',
};

export const BlueAndWhite = Template.bind({});
BlueAndWhite.args = {
  children: 'Jestem poteznym przyciskiem',
  bgColor: 'blue',
  textColor: 'white',
};

export const WhiteAndBlue = Template.bind({});
WhiteAndBlue.args = {
  children: 'Jestem poteznym przyciskiem',
  bgColor: 'white',
  textColor: 'blue',
};
