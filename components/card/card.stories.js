import Card from './index';

export default {
    title: 'Components/Card',
    component: Card
};

const Template = (args) => <Card {...args} />;

export const card = Template.bind({});
card.args = {
    id: "1d1eb36d-f7fc-4437-9788-e7316dbc1523",
    name: "Kelly Ltd",
    slug: "kelly-ltd-098322500-1728658080",
    is_published: 1,
    is_public: 1,
    is_guestlist_only: 1,
    created_at: "2024-10-11 14:48:00",
    updated_at: "2024-10-11 14:48:00",
    deleted_at: null,
    data: {
      scheduled_dates: [
        "2024-01-20 15:27:36",
        "2024-01-20 19:33:25",
        "2024-01-22 06:26:03"
      ]
    },
    photo: 'https://placehold.co/500'
  };
