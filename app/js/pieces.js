var Pieces = {
   heater: function(o) {
      if (o.cold) {
         if (o.speedy) {
            o.cool=true;
         }
         o.cold = false;
      } else {
         if (o.speedy) {
            o.warm = true;
         } else {
            o.hot = true;
         }
      }
      return o;
   },
   freezer: function(o) {
      if (o.hot) {
         if (o.speedy){
            o.warm = true;
         }
         o.hot = false;
      } else {
         if (o.speedy) {
            o.cool = true;
         } else {
            o.cold = true;
         }
      }
      return o;
   },
   gearbox: function(o) {
      o.speedy = true;
      return o;
   }
};