export const songs = [...Array(5).keys()].map((n) => ({
    title: 'Song Number ' + Number(n + 1),
    src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${Number(
        n + 1
    )}.mp3`,
}));

export const songsWithNames = [
    {
        title: 'Song Number 1',
        src: `https://amplify-d1xj1e5krdozmy-ma-amplifyteamdrivebucket28-lxydxd04atyd.s3.us-east-1.amazonaws.com/media/heaven.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCE8oTUSi7NcawjxinpDbm3OW7%2FbnoGy7TfI0xGX34tBAIhAKwcJs1LXBsP97CPCm9SPpNDXnrxyoVRl3QjxfnebiQaKuQCCGAQABoMNzMwMzM1MzQzNjI4IgyVrUhjU9auAl9BjBwqwQIprUc1AOtPGDdCv9j25jxKo3P9QF1hLvYMpfP8hVzsSRolY2Ei9y4VXgZAXdDf5FkW4f8xdz%2FdorgyUVg5wCfTwaGm5lqteAZX%2FhzxsjD2f5RIl3FoA1PRMEQ0nSqDIwneVOdAd5h6bLCK1Fi4pf7DDGcFsDGHkQ98xTdq4wGA6EINryi1JUkYFnMkpyXDmjhUQbG3AakHVsRps1XLatVAFmGOdQEGEcvZ3GADhOlI5CK0Xly5E%2BvvZTg8mZGOVKz2jbKHEzWuDuHyeqp8uVX3SLadV8MVMCUXRCsFfstPniu8KZW1XPTJFVyS0bOIcLZj1hzegRBBbEWYl%2BIUXcAlAyjayi1sXCY9YZ6vhhyQQjnwqRIcUEez2Q4Pb%2BHQmUjrXUjv5JnFdNLT8KwOcxo44vXGF7QXMziwjSuZApyEk4EwhN%2BKtAY6sgIj3supNcLNbK8xHMgyvlrwYzaOSjI%2BMyc3MguOBLsfgcyDnL6js5kX%2Fs7VkpVyGq84gpPcpga9UlzaaofADNLSO7eE%2Boc5PTl%2FL%2FylNP3VxP8CaVd5VMTC3SAucPxzc4vQA7uh%2BjNMGakdtIl7F4kRmvNzN5WdPi3lVv6qZ%2FfCi3ulL2DaDtIwqARE%2FtxKFt%2BzcKZmE72EOIo24hq%2B63dDHfuhNalQCwT6D2XX8APMdwZ9TF7XxcUjYjr4qg17zwd2je%2FfGwjip21DtW3zjRvB7A8Mf46yX8kLkZy9r2SzVPB%2BiTlI8u7cVAcqJC2deUEGsMSXwAOnJtD0pxkbnHhMMEH%2FEYBY97fbCKp7JVnykOocCHh8MBwulMkZHStx9iwqqlWlDd9Iyfg2kzukKobN4k4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240701T160303Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2UC3A6QGPJXTL3EB%2F20240701%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0c7ec03dd37fcd2d86f5c69fc8e7afe4be90cc084b10bf2bfd79be53593ab94a`,
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
