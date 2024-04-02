interface UseAudioProps {
    url: string;
}

function useAudio(props: UseAudioProps) {
    const innerAudioContext = uni.createInnerAudioContext();

    function onPlay() {
        innerAudioContext.onPlay(() => {});
    }

    function onPause() {
        innerAudioContext.onPause(() => {});
    }

    return {
        context: innerAudioContext,
        onPlay,
        onPause,
    };
}

export { useAudio };
