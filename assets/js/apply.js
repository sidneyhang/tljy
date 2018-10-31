var host = "http://47.100.212.203";
// var host = "http://localhost:8080";

$(function () {
    $("#btnSubmit").click(function () {
        var userName = $("#myForm input[name='userName']").val().trim();
        var age = $("#myForm input[name='age']").val().trim();
        var height = $("#myForm input[name='height']").val().trim();
        var weight = $("#myForm input[name='weight']").val().trim();
        var series = $("#myForm select[name='series']").val();
        var phoneNum = $("#myForm input[name='phoneNum']").val().trim();

        if (userName === null || userName === "") {
            alert("请输入学员姓名");
            return false;
        }
        if (age === null || age === "") {
            alert("请输入年龄");
            return false;
        }
        if (height === null || height === "") {
            alert("请输入身高");
            return false;
        }
        if (weight === null || weight === "") {
            alert("请输入体重");
            return false;
        }
        if (series === null || series === "请选择拍摄套系") {
            alert("请选择拍摄套系");
            return false;
        }
        if (phoneNum === null || phoneNum === "") {
            alert("请输入联系方式");
            return false;
        }

        var postData = {
            userName: userName,
            age: age,
            height: height,
            weight: weight,
            series: series,
            phoneNum: phoneNum
        };

        $.ajax({
            url: host + "/tl/api/v1/apply-info",
            type: "POST",
            data: postData,
            dataType: "json"
        }).done(function (response) {
            if (response.code === 200) {
                alert("提交成功，请等待工作人员给您回复!");
            }
        }).fail(function (XMLHttpResponse, textStatus, errorThrown) {
            console.log("1 异步调用返回失败,XMLHttpResponse.readyState:" + XMLHttpResponse.readyState);
            console.log("2 异步调用返回失败,XMLHttpResponse.status:" + XMLHttpResponse.status);
            console.log("3 异步调用返回失败,textStatus:" + textStatus);
            console.log("4 异步调用返回失败,errorThrown:" + errorThrown);

            // alert("服务器错误");
        })
    });
})