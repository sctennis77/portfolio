var koch_snowflake= {
	context: undefined,
	canvas: undefined,
	x1: 0,
	y2: 0,
	direction: 0,
	pen_color: "black",
	fill_color:"blue",

	init: function(canvas,color,width,height){
		this.canvas = canvas;
		this.context = canvas.getContext('2d');
		console.log(this.context);
		this.x1 = width;
		this.y1 = height;
		this.fill_color="white";
		this.pen_color=color;

	},

	begin_path: function () {
		this.context.beginPath();
		this.context.moveTo(this.x1,this.y1);
	},

	finish: function() {
		this.context.fillStyle = this.fill_color;
		this.context.closePath();
		this.context.fill();
	},


	deg_to_rad: function (angle) {
		radians = (Math.PI/180 )* angle;
		return radians;
	},

	turn_right: function(angle) {  
  		this.direction -= angle;  
 	},  
  
    turn_left: function(angle) {  
  		this.direction += angle;  
 	},  



	straight: function (length){
		new_x = this.x1 + Math.cos(this.deg_to_rad(this.direction))*length;
		new_y = this.y1 + Math.sin(this.deg_to_rad(this.direction))*length;
		this.context.strokeStyle=this.pen_color;
		this.context.lineWidth=2;
		this.context.lineTo(new_x,new_y);
		this.context.stroke();
		this.x1 = new_x;
		this.y1 = new_y;

	},

	draw_koch: function(length, level){

		if (level == 0){
			this.straight(length);
		}
		else{
			console.log(level)
			this.draw_koch(length/3,level-1);
			this.turn_left(60);
			this.draw_koch(length/3,level-1);
			this.turn_right(120);
			this.draw_koch(length/3,level-1);
			this.turn_left(60);
			this.draw_koch(length/3,level-1);
		}
	},

	snow_flake:function(sides,length,levels){
		for(var i=0; i<sides; i++){
			this.draw_koch(length,levels);
			this.turn_right(360/sides);
		}
	}





}