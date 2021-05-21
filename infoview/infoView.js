function gotoSelect() {

	var sel = document.getElementById("select_list");
	var goto = sel.options[sel.selectedIndex].value;

	if(goto == 1){
		window.open("../seoul_seocho/infoView_seocho.html");
	}
	else if(goto == 2){
		window.open("../seoul_songpa/infoView_songpa.html");
	}
	else if(goto == 3){
		window.open("../gyeonggi_seongnam/infoView_seongnam.html");
	}
	else if(goto == 4){
		window.open("../gyeonggi_hanam/infoView_hanam.html");
	}
	else if(goto == 5){
		window.open("../gyeonggi_pyeongtaek/infoView_pyeongtaek.html");
	}
	else if(goto == 6){
		window.open("../gyeonggi_yongin/infoView_yongin.html");
	}
	else if(goto == 7){
		window.open("../chungnam_seosan/infoView_seosan.html");
	}
	else if(goto == 8){
		window.open("../chungbuk_chungju/infoView_chungju.html");
	}
	else if(goto == 9){
		window.open("../jeolnam_gangjin/infoView_gangjin.html");
	}
	else if(goto == 10){
		window.open("../jeolbuk_gunsan/infoView_gunsan.html");
	}
	else if(goto == 11){
		window.open("../daegu_dalseo/infoView_daegu.html");
	}
	else if(goto == 12){
		window.open("../gangwon/infoView_gangwon.html");
	}
}