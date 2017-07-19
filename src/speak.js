export const speakSwedish = (writtenText) => {
    const msg = new SpeechSynthesisUtterance(writtenText);
    msg.lang = 'sv-SE';
    window.speechSynthesis.speak(msg);
};