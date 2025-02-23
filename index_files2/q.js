window.onload = initialize; 

/* Why no window.onload = function () {} ? Because NN3 doesn't support the function
	constructor and gives an error message. This site must be accessible to NN3 */

function initialize () {

	
/* Hide nifty stuff from old browsers */

	
	if (self.init) self.init();
}
