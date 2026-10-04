(function(root){
const routes = {
  play: {
    ipad: ['Start with a touch instrument', 'Open GarageBand and try one note. Listen, then repeat it at your own pace.', 'https://www.apple.com/ios/garageband/', 'Open GarageBand information', 'An external instrument is optional. Cyber-G input is not verified here.'],
    computer: ['Try a short keyboard exercise', 'Explore Synthesia with an original or cleared exercise. Practice one small phrase.', 'https://synthesiagame.com/', 'Explore Synthesia', 'Check device support and any paid-feature requirements before choosing it.'],
    browser: ['Listen before you play', 'Explore a short Sonic Pi sound example. You can listen and change a note without buying an instrument.', 'https://sonic-pi.net/', 'Explore Sonic Pi', 'Browser audio and accessibility still need testing on your device.']
  },
  record: {
    ipad: ['Record a short take on iPad', 'Use GarageBand Audio Recorder, save the project, then share an audio copy to Files.', 'https://support.apple.com/guide/garageband-ipad/share-songs-chs39284d66/ipados', 'Open the iPad export guide', 'Try the built-in microphone first. Cyber-G USB recording needs a separate device test.'],
    computer: ['Record and edit on desktop', 'Use Audacity to record a few seconds of original sound and export an audio copy locally.', 'https://www.audacityteam.org/', 'Explore Audacity', 'Audacity is the desktop route. No upload or publication is required.'],
    browser: ['Choose a recording route', 'Use the pathway guide to pick a recorder for your device. Keep your first take local.', 'https://github.com/ibloud/tarantula-clone-hero/blob/main/docs/FIND_YOUR_FIT.md', 'Read recording pathways', 'This page does not access your microphone or record audio.']
  },
  code: {
    ipad: ['Change one sound with code', 'Try Sonic Pi Web: change one note or pause, run it, and listen for the difference.', 'https://sonic-pi.net/', 'Explore Sonic Pi Web', 'The web version is separate from the app: MIDI is unavailable in Safari and OSC is app-only.'],
    computer: ['Start coding music', 'Follow the Raspberry Pi Foundation Sonic Pi introduction. Change one note or rhythm before adding a controller.', 'https://projects.raspberrypi.org/en/projects/getting-started-with-sonic-pi', 'Open the Sonic Pi introduction', 'Use the current Sonic Pi version; tutorial and platform features may differ.'],
    browser: ['Try music as code', 'Explore Sonic Pi Web with a short original pattern. Begin with playback, then change one value.', 'https://sonic-pi.net/', 'Explore Sonic Pi Web', 'External device support varies by browser. You can begin without a controller.']
  },
  build: {
    ipad: ['Play and edit one original exercise', 'Listen to the motif, change a note or action, and try the untimed route. Export the chart locally.', 'https://ibloud.github.io/ren-tap-tap-revenge/lesson.html', 'Open the music/code exercise', 'Local prototype. iPad, Files and VoiceOver checks remain open; no Cyber-G input is connected.'],
    computer: ['Map a note to a game action', 'Change the original exercise tempo or first-note action. Compare timed practice with the untimed route.', 'https://ibloud.github.io/ren-tap-tap-revenge/lesson.html', 'Open the music/code exercise', 'Synthetic tones and simulated game actions. MIDI/OSC and Clone Hero conversion are not implemented.'],
    browser: ['Start without a controller', 'Use Next note to step through the original motif. Change one value and inspect the note data.', 'https://ibloud.github.io/ren-tap-tap-revenge/lesson.html', 'Open the untimed exercise', 'No account or instrument required. Audio and downloads need testing in your browser.']
  }
};
root.TarantulaRoutes = routes;
if(typeof module !== "undefined" && module.exports) module.exports = routes;
})(typeof window === "undefined" ? globalThis : window);
