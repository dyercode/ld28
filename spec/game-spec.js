describe("Game", function() {
	it("fish", function() {
		expect(true).toBe(true)
	});

	it("width must be the width multiplied by the tile width", function() {
		Game.mapGrid.width = 5;
		Game.mapGrid.tile.width = 5;
		expect(Game.width()).toBe(25);
	});

	it("height must be the height multiplied by the tile height", function() {
		Game.mapGrid.height = 5;
		Game.mapGrid.tile.height = 5;
		expect(Game.height()).toBe(25);
	});
});