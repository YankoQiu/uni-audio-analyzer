interface UseAudioProps {
    url: string;
}

function useAudio(props: UseAudioProps) {
    const audio = new Audio(props.url);

    audio.crossOrigin = "anonymous";

    function onAudioPlay() {
        audio.play();
    }

    function onAudioPause() {
        audio.pause();
    }

    return {
        audio,
        onAudioPlay,
        onAudioPause,
    };
}

export { useAudio };
