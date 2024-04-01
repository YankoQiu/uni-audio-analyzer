<script setup lang="ts">
import type { UseAudioVisualizationProps } from "./use-audio-visualization";

import { defineProps } from "vue";

interface AudioVisualizationProps extends UseAudioVisualizationProps {}

const props = defineProps<AudioVisualizationProps>();
</script>

<template>
	<div>Audio</div>
</template>

<style scoped>
</style>
