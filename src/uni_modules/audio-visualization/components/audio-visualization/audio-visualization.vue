<script setup lang="ts">
import type { UseAudioVisualizationProps } from "./use-audio-visualization";

import { ref, defineProps, onMounted } from "vue";
import { useAudioVisualization } from "./use-audio-visualization";

interface AudioVisualizationProps extends UseAudioVisualizationProps {}

const audioCanvasRef = ref<HTMLDivElement | null>(null);
const props = defineProps<AudioVisualizationProps>();
const { getCanvasElement } = useAudioVisualization(props);

onMounted(() => {
    const canvas = getCanvasElement();
    audioCanvasRef.value?.appendChild(canvas);
});
</script>

<template>
	<div ref="audioCanvasRef" :style="{ width: props.width + 'rpx', height: props.height + 'rpx' }">Audio</div>
</template>
