import SignUpPage from './SignUpPage';

export default {
  name: 'Components/Pages/SignUpPage',
  component: SignUpPage,
};

const Template = (args) => <SignUpPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
