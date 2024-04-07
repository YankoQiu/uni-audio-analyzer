
export interface UseAudioAnalyserProps {
    audio: HTMLAudioElement;
}

interface HTMLAudioElementExtends extends HTMLAudioElement {
    play: typeof HTMLMediaElement.prototype.play;
    originPlay: typeof HTMLMediaElement.prototype.play;
}

type AudioContextConstructable = {
    new(contextOptions?: (AudioContextOptions | undefined)): AudioContext,
    prototype: AudioContext
};

function useAudioAnalyser(props: UseAudioAnalyserProps) {
    // @ts-ignore
    const AudioContext: AudioContextConstructable = window.AudioContext || window.webkitAudioContext;

    const audio = props.audio as HTMLAudioElementExtends;
    const context: AudioContext = new AudioContext();

    const analyser: AnalyserNode = context.createAnalyser();
    analyser.fftSize = 512;

    const analyzeData = new Uint8Array(analyser.frequencyBinCount);

    const source: MediaElementAudioSourceNode = context.createMediaElementSource(audio);

    source.connect(analyser);
    analyser.connect(context.destination);

    // 保存原始的 `.play` 方法
    audio.originPlay = audio.play;
    audio.play = () => context.resume().then(() => audio.originPlay());

    function getAnalyzeData(): Uint8Array {
        analyser.getByteFrequencyData(analyzeData);
        return analyzeData;
    }

    return {
        getAnalyzeData
    };
}

export {useAudioAnalyser};
