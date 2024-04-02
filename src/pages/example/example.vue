<script setup lang="ts">
import AudioVisualization from "@/uni_modules/audio-visualization/components/audio-visualization/audio-visualization.vue";
import { useAudio } from "./use-audio";

const audioURI: string = "https://v4test.xgy.tv/api/storage/resources/person/CeShiJiGou_1/a95a0b39186f887b949f87f20b44bdb5_6/20240402/113225c0827028ead21ea46305.mp3";
const { context } = useAudio({ url: audioURI });
</script>


<template>
	<div>
		<AudioVisualization :context="context"></AudioVisualization>
	</div>
</template>


<style scoped>

</style>
