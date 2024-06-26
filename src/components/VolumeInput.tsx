interface VolumeInputProps {
    volume: number;
    onVolumeChange: (value: number) => void;
}

export default function VolumeInput(props: VolumeInputProps) {
    const { volume, onVolumeChange } = props;

    return (
        <input
            aria-label="Volume"
            name="volume"
            type="range"
            min={0}
            step={0.05}
            max={1}
            value={volume}
            className="w-[80px] m-0 h-2 rounded-full accent-amber-600 bg-gray-700 appearance-none cursor-pointer"
            onChange={(e) => {
                onVolumeChange(e.currentTarget.valueAsNumber);
            }}
        />
    );
}