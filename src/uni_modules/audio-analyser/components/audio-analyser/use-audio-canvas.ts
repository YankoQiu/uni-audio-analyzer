interface UseAudioCanvasProps {
    width: number;
    height: number;
}

function useAudioCanvas(props: UseAudioCanvasProps) {
    function getCanvasElement() {
        return document.createElement("canvas");
    }

    return {
        getCanvasElement
    };
}

export { useAudioCanvas };
