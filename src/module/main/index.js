/**
 * Created by apple on 16/10/28.
 */
console.log("main /////js");


$(function () {

    clientSideInclude('header', '../../common/html/header.html');
    clientSideInclude('footer', '../../common/html/footer.html');

    //赋值 for interpolation
    var dataInter = {"name":"Jake","age":32};
    var interText = doT.template($("#interpolationtmpl").text());
    $("#interpolation").html(interText(dataInter));

    function changeVal() {
        console.log(dataInter)
        if(dataInter.name == "Jake"){
            dataInter = {"name":"Jason","age":23}
        }else{
            dataInter = {"name":"Jake","age":32}
        }
        $("#interpolation").html(interText(dataInter));

    }


    $("#changeVal").on("click",function () {
        changeVal();
    })


    //循环 for evaluation

    var dataEval = {"name":"Jake","age":31,"interests":["basketball","hockey","photography"],"contact":{"email":"jake@xyz.com","phone":"999999999"}};
    var evalText = doT.template($("#evaluationtmpl").text());
    $("#evaluation").html(evalText(dataEval));

    function changeInput(obj){
        var val = obj.val();

        dataEval.age = val;
        $("#evaluation").html(evalText(dataEval));
    }

    $("#input").on("keyup",function (event) {

        changeInput($(this));
    })





    //数组 for array iteration
    var dataArr = {"array":["banana","apple","orange"]};
    var arrText = doT.template($("#arraystmpl").text());
    $("#arrays").html(arrText(dataArr));



    $("#addArr").on("click",function (event) {



        dataArr.array.push("haochi");
        $("#arrays").html(arrText(dataArr));
    })





    //for conditionals 条件
    var dataEncode = {name:"jason",age:23,uri:"http://bebedo.com/?keywords=Yoga","html":"<div style='background: #f00; height: 30px; line-height: 30px;'>html元素</div>"};
    var EncodeText = doT.template($("#encodetmpl").text());
    $("#condition").html(EncodeText(dataEncode));


    //for interpolation with encoding

    var dataEncode = {"uri":"http://bebedo.com/?keywords=Yoga","html":"<div style='background: #f00; height: 30px; line-height: 30px;'>html元素</div>"};
    var EncodeText = doT.template($("#encodetmpl2").text());
    $("#encode").html(EncodeText(dataEncode));


    ///for compile-time evaluation/includes and partials

    var dataPart = {"name":"Jake","age":31,"html":"<div style='background: #f00; height: 30px; line-height: 30px;'>html元素</div>"};
    var defPart = {"joke":"<div>{{=it.name}} who?</div>"};
    var partText = doT.template($("#parttmpl").text(), undefined, defPart);
    $("#part").html(partText(dataPart));





    //for compile-time defines

    var dataPart = {"name":"Jake","age":31,"html":"<div style='background: #f00; height: 30px; line-height: 30px;'>html元素</div>"};
    var defPart = {"joke":"<div>{{=it.name}} who?</div>"};
    var partText = doT.template($("#parttmpl2").text(), undefined, defPart);
    $("#part2").html(partText(dataPart));






})