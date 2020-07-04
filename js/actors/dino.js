window.physical['actors']['dino'] = {
  'render': function() {
    var frames = [];
    frames.push(window.PIXI.Texture.fromFrame('walk_01.png'));
    frames.push(window.PIXI.Texture.fromFrame('walk_02.png'));
    frames.push(window.PIXI.Texture.fromFrame('walk_03.png'));
    frames.push(window.PIXI.Texture.fromFrame('walk_04.png'));
    frames.push(window.PIXI.Texture.fromFrame('walk_05.png'));
    frames.push(window.PIXI.Texture.fromFrame('walk_06.png'));
    frames.push(window.PIXI.Texture.fromFrame('walk_07.png'));
    frames.push(window.PIXI.Texture.fromFrame('walk_08.png'));
    frames.push(window.PIXI.Texture.fromFrame('walk_09.png'));
    frames.push(window.PIXI.Texture.fromFrame('walk_10.png'));

    window.physical['actors']['dino']['walking']['e'] = new window.PIXI.extras.AnimatedSprite(frames);
    window.physical['actors']['dino']['walking']['e'].animationSpeed = 0.3;
    window.physical['actors']['dino']['walking']['e'].anchor.set(0.0);

    var jumpingFrames = [];
    jumpingFrames.push(window.PIXI.Texture.fromFrame('jump_01.png'));
    jumpingFrames.push(window.PIXI.Texture.fromFrame('jump_02.png'));
    jumpingFrames.push(window.PIXI.Texture.fromFrame('jump_03.png'));
    jumpingFrames.push(window.PIXI.Texture.fromFrame('jump_04.png'));
    jumpingFrames.push(window.PIXI.Texture.fromFrame('jump_05.png'));
    jumpingFrames.push(window.PIXI.Texture.fromFrame('jump_06.png'));
    jumpingFrames.push(window.PIXI.Texture.fromFrame('jump_07.png'));
    jumpingFrames.push(window.PIXI.Texture.fromFrame('jump_08.png'));
    jumpingFrames.push(window.PIXI.Texture.fromFrame('jump_09.png'));
    jumpingFrames.push(window.PIXI.Texture.fromFrame('jump_10.png'));
    jumpingFrames.push(window.PIXI.Texture.fromFrame('jump_11.png'));
    jumpingFrames.push(window.PIXI.Texture.fromFrame('jump_12.png'));

    window.physical['actors']['dino']['jumping']['e'] = new window.PIXI.extras.AnimatedSprite(jumpingFrames);
    window.physical['actors']['dino']['jumping']['e'].animationSpeed = 0.2;  
    window.physical['actors']['dino']['jumping']['e'].anchor.set(0.0);    
    window.physical['actors']['dino']['jumping']['e'].loop = false;
    window.physical['actors']['dino']['jumping']['e'].onFrameChange = window.physical['actors']['dino']['jumping']['onComplete'];
    
    var waitFrames = [];
    waitFrames.push(window.PIXI.Texture.fromFrame('wait_01.png'));
    waitFrames.push(window.PIXI.Texture.fromFrame('wait_02.png'));
    waitFrames.push(window.PIXI.Texture.fromFrame('wait_03.png'));
    waitFrames.push(window.PIXI.Texture.fromFrame('wait_04.png'));
    waitFrames.push(window.PIXI.Texture.fromFrame('wait_05.png'));
    waitFrames.push(window.PIXI.Texture.fromFrame('wait_06.png'));
    waitFrames.push(window.PIXI.Texture.fromFrame('wait_07.png'));
    waitFrames.push(window.PIXI.Texture.fromFrame('wait_08.png'));
    waitFrames.push(window.PIXI.Texture.fromFrame('wait_09.png'));
    waitFrames.push(window.PIXI.Texture.fromFrame('wait_10.png'));

    window.physical['actors']['dino']['waiting']['e'] = new window.PIXI.extras.AnimatedSprite(waitFrames);
    window.physical['actors']['dino']['waiting']['e'].animationSpeed = 0.2;  
    window.physical['actors']['dino']['waiting']['e'].anchor.set(0.0);  
    
    window.physical['keyboard']['left'].press = function() {
      window.physical['actors']['dino']['walking']['downLeft']();
    };
    window.physical['keyboard']['right'].press = function() {
      window.physical['actors']['dino']['walking']['downRight']();
    };
    window.physical['keyboard']['left'].release = function() {
      window.physical['actors']['dino']['walking']['upLeft']();
    };
    window.physical['keyboard']['right'].release = function() {
      window.physical['actors']['dino']['walking']['upRight']();
    };    

    window.physical['keyboard']['up'].press = function() {
      window.physical['actors']['dino']['jumping']['downUp']();
    }
    window.physical['keyboard']['up'].release = function() {
      window.physical['actors']['dino']['jumping']['upUp']();
    }
  },
  'dead': function() {
    window.physical['actors']['dino']['walking']['e'].visible = false;
    window.physical['actors']['dino']['jumping']['e'].visible = false;
    window.physical['actors']['dino']['waiting']['e'].visible = false;
  },
  'walking': {
    'e': undefined,
    'downLeft': function() {},
    'downRight': function() {},
    'upLeft': function() {},
    'upRight': function() {}        
  },
  'jumping': {
    'e': undefined,
    'busy': false,
    'upUp': function() {},
    'downUp': function() {},
    'onComplete': function(){}
  },
  'waiting': {
    'e': undefined,
  },
  'sizes': {
    'small': 0.22
  },
  'current': 'waiting',
  'orientation': function(o) {
    if ( o === "left" ) {
      if ( window.physical['actors']['dino']['walking']['e'].scale.x > 0 ) {
        window.physical['actors']['dino']['walking']['e'].x += 100;
      }
      window.physical['actors']['dino']['walking']['e']
        .scale.set(-1 * window.physical['actors']['dino']['sizes']['small'], 
                   window.physical['actors']['dino']['sizes']['small']);
      window.physical['actors']['dino']['jumping']['e']
        .scale.set(-1*window.physical['actors']['dino']['sizes']['small'], 
                   window.physical['actors']['dino']['sizes']['small']);
      window.physical['actors']['dino']['waiting']['e']
        .scale.set(-1*window.physical['actors']['dino']['sizes']['small'], 
                   window.physical['actors']['dino']['sizes']['small']);
    } else if ( o === "right" ) {
      if ( window.physical['actors']['dino']['walking']['e'].scale.x < 0 ) {
        window.physical['actors']['dino']['walking']['e'].x -= 100;
      }
      window.physical['actors']['dino']['walking']['e']
        .scale.set(window.physical['actors']['dino']['sizes']['small'], 
                   window.physical['actors']['dino']['sizes']['small']);
      window.physical['actors']['dino']['jumping']['e']
        .scale.set(window.physical['actors']['dino']['sizes']['small'], 
                   window.physical['actors']['dino']['sizes']['small']);
      window.physical['actors']['dino']['waiting']['e']
        .scale.set(window.physical['actors']['dino']['sizes']['small'],
                   window.physical['actors']['dino']['sizes']['small']);
    }
  },
  'pushY': function(action) {
    var y = window.physical['actors']['dino'][action]['e'].y;
    window.physical['actors']['dino']['walking']['e'].y = y;
    window.physical['actors']['dino']['waiting']['e'].y = y;
    window.physical['actors']['dino']['jumping']['e'].y = y;    
  },
  'pushX': function(action) {
    var x = window.physical['actors']['dino'][action]['e'].x;
    window.physical['actors']['dino']['walking']['e'].x = x;
    window.physical['actors']['dino']['waiting']['e'].x = x;
    window.physical['actors']['dino']['jumping']['e'].x = x;
  }
};
window.physical['actors']['dino']['walking']['downLeft'] = function(){
  if ( window.physical['actors']['dino']['jumping']['busy'] ) {
    return;
  }
  window.physical['actors']['dino'].orientation('left');
  window.physical['actors']['dino']['waiting']['e'].visible = false;
  window.physical['actors']['dino']['walking']['e'].visible = true;
  scenes[scenes['current']]['env']['dino']['left'] = true;
  window.physical['actors']['dino']['walking']['e'].play();  
  window.physical['actors']['dino']['current'] = 'walking';
};

window.physical['actors']['dino']['walking']['downRight'] = function(){
  if ( window.physical['actors']['dino']['jumping']['busy'] ) {
    return;
  }
  window.physical['actors']['dino'].orientation('right');
  window.physical['actors']['dino']['waiting']['e'].visible = false;
  window.physical['actors']['dino']['walking']['e'].visible = true;
  scenes[scenes['current']]['env']['dino']['right'] = true;
  window.physical['actors']['dino']['walking']['e'].play();
  window.physical['actors']['dino']['current'] = 'walking';
};

window.physical['actors']['dino']['walking']['upLeft'] = function(){
  if (!window.physical['actors']['dino']['jumping']['busy']) {
    window.physical['actors']['dino']['waiting']['e'].visible = true;
  }  
  window.physical['actors']['dino']['walking']['e'].visible = false;  
  scenes[scenes['current']]['env']['dino']['left'] = false;
  window.physical['actors']['dino'].pushX('walking');
  window.physical['actors']['dino']['walking']['e'].gotoAndStop(0);
  window.physical['actors']['dino']['current'] = 'waiting';
};

window.physical['actors']['dino']['walking']['upRight'] = function(){
  if (!window.physical['actors']['dino']['jumping']['busy']) {
    window.physical['actors']['dino']['waiting']['e'].visible = true;
  }
  window.physical['actors']['dino']['walking']['e'].visible = false;
  scenes[scenes['current']]['env']['dino']['right'] = false;
  window.physical['actors']['dino'].pushX('walking');
  window.physical['actors']['dino']['walking']['e'].gotoAndStop(0);
  window.physical['actors']['dino']['current'] = 'waiting';
};

window.physical['actors']['dino']['jumping'].downUp = function() {
  // window.physical['actors']['dino']['current'] = 'jumping';
  if ( window.physical['actors']['dino']['jumping']['busy'] ) {
    return;
  }
  window.physical['actors']['dino']['jumping']['busy'] = true;
  
  window.physical['actors']['dino']['jumping']['e'].x = window.physical['actors']['dino']['walking']['e'].x;
  window.physical['actors']['dino']['walking']['e'].visible = false;
  window.physical['actors']['dino']['waiting']['e'].visible = false;
  window.physical['actors']['dino']['jumping']['e'].visible = true;

  window.physical['actors']['dino']['jumping']['e'].play();
  window.physical.sounds.jump.play();
};

window.physical['actors']['dino']['jumping']['onComplete'] = function() {
  if ( window.physical['actors']['dino']['jumping']['e'].currentFrame > 4 ) {
    scenes[scenes['current']]['env']['dino']['up'] = true;
    if ( window.physical['actors']['dino']['walking']['e'].scale.x < 0 ) {
      scenes[scenes['current']]['env']['dino']['left'] = true;
    } else {
      scenes[scenes['current']]['env']['dino']['right'] = true; 
    }    
  }
  if ( window.physical['actors']['dino']['jumping']['e'].currentFrame === 11 ) {
    window.physical['actors']['dino']['jumping']['e'].gotoAndStop(0);
    window.physical['actors']['dino']['walking']['e'].x = window.physical['actors']['dino']['jumping']['e'].x;
    window.physical['actors']['dino'].pushX('jumping');
    window.physical['actors']['dino']['walking']['e'].visible = false;
    window.physical['actors']['dino']['jumping']['e'].visible = false;
    window.physical['actors']['dino']['waiting']['e'].visible = true;
    window.physical['actors']['dino']['current'] = 'waiting';
    scenes[scenes['current']]['env']['dino']['right'] = false;
    scenes[scenes['current']]['env']['dino']['left'] = false;
    scenes[scenes['current']]['env']['dino']['up'] = false;
    window.physical['actors']['dino']['jumping']['busy'] = false;
    window.physical['actors']['dino']['jumping']['e'].y = physical['scene'].leftDown.y;
    
  }
};