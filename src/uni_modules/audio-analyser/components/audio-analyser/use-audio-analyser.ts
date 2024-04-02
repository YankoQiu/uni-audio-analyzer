export interface UseAudioAnalyserProps {
    width: number;
    height: number;
    context: UniApp.InnerAudioContext;
}

function useAudioAnalyser(props: UseAudioAnalyserProps) {

    function getCanvasElement() {
        return document.createElement("canvas");
    }

    return {
        getCanvasElement
    };
}

export { useAudioAnalyser };
