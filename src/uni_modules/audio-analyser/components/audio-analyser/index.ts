import type { DefineProps } from "vue";
import type { UseAudioCanvasProps } from "./use-audio-canvas";
import type { UseAudioAnalyserProps } from "./use-audio-analyser";

import AudioAnalyser from "./audio-analyser.vue";

const props: DefineProps<string, any> = {
    width: {
        type: String,
        default: "100%"
    }
};

export { props };
export default AudioAnalyser;
