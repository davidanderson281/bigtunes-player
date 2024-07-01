export const storage = defineStorage({
    name: 'amplifyTeamDrive',
    access: (allow) => ({
        'uploads/*': [
            allow.authenticated.to(['read', 'write']),
            allow.guest.to(['read', 'write'])
        ],
    })
});