(function(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	ctx.beginPath();
		ctx.strokeStyle = "rgb(180, 150, 25)";
		ctx.lineWidth = 2;
			ctx.arc(SMILE_CENTER_X, SMILE_CENTER_Y, SMILE_RADIUS, 0, 2 * Math.PI);
		ctx.fillStyle = "rgb(200, 180, 25)";
		ctx.fill();
	ctx.stroke();
	ctx.closePath();

	/*
	//Eyes >>
	*/
		ctx.lineWidth = 15;
		ctx.strokeStyle = "black";
		ctx.fillStyle = "red";
	//left eye
	ctx.beginPath();
			ctx.moveTo(SMILE_CENTER_X - 130, SMILE_CENTER_Y - 80);
			ctx.lineTo(SMILE_CENTER_X - 35, SMILE_CENTER_Y - 70);

			ctx.moveTo(SMILE_CENTER_X - 100, SMILE_CENTER_Y - 80);
			ctx.bezierCurveTo(SMILE_CENTER_X - 110, SMILE_CENTER_Y - 50, 
				SMILE_CENTER_X - 55, SMILE_CENTER_Y - 40, 
				SMILE_CENTER_X - 55, SMILE_CENTER_Y - 70);
			ctx.fill();
	ctx.stroke();
	ctx.closePath();

	//right eye
	ctx.beginPath();
			ctx.moveTo(SMILE_CENTER_X + 130, SMILE_CENTER_Y - 80);
			ctx.lineTo(SMILE_CENTER_X + 35, SMILE_CENTER_Y - 70);

			ctx.moveTo(SMILE_CENTER_X + 100, SMILE_CENTER_Y - 80);
			ctx.bezierCurveTo(SMILE_CENTER_X + 110, SMILE_CENTER_Y - 50, 
				SMILE_CENTER_X + 55, SMILE_CENTER_Y - 40, 
				SMILE_CENTER_X + 55, SMILE_CENTER_Y - 70);
			ctx.fill();
	ctx.stroke();
	ctx.closePath();
	/*
	//Eyes <<
	*/


	//mouth
	ctx.beginPath();
			ctx.moveTo(SMILE_CENTER_X - 110, SMILE_CENTER_Y + 80);
			ctx.bezierCurveTo(SMILE_CENTER_X - 80, SMILE_CENTER_Y + 115, 
				SMILE_CENTER_X + 80, SMILE_CENTER_Y + 115, 
				SMILE_CENTER_X + 110, SMILE_CENTER_Y + 80);
	ctx.stroke();
	ctx.closePath();



})();

