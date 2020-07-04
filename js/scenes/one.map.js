scenes['one']['addFloor'] = function(_c, _x) {
  var w = Math.floor(Math.random() * (160 - 120 + 1) + 160);
  scenes['one']['maps']['collision']["tiles"].push(new PIXI.Sprite(PIXI.utils.TextureCache["tile_01.png"]));

  n = scenes['one']['maps']['collision']["tiles"].length - 1;

  scenes['one']['maps']['collision']["tiles"][n].y = physical['scene'].leftDown.y + 60;
  scenes['one']['maps']['collision']["tiles"][n].x = _x + w;
  _c.addChild(scenes['one']['maps']['collision']["tiles"][n]);

  scenes['one']['maps']['collision']["tiles"].push(new PIXI.Sprite(PIXI.utils.TextureCache["tile_02.png"]));

  n = scenes['one']['maps']['collision']["tiles"].length - 1;

  scenes['one']['maps']['collision']["tiles"][n].y = physical['scene'].leftDown.y + 60;
  scenes['one']['maps']['collision']["tiles"][n].x = _x + w + 120;


  _c.addChild(scenes['one']['maps']['collision']["tiles"][n]);

  scenes['one']['maps']['collision']["tiles"].push(new PIXI.Sprite(PIXI.utils.TextureCache["tile_07.png"]));

  n = scenes['one']['maps']['collision']["tiles"].length - 1;

  scenes['one']['maps']['collision']["tiles"][n].y = physical['scene'].leftDown.y + 60;
  scenes['one']['maps']['collision']["tiles"][n].x = _x + w + 120 + 120;
  _c.addChild(scenes['one']['maps']['collision']["tiles"][n]);
};
scenes['one']['collisionMap'] = function(_container) {
  scenes['one']['maps']['collision']['c'] = new PIXI.Container();
  scenes['one'].addFloor(scenes['one']['maps']['collision']['c'], 0);

  _container.addChild(scenes['one']['maps']['collision']['c']);
};