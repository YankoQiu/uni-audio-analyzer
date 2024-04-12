interface UseAudioCanvasProps {
    width: number;
    height: number;
}

function useAudioCanvas(props: UseAudioCanvasProps) {
    function getCanvasElement() {
        return document.createElement("canvas");
    }

    function draw(data: Uint8Array) {
        console.log(data);
    }

    return {
        draw,
        getCanvasElement
    };
}

export { useAudioCanvas };
