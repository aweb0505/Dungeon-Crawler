window.onload = function()
{
	var fullscreen;
	var config;
	var up;
	var down;
	var left;
	var right;
	var fire;

	try{
		fullscreen = parseInt(localStorage.getItem("fullscreen"));
	}catch(TypeError){

	}finally{
		if(!fullscreen){
			fullscreen = 0;
		}
	}

		if(fullscreen){
			config = {
				type: Phaser.AUTO,
				scale:{
					mode: Phaser.DOM.FIT,
					autoCenter: Phaser.DOM.CENTER_BOTH,
					width: 400,
					height: 300,
				},
				scene: [ Scene1, SceneM, Floor, SceneCharacterSelect],
				pixelArt: true,
				physics: {
					default: "arcade",
					arcade:{
						debug: false
					}
				}
			}
		}else{
			config = {
				width: 400,
				height: 300,
				scene: [ Scene1, SceneM, Floor, SceneCharacterSelect],
				pixelArt: true,
				physics: {
					default: "arcade",
					arcade:{
						debug: false
					}
				}
			}
		}


	var game = new Phaser.Game(config);
}
