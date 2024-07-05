export const songs = [...Array(5).keys()].map((n) => ({
    title: 'Song Number ' + Number(n + 1),
    src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${Number(
        n + 1
    )}.mp3`,
}));

export const songsWithNames = [
    {
        title: 'Episode 10',
        src: `https://amplify-d1xj1e5krdozmy-ma-amplifyteamdrivebucket28-lxydxd04atyd.s3.us-east-1.amazonaws.com/media/ep10.mp3`,
    },
    {
        title: 'Episode 11',
        src: `https://amplify-d1xj1e5krdozmy-ma-amplifyteamdrivebucket28-lxydxd04atyd.s3.us-east-1.amazonaws.com/media/ep11.mp3`,
    },
    {
        title: 'Episode 12',
        src: `https://amplify-d1xj1e5krdozmy-ma-amplifyteamdrivebucket28-lxydxd04atyd.s3.us-east-1.amazonaws.com/media/ep12.mp3`,
    },
    {
        title: 'Episode 13',
        src: `https://amplify-d1xj1e5krdozmy-ma-amplifyteamdrivebucket28-lxydxd04atyd.s3.us-east-1.amazonaws.com/media/ep13.mp3`,
    },
    {
        title: 'Episode 14',
        src: `https://amplify-d1xj1e5krdozmy-ma-amplifyteamdrivebucket28-lxydxd04atyd.s3.us-east-1.amazonaws.com/media/ep14.mp3`,
    },
];
