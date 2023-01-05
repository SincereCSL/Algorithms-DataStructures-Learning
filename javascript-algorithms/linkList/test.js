let  test = function(){
	var box = document.getElementById("box");
	var blocks = box.childNodes;
	for(var i = 0; i <blocks.length-1; i++){
		var a = blocks[i];
		var b = blocks[i+1];
		if(a.style.backgroundColor != b.style.backgroundColor){
			a.click();
			b.click();
			break;
		}
	} 
}

//设置定时器
var inner = setInterval(test, 30);