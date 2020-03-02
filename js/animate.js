(function(){
	var ctx = canvas.getContext('2d');

	canvas.style.backgroundColor = 'rgb(20,20,20)';

	ctx.strokeStyle = "rgba(250,250,250, 0.1)";
	ctx.lineWidth = 1;
	ctx.fillStyle = "rgba(200,200,200, 0.1)";

	var radius = 0;
	var opacity = 0.15;
	var iteration = 0;

	(function(){
		var interval = setInterval(function(){
			arc_render();
			
			if(radius < 500){
				radius+=5;
			}
			else{
				radius = 0;
				opacity = 0.15;
				iteration++;
					if(iteration >= 5){
						location.reload();
					}
				}
			ctx.fillStyle = `rgba(` + rand(100,250) + `,` + rand(100,250) + `,` + rand(100,250) + `, ${opacity})`;
			ctx.strokeStyle = `rgba(250,250,250, ${opacity}))`;
			opacity-=0.015;
		}, 50);

	function arc_render(){
			ctx.beginPath();
				ctx.arc(SMILE_CENTER_X - 80, SMILE_CENTER_Y - 65, radius, 0, 2 * Math.PI);
				ctx.fill();
			ctx.stroke();
			
			ctx.closePath();
				ctx.beginPath();
				ctx.arc(SMILE_CENTER_X + 80, SMILE_CENTER_Y - 65, radius, 0, 2 * Math.PI);
				ctx.fill();
			ctx.stroke();
			ctx.closePath();
		}

	})();

})();