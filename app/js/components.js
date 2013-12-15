Crafty.c('Grid', {
	init: function() {
		this.attr({
			w: Game.mapGrid.tile.width,
			h: Game.mapGrid.tile.height
		});
	},
	at: function(x, y) {
		if (x === undefined && y === undefined) {
			return { x: this.x/Game.mapGrid.tile.width, y: this.y/Game.mapGrid.tile.height };
		} else {
			this.attr({ x: x * Game.mapGrid.tile.width, y: y * Game.mapGrid.tile.height });
			return this;
		}
	}
});

Crafty.c('Actor',{
	init: function() {
		this.requires('2D, Canvas, Grid');
	}
});

Crafty.c('Ground', {
	init: function() {
		this.requires('Actor, Solid, Color')
		.color('rgb(150,75,0)');
	}
});

Crafty.c('Player', {
	init: function() {
		this.requires('Actor, Gravity, Color')
		.gravity('Ground')
		.color('rgb(0,128,128)');

		this.attr({dX:1});

		this.bind('EnterFrame', this.moveForward);
	},
	moveForward: function() {
		this.x += this.dX;
	}
});
