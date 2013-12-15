var Pieces = {
	heater: function(o) {
		if (o.cold) {
			o.cold = false;
		} else {
			o.hot = true;
		}
		return o;
	},
	freezer: function(o) {
		if (o.hot) {
			o.hot = false;
		} else {
			o.cold = true;
		}
		return o;
	}
};