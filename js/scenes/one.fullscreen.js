scenes['one']['fullscreen'] = function(_container) {
  scenes['one']['maps']['screen'] = new PIXI.Sprite(PIXI.utils.TextureCache["bg"]);

  _container.addChild(scenes['one']['maps']['screen']);  
};