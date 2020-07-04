scenes['credits'] = {
  'maps': {
    'text': {
      'c': undefined
    }
  },
  'text': function() {
    var tx = ["Créditos", "Desarrollado por mentes creativas Continental :D", 
      "Participantes", 
      "Eduardo Cabello",
      "Carlos",
      "Christian",
      "Darlyne Leon",
      "Edwin",
      "Elmer Lorenzo",
      "MAYLEM ",
      "Steven ",
      "Giannina ",
      "Tengan una buena noche.", "No se olviden dejar sus comentarios."];
    var h = physical.height / 2;
    for(var i = 0; tx.length > i; i++) {
      let text = new PIXI.Text(tx[i],{fontFamily : 'Piedra', fontSize: 32, fill : 0xFFFFFF, align : 'center'});
      text.x = physical.width / 2 - 150;
      text.y = h;
      scenes['credits']['maps']['text']['c'].addChild(text);      
      h += 100;
    }
    
    scenes['credits'].container.addChild(scenes['credits']['maps']['text']['c']);

  },
  'render': function(_container){
    scenes['credits'].container = _container;
    
    scenes['credits']['maps']['text']['c'] = new PIXI.Container();
    
     var graphics = new PIXI.Graphics();
      graphics.beginFill(0x000000);
      graphics.lineStyle(0, 0xFF0000);
      graphics.drawRect(0, 0, physical.width, physical.height);    

      _container.addChild(graphics);

      if ( window.physical['actors']['dino'] ) {
        window.physical['actors']['dino']['waiting']['e'].visible = true;
        window.physical['actors']['dino']['waiting']['e'].x = physical['scene'].leftDown.x;
        window.physical['actors']['dino']['waiting']['e'].y = physical['scene'].leftDown.y;
        window.physical['actors']['dino']['waiting']['e'].y -= window.physical['actors']['dino']['waiting']['e'].height;
        window.physical['actors']['dino']['waiting']['e'].y -= 200;
        window.physical['actors']['dino']['waiting']['e'].scale.set(0.8, 0.8);
        
        window.physical['actors']['dino']['waiting']['e'].play()

        _container.addChild(window.physical['actors']['dino']['waiting']['e']);

        
        window.physical['actors']['dino']['walking']['e'].x = physical['scene'].leftDown.x;
        window.physical['actors']['dino']['walking']['e'].y -= window.physical['actors']['dino']['walking']['e'].height;
        window.physical['actors']['dino']['walking']['e'].y -= 200;
        // window.physical['actors']['dino']['walking']['e'].y = physical['scene'].leftDown.y;
        window.physical['actors']['dino']['walking']['e'].visible = false;
        window.physical['actors']['dino']['walking']['e'].scale.set(0.8, 0.8);;
        
        window.physical['actors']['dino']['walking']['e'].play()
        
        _container.addChild(window.physical['actors']['dino']['walking']['e']);
        
      }    
    scenes['credits'].text();
  },
  'loop': function() {
    scenes['credits']['maps']['text']['c'].y -= 1;
    if ( scenes['credits']['maps']['text']['c'].y <= (physical.height * -1) ) {
      window.physical['actors']['dino']['waiting']['e'].visible = false;
      window.physical['actors']['dino']['walking']['e'].visible = true;
      window.physical['actors']['dino']['walking']['e'].x += 3;
    }
    // console.log(">", scenes['credits']['maps']['text']['c'].y);
  }
};
scenes['one']['credits'] = function(){
  let text = new PIXI.Text('Creditos.',{fontFamily : 'Piedra', fontSize: 32, fill : 0xFFFFFF, align : 'center'});
  text.x = physical.width - 200;
  text.y = 20;
  text.interactive = true;
  scenes['one'].container.addChild(text);
  text.on("click", function(ev) { 
    scenes['current'] = 'credits';
    scenes['credits']['render'](scenes['one'].container);
  });
};