# Use what you have · controller and recording lab

Updated 2026-10-04. Build one reproducible interaction with existing gear, then expand from observed behavior. No purchase, new account, new hosting, artist recording, or AI service is needed. Codex assisted this prototype and documentation.

## Start with one control

[Open the MIDI exercise](https://ibloud.github.io/ren-tap-tap-revenge/lesson.html#controller). The code lives beside the existing original music/code lesson in `ren-tap-tap-revenge`; Tarantula remains the learning-path hub. Both use existing GitHub Pages hosting and vanilla JavaScript. Duet and Inpatient Corridors are separate projects and are not modified by this lab.

The input adapter is implemented. Your physical DJ2GO2, Tula, Shure and AirPods combination remains **NOT VERIFIED** until tested on your host, OS, browser, cables and settings. Automated fixtures do not certify device behavior.

1. On a host/browser that exposes Web MIDI over HTTPS, connect the DJ2GO2. If the browser does not support MIDI, continue using the screen buttons, touch or keyboard; working native-app MIDI does not establish browser support on iPad.
2. Choose **Connect MIDI input** and decide whether to grant the browser permission. Select the intended controller if more than one is listed. No microphone, MIDI output or SysEx access is requested.
3. Choose **Untimed next note**, select **Learn next pad / button**, and press one physical pad in a chosen pad mode. The learning press never scores. Release, then press again: the note/action should advance exactly once.
4. Hold the pad, release, and press again. Holding must not repeatedly advance. The monitor exposes note/CC number, channel and value; no assumed manufacturer message numbers are baked in.
5. Learn a different pad for **Timed tap**. Start tones with the screen Play button. Use the mapped pad in time with the motif. The existing hit window and used-note check handle scoring. Feedback measures this exercise, not DJ competence or instrumental technique.
6. Unplug, reconnect, hide/return to the page, and deny permission on a fresh test. No replacement input should be selected automatically after unplugging. Touch/keyboard and untimed practice must remain usable.
7. Review and download mapping JSON and the optional test record. Mappings/observations stay in this tab until exported. Keep files before navigating or reloading; there is no automatic save, upload or feedback submission.

Note messages trigger on Note On and release on Note Off or zero-velocity Note On. Button-style CC messages trigger when crossing the chosen threshold (default 64) and release below it. Change the threshold only after inspecting the actual pad's values. Relative jog values, inverted CC switches, continuous faders and LED feedback need separate adapter work; the current threshold mode is not a full DJ mapping.

## Equipment roles

| Equipment | Current useful role | Verification boundary |
| --- | --- | --- |
| Numark DJ2GO2, original linked model | Learn pads/buttons; inspect note/CC values. | Actual map, pad modes, cables and browser events still require physical testing. Do not substitute a DJ2GO2 Touch preset without checking. |
| Tula mic | Record your own voice, instrument, explanation or practice loop in a chosen recording app, or use its standalone recorder. Export a local audio file. | The manufacturer lists USB-C recording and Mac/PC/iOS/Android compatibility. Exact iPad cable, power, app, firmware and route are unverified here. The browser lesson and Creator OS do not record or request its microphone. |
| Shure 215 earphones | Listen to the motif or monitor in your chosen recording/DJ app. | The linked announcement describes wired and wireless configurations; check your actual cable. A wired comparison is useful if available, but neither configuration has a measured latency here. |
| AirPods Pro 3 | Optional wireless listening and Apple-controlled accessibility support. | Output, processing and device switching can affect perceived timing. No fixed latency, browser stem controls, sensor integration or hearing data access is claimed. |
| Enya Cyber-G | Instrument play-along or a separate audio/MIDI experiment. | USB audio and MIDI are distinct capabilities. Existing physical-device test requirements still apply. |

Use the host/app audio settings to select an output or microphone. Selecting a MIDI input does not select audio output. The browser cannot promise independent master/headphone cue buses through the DJ2GO2. The current exercise neither runs a two-deck DJ engine nor remotely controls Serato/Mixxx.

## AirPods accessibility belongs in the flow

Keep the accommodations that make practice usable. No game exercise requires turning accessibility support off. Apple controls these settings; PIXIE and Tarantula provide guidance and accessible alternatives, not a hearing-settings remote control.

- **Headphone Accommodations:** Settings → Accessibility → Audio & Visual → Headphone Accommodations. Apple's guide explains tone/amplification and applying accommodations to Media. Hearing Assistance can override these settings; follow Apple's guidance for your OS rather than stacking assumed profiles.
- **Mono Audio and left/right balance:** consider the Apple audio settings that suit your needs. The exercise uses a note table and labeled actions and does not depend on left/right-only cues.
- **Transparency/listening mode and Conversation Boost:** optional Apple listening choices. Use your preferred setup consistently during a comparison; processing changes are not evidence of a changed MIDI mapping.
- **Press speed, press-and-hold duration, and tone volume:** Apple offers control adjustments for motor access and alert comfort. These configure the AirPods themselves; their stems are not mapped as game controls here.
- **Live Listen and headphone audio levels:** optional native Apple features. Live Listen uses an Apple microphone route; using the Tula as that source on the exact iPad/connector requires a separate check. It is not automatic monitoring in this game or Creator OS.
- **Hearing Health features:** remain Apple's separate features subject to their device/software/region requirements. This project does not administer hearing tests or read audiograms, hearing profiles, health records or sensor data.

The game retains visible feedback, readable note data, keyboard/touch controls and an untimed route. Physical VoiceOver, Switch Control, iPad/Files and headphone-route checks remain open. Compare a wireless route with a wired route only if useful to you; there is no compulsory timed score or automatic Bluetooth latency correction. Do not put health information into test notes.

## Fit with Creator OS now

| Step | Where it happens | What is connected now |
| --- | --- | --- |
| Learn a control and play | Music/code exercise, reached from Tarantula | MIDI input in a supported browser after permission; screen-button fallback. |
| Record original material | Tula recorder or your chosen DAW | External manual recording; no microphone capture added to PIXIE. |
| Keep a next step | [Creator session](https://ibloud.github.io/pixie-creator-os/session.html#equipment-practice) | Select local audio or skip; write a session note; review/confirm/export the existing session JSON. |
| Prepare a piece to share | [Creator OS](https://ibloud.github.io/pixie-creator-os/) | Select the audio/video/image in My work; add caption, credits/rights and accessibility text in Prepare. |
| Publish/distribute | Your chosen destination | Creator OS prepares a reviewed manual handoff. Bluesky/ATProto, Repurpose and streaming are not automatically connected or published by this lab. |

Example session name: `DJ2GO2 pad test`. Example next step: `Untimed pad worked. Compare wired output and AirPods at 80 BPM next; test pad mode separately.` Select a Tula recording from Files if desired. Keep mapping/test JSON as separate developer artifacts: they are **not** Creator OS session exports or PIXIE drafts and should not be imported into those fields. No URL carries your recording, mapping, device ID or notes between sites. Navigation links are the integration; files and notes move only when you choose.

For the exported result, keep attribution and permissions attached to the material you actually made. A recording of someone else's music does not gain permission merely because you used your own microphone. No Ren samples, voice imitation or unverified clearance is supplied.

## Expansion gates

After the first physical pad test, capture jog direction/relative encoding, pitch and crossfader ranges, and mode changes. Next candidates are original two-deck tempo alignment, phrase-window transitions, adjustable timing correction, and recovery drills. Those are **PLANNED**, not delivered by the four-note exercise. Add continuous-control adapters only after the message format is known. Keep one reusable input boundary and existing hosting; no MCP server or new repo is needed for this milestone.

## Sources checked 2026-10-04

- [Numark DJ2GO2 specification and mapping support](https://www.numark.com/product/dj2go2).
- [Tula microphone specification](https://tulamics.com/products/the-tula-mic-black).
- [Shure 215 purple announcement, 2022; configuration is not your device verification](https://www.shure.com/en-US/newsroom/the-votes-are-in-shure-special-edition-215-sound-isolating-tm-earphones-in-purple-are-coming-later-this-year).
- [AirPods Pro 3 specifications](https://www.apple.com/airpods-pro/specs/).
- [Apple Headphone Accommodations](https://support.apple.com/en-us/102663), [AirPods accessibility controls](https://support.apple.com/guide/iphone/adjust-airpods-settings-iph345efe861/ios), and [Live Listen](https://support.apple.com/en-us/102479).
- [Web MIDI permission and browser boundary](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/requestMIDIAccess).

Hardware/OS/browser support can change. Preserve the exact physical setup and observed values in a voluntary test record before claiming verified support.
