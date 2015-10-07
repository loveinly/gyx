
$(function () {
    //var new_index = [];
    //var new_td = [];
    ////读取服务器中的表格各行各列数据的顺序
    //load();
    Drag("tableSort");

})

//初始化表格 读取数据库中的数据
function load() {
    var operation="load";
    $.ajax({
        type:"post",
        url: "savetable.ashx?action=load",
        data: {
            data:operation,
        },
        dataType: "json",
        success: function (msg) {
            buildtable(msg);
            Drag("tableSort");
        }
    })
}

//构建表格 恢复至用户上次操作的步骤
function buildtable(msg)
{
    for (var i = 1; i < msg.length + 1; i++)
    {
        $("#trfirst").append("<th class='draggth' id='" + i + "'>" + msg[i - 1].pos + "</th>");
    }
    for (var i = 1; i < 9; i++)
    {
        $("#tableSort").append("<tr id='tr" + i + "'></tr>");
    }

    for (var i = 1; i <6; i++)
    {
        $("#tr1").append("<td>" + msg[i - 1].thdata1 + "</td>");
        $("#tr2").append("<td>" + msg[i - 1].thdata2 + "</td>");
        $("#tr3").append("<td>" + msg[i - 1].thdata3 + "</td>");
        $("#tr4").append("<td>" + msg[i - 1].thdata4 + "</td>");
        $("#tr5").append("<td>" + msg[i - 1].thdata5 + "</td>");
        $("#tr6").append("<td>" + msg[i - 1].thdata6 + "</td>");
        $("#tr7").append("<td>" + msg[i - 1].thdata7 + "</td>");
        $("#tr8").append("<td>" + msg[i - 1].thdata8 + "</td>");
    }
}



//拖拽事件
function Drag(table)
{
    var ochek = document.getElementById("chenkbox");
    var otable = document.getElementById(table);
    var otody = otable.tBodies[0];
    var oth = otody.getElementsByTagName("th");
    var otd = otody.getElementsByTagName("td");
    var box = document.getElementById("box");
    var arrn = [];

    for(var i = 0;i<oth.length;i++)
    {
        //鼠标按下事件
        oth[i].onmousedown= function (e) {
            var e =e||window.event,
                target = e.target|| e.srcElement,
                thw = target.offsetWidth,
                maxl = ochek.offsetWidth-thw;
                rows = otable.rows,
                    ckl = ochek.offsetLeft,
                    disX = target.offsetLeft,
                    _this=this,
                    cdisX = e.clientX-ckl-disX;
            console.log(e.clientX);
            console.log(ckl);
            console.log(disX);
            console.log(cdisX);
            for(var i=0;i<rows.length;i++)
            {
                var op = document.createElement("p");
                op.innerHTML=rows[i].cells[this.cellIndex].innerHTML;
                box.appendChild(op);
            };
            for(var i = 0;i<oth.length;i++)
            {
                arrn.push(oth[i].offsetLeft);
            };
            box.style.display="block";
            box.style.width=thw+"px";
            box.style.left=disX+"px";
        //鼠标移动事件
            document.onmousemove=function(e){
                var e = e||window.event,
                    target = e.target|| e.srcElement,
                    thw = target.offsetWidth;
                    box.style.top=0;
                box.style.left= e.clientX-ckl-cdisX+"px";
                if(box.offsetLeft>maxl){
                    box.style.left=maxl+"px";
                }
                else if(box.offsetLeft<0)
                {
                    box.style.left=0;
                }
                document.onselectstart = function () {return false;};
                window.getSelection ? window.getSelection().removeAllRanges() : doc.selection.empty();
            }
            //鼠标松开事件
            document.onmouseup=function(e){
                var e =e||window.event,
                    opr = box.getElementsByTagName("p"),
                    oboxl = box.offsetLeft+cdisX;
                for(var i=0;i<arrn.length;i++)
                {
                    if(arrn[i]<oboxl){
                        var index = i;
                    }
                };
                for(var i = 0;i<rows.length;i++){
                    rows[i].cells[_this.cellIndex].innerHTML="";
                    rows[i].cells[_this.cellIndex].innerHTML=rows[i].cells[index].innerHTML;
                    rows[i].cells[index].innerHTML="";
                    rows[i].cells[index].innerHTML=opr[i].innerHTML;
                };
                box.innerHTML="";
                arrn.splice(0,arrn.length);
                box.style.display="none";
                document.onmousemove=null;
                document.onmouseup=null;
                document.onselectstart = function () { return false };
                //保存拖拽后的表的顺序
                //savetable();
                //updata();
            }
        }
    };
}

//保存拖拽以后的表格各行各列数据顺序
function savetable() {
    new_index = [];
    new_td = [];
    $.each($(".draggth"), function (e) {
        var indexs = this.id;
        var sorts = $("#" + indexs).text();
        new_index.push(sorts);
    });
    $.each($("#tr1").find("td"), function (e) {
        var tdids = $(this).text();
        new_td.push(tdids);
    });
    $.each($("#tr2").find("td"), function (e) {
        var tdids = $(this).text();
        new_td.push(tdids);
    });
    $.each($("#tr3").find("td"), function (e) {
        var tdids = $(this).text();
        new_td.push(tdids);
    });
    $.each($("#tr4").find("td"), function (e) {
        var tdids = $(this).text();
        new_td.push(tdids);
    });
    $.each($("#tr5").find("td"), function (e) {
        var tdids = $(this).text();
        new_td.push(tdids);
    });
    $.each($("#tr6").find("td"), function (e) {
        var tdids = $(this).text();
        new_td.push(tdids);
    });
    $.each($("#tr7").find("td"), function (e) {
        var tdids = $(this).text();
        new_td.push(tdids);
    });
    $.each($("#tr8").find("td"), function (e) {
        var tdids = $(this).text();
        new_td.push(tdids);
    });



}
//上传至服务器保存
function updata()
{
    var sortpos = [];


    $.each(new_index,function(e){
        sortpos.push({
            "pos": new_index[e],
            "thdata1": new_td[e],
            "thdata2":new_td[e+5],
            "thdata3": new_td[e + 10],
            "thdata4": new_td[e + 15],
            "thdata5": new_td[e + 20],
            "thdata6": new_td[e + 25],
            "thdata7": new_td[e + 30],
            "thdata8": new_td[e + 35],
            })
    });

    var jsondata = JSON.stringify(sortpos);

    $.ajax({
        type: "post",
        url: "savetable.ashx?action=save",
        data: {
            data: jsondata
        },
        success: function (msg) {
            if (msg == "100")
            {
                alert("上传成功");
            }
        }
    });

}

