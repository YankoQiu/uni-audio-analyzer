<script setup lang="ts">
import type { UseAudioAnalyserProps } from "./use-audio-analyser";

import { ref, defineProps, onMounted } from "vue";
import { useAudioAnalyser } from "./use-audio-analyser";

interface AudioAnalyserProps extends UseAudioAnalyserProps {}

const audioCanvasRef = ref<HTMLDivElement | null>(null);
const props = defineProps<AudioAnalyserProps>();
const { getCanvasElement } = useAudioAnalyser(props);

onMounted(() => {
    const canvas = getCanvasElement();
    audioCanvasRef.value?.appendChild(canvas);
});
</script>

<template>
	<div ref="audioCanvasRef" :style="{ width: props.width + 'rpx', height: props.height + 'rpx' }">Audio</div>
</template>
