let lampu = [
    {name : "btn1", stat: false},{name : "btn2", stat: false},{name : "btn3", stat: false},
    {name : "btn4", stat: false},{name : "btn5", stat: false},{name : "btn6", stat: false},
    {name : "btn7", stat: false},{name : "btn8", stat: false},{name : "btn9", stat: false},
    {name : "btn10", stat: false},{name : "btn11", stat: false},{name : "btn12", stat: false}
    ,{name : "btn13", stat: false},{name : "btn14", stat: false},{name : "btn15", stat: false},
    {name : "btn16", stat: false},{name : "btn17", stat: false},{name : "btn18", stat: false},
    {name : "btn19", stat: false},{name : "btn20", stat: false}
]

function changeImg(name,obj){
    let img1 = document.getElementById(name);
    lampu.forEach(element => {
        if(obj.id == element.name){
            element.stat = !element.stat;
            if(element.stat){
                img1.src = "img/on.gif";
            }else{
                img1.src = "img/off.gif";
            }
        }
    });

}

function changeImgs(name1,name2,name3,name4,obj){
    

    let img1 = document.getElementById(name1);
    let img2 = document.getElementById(name2);
    let img3 = document.getElementById(name3);
    let img4 = document.getElementById(name4);

    lampu.forEach(element => {
        if(obj.id == element.name){
            element.stat = !element.stat;
            if(element.stat){
                img1.src = "img/on.gif";
                img2.src = "img/on.gif";
                img3.src = "img/on.gif";
                img4.src = "img/on.gif";
            }else{
                img1.src = "img/off.gif";
                img2.src = "img/off.gif";
                img3.src = "img/off.gif";
                img4.src = "img/off.gif";
            }
        }
    });

}

