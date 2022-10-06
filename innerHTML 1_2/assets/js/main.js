let HelloWorld = document.getElementById("info");
HelloWorld.innerHTML += "<h1>Hello Word</h1>";
HelloWorld.innerHTML += ("<h2><br>How are you?!</h2>")

let container = document.getElementById("container");
container.innerHTML += ("<p>start of the element</p>")
// Das hier steht auf der Website ganz oben, weil dieser div-Container oben steht.
document.write("<br>end of the element")
// Das hier steht am Ende der Seite, denn document.write Eintragungen werden immer am Ende des Bodys angefügt. 