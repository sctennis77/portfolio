	var num=0;
	function draw_tree(context,x,y,branch_width,angle,color,s_thresh,b_thresh) {
		if (branch_width < 1) {
			//draw leaf
			return;

		}
		branch_probability = 0;
		while (branch_probability <b_thresh) {
			context.strokeStyle = color;
			context.lineWidth = branch_width;
			context.beginPath();
			context.moveTo(x,y);
			new_x = x + (Math.sin(angle)) *  (5 + (branch_width/2));
			new_y = y + (Math.cos(angle)) * (5 + (branch_width/2)); 
			context.lineTo(new_x,new_y);
			context.stroke()
			// update vars
			x = new_x;
			y = new_y;
			angle+= (0.5 - Math.random()) *.2;
			branch_width -= branch_width *.03;
			branch_probability = Math.random();
		}
		numbranch_prob = Math.random();
		if (numbranch_prob <s_thresh) {
			make_branch(context,x,y,branch_width,angle,color,s_thresh,b_thresh);
			make_branch(context,x,y,branch_width,angle,color,s_thresh,b_thresh);
		}
		else {
			make_branch(context,x,y,branch_width,angle,color,s_thresh,b_thresh);
			make_branch(context,x,y,branch_width,angle,color,s_thresh,b_thresh);
			make_branch(context,x,y,branch_width,angle,color,s_thresh,b_thresh);
		}
	}

		function make_branch(context,x,y,branch_width,angle,color,s_thresh,b_thresh) {
			num+=1;
			setTimeout(drawNewBranch, num*.2);
			function drawNewBranch()
			{
				new_width = ((Math.random() * 0.3) + 0.6) * branch_width;
				if(Math.random() < 0.5) {
					new_angle = angle + (Math.PI/8) + ((0.5 - Math.random()) * (Math.PI/8));
				} else {
					new_angle = angle - (Math.PI/8) + ((0.5 - Math.random()) * (Math.PI/8));
			}
			draw_tree(context,x,y,new_width, new_angle,color,s_thresh,b_thresh);
		}



		}
