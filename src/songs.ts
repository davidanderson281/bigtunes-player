export const songs = [...Array(5).keys()].map((n) => ({
    title: 'Song Number ' + Number(n + 1),
    src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${Number(
        n + 1
    )}.mp3`,
}));

export const songsWithNames = [
    {
        title: 'Song Number 1',
        src: `http://ec2-54-242-82-0.compute-1.amazonaws.com/bt5.mp3`,
    },
    {
        title: 'Song Number 2',
        src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3`,
    },
    {
        title: 'Song Number 3',
        src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3`,
    },
    {
        title: 'Song Number 4',
        src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3`,
    },
    {
        title: 'Song Number 5',
        src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3`,
    },
];
