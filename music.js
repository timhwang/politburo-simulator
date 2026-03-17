// ============================================================
// 8-BIT SOVIET MOOD MUSIC — Web Audio API Synthesizer
// Plays a looping chiptune with Soviet/Russian musical flavor
// (minor keys, folk-inspired melodies, march rhythms)
// ============================================================

const SovietMusic = (() => {
  let audioCtx = null;
  let masterGain = null;
  let isPlaying = false;
  let isMuted = false;
  let currentVolume = 0.25;
  let loopTimeout = null;
  let activeOscillators = [];

  // Musical constants — D minor / Russian minor scale
  const NOTE_FREQS = {
    'C3': 130.81, 'D3': 146.83, 'Eb3': 155.56, 'E3': 164.81, 'F3': 174.61,
    'G3': 196.00, 'Ab3': 207.65, 'A3': 220.00, 'Bb3': 233.08, 'B3': 246.94,
    'C4': 261.63, 'D4': 293.66, 'Eb4': 311.13, 'E4': 329.63, 'F4': 349.23,
    'G4': 392.00, 'Ab4': 415.30, 'A4': 440.00, 'Bb4': 466.16, 'B4': 493.88,
    'C5': 523.25, 'D5': 587.33, 'Eb5': 622.25, 'E5': 659.25, 'F5': 698.46,
    'G5': 783.99, 'A5': 880.00,
    'R': 0 // rest
  };

  // Melody patterns — Soviet anthem-inspired, folk-tinged minor key phrases
  const melodies = [
    // Pattern 1: March-like, heroic D minor
    [
      {n:'D4',d:0.3}, {n:'D4',d:0.15}, {n:'F4',d:0.3}, {n:'A4',d:0.45},
      {n:'Bb4',d:0.3}, {n:'Bb4',d:0.15}, {n:'A4',d:0.3}, {n:'G4',d:0.45},
      {n:'F4',d:0.3}, {n:'F4',d:0.15}, {n:'E4',d:0.3}, {n:'F4',d:0.45},
      {n:'D4',d:0.9}, {n:'R',d:0.3},
    ],
    // Pattern 2: Melancholic folk feel
    [
      {n:'A4',d:0.45}, {n:'G4',d:0.15}, {n:'F4',d:0.3}, {n:'E4',d:0.3},
      {n:'D4',d:0.45}, {n:'C4',d:0.15}, {n:'D4',d:0.6},
      {n:'F4',d:0.45}, {n:'E4',d:0.15}, {n:'D4',d:0.3}, {n:'C4',d:0.3},
      {n:'D4',d:0.9}, {n:'R',d:0.3},
    ],
    // Pattern 3: Ascending revolutionary march
    [
      {n:'D4',d:0.2}, {n:'E4',d:0.2}, {n:'F4',d:0.2}, {n:'G4',d:0.4},
      {n:'A4',d:0.2}, {n:'Bb4',d:0.2}, {n:'A4',d:0.4}, {n:'G4',d:0.2},
      {n:'F4',d:0.4}, {n:'E4',d:0.2}, {n:'D4',d:0.6},
      {n:'R',d:0.3}, {n:'A3',d:0.2}, {n:'D4',d:0.6},
    ],
    // Pattern 4: Dark brooding (Stalin era mood)
    [
      {n:'D4',d:0.6}, {n:'Eb4',d:0.3}, {n:'D4',d:0.3},
      {n:'C4',d:0.3}, {n:'D4',d:0.3}, {n:'R',d:0.3},
      {n:'A3',d:0.6}, {n:'Bb3',d:0.3}, {n:'A3',d:0.3},
      {n:'G3',d:0.3}, {n:'A3',d:0.6}, {n:'R',d:0.3},
    ],
    // Pattern 5: Triumphant resolution
    [
      {n:'D4',d:0.15}, {n:'F4',d:0.15}, {n:'A4',d:0.3}, {n:'D5',d:0.6},
      {n:'C5',d:0.15}, {n:'Bb4',d:0.15}, {n:'A4',d:0.3}, {n:'G4',d:0.3},
      {n:'F4',d:0.3}, {n:'G4',d:0.15}, {n:'A4',d:0.15}, {n:'F4',d:0.6},
      {n:'D4',d:0.9}, {n:'R',d:0.15},
    ],
    // Pattern 6: Wistful nostalgia (Slavic folk)
    [
      {n:'A4',d:0.3}, {n:'Bb4',d:0.15}, {n:'A4',d:0.15}, {n:'G4',d:0.3}, {n:'F4',d:0.3},
      {n:'E4',d:0.3}, {n:'F4',d:0.3}, {n:'D4',d:0.6},
      {n:'R',d:0.15}, {n:'D4',d:0.15}, {n:'E4',d:0.15}, {n:'F4',d:0.15},
      {n:'G4',d:0.3}, {n:'A4',d:0.6}, {n:'R',d:0.3},
    ],
    // Pattern 7: Funeral march (slow, somber)
    [
      {n:'D4',d:0.6}, {n:'R',d:0.15}, {n:'D4',d:0.3}, {n:'Eb4',d:0.6},
      {n:'D4',d:0.3}, {n:'C4',d:0.3}, {n:'Bb3',d:0.6},
      {n:'A3',d:0.3}, {n:'Bb3',d:0.3}, {n:'C4',d:0.3}, {n:'D4',d:0.9},
      {n:'R',d:0.3},
    ],
    // Pattern 8: Agitated tension (rapid notes)
    [
      {n:'D4',d:0.15}, {n:'E4',d:0.15}, {n:'D4',d:0.15}, {n:'C4',d:0.15},
      {n:'D4',d:0.15}, {n:'F4',d:0.15}, {n:'E4',d:0.15}, {n:'D4',d:0.15},
      {n:'A4',d:0.3}, {n:'G4',d:0.15}, {n:'F4',d:0.15}, {n:'E4',d:0.3},
      {n:'D4',d:0.6}, {n:'R',d:0.3},
    ],
    // Pattern 9: Victorious fanfare
    [
      {n:'D4',d:0.2}, {n:'D4',d:0.1}, {n:'D4',d:0.1}, {n:'F4',d:0.4},
      {n:'A4',d:0.2}, {n:'A4',d:0.1}, {n:'A4',d:0.1}, {n:'D5',d:0.4},
      {n:'C5',d:0.2}, {n:'Bb4',d:0.2}, {n:'A4',d:0.2}, {n:'G4',d:0.2},
      {n:'F4',d:0.6}, {n:'D4',d:0.6}, {n:'R',d:0.2},
    ],
    // Pattern 10: Suspenseful creep (chromatic)
    [
      {n:'A3',d:0.45}, {n:'Bb3',d:0.45}, {n:'B3',d:0.45}, {n:'C4',d:0.45},
      {n:'R',d:0.15}, {n:'Eb4',d:0.3}, {n:'D4',d:0.6},
      {n:'C4',d:0.3}, {n:'Bb3',d:0.3}, {n:'A3',d:0.6}, {n:'R',d:0.3},
    ],
  ];

  // Bass patterns (marchlike)
  const bassPatterns = [
    [{n:'D3',d:0.3},{n:'R',d:0.15},{n:'A3',d:0.3},{n:'R',d:0.15},{n:'D3',d:0.3},{n:'R',d:0.15},{n:'A3',d:0.3},{n:'R',d:0.15}],
    [{n:'D3',d:0.45},{n:'A3',d:0.15},{n:'F3',d:0.45},{n:'A3',d:0.15},{n:'G3',d:0.45},{n:'A3',d:0.15},{n:'D3',d:0.45},{n:'R',d:0.15}],
    [{n:'D3',d:0.6},{n:'F3',d:0.6},{n:'G3',d:0.6},{n:'A3',d:0.6}],
    // Bass 4: Ominous pedal tone with octave jumps
    [{n:'D3',d:0.6},{n:'D3',d:0.3},{n:'A3',d:0.15},{n:'D3',d:0.15},{n:'G3',d:0.45},{n:'D3',d:0.45},{n:'F3',d:0.3},{n:'R',d:0.15}],
    // Bass 5: Walking bass line
    [{n:'D3',d:0.3},{n:'E3',d:0.3},{n:'F3',d:0.3},{n:'G3',d:0.3},{n:'A3',d:0.3},{n:'G3',d:0.3},{n:'F3',d:0.3},{n:'E3',d:0.3}],
    // Bass 6: Heavy march with rests
    [{n:'D3',d:0.45},{n:'R',d:0.15},{n:'D3',d:0.15},{n:'D3',d:0.15},{n:'A3',d:0.45},{n:'R',d:0.15},{n:'G3',d:0.3},{n:'F3',d:0.3},{n:'D3',d:0.3}],
  ];

  // Drum pattern (noise-based)
  function playDrum(ctx, time, type) {
    const bufferSize = ctx.sampleRate * 0.05;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = type === 'kick' ? 'lowpass' : 'highpass';
    filter.frequency.value = type === 'kick' ? 150 : 5000;

    const env = ctx.createGain();
    env.gain.setValueAtTime(type === 'kick' ? 0.3 : 0.12, time);
    env.gain.exponentialRampToValueAtTime(0.001, time + (type === 'kick' ? 0.15 : 0.05));

    noise.connect(filter);
    filter.connect(env);
    env.connect(masterGain);
    noise.start(time);
    noise.stop(time + 0.2);
  }

  function playNote(ctx, freq, startTime, duration, waveform, volume) {
    if (freq === 0) return; // rest
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = waveform;
    osc.frequency.setValueAtTime(freq, startTime);

    // Chiptune envelope
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(volume, startTime + 0.01);
    gain.gain.setValueAtTime(volume * 0.7, startTime + duration * 0.3);
    gain.gain.linearRampToValueAtTime(0, startTime + duration - 0.01);

    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(startTime);
    osc.stop(startTime + duration);
    activeOscillators.push(osc);
  }

  function playPhrase() {
    if (!audioCtx || !isPlaying) return;

    const now = audioCtx.currentTime + 0.05;
    const melody = melodies[Math.floor(Math.random() * melodies.length)];
    const bass = bassPatterns[Math.floor(Math.random() * bassPatterns.length)];

    // Calculate total melody duration
    let melodyDur = melody.reduce((s, n) => s + n.d, 0);
    let bassDur = bass.reduce((s, n) => s + n.d, 0);
    const phraseDur = Math.max(melodyDur, bassDur);

    // Play melody (square wave — classic 8-bit)
    let t = now;
    melody.forEach(note => {
      playNote(audioCtx, NOTE_FREQS[note.n], t, note.d * 0.95, 'square', 0.12);
      t += note.d;
    });

    // Play bass (triangle wave — warm low end)
    t = now;
    bass.forEach(note => {
      playNote(audioCtx, NOTE_FREQS[note.n], t, note.d * 0.9, 'triangle', 0.15);
      t += note.d;
    });

    // Simple drum pattern over the phrase
    const beatInterval = 0.3;
    for (let i = 0; i < phraseDur; i += beatInterval) {
      const beatInMeasure = Math.round(i / beatInterval) % 4;
      if (beatInMeasure === 0) {
        playDrum(audioCtx, now + i, 'kick');
      } else if (beatInMeasure === 2) {
        playDrum(audioCtx, now + i, 'snare');
      }
    }

    // Schedule next phrase with small gap
    const nextDelay = (phraseDur + 0.2) * 1000;
    loopTimeout = setTimeout(() => {
      // Clean up old oscillators
      activeOscillators = activeOscillators.filter(o => {
        try { return o.context.currentTime < o.stopTime; } catch(e) { return false; }
      });
      playPhrase();
    }, nextDelay);
  }

  function init() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = currentVolume;
    masterGain.connect(audioCtx.destination);
  }

  return {
    start() {
      init();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      if (isPlaying) return;
      isPlaying = true;
      isMuted = false;
      playPhrase();
    },

    stop() {
      isPlaying = false;
      if (loopTimeout) { clearTimeout(loopTimeout); loopTimeout = null; }
      if (masterGain) masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
    },

    toggle() {
      if (!audioCtx) {
        this.start();
        return true;
      }
      if (isPlaying) {
        this.stop();
        return false;
      } else {
        isPlaying = true;
        masterGain.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
        playPhrase();
        return true;
      }
    },

    setVolume(v) {
      currentVolume = Math.max(0, Math.min(1, v));
      if (masterGain) masterGain.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
    },

    isPlaying() { return isPlaying; }
  };
})();
