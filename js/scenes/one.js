
scenes['one'] = {
  'next': 'two',
  'prev': undefined,
  'maps': {
    'collision': {
      'c': {
        'children': []
      },
      'tiles': []
    },
    'background': {
      'c': undefined,
      'tiles': []
    },
    'screen': undefined
  },
  'container': undefined,
  'env': {
    "dino": {
      'right': false,
      'left': false
    },
    'screen': {
      'toRight': false
    },
    'dead': undefined,
    'gameover': false,
    tiles: [],
    'sounds': {
      'elements': []
    }
  },
  'addFloor': function(_c, _x) {
  },
  'credits': function(){},
  'makeMap': function(_container) {  },
  'collisionMap': function(_container) {},
  'gameover': function(){},
  'gravity': function(){},
  'fullscreen': function(){},
  'camera': function() {
    var blockOne = physical.width / 4;
    if ( window.physical['actors']['dino'][window.physical['actors']['dino']['current']]['e'].x <= blockOne ) {
      scenes['one']['maps']['screen'].x = window.physical['actors']['dino'][window.physical['actors']['dino']['current']]['e'].x / 10;
    }
  },
  'render': function(_container) {
    scenes['one'].container = _container;
    scenes['one'].fullscreen(_container);
    
    scenes['one'].collisionMap(_container);
    
    scenes['one'].makeMap(_container);
    
    if ( window.physical['actors']['dino'] ) {
      window.physical['actors']['dino']['walking']['e'].x = physical['scene'].leftDown.x;
      window.physical['actors']['dino']['walking']['e'].y = physical['scene'].leftDown.y;
      window.physical['actors']['dino']['walking']['e'].visible = false;
      window.physical['actors']['dino']['walking']['e']
        .scale.set(window.physical['actors']['dino']['sizes']['small'], 
                   window.physical['actors']['dino']['sizes']['small']);

      window.physical['actors']['dino']['jumping']['e'].x = physical['scene'].leftDown.x;
      window.physical['actors']['dino']['jumping']['e'].y = physical['scene'].leftDown.y;
      window.physical['actors']['dino']['jumping']['e'].visible = false;
      window.physical['actors']['dino']['jumping']['e']
        .scale.set(window.physical['actors']['dino']['sizes']['small'], 
                   window.physical['actors']['dino']['sizes']['small']);
      
      window.physical['actors']['dino']['waiting']['e'].x = physical['scene'].leftDown.x;
      // window.physical['actors']['dino']['waiting']['e'].y = physical['scene'].leftDown.y;
      window.physical['actors']['dino']['waiting']['e']
        .scale.set(window.physical['actors']['dino']['sizes']['small'], 
          window.physical['actors']['dino']['sizes']['small']);
      window.physical['actors']['dino']['waiting']['e'].play()
      
      _container.addChild(window.physical['actors']['dino']['walking']['e']);
      _container.addChild(window.physical['actors']['dino']['jumping']['e']);
      _container.addChild(window.physical['actors']['dino']['waiting']['e']);
      
    }
    scenes['one'].credits();
  },
  'runner': function() {
    scenes['one']['maps']['collision']['c'].x -= 0.5;    
    if ( Math.abs(scenes['one']['maps']['collision']['c'].x) % 100 === 0 ) {
      var n = scenes['one']['maps']['collision']["tiles"].length - 1;
      scenes['one'].addFloor(scenes['one']['maps']['collision']['c'], scenes['one']['maps']['collision']["tiles"][n].x + 120);
    }
  },
  'loop': function(){
    
    scenes['one']['gravity']();
    scenes['one']['runner']();
    // scenes['one']['camera']();
    
    if ( scenes['one']['env']['dino']['left'] ) {
      if ( window.physical['actors']['dino']['walking']['e'].visible ) {
        window.physical['actors']['dino']['walking']['e'].x -= 2;
        // scenes['one'].check();
      } else {
        window.physical['actors']['dino']['jumping']['e'].x -= 4;
      }
    }
    if ( scenes['one']['env']['dino']['right'] ) {
      if ( window.physical['actors']['dino']['walking']['e'].visible ) {
        window.physical['actors']['dino']['walking']['e'].x += 2; 
        // scenes['one'].check();
      } else {
        window.physical['actors']['dino']['jumping']['e'].x += 4;
      }
    }
    if ( scenes['one']['env']['dino']['up'] ) {
      if ( window.physical['actors']['dino']['jumping']['e'].y > (physical['scene'].leftDown.y - 80) ) {
        window.physical['actors']['dino']['jumping']['e'].y -= 20;
      } else {
        window.physical['actors']['dino']['jumping']['e'].y += 20;
      }
    }
  }
};