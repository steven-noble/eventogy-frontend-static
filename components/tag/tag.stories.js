import Tag from './index';

export default {
    title: 'Components/Tag',
    component: Tag
};

const Template = (args) => <Tag {...args} />;

export const tag = Template.bind({});
tag.args = {};
