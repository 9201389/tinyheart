var aneObj = function () {
	//start point, control point, endpoint(sin)
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = [];
	this.alpha = 0;

}

aneObj.prototype.num  = 50;
aneObj.prototype.init = function(){

	for (var i = 0; i < this.num; i++) {
		this.rootx[i] = i * 45 + Math.random() * 20;//[0,1)
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 450 + Math.random() * 50;
		this.amp[i] = Math.random() * 50 + 100;
	}
	//console.log("a");
}
aneObj.prototype.draw = function(){

	this.alpha += deltaTime * 0.001;
	var l = Math.sin(this.alpha);//[-1,+1]
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 45;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";	

	for (var i = 0; i < this.num; i++) {
		//beginPath;moveTo，lineTo,strokestyle,stroke,linewidth,lineCap,globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i], canHeight);
		this.headx[i] = this.rootx[i] + l * this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i], canHeight - 150, this.headx[i], this.heady[i]);
		//console.log("this.rootx[i]");
		ctx2.stroke();

	}
	ctx2.restore();
} 