class dustbin
{
	constructor(x,y)
	{

		var options={
			isStatic:true
		}

		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
	
		
		this.bottomwall=Bodies.rectangle(x,y, this.dustbinWidth, this.wallThickness,options);
		this.leftWall=Bodies.rectangle(x-this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,options)
		this.rightWall=Bodies.rectangle(x+this.dustbinWidth/2,y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,options)
	
		this.image=loadImage("dustbingreen.png");

		World.add(world, this.bottomwall)
		World.add(world, this.leftWall)
		World.add(world, this.rightWall);

	}
	display()
	{
			var posBottom=this.bottomwall.position;
		
	
			imageMode(CENTER)
			fill(255)
			noStroke();
		image(this.image,posBottom.x-50,posBottom.y-80,this.dustbinWidth-50,200)
		
	}

}