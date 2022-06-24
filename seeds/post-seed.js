const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        post_text: 'Am I just starting the post_text seeds or finally finishing them?',
        user_id: 10
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_text: 'I am cruising right along coming up with seed text',
        user_id: 8
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        post_text: 'This isnt so bad',
        user_id: 1
    },
    {
        title: 'Nunc purus.',
        post_text: 'For now Ill just add these manually',
        user_id: 4
    },
    {
        title: 'Pellentesque eget nunc.',
        post_text: 'I think I need to research random seed generators more in the future',
        user_id: 7
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        post_text: 'Im certain there is an easier way to do this',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_text: 'No way jose am I going to run out of ideas',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_text: 'I am full of ideas for seeds',
        user_id: 1
    },
    {
        title: 'Duis ac nibh.',
        post_text: 'Certainly I have plenty to say',
        user_id: 9
    },
    {
        title: 'Curabitur at ipsum ac tellus semper interdum.',
        post_text: 'I dont think ive repeated myself',
        user_id: 5
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_text: 'I think we are about halfway',
        user_id: 3
    },
    {
        title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        post_text: 'Testing 1, 2, 3...',
        user_id: 10
    },
    {
        title: 'Donec dapibus.',
        post_text: 'How fun is this stuff',
        user_id: 8
    },
    {
        title: 'Nulla tellus.',
        post_text: 'Would you believe that',
        user_id: 3
    },
    {
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        post_text: 'This one is really important guys',
        user_id: 3
    },
    {
        title: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        post_text: 'How many of these things are there?',
        user_id: 7
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_text: 'running out of ideas',
        user_id: 6
    },
    {
        title: 'Etiam justo.',
        post_text: 'what could this say?',
        user_id: 4
    },
    {
        title: 'Nulla ut erat id mauris vulputate elementum.',
        post_text: 'random text here',
        user_id: 6
    },
    {
        title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        post_text: 'fdagdsfga afsgdafgh rerweq gdxbsgnd adsaf',
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
