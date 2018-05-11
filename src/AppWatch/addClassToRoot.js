export const addClassToRoot = () => {
	  let root = document.getElementById('root')
	  root.removeAttribute("class")
  	let location = window.location.toString()
  	let fragments = location.split("/watch/");
  	let myString = fragments[1];
  	let newClass = myString.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
  	//let root = document.getElementById('root')
  	root.classList.add(newClass);
  
}