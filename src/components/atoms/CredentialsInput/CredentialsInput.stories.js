import CredentialsInput from './CredentialsInput';

export default {
  name: 'Components/Atoms/CredentialsInput',
  component: CredentialsInput,
};

const Template = (args) => <CredentialsInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'login',
  id: 'login',
  placeholder: 'Phone, email or login...',
};
