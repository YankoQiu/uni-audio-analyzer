<script setup lang="ts">
import AudioAnalyser from "@/uni_modules/audio-analyser/components/audio-analyser/audio-analyser.vue";
import { useAudio } from "./use-audio";

const audioURI: string = "https://v4test.xgy.tv/api/storage/resources/person/CeShiJiGou_1/a95a0b39186f887b949f87f20b44bdb5_6/20240402/113225c0827028ead21ea46305.mp3";
const { audio, onAudioPlay, onAudioPause } = useAudio({ url: audioURI });
</script>


<template>
    <div class="page-container">
        <div class="example-container">
            <AudioAnalyser
                class="audio-analyser"
                :width="200"
                :height="200"
                :audio="audio"
                theme="line"
            ></AudioAnalyser>

            <div class="audio-control">
                <div class="audio-control-item" @click="onAudioPlay">播放</div>
                <div class="audio-control-item" @click="onAudioPause">暂停</div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.example-container {
    border: 1px solid #333333;
}

.audio-analyser {
}

.audio-control {
    display: flex;
    border-top: 1px solid #333333;
}

.audio-control-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16rpx;
    cursor: pointer;
}

.audio-control-item:nth-child(n + 2) {
    border-left: 1px solid #333333;
}
</style>
