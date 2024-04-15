<script setup lang="ts">
import type { CustomTheme } from "./use-audio-canvas";

import { ref, onMounted, withDefaults } from "vue";
import { useAudioCanvas } from "./use-audio-canvas";
import { useAudioAnalyser } from "./use-audio-analyser";

interface AudioAnalyserProps {
    audio: HTMLAudioElement;
    width: number;
    height: number;
    theme: "line";
    fftSize?: number;
    isCustom?: boolean;
    customTheme?: CustomTheme;
}

const audioCanvasRef = ref<HTMLDivElement | null>(null);
const props = withDefaults(defineProps<AudioAnalyserProps>(), {
    theme: "line",
    fftSize: 512,
    isCustom: false
});
const { getAnalyzeData } = useAudioAnalyser(props);
const { canvas, draw } = useAudioCanvas(props);

onMounted(() => {
    audioCanvasRef.value?.appendChild(canvas);

    const renderer = () => {
        // 获取分析数据
        const analyze = getAnalyzeData();

        // 绘画音频频率
        draw(analyze);

        requestAnimationFrame(renderer);
    };

    renderer();
});
</script>


<template>
	<div
        class="uni-audio-analyser"
        ref="audioCanvasRef"
        :style="{ width: props.width + 'rpx', height: props.height + 'rpx' }"
    ></div>
</template>


<style scoped>
.uni-audio-analyser > :deep(*) {
    max-width: 100%;
    max-height: 100%;
}
</style>
