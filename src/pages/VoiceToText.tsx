import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceToText = () => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button type="button" onClick={() => SpeechRecognition.startListening()}>
        Start
      </button>
      <button type="button" onClick={SpeechRecognition.stopListening}>
        Stop
      </button>
      <button type="button" onClick={resetTranscript}>
        Reset
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceToText;
