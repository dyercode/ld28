describe("Pieces", function() {
    var packet;
    beforeEach(function() {
        packet = {};
    });
	describe("A Heater", function() {
		it("heater must make a packet hot", function() {
			var result = Pieces.heater(packet)
			expect(result.hot).toBeTruthy();
		});

        describe("Given a cold packet", function() {
            beforeEach(function() {
                packet.cold = true;
            });

            it("must make it hot", function() {
                var result = Pieces.heater(packet);
                expect(result.hot).toBeFalsy();
            });

    		it("must not make it cold", function() {
    			var result = Pieces.heater(packet);
    			expect(result.cold).toBeFalsy();
    		});
        });

	describe("Given a speedy packet", function() {
        beforeEach(function() {
            packet.speedy = true;
        });

        describe("which is cold", function() {
            beforeEach(function() {
                packet.cold = true;
            });
    		it("must make it cool", function() {
    			var result = Pieces.heater(packet);
    			expect(result.cool).toBeTruthy();
    		});

    		it("must make it not cold", function() {
    			var result = Pieces.heater(packet);
    			expect(result.cold).toBeFalsy();
    		});

    		it("must not make it hot", function() {
    			var result = Pieces.heater(packet);
    			expect(result.hot).toBeFalsy();
    		});
        });

        describe("which is neither not nor cold", function() {
            it("must make it warm", function() {
                var result = Pieces.heater(packet);
                expect(result.warm).toBeTruthy();
            });

            it("must not make it hot", function() {
                var result = Pieces.heater(packet);
                expect(result.hot).toBeFalsy();
            });
        })
	});

    });

	describe("A Freezer", function() {
		it("must make a packet cold", function() {
			var result = Pieces.freezer(packet);
			expect(result.cold).toBe(true)
		});

        describe("Given a hot packet", function() {
            beforeEach(function() {
                packet.hot = true;
            });

    		it("must make it not hot", function() {
    			var result = Pieces.freezer(packet);
    			expect(result.hot).toBeFalsy;
    		});

    		it("must not make it cold", function() {
    			var result = Pieces.freezer(packet);
    			expect(result.cold).toBeFalsy();
    		});
        });


    	describe("Given a speedy Packet", function() {
            beforeEach(function() {
                packet.speedy = true;
            });
            describe("Neutral Temperature packet",function() {
        		it("must not be made cold", function() {
        			var result = Pieces.freezer(packet);
        			expect(result.cold).toBeUndefined();
        		});

                it("must be made cool", function() {
                    var result = Pieces.freezer(packet);
                    expect(result.cool).toBe(true);
                });
            })

            it("must make a warm packet not warm", function() {
                packet.warm = true;
                var result = Pieces.freezer(packet);
                expect(result.cool).toBeTruthy();
            });

    		it("freezer must make a speedy packet that is hot warm", function() {
                packet.hot = true;
    			var result = Pieces.freezer(packet);
    			expect(result.warm).toBeTruthy();
    		});
    	});
    });

	describe("Gearbox", function() {
		it("gearbox must make a packet speedy", function() {
			var result = Pieces.gearbox(packet);
			expect(result.speedy).toBeTruthy();
		});
	});

})