var physical = {
  sky: 0x1b292b,
  x: window.innerWidth,
  y: window.innerHeight,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: {
    'leftUp': {
      x: 0,
      y: 0      
    },
    'leftDown': {
      x: 0,
      y: 0      
    },
    'rightDown': {
      x: 0,
      y: 0      
    },
    'rightUp': {
      x: 0,
      y: 0      
    },
  },
  actors: {
    
  },
  'sounds': {
    'game': undefined
  },
  'keyboard': {
    'render': function(){},
    'left': {'press': undefined, 'release': undefined},
    'right': {'press': undefined, 'release': undefined},
    'up': {'press': undefined, 'release': undefined},
    'down': {'press': undefined, 'release': undefined},
  },
  'buttons': undefined,
  'collision': function (r1, r2){ 

  //Define the variables we'll need to calculate
  let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

  //hit will determine whether there's a collision
  hit = false;

  //Find the center points of each sprite
  r1.centerX = r1.getBounds().x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.scale.x < 0?(r2.x-100):r2.x + r2.width / 2;
  // r2.centerX = r2.x; + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;
  //Find the half-widths and half-heights of each sprite
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  //Calculate the distance vector between the sprites
    // console.log("Ce", r2.centerX);
  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  //Figure out the combined half-widths and half-heights
  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    //Check for a collision on the x axis
    // console.log("<<<>", Math.abs(vx), "|", combinedHalfWidths);
    if (Math.abs(vx) < combinedHalfWidths) {
      // console.log("><>", Math.abs(vx), "|",combinedHalfWidths);
      //A collision might be occurring. Check for a collision on the y axis
      if (Math.abs(vy) < combinedHalfHeights) {
        if ( vy < combinedHalfHeights / 2 ) {
          hit = false;  
        } else {
          hit = true;
        }
        // console.log(">", vy, "|", combinedHalfHeights);
        //There's definitely a collision happening
      } else {

        //There's no collision on the y axis
        hit = false;
      }
    } else {

      //There's no collision on the x axis
      hit = false;
    }

    //`hit` will be either `true` or `false`
    return hit;
  }
};

physical['scene'].leftDown.x = 100;
physical['scene'].leftDown.y = physical.y - 200;