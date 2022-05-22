import Root from './Root';

export default {
  title: 'Root',
  component: Root,
};

const Template = (args) => <Root {...args}>Click me</Root>;

export const Defauls = Template.bind({});
Defauls.args = {
  isBig: false,
};
