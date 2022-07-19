import Tweet from './Tweet';

export default {
  title: 'Components/Molecules/Tweet',
  component: Tweet,
  argTypes: {
    textContent: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    lastName: {
      control: 'text',
    },
    login: {
      control: 'text',
    },
    timeSincePublication: {
      control: 'text',
    },
    likesNum: {
      control: 'number',
    },
  },
};

const Template = (args) => <Tweet {...args} />;

export const Default = Template.bind({});
Default.args = {
  textContent: 'Jan Paweł 2 głodnym mąke dawał',
  name: 'Ozjasz',
  lastName: 'Goldberg',
  login: 'KoranMekka',
  timeSincePublication: '2h',
  likesNum: '2137',
};
