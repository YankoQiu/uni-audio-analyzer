<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAudioCanvas } from "./use-audio-canvas";
import { useAudioAnalyser } from "./use-audio-analyser";

interface AudioAnalyserProps {
    audio: HTMLAudioElement;
    width: number;
    height: number;
}

const audioCanvasRef = ref<HTMLDivElement | null>(null);
const props = defineProps<AudioAnalyserProps>();
const { getAnalyzeData } = useAudioAnalyser(props);
const { draw, getCanvasElement } = useAudioCanvas({ ...props });

onMounted(() => {
    const canvas = getCanvasElement();
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
	<div ref="audioCanvasRef" :style="{ width: props.width + 'rpx', height: props.height + 'rpx' }"></div>
</template>
