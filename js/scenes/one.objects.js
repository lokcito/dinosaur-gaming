scenes['one']['addFloor'] = function(_c, _x) {
//     "Bone_01.png", "Bone_02.png", "Bone_03.png", "Bone_04.png", 
    var els = ["ArrowSign.png", 
               "Bush_01.png", "Bush_02.png", "DeadBush.png", "Sign.png", "Skeleton.png", "TombStone_01.png", 
              "TombStone_02.png", "Tree.png"];
    var nel = Math.floor(Math.random() * 9);
    var n1 = Math.floor(Math.random() * 10);
    var n2 = Math.floor(Math.random() * 10);
    var n3 = Math.floor(Math.random() * 10);
    var w = Math.floor(Math.random() * (160 - 120 + 1) + 160);
    scenes['one']['maps']['collision']["tiles"].push(new PIXI.Sprite(PIXI.utils.TextureCache["tile_01.png"]));
    
    n = scenes['one']['maps']['collision']["tiles"].length - 1;
    
    scenes['one']['maps']['collision']["tiles"][n].y = physical['scene'].leftDown.y + 60 - n1;
    scenes['one']['maps']['collision']["tiles"][n].x = _x + w;
    _c.addChild(scenes['one']['maps']['collision']["tiles"][n]);
    
    scenes['one']['maps']['collision']["tiles"].push(new PIXI.Sprite(PIXI.utils.TextureCache["tile_02.png"]));
    
    n = scenes['one']['maps']['collision']["tiles"].length - 1;
    
    scenes['one']['maps']['collision']["tiles"][n].y = physical['scene'].leftDown.y + 60 - n2;
    scenes['one']['maps']['collision']["tiles"][n].x = _x + w + 120;
    
    var e = new PIXI.Sprite(PIXI.utils.TextureCache[els[nel]]);
    e.y -= e.height - 2;
    scenes['one']['maps']['collision']["tiles"][n].addChild(e);
    
    _c.addChild(scenes['one']['maps']['collision']["tiles"][n]);
    
    scenes['one']['maps']['collision']["tiles"].push(new PIXI.Sprite(PIXI.utils.TextureCache["tile_07.png"]));
    
    n = scenes['one']['maps']['collision']["tiles"].length - 1;
    
    scenes['one']['maps']['collision']["tiles"][n].y = physical['scene'].leftDown.y + 60 - n3;
    scenes['one']['maps']['collision']["tiles"][n].x = _x + w + 120 + 120;
    _c.addChild(scenes['one']['maps']['collision']["tiles"][n]);
    
    // console.log("n", n + 2, " se va", scenes['one']['maps']['collision']["tiles"][n+2].x);
};