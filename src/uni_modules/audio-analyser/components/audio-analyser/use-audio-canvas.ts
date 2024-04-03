import type { Ref } from "vue";

interface UseAudioCanvasProps {
    width: number;
    height: number;
    analyzeData: Ref<number[]>;
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
