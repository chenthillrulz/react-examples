'use strict';

export default {
    name: 'Inbox',
    expanded: true,
    children: [
        {
            name: 'Circles',
            expanded: true,
            children: [
                { name: 'Friends' },
                { name: 'Family' },
                { name: 'Acquantances' },
                { name: 'Following' },
                { name: 'spiritual' }
            ]
        },
        {
            name: 'Important',
            children: []
        },
        {
            name: 'Suse',
            children: [
                {
                    name: 'Research',
                    children: [
                        { name: 'devel' },
                        { name: 'fun' }
                    ]
                },
                { name: 'build-service' }
            ]
        },
        {
            name: 'themes',
            children: [
                { name: 'animations' },
                { name: 'default' }
            ]
        },
        { name: 'Chats' }
    ]
};
