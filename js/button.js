var count = 0;
document.getElementById("myButton").onclick = function () {
	count++;
	if (count % 2 == 0) { 
        document.getElementById("demo").innerHTML = "";
	} else {
        var img = document.createElement("img");
        img.src = "https://watcher.guru/news/wp-content/uploads/2022/04/HACK.jpg";
        document.getElementById("demo").appendChild(img);
	}
}