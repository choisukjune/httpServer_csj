global.ROUTER.api.webhook.channelio.recieve_message = function( req, res ){

	var	body = '';
	req.on('data', function	(data) {
		body +=	data.toString();
	   // global.CSJLog.timeStamp("Partial body: " + body);
	})

	req.on('end', function () {

		//var	_q = global.REQUIRES.querystring.parse(	decodeURI( body ) );
		var	_q = global.REQUIRES.querystring.parse(	decodeURI( body ) );

		console.log( global.REQUIRES.querystring.escape( decodeURI( body ) ))
		global.CSJLog.timeStamp( JSON.stringify( _q ) )
		console.log( body )
		console.log( _q )
		var o = {
			host: ""//o.host
			, port: ""//o.port
			, path: ""//o.path
		}

		/*
		var options = {
			hostname: o.host
			, port: o.port
			, path: o.path
			, method: "POST"
			//, headers: {
			//   'Content-Type': 'application/x-www-form-urlencoded',
			//   //'Content-Length': Buffer.byteLength(postData)
			// }
			// , data : {
			//   a : "a",
			//   b : "b"
			// }
		};*/
		global.api.Request.request__POST

	})
};