/*jshint newcap: false */
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

Crafty.c('Button', {
	init: function() {
		this.requires('Actor, Mouse, spr_button');
		this.attr({w:Game.mapGrid.tile.width * 2});

		this.bind('Click', function() {
			Crafty.trigger('InjectMagic');
		});
	},
	reportSlots: function() {
		_.each(Crafty('Slot'), function(id) {
			console.log(Crafty(id));
		});
	}
});

Crafty.c('Slot', {
	init: function() {
		this.requires('Actor, Color')
		.color('rgb(0,12,64)');
		this.bind('PlacePiece', {

		});
	},
	attach: function(piece) {
		console.log(piece);
		console.log(this);
		this.piece = piece;
	}
});

Crafty.c('Piece', {
	init: function() {
		this.requires('Actor');
	}
});

var nearby = function(obj1, obj2) {
	return Crafty.math.distance(obj1._x, obj1._y, obj2._x, obj2._y) < 24;
};

Crafty.c('DraggablePiece', {
	init: function() {
		this.requires('Piece, Draggable')
		.disableDrag();
		this.bind('Click', function() {
			if (this.startPos) {
				this.stopDrag();
				this.snapToSlot(this);
				delete this.startPos;
			} else {
				this.startPos = {x:this._x,y:this._y};
				this.startDrag();
			}
		});
		//this.bind('MouseUp', function() {
			//this.stopDrag();
			//this.snapToSlot(this);
		//});
	},
	snapToSlot: function(piece) {
		var snapped = false;
		_.each(Crafty('Slot'), function(s) {
			var slot = Crafty(s);
			if (slot.intersect(piece) && nearby(slot, piece)) {
				snapped = true;
				slot.piece = piece;
				piece.x = slot.x;
				piece.y = slot.y;
			}
		});
		if (!snapped) {
			piece.attr(piece.startPos);
		}
	}
});

Crafty.c('Heater', {
	init: function() {
		this.requires('DraggablePiece, spr_heater');
	},
	applyEffects: function(packet) {
		return Pieces.heater(packet);
	}
});

Crafty.c('Freezer', {
	init: function() {
		this.requires('DraggablePiece, spr_freezer');
	},
	applyEffects: function(packet) {
		return Pieces.freezer(packet);
	}
});

Crafty.c('Cannon', {
	init: function() {
		this.requires('Piece, spr_cannon');
	}
});

Crafty.c('Receiver', {
	init: function() {
		this.requires('Piece, spr_receiver');
	}
});

Crafty.c('Description', {
	init: function() {
		this.requires('2D, Canvas, Text')
		.textColor('#00FF00')
		.textFont({size:'18px'});
	}
});