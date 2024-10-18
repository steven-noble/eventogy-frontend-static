import Filters from './index';

export default {
    title: 'Components/Filters',
    component: Filters
};

const Template = (args) => <Filters {...args} />;

export const filters = Template.bind({});
filters.args = {};
