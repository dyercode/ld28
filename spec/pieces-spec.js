describe("Pieces", function() {
	describe("Heater", function() {
		it("heater must make a packet hot", function() {
			var packet = {};
			var result = Pieces.heater(packet)
			expect(result.hot).toBe(true);
		});

		it("heater must make a cold packet not cold", function() {
			var packet = {cold:true};
			var result = Pieces.heater(packet);
			expect(result.cold).toBe(false);
		});

		it("heater must not make a cold packet hot", function() {
			var packet = {cold:true};
			var result = Pieces.heater(packet);
			expect(result.hot).toBeUndefined();
		});
	})

	describe("Freezer", function() {
		it("freezer must make a packet cold", function() {
			var packet = {};
			var result = Pieces.freezer(packet);
			expect(result.cold).toBe(true)
		});

		it("freezer must make a hot packet not hot", function() {
			var packet = {hot:true};
			var result = Pieces.freezer(packet);
			expect(result.hot).toBe(false);
		});

		it("freezer must not make a hot packet cold", function() {
			var packet = {hot:true};
			var result = Pieces.freezer(packet);
			expect(result.cold).toBeUndefined();
		});
	});

})