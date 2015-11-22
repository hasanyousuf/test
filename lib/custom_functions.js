function customCapture(name)
{
	casper.capture(snapShotDir + name + imageIndex + "_"+".png",{
		top: 0,
		left : 0,
		width: casper.options.viewportSize.width,
		height: casper.options.viewportSize.height
	});
	imageIndex++;
}

casper.test.on("success",function(){
	customCapture("pass");
});
casper.test.on("fail",function(){
	customCapture("fail");
});