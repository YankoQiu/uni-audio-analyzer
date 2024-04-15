import type { ComponentObjectPropsOptions } from "vue";

import AudioAnalyser from "./audio-analyser.vue";

const props: ComponentObjectPropsOptions = {
    /**
     * @description 音频元素
     * @type {HTMLAudioElement}
     */
    audio: {
        type: HTMLAudioElement,
        required: true
    },

    /**
     * @description 画布宽度
     * @type {number}
     */
    width: {
        type: Number,
        default: 200
    },

    /**
     * @description 画布高度
     * @type {number}
     */
    height: {
        type: Number,
        default: 200
    },

    /**
     * @description fftSize 要求是2的幂次方，数字越大越精细，但会同时会影响性能。
     * @type {number}
     * @example 256
     */
    fftSize: {
        type: Number,
        default: 512
    },

    /**
     * @description 主题
     * @type {"line" | "custom"}
     */
    theme: {
        type: String,
        default: "line"
    },

    /**
     * @description 自定义主题
     * @type {(ctx: CanvasRenderingContext2D, analyze: Uint8Array) => void}
     */
    customTheme: {
        type: Function
    }
};

export { props };
export default AudioAnalyser;
