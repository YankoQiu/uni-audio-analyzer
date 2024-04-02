<script setup lang="ts">
import AudioAnalyser from "@/uni_modules/audio-analyser/components/audio-analyser/audio-analyser.vue";
import { useAudio } from "./use-audio";

const audioURI: string = "https://v4test.xgy.tv/api/storage/resources/person/CeShiJiGou_1/a95a0b39186f887b949f87f20b44bdb5_6/20240402/113225c0827028ead21ea46305.mp3";
const { context } = useAudio({ url: audioURI });
</script>


<template>
	<div>
		<AudioAnalyser
            :width="200"
            :height="200"
            :context="context"
        ></AudioAnalyser>
	</div>
</template>


<style scoped>

</style>
