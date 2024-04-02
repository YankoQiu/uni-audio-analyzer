export interface UseAudioVisualizationProps {
    width: number;
    height: number;
	context: UniApp.InnerAudioContext;
}

function useAudioVisualization(props: UseAudioVisualizationProps) {

    function getCanvasElement() {
        return document.createElement("canvas");
    }

	return {
        getCanvasElement
    };
}

export { useAudioVisualization };
