import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'amplifyTeamDriver',
    access: (allow) => ({
        'media/*': [
            allow.authenticated.to(['read', 'write']),
            allow.guest.to(['read', 'write'])
        ],
    })
});