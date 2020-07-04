physical['x'] = physical['width'];
physical['y'] = physical['height'];


var tigoSprite;

$(document).ready(function(){
	
  var type = "WebGL"
  if(!window.PIXI.utils.isWebGLSupported()){
    type = "canvas"
  }

  window.PIXI.utils.sayHello(type);

  window.PIXI.loader
    .add("js/sprites/dinosaur_walk.json", {
      crossOrigin: 'anonymous',
      loadType: window.PIXI.loaders.Resource.LOAD_TYPE.XHR,
    })
    .add("js/sprites/dinosaur_jump.json", {
      crossOrigin: 'anonymous',
      loadType: window.PIXI.loaders.Resource.LOAD_TYPE.XHR,
    })
    .add("js/sprites/dinosaur_wait.json", {
      crossOrigin: 'anonymous',
      loadType: window.PIXI.loaders.Resource.LOAD_TYPE.XHR,
    })
    .add("js/sprites/tileset.json", {
      crossOrigin: 'anonymous',
      loadType: window.PIXI.loaders.Resource.LOAD_TYPE.XHR,
    })
    .add("js/sprites/lava.json", {
      crossOrigin: 'anonymous',
      loadType: window.PIXI.loaders.Resource.LOAD_TYPE.XHR,
    })
    .add("js/sprites/objects.json", {
      crossOrigin: 'anonymous',
      loadType: window.PIXI.loaders.Resource.LOAD_TYPE.XHR,
    })  
    .add("rightBtn", "https://cdn.glitch.com/2db17372-1310-4acd-9f7d-410555dd9510%2FbtnRight.png?v=1587605750922")
    .add("leftBtn", "https://cdn.glitch.com/2db17372-1310-4acd-9f7d-410555dd9510%2FbtnLeft.png?v=1587605750969")
    .add("bg", "https://cdn.glitch.com/733f2d41-6802-4698-b12f-76e123adfd7f%2FBG.png?v=1592901042168")
    .on("progress", loadProgressHandler)
    .load(function() {
    
      window.physical.keyboard.render();
    
      for(var o in physical['actors']) {
        physical['actors'][o]['render']();
      }
      
    
          
      var sceneContainer = new window.PIXI.Container();
      
      scenes[scenes['start']]['render'](sceneContainer);
      
      app.stage.addChild(sceneContainer);
      if ( window.physical['buttons'] ) {
        window.physical['buttons']['prev'].render(app.stage, sceneContainer);
        window.physical['buttons']['next'].render(app.stage, sceneContainer);
      }
      app.ticker.add(delta => gameLoop(delta));
      
    });

  
  function loadProgressHandler() {
    // console.log("loading"); 
  }
  

  function gameLoop(delta){
     scenes[scenes['current']]['loop']();
  }
  
  //Create a Pixi Application
  var app = new window.PIXI.Application({
    width: physical["width"],         // default: 800
    height: physical["height"],        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
  });

  
  var container = new window.PIXI.Container();
  app.stage.addChild(container);

  app.renderer.backgroundColor = physical["sky"];

  document.body.appendChild(app.view);
  
});