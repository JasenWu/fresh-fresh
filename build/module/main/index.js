console.log("main /////js"),$(function(){function t(){console.log(a),a="Jake"==a.name?{name:"Jason",age:23}:{name:"Jake",age:32},$("#interpolation").html(o(a))}function e(t){var e=t.val();l.age=e,$("#evaluation").html(n(l))}clientSideInclude("header","../../common/html/header.html"),clientSideInclude("footer","../../common/html/footer.html");var a={name:"Jake",age:32},o=doT.template($("#interpolationtmpl").text());$("#interpolation").html(o(a)),$("#changeVal").on("click",function(){t()});var l={name:"Jake",age:31,interests:["basketball","hockey","photography"],contact:{email:"jake@xyz.com",phone:"999999999"}},n=doT.template($("#evaluationtmpl").text());$("#evaluation").html(n(l)),$("#input").on("keyup",function(t){e($(this))});var i={array:["banana","apple","orange"]},m=doT.template($("#arraystmpl").text());$("#arrays").html(m(i)),$("#addArr").on("click",function(t){i.array.push("haochi"),$("#arrays").html(m(i))});var h={name:"jason",age:23,uri:"http://bebedo.com/?keywords=Yoga",html:"<div style='background: #f00; height: 30px; line-height: 30px;'>html元素</div>"},r=doT.template($("#encodetmpl").text());$("#condition").html(r(h));var h={uri:"http://bebedo.com/?keywords=Yoga",html:"<div style='background: #f00; height: 30px; line-height: 30px;'>html元素</div>"},r=doT.template($("#encodetmpl2").text());$("#encode").html(r(h));var d={name:"Jake",age:31,html:"<div style='background: #f00; height: 30px; line-height: 30px;'>html元素</div>"},p={joke:"<div>{{=it.name}} who?</div>"},c=doT.template($("#parttmpl").text(),void 0,p);$("#part").html(c(d));var d={name:"Jake",age:31,html:"<div style='background: #f00; height: 30px; line-height: 30px;'>html元素</div>"},p={joke:"<div>{{=it.name}} who?</div>"},c=doT.template($("#parttmpl2").text(),void 0,p);$("#part2").html(c(d))});