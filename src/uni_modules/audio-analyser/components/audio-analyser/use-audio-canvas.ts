import { lineTheme } from "./themes/line-theme";

export type CustomTheme = (ctx: CanvasRenderingContext2D, analyze: Uint8Array) => void;

export interface UseCustomAudioCanvasProps {
    width: number;
    height: number;
    theme?: "line";
    isCustom?: boolean;
    customTheme?: CustomTheme;
}

function useAudioCanvas(props: UseCustomAudioCanvasProps) {
    const canvas = document.createElement("canvas");
    const context: CanvasRenderingContext2D = canvas.getContext("2d")!;

    canvas.width = props.width;
    canvas.height = props.height;

    const update = (() => {
        if (props.isCustom) {
            return props.customTheme as CustomTheme;
        }

        switch (props.theme) {
            case "line": {
                return lineTheme;
            }
            default: {
                return () => {};
            }
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
