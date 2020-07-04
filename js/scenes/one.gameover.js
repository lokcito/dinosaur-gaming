scenes['one']['gameover'] = function(){
  let text = new PIXI.Text('Perdiste!',{fontFamily : 'Piedra', fontSize: 92, fill : 0xEB6123, align : 'center'});
  text.x = physical.width / 2 - 200;
  text.y = physical.height / 2 - 100;
  // text.interactive = true;
  scenes['one'].container.addChild(text);
  
  let text2 = new PIXI.Text('Clic para volver a jugar!',{fontFamily : 'Piedra', fontSize: 64, fill : 0xEB6123, align : 'center'});
  text2.x = physical.width / 2 - 200;
  text2.y = physical.height / 2;
  // text.interactive = true;
  scenes['one'].container.addChild(text2);  
  scenes['one'].container.interactive = true;
  scenes['one'].container.on("click", function(ev) { window.location.reload(); });
  
  window.physical.sounds.gameover.play();
  
};