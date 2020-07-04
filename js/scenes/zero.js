
scenes['zero'] = {
  'next': 'two',
  'prev': undefined,
  'sprite': undefined,
  'env': {
    "dino": {
      'right': false,
      'left': false
    },
    'sounds': {
      'elements': []
    }
  },
  'render': function(_container) {
    var graphics = new PIXI.Graphics();
    graphics.beginFill(0x000000);
    graphics.lineStyle(0, 0xFF0000);
    graphics.drawRect(0, 0, physical.width, physical.height);    

    _container.addChild(graphics);

    var floor = new PIXI.Graphics();
    floor.beginFill(0xaaaaaa);
    floor.lineStyle(0, 0xFF0000);
    floor.drawRect(0, physical['scene'].leftDown.y + 120, physical.width, 5);  
    _container.addChild(floor);
    
    var square = new PIXI.Graphics();
    square.beginFill(0xffffaa);
    square.lineStyle(0, 0xFF0000);
    square.drawRect(400, physical['scene'].leftDown.y + 90, 100, 20);  
    _container.addChild(square);

    var square2 = new PIXI.Graphics();
    square2.beginFill(0xffaaff);
    square2.lineStyle(0, 0xFF0000);
    square2.drawRect(600, physical['scene'].leftDown.y - 60, 100, 20);  
    _container.addChild(square2);

    var square3 = new PIXI.Graphics();
    square3.beginFill(0xaaaaff);
    square3.lineStyle(0, 0xFF0000);
    square3.drawRect(900, physical['scene'].leftDown.y - 80, 80, 20);  
    _container.addChild(square3);
    
    if ( window.physical['actors']['dino'] ) {
      window.physical['actors']['dino']['walking']['e'].x = physical['scene'].leftDown.x;
      window.physical['actors']['dino']['walking']['e'].y = physical['scene'].leftDown.y;
      window.physical['actors']['dino']['walking']['e'].visible = false;
      window.physical['actors']['dino']['walking']['e'].scale.set(0.3, 0.3);

      window.physical['actors']['dino']['jumping']['e'].x = physical['scene'].leftDown.x;
      window.physical['actors']['dino']['jumping']['e'].y = physical['scene'].leftDown.y;
      window.physical['actors']['dino']['jumping']['e'].visible = false;
      window.physical['actors']['dino']['jumping']['e'].scale.set(0.3, 0.3);
      
      window.physical['actors']['dino']['waiting']['e'].x = physical['scene'].leftDown.x;
      window.physical['actors']['dino']['waiting']['e'].y = physical['scene'].leftDown.y;
      window.physical['actors']['dino']['waiting']['e'].scale.set(0.3, 0.3);
      window.physical['actors']['dino']['waiting']['e'].play()
      
      _container.addChild(window.physical['actors']['dino']['walking']['e']);
      _container.addChild(window.physical['actors']['dino']['jumping']['e']);
      _container.addChild(window.physical['actors']['dino']['waiting']['e']);

    }
  },
  'loop': function(){
    if ( scenes['zero']['env']['dino']['left'] ) {
      if ( window.physical['actors']['dino']['walking']['e'].visible ) {
        window.physical['actors']['dino']['walking']['e'].x -= 2;
      } else {
        window.physical['actors']['dino']['jumping']['e'].x -= 2;
      }
    }
    if ( scenes['zero']['env']['dino']['right'] ) {
      if ( window.physical['actors']['dino']['walking']['e'].visible ) {
        window.physical['actors']['dino']['walking']['e'].x += 2; 
      } else {
        window.physical['actors']['dino']['jumping']['e'].x += 2;
      }
    }
    if ( scenes['zero']['env']['dino']['up'] ) {
      
      if ( window.physical['actors']['dino']['jumping']['e'].y > (physical['scene'].leftDown.y - 30) ) {
        window.physical['actors']['dino']['jumping']['e'].y -= 2;
      } else {
        console.log("mas");
        window.physical['actors']['dino']['jumping']['e'].y += 2;
      }
      // console.log(">", physical['scene'].leftDown.y, "|", window.physical['actors']['dino']['jumping']['e'].y);
    }
  }
};