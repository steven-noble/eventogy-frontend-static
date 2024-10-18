import Button from './index';

export default {
    title: 'Components/Button',
    component: Button
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
    name: 'button'
};
