export function theHeight(){
	function height(){
		var inner = document.getElementById('inner')
			if (inner != null){
		      var docHeight = inner.clientHeight || inner.offsetHeight
		      //document.getElementById("inner").style.height = docHeight + "px";
		      document.getElementById("main").style.height = docHeight + "px";   
		}
	};height()
	//lets make sure it set the height
	setTimeout(function() { height(); }, 2000)
}