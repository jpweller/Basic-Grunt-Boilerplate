require.config({
	baseUrl: "assets/js",
	paths: {
		// modernizr : "libs/modernizr.custom.30904",
		// jquery: [
		// 			"//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
		// 			"libs/jquery-1.9.1.min"
		// ],
		jquery: "libs/jquery-1.9.1.min",
		// underscore: "libs/underscore.min",
		// respond: "libs/respond.min",
		functions: "page/functions",
		// fullScreenCanvas: "page/fullScreenCanvas",
	},
	waitSeconds: 15
});



require( ["functions"] );