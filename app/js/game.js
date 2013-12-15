var Game = {
	mapGrid: {
		width: 16,
		height: 9,
		tile: {
			width: 64,
			height: 64
		}
	},
	width: function() {
		return Game.mapGrid.width * Game.mapGrid.tile.width;
	},
	height: function() {
		return Game.mapGrid.height * Game.mapGrid.tile.height;
	},
	placeFloor: function() {
		_.each(_.range(0,Game.mapGrid.width * 10), function(x) {
			Crafty.e('Ground').at(x, Game.mapGrid.height - 1);
			Crafty.e('Ground').at(x, 0);
		});
	},
	placePlayer: function(){
		return Crafty.e('Player').at(3, 4);
	},
	start: function() {
		Crafty.init(Game.width(), Game.height());
		Crafty.background('rgb(0,0,0)');
		Crafty.scene('Loading');
	},
    scenario:{}
};