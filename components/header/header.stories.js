import Header from './index';

export default {
    title: 'Components/Header',
    component: Header
};

const Template = (args) => <Header {...args} />;

export const header = Template.bind({});
header.args = {};
