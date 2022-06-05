import SignInModal from './SignInModal';

export default {
  name: 'Components/Organisms/SignInModal',
  component: SignInModal,
};

const Template = (args) => <SignInModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
