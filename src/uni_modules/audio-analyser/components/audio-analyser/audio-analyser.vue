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
const { analyzeData } = useAudioAnalyser(props);
const { getCanvasElement } = useAudioCanvas({ ...props, analyzeData });

onMounted(() => {
    const canvas = getCanvasElement();
    audioCanvasRef.value?.appendChild(canvas);
});
</script>

<template>
	<div ref="audioCanvasRef" :style="{ width: props.width + 'rpx', height: props.height + 'rpx' }"></div>
</template>
