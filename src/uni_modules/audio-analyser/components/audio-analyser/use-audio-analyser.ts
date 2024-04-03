import { ref } from "vue";

export interface UseAudioAnalyserProps {
    audio: HTMLAudioElement;
}

type AudioContextConstructable = {
    new(contextOptions?: (AudioContextOptions | undefined)): AudioContext,
    prototype: AudioContext
};

function useAudioAnalyser(props: UseAudioAnalyserProps) {
    // @ts-ignore
    const AudioContext: AudioContextConstructable = window.AudioContext || window.webkitAudioContext;
    const context: AudioContext = new AudioContext();

    const analyser: AnalyserNode = context.createAnalyser();
    const analyzeData = ref<number[]>([]);

    analyser.fftSize = 512;

    const source: MediaElementAudioSourceNode = context.createMediaElementSource(props.audio);

    source.connect(analyser);
    analyser.connect(context.destination);

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function renderFrame() {
        requestAnimationFrame(renderFrame);

        // 更新频率数据
        analyser.getByteFrequencyData(dataArray);
    }

    renderFrame();

    return {
        analyzeData
    };
}

export { useAudioAnalyser };
