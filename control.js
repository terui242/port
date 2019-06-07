(function(){

	var d        = new Date();
	var theYear  = d.getFullYear();
	var theMonth = d.getMonth();
	var theDay   = d.getDay();
	var cal = document.querySelector(".calender");
	cal.innerHTML = setCalender(theYear,theMonth,theDay);

	var pdate = document.querySelector("#date");

	pdate.setAttribute("data-y",theYear);
	pdate.setAttribute("data-m",theMonth+1);
	pdate.setAttribute("data-d",theDay);
	pdate.innerHTML = theYear+"年"+(theMonth+1)+"月";

	var prev = document.querySelector("#prev");
	var next = document.querySelector("#next");

	prev.onclick = function(){
		var y = pdate.getAttribute("data-y");
		var m = pdate.getAttribute("data-m");
		var d = pdate.getAttribute("data-d");

		m--;

		if(m<1){
			m = 12;
			y--;
		}
	 	pdate.setAttribute("data-y",y);
		pdate.setAttribute("data-m",m);
		pdate.setAttribute("data-d",d);
		pdate.innerHTML = y+"年"+m+"月";
		cal.innerHTML = setCalender(y,m-1,d);
	}

	next.onclick = function(){
		var y = pdate.getAttribute("data-y");
		var m = pdate.getAttribute("data-m");
		var d = pdate.getAttribute("data-d");

		m++;

		if(m>12){
			m = 1;
			y++;
		}
	 	pdate.setAttribute("data-y",y);
		pdate.setAttribute("data-m",m);
		pdate.setAttribute("data-d",d);
		pdate.innerHTML = y+"年"+m+"月";
		cal.innerHTML = setCalender(y,m-1,d);

	}

})();