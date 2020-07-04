window.physical.sounds.game = new Howl({
  src: ['https://cdn.glitch.com/733f2d41-6802-4698-b12f-76e123adfd7f%2Fdino-sound.mp3?v=1592944710102'],
  autoplay: true,
  loop: true,
  volume: 0.3,
});

window.physical.sounds.jump = new Howl({
  src: ['https://cdn.glitch.com/733f2d41-6802-4698-b12f-76e123adfd7f%2Fjump_03.wav?v=1592864892788'],
  autoplay: false,
  loop: false,  
});


window.physical.sounds.gameover = new Howl({
  src: ['https://cdn.glitch.com/733f2d41-6802-4698-b12f-76e123adfd7f%2Fgameover.mp3?v=1592950093640'],
  autoplay: false,
  loop: false,  
});



window.physical.sounds.game.play();