import { lineTheme } from "./themes/line-theme";
import { particleTheme } from "./themes/particle-theme";

interface UseBaseAudioCanvasProps {
    width: number;
    height: number;
    theme: "line" | "particle";
}

interface UseCustomAudioCanvasProps {
    width: number;
    height: number;
    theme: "custom";
    customDraw: (ctx: CanvasRenderingContext2D, analyze: Uint8Array) => void;
}

export type UseAudioCanvasProps = UseBaseAudioCanvasProps | UseCustomAudioCanvasProps;

function useAudioCanvas(props: UseAudioCanvasProps) {
    const canvas = document.createElement("canvas");
    const context: CanvasRenderingContext2D = canvas.getContext("2d")!;

    canvas.width = props.width;
    canvas.height = props.height;

    const update = (() => {
        switch (props.theme) {
            case "line":
                return lineTheme;
            case "particle":
                return particleTheme;
            case "custom":
                return props.customDraw;
        }
    })();

    /**
     * draw audio analyze
     * @param {Uint8Array} data
     */
    function draw(data: Uint8Array) {
        clear();
        update(context, data);
    }

    /**
     * clear canvas
     */
    function clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    return {
        canvas,
        context,
        draw
    };
}

export { useAudioCanvas };
