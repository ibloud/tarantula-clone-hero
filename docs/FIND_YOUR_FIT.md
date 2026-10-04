# Find your fit — one Tarantula learning loop

Status: pathway specification, not an implemented chooser or verified hardware integration.

Tarantula is the home for this multifaceted community learning experience. Its routes share one lesson, rights policy, and accessible fallback. The Ren tap-game repository supplies a reusable practice prototype; it is not a competing learning platform.

## Entry flow

Ask three brief, optional questions:
1. What would you like to do today: play, record, code music, or build a game/controller?
2. What do you have: iPad, computer/Raspberry Pi, instrument/controller, or just a browser?
3. What feels usable today: self-paced steps, listening, tapping/playing, or editing code?

Do not ask for a diagnosis or assign a pathway from ADHD or disability labels. Let people preview, switch, pause, and skip. Keep each step short, with one clear next action and a visible return point. No countdown, forced streak, mandatory public score, or required new account.

Use answers to offer one suggested route and alternatives, not a ranking of learners or tools.

## Routes

| Learner goal | iPad route | Computer/Raspberry Pi route | First small outcome |
| --- | --- | --- | --- |
| Play an instrument | GarageBand Touch Instruments; optional Synthesia keyboard practice; Cyber-G play-along | Existing instrument and optional Synthesia | Play or listen to one short original exercise |
| Record and share | GarageBand recording/editing; export audio to Files | Audacity recording/editing and local export | Save a short recording locally |
| Make music through code | Sonic Pi Web, subject to actual Safari usability testing | Sonic Pi app | Change a note or rhythm and hear the result |
| Build a game | Tarantula's planned chart editor and simulated input, with a readable untimed alternative | Same lesson/chart format and input adapter | Map a note or tap to one game action |
| Build a controller | Start with a simulated control or a compatible external input; verify device access | MIDI/OSC controller experiments feeding Sonic Pi or a game | One button changes one sound or game event |

These are candidate routes, not claims that each integration already works.

## GarageBand replaces the Audacity requirement on iPad

Use GarageBand for the pilot's recording, trimming, arranging, mixing, and export needs. Audacity remains an optional desktop route. Do not require a desktop or paid DAW to complete the core lesson.

A small first test:
1. Create a new GarageBand project and use the Audio Recorder.
2. Record a few seconds of original sound. The built-in microphone can establish the baseline before testing Cyber-G USB audio.
3. Save the editable project.
4. In My Songs, touch and hold the project, choose Share, choose Song, then Share and Save to Files.
5. Reopen/play the exported audio. Keep sharing local unless publication is explicitly chosen.

GarageBand project files and exported audio serve different purposes. Cross-platform lesson exchange should use audio plus separate chart/note data; do not promise native MIDI export from GarageBand for iPad. Imported ordinary audio also does not automatically follow tempo changes.

Apple documents compatible Audio Unit Extensions on iPad. Desktop MuseHub/VST plugins are not automatically iPad-compatible; use built-in sounds/effects first, then verify any optional plugin's platform and license.

Apple documents VoiceOver workflows for GarageBand, but our exact recording/export route still needs user testing.

## Sonic Pi route

Start from the Raspberry Pi Foundation's [Getting started with Sonic Pi](https://projects.raspberrypi.org/en/projects/getting-started-with-sonic-pi) project. The published source repository identifies it as a music-coding lesson, not a finished controller-building tutorial.

Use a tiny independently authored exercise:

~~~ruby
use_bpm 80
play 60
sleep 1
play 64
sleep 1
play 67
~~~

Change one note or one sleep value, run it again, and describe what changed. This introduces pitch and beats without requiring copyrighted song transcription.

Sonic Pi's current official site offers Web and Windows/macOS/Linux app routes. Its comparison lists:
- Web works on tablets/phones and includes live loops, synths, samples, and effects.
- Web MIDI is unavailable in Safari.
- OSC is app-only.
- Low-latency audio-interface access is app-only.
- Browser operation and the full controller route are different capabilities.

Verify the web editor and audio on the learner's actual iPad before claiming support.

For controller building, Sonic Pi can receive MIDI or OSC and turn those events into sounds. It does not itself build physical buttons or guarantee compatibility with an arbitrary controller. Choose an input device or microcontroller, document its events, connect it to a supported receiving environment, and map one event to one sound. Keep hardware purchases and firmware changes outside the first lesson.

## Cyber-G compatibility validation

For an optional hardware test, record the device model/module, firmware, iPad model, and iPadOS version in the tester's private notes. Publish only the test results and device specifications the tester consents to share. Hardware ownership or testing availability should not be disclosed.

Test the paths separately:
1. Baseline: GarageBand Touch Instruments and local audio export.
2. Audio: determine whether the actual Cyber-G USB connection appears as an input in GarageBand; record and replay a short take.
3. MIDI: determine whether the relevant keyboard module exposes notes to a receiving app. Body USB audio alone does not establish MIDI.
4. Game input: keep Tarantula touch/simulated input available. Native app MIDI reception does not establish Safari browser MIDI support.
5. Accessibility and timing: check text, VoiceOver, one-handed use, pause/recovery, output delay, and reconnect behavior.

Use "play along with Cyber-G" until the tested interface supports a stronger claim.

## Shared learning and sharing boundaries

Every route returns to the same loop: source explanation → evidence question → original/cleared practice → reflection → optional export.

Ren's process explanation must be verified at a timestamp before questions are written. "Not stated in this source" remains a valid answer. No artist impersonation, implied endorsement, or invented private intentions.

Practice assets require composition, arrangement, recording, and contributor rights records. Royalty-free loops are not automatically public domain or distributable as standalone samples.

Local export is the default. An Audio.com upload is a separate, deliberate publication with credits, license, listed/unlisted and download settings. Unlisted is not private. No account key belongs in the frontend.

## Focused delivery

The first implemented chooser should offer these routes using one lesson and one exercise. Route details can be links and checked instructions rather than new integrations. Add an integration only when it removes a demonstrated barrier.

Acceptance: a person can choose a route, complete the small outcome, switch routes, and export locally without owning a Cyber-G, disclosing a diagnosis, buying a plugin, or publishing anything.

## Sources

- [Ethical lesson policy](ETHICAL_MUSIC_LESSONS.md)
- [GarageBand for iPad/iOS](https://www.apple.com/ios/garageband/)
- [GarageBand sharing/export](https://support.apple.com/guide/garageband-ipad/share-songs-chs39284d66/ipados)
- [GarageBand import behavior](https://support.apple.com/en-au/guide/garageband-ipad/-chsab9d208e/ipados)
- [GarageBand compatible music apps/extensions](https://support.apple.com/en-au/guide/garageband-ipad/chse67d3af5f/ipados)
- [Sonic Pi Web/app feature comparison](https://sonic-pi.net/)
- [Sonic Pi MIDI tutorial](https://sonic-pi.net/tutorial-11.html)
- [Sonic Pi OSC tutorial](https://sonic-pi.net/tutorial-12.html)
- [Raspberry Pi Foundation lesson source](https://github.com/raspberrypilearning/getting-started-with-sonic-pi)
