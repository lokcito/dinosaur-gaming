window.physical['buttons'] =  {
  'next': {
    'sprite': undefined,
    'dims': {
      'width': 73,
      'height': 36
    },
    'render': function(_root, _container){
      var rightBtn = new window.PIXI.Sprite(
        window.PIXI.loader.resources["rightBtn"].texture
      ); 
      
      rightBtn.x = physical['width'] - window.physical['buttons']['next']['dims']['width'] - 20;
      rightBtn.y = physical['height'] - window.physical['buttons']['next']['dims']['height'] - 80;
      rightBtn.interactive = true;
      rightBtn.on("click", function(){
        var _s = scenes[scenes['current']]['next'];
        if (_s === scenes['current']) {
          return;
        }
        if ( _s ) {
         scenes[_s].render(_container);
         scenes['current'] = _s;
        }
      
      });
      _root.addChild(rightBtn);
      
      return rightBtn;
    }
  },
  'prev': {
    'sprite': undefined,
    'dims': {
      'width': 180,
      'height': 36
    },
    'render': function(_root, _container){
      var leftBtn = new window.PIXI.Sprite(
        window.PIXI.loader.resources["leftBtn"].texture
      );
      
      leftBtn.x = 20;
      leftBtn.y = physical['height'] - window.physical['buttons']['prev']['dims']['height'] - 80;
      leftBtn.interactive = true;
      leftBtn.on("click", function(){
        var _s = scenes[scenes['current']]['prev'];
        if (_s === scenes['current']) {
          return;
        }
        if ( _s ) {
         scenes[_s].render(_container);
         scenes['current'] = _s;
        }
      });
      _root.addChild(leftBtn);
      return leftBtn;
    }
  },
};