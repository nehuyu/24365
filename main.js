//timestamp取得
var timestamps = document.querySelectorAll("._timestamp");
times = [];
timestamps.forEach(function(e){
  var time = new Date(e.getAttribute("data-time")* 1000);
	times.push(time);
});

// 書き込み先tableを作成
var stream = document.querySelector(".stream-items");
var table = document.createElement("li");
stream.insertBefore(table, stream.firstChild);

times.forEach(function(e){
		//時間取得		
})
