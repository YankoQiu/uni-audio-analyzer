import type { DefineProps } from "vue";
import type { UseAudioCanvasProps } from "./use-audio-canvas";
import type { UseAudioAnalyserProps } from "./use-audio-analyser";

import AudioAnalyser from "./audio-analyser.vue";

const props = {
    width: {
        type: String,
        default: 200
    }
};

export { props };
export default AudioAnalyser;
