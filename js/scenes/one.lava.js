scenes['one']['makeMap'] = function(_container) {
    scenes['one']['maps']['background']['c'] = new PIXI.Container();

    var frames = [];
    frames.push(window.PIXI.Texture.fromFrame('lava_01.png'));
    frames.push(window.PIXI.Texture.fromFrame('lava_02.png'));
    
    for(var i = 0; 6 > i; i++) {
      var animation = new window.PIXI.extras.AnimatedSprite(frames);
      animation.animationSpeed = 0.07;
      animation.anchor.set(0.0);
      animation.x = i*500;
      animation.y = physical['scene'].leftDown.y + 140;
      animation.play();    

      scenes['one']['maps']['background']['c'].addChild(animation)      
    }
    
    _container.addChild(scenes['one']['maps']['background']['c']);
  };