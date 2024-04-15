import { lineTheme } from "./themes/line-theme";

// interface UseBaseAudioCanvasProps {
//     width: number;
//     height: number;
//     theme: "line";
// }

interface UseCustomAudioCanvasProps {
    width: number;
    height: number;
    theme?: "line";
    isCustom?: boolean;
    customTheme?: (ctx: CanvasRenderingContext2D, analyze: Uint8Array) => void;
}

// export type UseAudioCanvasProps = UseBaseAudioCanvasProps | UseCustomAudioCanvasProps;

function useAudioCanvas(props: UseCustomAudioCanvasProps) {
    const canvas = document.createElement("canvas");
    const context: CanvasRenderingContext2D = canvas.getContext("2d")!;

    canvas.width = props.width;
    canvas.height = props.height;

    const update = (() => {
        if (props.isCustom) return props.customTheme as (ctx: CanvasRenderingContext2D, analyze: Uint8Array) => void;

        switch (props.theme) {
            case "line": return lineTheme;
        }

        return () => {};
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
