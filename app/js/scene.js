Crafty.scene('Game', function() {
		Game.placeFloor();
		var player = Game.placePlayer();
		Crafty.viewport.follow(player, -100, 0);
		//Crafty.viewport.centerOn(player, 5000);
		//Game.generateVillages();
		//this.player = Crafty.e('PlayerCharacter').at(5, 5);
		/*this.show_victory = this.bind('VillageVisited', function() {
			if (!Crafty('Village').length) {
				Crafty.scene('Victory');
			}
		});
	}, function() {
		this.unbind('VillageVisited', this.show_victory);
*/
});