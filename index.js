const http = require("https");

const options = {
	"method": "GET",
	"hostname": "api-nba-v1.p.rapidapi.com",
	"port": null,
	"path": "/players/statistics?game=10967",
	"headers": {
		"X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
		"X-RapidAPI-Key": "35c66523c3msh9785798aadedfeap1c2b3cjsneeb3d3b19965",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();