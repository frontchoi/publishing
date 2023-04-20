$(document).ready(function() {
    $(".btn_submit").on('click', function() {
        var input_id, email_val;

        gAction('MAIN_TRY_SUBMIT');
        $(this).attr('disabled', true);

        input_id = "#" + $(this).attr('data-input-id');
        email_val = $(input_id).val();
        emailCheck(input_id, email_val);
    });

}); //ready end

function btnAble() {
    $('button').attr('disabled', false);
}

//DB 이메일 체크
function emailCheck(input_id, email_val) {
    var email = email_val;

    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email == "") {
        popupAlertMsg("正しく登録ができませんでした。もう一度お試しください。");
        $(input_id).focus();
        btnAble();
        return false;
    } else if (regex.test(email) === false) {
        popupAlertMsg("正しいメールアドレスを入力してください。");
        $(input_id).focus();
        btnAble();
        return false;
    } else {
        var post_data = "email=" + email;
        $.ajax({
            type: "POST",
            url: "regist.php",
            data: post_data,
            dataType: "json",
            success: function(data) {
                btnAble();
                if (data["errorCode"] == 0) {
                    emailSend(email);
                    popupAlertMsg(data["errorMessage"]);
                    gAction('MAIN_DB_ACCESS');
                    return false;
                } else {
                    popupAlertMsg(data["errorMessage"]);
                    gAction('MAIN_DB_FAIL');
                    return false;
                }

            },
            error: function(request, status, error) {
                btnAble();
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    }
}

//이메일 전송
function emailSend(email) {
    var post_data = "email=" + email;
    $.ajax({
        type: "POST",
        url: "emailsend.php",
        data: post_data,
        success: function(data) {
            console.log(data);
            gAction('MAIN_SEND_EMAIL');
        },
        error: function(request, status, error) {
            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        }
    });
}

function popupAlertMsg(msg) {
    /* $("#alertOK").removeClass('submit');
     $("#alertMsg").html(msg);
     $('#alertWrap').css({'display':'block'});
     $("#alertOK").on('click',function(){
       $('#alertWrap').css({'display':'none'});
     });*/
    alert(msg);
}


/////////////////////////////////////////////////
//구글 이벤트 추가 함수 
/////////////////////////////////////////////////

var gAction = function(eventAct) {
    //오브젝트 KEY 값 = eventAction 명
    // VALUE 값 = eventLabel 명
    var eventValue = {
        MAIN_GO_FACEBOOK: "메인 페이지 에서 페이스북 페이지로 이동",
        MAIN_GO_TWITER: "메인 페이지 에서 트위터 페이지로 이동",
        MAIN_PLAY_YOUTUBE: "메인 페이지 에서 동영상 재생",
        MAIN_GO_PLAY_STORE: "메인 페이지 에서 구글 앱스토어 접속",
        MAIN_GO_APP_STORE: "메인 페이지 에서 애플 앱스토어 접속",
        MAIN_TRY_SUBMIT: "사전 등록 신청 시도",
        MAIN_DB_ACCESS: "DB에 등록 성공",
        MAIN_DB_FAIL: "DB에 등록 실패",
        MAIN_SEND_EMAIL: "사전 등록 완료 후 비즈 메일러 이메일 전송"
    };
    if (eventValue[eventAct] != undefined) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'Button',
            eventAction: eventAct,
            eventLabel: eventValue[eventAct]
        });
    }
}