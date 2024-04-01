<script setup lang="ts">
import AudioVisualization from "@/uni_modules/audio-visualization/components/audio-visualization/audio-visualization.vue";
import { useAudio } from "./use-audio";

const { context } = useAudio({ url: "" });
</script>


<template>
	<div>
		<AudioVisualization :context="context"></AudioVisualization>
	</div>
</template>


<style scoped>

</style>
