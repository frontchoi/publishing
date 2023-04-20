<?php
	function httpGet($url){
	    $ch = curl_init();  
	    curl_setopt($ch,CURLOPT_URL,$url);
	    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
	//  curl_setopt($ch,CURLOPT_HEADER, false); 
	    $output=curl_exec($ch);
	    if($output === false)
	    {
	        echo "Error Number:".curl_errno($ch)."<br/>";
	        echo "Error String:".curl_error($ch);
	    }
	    curl_close($ch);
	    return $output;
	}

	$email = $_POST["email"];

	//$connect = new mysqli('localhost','root','dE0hgowacbga','fantasyuserdb');
	//mysqli_query($connect,'SET NAMES utf8');

	//if (!mysqli_connect_errno()) {
		//$ret = httpGet("http://www.bizmailer.co.kr/bizsmart/action/auto.do?biz_id=maktbdev&auth_key=1455265125093&m_email=".$email);
			
		$ret = httpGet("http://www.bizmailer.co.kr/bizsmart/action/auto.do?biz_id=maktbdev&auth_key=1483939435966&m_memo1=".$email."&m_email=".$email);
			
		if($ret == 'OK'){	
			$ret = 1;	
		}
		else{$ret = 0;}

//		$sqlQuery = "update fantasyuser set registCompleteFlag ='".$ret."' where userEmail='".$email."'";
//		$connect->query($sqlQuery);
//		$connect->close();
//		echo "성공";
	//}else{
	//	echo "실패";
	//}
?>