function id_check_popup(){ 
	window.open('/ex/html/popup/id_check_popup.html','id_check_popup', 'width=502, height=260,left=100,top=100,toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no'); 
} 
function id_check_eng_popup(){ 
	window.open('/ex/html/popup/id_check_eng_popup.html','id_check_eng_popup', 'width=502, height=260,left=100,top=100,toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no'); 
}
function addr_search_popup(){ 
	window.open('/ex/html/popup/addr_search_popup.html','addr_search_popup', 'width=604, height=556,left=100,top=100,toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no'); 
} 
function option_modify_popup(){ 
	window.open('/ex/html/popup/option_modify_popup.html','option_modify_popup', 'width=340, height=345,left=100,top=100,toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no'); 
}
function id_find_popup(){ 
	window.open('/ex/html/popup/id_find_popup.html','id_find_popup', 'width=519, height=409,left=100,top=100,toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no'); 
} 
function addr_search_popup(){ 
	window.open('/ex/html/popup/addr_search_popup.html','addr_search_popup', 'width=604, height=556,left=100,top=100,toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no'); 
} 
function coupon_popup(){ 
	window.open('/ex/html/popup/coupon_popup.html','coupon_popup', 'width=582, height=500,left=100,top=100,toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no'); 
} 
function addr_list_popup(){ 
	window.open('/ex/html/popup/addr_list_popup.html','addr_list_popup', 'width=774, height=460,left=100,top=100,toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=no, copyhistory=no'); 
}
function close_popup(){ 
	self.opener=self;
	window.close();
}
function domestic_alert(){
	alert('귀하의 요청에 문제가 있습니다\n비밀번호를 입력 해 주시기 바랍니다.\n암호가 일치하는지 확인하고 다시 시도하십시오.');
}
function foreigner_alert(){
	alert('There was a problem width your request\nMissing e-mail address. Please correct and try again.\nplease enter your password.\nplease check that your e-mail addresses match and try again.\nplease check that your passwords match and try again.');
}
smoothScroll.init();