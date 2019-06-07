//calender.js
function setCalender(y,m,d){
	//日付関数の確認
	var d        = new Date(y,m,d);
	var theYear  = d.getFullYear();
	var theMonth = d.getMonth()+1;
	var theDay   = d.getDate();
	var theweek  = d.getDay();
	var limit    = 0;//月の最大日数をセットするための変数

	//各月の最大日数  00 01 02 03 04 05 06 07 08 09 10 11 12
	var limitMonth = [29,31,28,31,30,31,30,31,31,30,31,30,31];

	

	//これらをまとめた閏年のif条件
	if( theYear % 400 == 0 || ( (theYear % 4) == 0 && (theYear % 100) != 0 ) ){
		//閏年
		limit = limitMonth[0];//29
	} else {
		limit = limitMonth[theMonth];//各月
	}


	//月の１日の曜日番号が知りたい
	var one_week = (new Date(theYear,theMonth-1,1)).getDay();

	console.log(one_week);//2019/1/1➡2



	var html = '<div class="youbi sun">日</div>';
	html += '<div class="youbi">月</div>';
	html +='<div class="youbi">火</div>';
	html += '<div class="youbi">水</div>';
	html += '<div class="youbi">木</div>';
	html += '<div class="youbi">金</div>';
	html += '<div class="youbi sat">土</div>';

	//$('.youbi').css('color', '#fff');
	//1日の曜日番号分だけから枠を入れる
	for(var i=0; i<one_week; i++){
		html += '<div class="none">&nbsp</div>';
	}
	//月の最大日数に変更
	for(var i=0; i<limit; i++){
		var weeks ="";
		var weeks2 = "";

		var youbinum = (new Date(theYear,theMonth-1,i+1)).getDay();
		if(youbinum == 0){
			weeks = ' class = "sun2"' ;
			weeks2 = ' sun2 ';
		}else if(youbinum == 6){
			weeks = ' class = "sat2"' ;
			weeks2 = ' sun2 ';
		}


		//31以降は、表示しない
		html += '<div'+weeks+'>'+(i+1)+'</div><div class="yotei'+weeks2+'">予定</div>';


	}//end for

	return html;

}//end func

