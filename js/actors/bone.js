window.physical['actors']['bone'] = {
  'render': function() {
    var frames = [];
    frames.push(window.PIXI.Texture.fromFrame('Bone_01.png'));
    frames.push(window.PIXI.Texture.fromFrame('Bone_02.png'));
    frames.push(window.PIXI.Texture.fromFrame('Bone_03.png'));
    frames.push(window.PIXI.Texture.fromFrame('Bone_04.png'));


    window.physical['actors']['bone']['dead']['e'] = new window.PIXI.extras.AnimatedSprite(frames);
    window.physical['actors']['bone']['dead']['e'].animationSpeed = 0.3;
    window.physical['actors']['bone']['dead']['e'].loop = false;
    window.physical['actors']['bone']['dead']['e'].anchor.set(0.0);

  },
  'dead': {
    'e': undefined
  }
}