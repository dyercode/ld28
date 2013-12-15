$text_css = { 'font-size': '24px', 'font-family': 'Arial', 'color': 'white', 'text-align': 'center' };


var createAllowedPiecesForScenario = function(pieceNames) {
	_.each(pieceNames, function(name, index) {
		Crafty.e(name).at(0,index);
	});
};

var scenario1 = function() {
	Crafty.e('Cannon').at(6,4);
	var slots = [
		Crafty.e('Slot').at(7,4),
		Crafty.e('Slot').at(8,4)
	];
	Crafty.e('Receiver').at(9,4);
	Crafty.e('Button').at(7,8);
	createAllowedPiecesForScenario(['Heater','Freezer']);
	var goal = {
		description: 'You must filter in such a way that the magic is neither hot nor cold.',
		test: function(result) {
			return (!result.hot && !result.cold);
		}
	};
	return {slots:slots, goal:goal};
};

var scenario2 = function() {
	Crafty.e('Cannon').at(6,4);
	var slots = [
		Crafty.e('Slot').at(7,4),
		Crafty.e('Slot').at(8,4),
		Crafty.e('Slot').at(9,4)
	];
	Crafty.e('Receiver').at(10,4);
	Crafty.e('Button').at(7,8);
	createAllowedPiecesForScenario(['Heater','Freezer', 'Gearbox']);
	var goal = {
		description: 'Warm magic is required.',
		test: function(result) {
			return (result.warm && !result.hot && !result.cold);
		}
	};
	return {slots:slots, goal:goal};
};

Crafty.scene('Game', function() {
	var scenario = scenario1();
	var slots = scenario.slots;
	var goal = scenario.goal;
	Crafty.background('rgb(0,0,0)');
	Crafty.e('Description').text(goal.description).attr({x:200});
	this.injectMagic = this.bind('InjectMagic', function() {
		if (_.any(slots, function(slot) {
			return !slot.piece;
		})) {
			Crafty.scene('Failure');
		} else {
			var result = _.foldl(slots, function(acc, val) {
				return val.piece.applyEffects(acc);
			}, {});
			if (goal.test(result)) {
				Crafty.scene('Victory');
			} else {
				console.log(result);
				console.log(goal);
				Crafty.scene('Failure');
			}
		}
	});
	}, function() {
		this.unbind('InjectMagic', this.injectMagic);
});

Crafty.scene('Failure', function() {
  Crafty.background('rgb(128,0,0)');
  Crafty.e('2D, DOM, Text')
    .attr({ x: 0, y: 0 })
    .text('You have failed!');
	this.restart_game = function() {Crafty.scene('Game');};
	this.bind('MouseDown', this.restart_game);
	this.bind('KeyDown', this.restart_game);
}, function() {
  this.unbind('MouseDown', this.restart_game);
  this.unbind('KeyDown', this.restart_game);
});

Crafty.scene('Victory', function() {
  Crafty.background('rgb(0,128,0)');
  Crafty.e('2D, DOM, Text')
    .attr({ x: 0, y: 0 })
    .text('Victory!');
 
	this.restart_game = function() {Crafty.scene('Game');};
	this.bind('MouseDown', this.restart_game);
	this.bind('KeyDown', this.restart_game);
}, function() {
  this.unbind('MouseDown', this.restart_game);
  this.unbind('KeyDown', this.restart_game);
});

Crafty.scene('Loading', function(){
  Crafty.e('2D, DOM, Text')
    .text('Loading...')
    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
    .css($text_css);
 
  Crafty.load(['img/piece-sheet.png', 'img/button.png'], function(){
 
    Crafty.sprite(64, 'img/piece-sheet.png', {
      spr_cannon:     [0, 0],
      spr_gearbox:    [1, 0],
      spr_inverter:   [2, 0],
      spr_receiver:   [3, 0],
      spr_freezer:    [0, 1],
      spr_heater:     [1, 1],
      spr_pipe:       [2, 1]
    });
 
    Crafty.sprite(64, 'img/button.png', {
		spr_button: [0,0,2]
    });
    
	Crafty.audio.add({
		knock: ['img/door_knock_3x.mp3',
			'img/door_knock_3x.ogg',
			'img/door_knock_3x.aac']
	});

    Crafty.scene('Game');
  });
});