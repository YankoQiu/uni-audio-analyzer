import type { ComponentObjectPropsOptions } from "vue";
// import type { UseAudioCanvasProps } from "./use-audio-canvas";
// import type { UseAudioAnalyserProps } from "./use-audio-analyser";

import AudioAnalyser from "./audio-analyser.vue";

const props: ComponentObjectPropsOptions = {
    width: {
        type: String,
        default: 200,
    },
    height: {}
};

export { props };
export default AudioAnalyser;
