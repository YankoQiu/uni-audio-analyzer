
export interface UseAudioAnalyserProps {
    audio: HTMLAudioElement;
    fftSize?: number;
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

    // Create AnalyserNode
    const analyser: AnalyserNode = context.createAnalyser();
    analyser.fftSize = props.fftSize || 512;

    // Carrying audio analysis data
    const analyzeData = new Uint8Array(analyser.frequencyBinCount);

    // Create an audio source through the <audio> node
    const source: MediaElementAudioSourceNode = context.createMediaElementSource(audio);

    // Connect the source to be analysed
    source.connect(analyser);
    // Associate the analyzer to the output device (headphones, speakers)
    analyser.connect(context.destination);

    // Save the original `.play` method
    audio.originPlay = audio.play;
    // Override audio’s original play method
    audio.play = () => context.resume().then(() => audio.originPlay());

    /**
     * Get audio analysis data
     * @returns {Uint8Array}
     */
    function getAnalyzeData(): Uint8Array {
        analyser.getByteFrequencyData(analyzeData);
        return analyzeData;
    }

    return {
        audio,
        context,
        analyser,
        getAnalyzeData
    };
}

export { useAudioAnalyser };
