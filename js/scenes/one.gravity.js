scenes['one']['gravity'] = function() {
    if ( window.physical['actors']['dino']['current'] === "jumping" ) {
      return;
    }
    let spriteArray = scenes['one']['maps']['collision']['c'].children;
    var merge = false;
    for(var i = 0; spriteArray.length > i; i++) {

      if (window.physical.collision(spriteArray[i], 
        window.physical['actors']['dino'][window.physical['actors']['dino']['current']]['e'])) {
        window.physical['actors']['dino'][window.physical['actors']['dino']['current']]['e'].y = spriteArray[i].y - (spriteArray[i].height - 10);
        window.physical['actors']['dino'].pushY(window.physical['actors']['dino']['current']);
        merge = true;
      }
    }
    
    if ( !merge ) {
      
      window.physical['actors']['dino'][window.physical['actors']['dino']['current']]['e'].y += 2;
      window.physical['actors']['dino'].pushY(window.physical['actors']['dino']['current']);
      
      if ( (physical.y - 120) <=  window.physical['actors']['dino'][window.physical['actors']['dino']['current']]['e'].y) {
        //kill
        if ( scenes['one']['env']['dead'] === undefined ) {
          scenes['one']['env']['dead'] = window.physical['actors']['bone']['dead']['e'];
          scenes['one']['env']['dead'].x = window.physical['actors']['dino'][window.physical['actors']['dino']['current']]['e'].x + 40;
          scenes['one']['env']['dead'].y = window.physical['actors']['dino'][window.physical['actors']['dino']['current']]['e'].y -20;
          scenes['one']['env']['dead'].play();
          window.physical['actors']['dino'].dead();
          scenes['one'].gameover();
          scenes['one']['container'].addChild(scenes['one']['env']['dead']);
          
        }
        if ( !scenes['one']['env']['gameover'] ) {
          if ( scenes['one']['env']['dead'].y > (physical['scene'].leftDown.y - 60) )
            scenes['one']['env']['dead'].y -= 3;
          else
            scenes['one']['env']['gameover'] = true;
        } else {
          scenes['one']['env']['dead'].y += 2.5;
        }
      }
    }
  };