<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAudioCanvas } from "./use-audio-canvas";
import { useAudioAnalyser } from "./use-audio-analyser";

interface AudioAnalyserProps {
    audio: HTMLAudioElement;
    width: number;
    height: number;
    // fftSize要求是2的幂次方，如 256 、 512 等。数字越大越精细，但会同时会影响性能。
    fftSize?: number;
    theme: "line" | "particle" | "custom";
    customDraw?: (ctx: CanvasRenderingContext2D, analyze: Uint8Array) => void;
}

const audioCanvasRef = ref<HTMLDivElement | null>(null);
const props = defineProps<AudioAnalyserProps>();
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
