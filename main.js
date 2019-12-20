var myclass_qus = "subject clearfix";
var myclass_option = "jqTransformRadio";
var myclass_checkbox = "jqTransformCheckbox";
var myclass_textarea = "option";
var subid = "next_button";
var list = document.getElementsByClassName(myclass_qus);
/*for (var i = 0; i < list.length; i++) {
    console.log(list[i].children[0]); //second console output
}*/
var ans_list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 3, 4, [1, 2, 6, 9], 1, 1, '认真负责', '非常优秀，希望继续开设！(*^_^*)'];
function clickme(target) {
    var e = document.createEvent("MouseEvents");
    e.initEvent("click", true, true);
    target.dispatchEvent(e);
}
function doit() {
    for (var i = 0; i < list.length; i++) {
        if (typeof (ans_list[i]) == "number") {
            var optionlist = list[i].getElementsByClassName(myclass_option);
            clickme(optionlist[ans_list[i] - 1]);
        };
        if (typeof (ans_list[i]) == "object") {
            var optionlist = list[i].getElementsByClassName(myclass_checkbox);
            ans_list[i].forEach(element => {
                clickme(optionlist[element - 1]);
            });
        };
        if (typeof (ans_list[i]) == "string") {
            console.log(list[i]);
            //console.log(list[i].children[0 + i]);
            var textarea = list[i].getElementsByClassName(myclass_textarea)[0];
            console.log(textarea);
            textarea.value = ans_list[i];
        };
    };
    var sub = document.getElementById(subid);
    clickme(sub);
};
function doandsub() {
    doit();
    setTimeout(() => {
        var list = document.getElementsByClassName("ui-dialog-button");
        clickme(list[0].children[1])
    }, 2000);
    setTimeout(() => {
        var list = document.getElementsByClassName("mynexttask");
        if(list[0]){
            clickme(list[0]);
        }else{
            alert("完事了o(*￣▽￣*)ブ");
        };
    }, 5000);
};
doandsub();
