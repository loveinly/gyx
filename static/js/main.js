var mmtable;

$(document).ready(function () {

    
    //本地数据
    var items = [{AMPLITUDE:0.9309,PREVCLOSINGPRICE:7.52,TURNOVERDEALS:0,HIGHESTPRICE:7.56,TURNOVERVOL:36268940,TRADINGDAY:1345478400000,TOTALSHARE:18653471415,SECUCODE:"600000",EPS:0.9217,LOWESTPRICE:7.49,OPENINGPRICE:7.51,SECUABBR:"浦发银行",ALISTEDSHARE:14922777132,ID:3131258,WCOSTAVG:8.7968,NETCASHFLOWOPERPS:1.125,SECUNAME:"上海浦东发展银行股份有限公司",CLOSINGPRICE:7.51,DAYCHANGERATE:-0.133,TURNOVERVAL:272732527,BVPS:8.686,DAYCHANGE:-0.01,PE:5.134,TURNOVERRATE:0.243,ADJUSTCLOSINGPRICE:51.8586,PB:0.9409},{AMPLITUDE:2.0472,PREVCLOSINGPRICE:6.35,TURNOVERDEALS:0,HIGHESTPRICE:6.41,TURNOVERVOL:1278011,TRADINGDAY:1345478400000,TOTALSHARE:1150000000,SECUCODE:"600004",EPS:0.1567,LOWESTPRICE:6.28,OPENINGPRICE:6.34,SECUABBR:"白云机场",ALISTEDSHARE:1150000000,ID:3131387,WCOSTAVG:6.8846,NETCASHFLOWOPERPS:0.23,SECUNAME:"广州白云国际机场股份有限公司",CLOSINGPRICE:6.39,DAYCHANGERATE:0.6299,TURNOVERVAL:8115183,BVPS:6.13,DAYCHANGE:0.04,PE:10.5415,TURNOVERRATE:0.1111,ADJUSTCLOSINGPRICE:9.429,PB:1.0697},{AMPLITUDE:1.5504,PREVCLOSINGPRICE:2.58,TURNOVERDEALS:0,HIGHESTPRICE:2.61,TURNOVERVOL:10685141,TRADINGDAY:1345478400000,TOTALSHARE:10093779823,SECUCODE:"600005",EPS:0.0043,LOWESTPRICE:2.57,OPENINGPRICE:2.59,SECUABBR:"武钢股份",ALISTEDSHARE:10093779823,ID:3131671,WCOSTAVG:3.0629,NETCASHFLOWOPERPS:0.09,SECUNAME:"武汉钢铁股份有限公司",CLOSINGPRICE:2.6,DAYCHANGERATE:0.7752,TURNOVERVAL:27677196,BVPS:3.562,DAYCHANGE:0.02,PE:24.2193,TURNOVERRATE:0.1059,ADJUSTCLOSINGPRICE:13.4817,PB:0.7308},{AMPLITUDE:2.069,PREVCLOSINGPRICE:2.9,TURNOVERDEALS:0,HIGHESTPRICE:2.95,TURNOVERVOL:2511165,TRADINGDAY:1345478400000,TOTALSHARE:2000000000,SECUCODE:"600006",EPS:0.0266,LOWESTPRICE:2.89,OPENINGPRICE:2.9,SECUABBR:"东风汽车",ALISTEDSHARE:2000000000,ID:3131903,WCOSTAVG:3.5362,NETCASHFLOWOPERPS:-0.4041,SECUNAME:"东风汽车股份有限公司",CLOSINGPRICE:2.9,DAYCHANGERATE:0,TURNOVERVAL:7316381,BVPS:3.0533,DAYCHANGE:0,PE:12.4963,TURNOVERRATE:0.1256,ADJUSTCLOSINGPRICE:10.0741,PB:0.9581},{AMPLITUDE:1.9704,PREVCLOSINGPRICE:10.15,TURNOVERDEALS:0,HIGHESTPRICE:10.35,TURNOVERVOL:155609,TRADINGDAY:1345478400000,TOTALSHARE:1007282534,SECUCODE:"600007",EPS:0.0887,LOWESTPRICE:10.15,OPENINGPRICE:10.15,SECUABBR:"中国国贸",ALISTEDSHARE:1007282534,ID:3132032,WCOSTAVG:9.8783,NETCASHFLOWOPERPS:0.22,SECUNAME:"中国国际贸易中心股份有限公司",CLOSINGPRICE:10.26,DAYCHANGERATE:1.0837,TURNOVERVAL:1599848,BVPS:4.5,DAYCHANGE:0.11,PE:53.2288,TURNOVERRATE:0.0154,ADJUSTCLOSINGPRICE:16.142,PB:2.3261},{AMPLITUDE:2.7211,PREVCLOSINGPRICE:4.41,TURNOVERDEALS:0,HIGHESTPRICE:4.53,TURNOVERVOL:3872525,TRADINGDAY:1345478400000,TOTALSHARE:2200000000,SECUCODE:"600008",EPS:0.0714,LOWESTPRICE:4.41,OPENINGPRICE:4.42,SECUABBR:"首创股份",ALISTEDSHARE:2200000000,ID:3131442,WCOSTAVG:5.2878,NETCASHFLOWOPERPS:0.055,SECUNAME:"北京首创股份有限公司",CLOSINGPRICE:4.49,DAYCHANGERATE:1.8141,TURNOVERVAL:17341208,BVPS:2.3832,DAYCHANGE:0.08,PE:18.8918,TURNOVERRATE:0.176,ADJUSTCLOSINGPRICE:15.1655,PB:1.8324},{AMPLITUDE:0.7389,PREVCLOSINGPRICE:12.18,TURNOVERDEALS:0,HIGHESTPRICE:12.22,TURNOVERVOL:1332194,TRADINGDAY:1345478400000,TOTALSHARE:1926958448,SECUCODE:"600009",EPS:0.1909,LOWESTPRICE:12.13,OPENINGPRICE:12.19,SECUABBR:"上海机场",ALISTEDSHARE:1093476397,ID:3131171,WCOSTAVG:12.8369,NETCASHFLOWOPERPS:-0.04,SECUNAME:"上海国际机场股份有限公司",CLOSINGPRICE:12.14,DAYCHANGERATE:-0.3284,TURNOVERVAL:16207539,BVPS:8.16,DAYCHANGE:-0.04,PE:15.5997,TURNOVERRATE:0.1218,ADJUSTCLOSINGPRICE:33.1878,PB:1.523},{AMPLITUDE:3.9604,PREVCLOSINGPRICE:6.06,TURNOVERDEALS:0,HIGHESTPRICE:6.11,TURNOVERVOL:95948038,TRADINGDAY:1345478400000,TOTALSHARE:6423643659,SECUCODE:"600010",EPS:0.0017,LOWESTPRICE:5.87,OPENINGPRICE:6.06,SECUABBR:"包钢股份",ALISTEDSHARE:6423643659,ID:3133528,WCOSTAVG:5.6692,NETCASHFLOWOPERPS:-0.09,SECUNAME:"内蒙古包钢钢联股份有限公司",CLOSINGPRICE:5.99,DAYCHANGERATE:-1.1551,TURNOVERVAL:572896242,BVPS:2.01,DAYCHANGE:-0.07,PE:77.53,TURNOVERRATE:1.4937,ADJUSTCLOSINGPRICE:17.6883,PB:2.9846},{AMPLITUDE:2.0864,PREVCLOSINGPRICE:6.71,TURNOVERDEALS:0,HIGHESTPRICE:6.8,TURNOVERVOL:8203502,TRADINGDAY:1345478400000,TOTALSHARE:14055383440,SECUCODE:"600011",EPS:0.1571,LOWESTPRICE:6.66,OPENINGPRICE:6.78,SECUABBR:"华能国际",ALISTEDSHARE:10000000000,ID:3132159,WCOSTAVG:5.7905,NETCASHFLOWOPERPS:0.91,SECUNAME:"华能国际电力股份有限公司",CLOSINGPRICE:6.68,DAYCHANGERATE:-0.4471,TURNOVERVAL:55167434,BVPS:3.66,DAYCHANGE:-0.03,PE:74.0314,TURNOVERRATE:0.082,ADJUSTCLOSINGPRICE:23.7094,PB:1.875},{AMPLITUDE:0.7712,PREVCLOSINGPRICE:3.89,TURNOVERDEALS:0,HIGHESTPRICE:3.91,TURNOVERVOL:418515,TRADINGDAY:1345478400000,TOTALSHARE:1658610000,SECUCODE:"600012",EPS:0.1278,LOWESTPRICE:3.88,OPENINGPRICE:3.89,SECUABBR:"皖通高速",ALISTEDSHARE:1165600000,ID:3133590,WCOSTAVG:4.4675,NETCASHFLOWOPERPS:0.25,SECUNAME:"安徽皖通高速公路股份有限公司",CLOSINGPRICE:3.9,DAYCHANGERATE:0.2571,TURNOVERVAL:1632075,BVPS:3.8226,DAYCHANGE:0.01,PE:7.5503,TURNOVERRATE:0.0359,ADJUSTCLOSINGPRICE:6.945,PB:1.0322},{AMPLITUDE:0.8037,PREVCLOSINGPRICE:8.71,TURNOVERDEALS:0,HIGHESTPRICE:8.75,TURNOVERVOL:14473038,TRADINGDAY:1345478400000,TOTALSHARE:6849725776,SECUCODE:"600015",EPS:0.8869,LOWESTPRICE:8.68,OPENINGPRICE:8.71,SECUABBR:"华夏银行",ALISTEDSHARE:4990528316,ID:3133403,WCOSTAVG:10.581,NETCASHFLOWOPERPS:2,SECUNAME:"华夏银行股份有限公司",CLOSINGPRICE:8.7,DAYCHANGERATE:-0.1148,TURNOVERVAL:126109959,BVPS:10.01,DAYCHANGE:-0.01,PE:6.4621,TURNOVERRATE:0.29,ADJUSTCLOSINGPRICE:16.1875,PB:0.9326},{AMPLITUDE:1.0135,PREVCLOSINGPRICE:5.92,TURNOVERDEALS:0,HIGHESTPRICE:5.94,TURNOVERVOL:47828421,TRADINGDAY:1345478400000,TOTALSHARE:28365585227,SECUCODE:"600016",EPS:0.3433,LOWESTPRICE:5.88,OPENINGPRICE:5.91,SECUABBR:"民生银行",ALISTEDSHARE:22587602387,ID:3132062,WCOSTAVG:6.1797,NETCASHFLOWOPERPS:-1.61,SECUNAME:"中国民生银行股份有限公司",CLOSINGPRICE:5.91,DAYCHANGERATE:-0.1689,TURNOVERVAL:282428002,BVPS:5.2,DAYCHANGE:-0.01,PE:6.0043,TURNOVERRATE:0.2117,ADJUSTCLOSINGPRICE:83.8993,PB:1.2936},{AMPLITUDE:1.8657,PREVCLOSINGPRICE:2.68,TURNOVERDEALS:0,HIGHESTPRICE:2.72,TURNOVERVOL:2086859,TRADINGDAY:1345478400000,TOTALSHARE:3075653888,SECUCODE:"600017",EPS:0.1249,LOWESTPRICE:2.67,OPENINGPRICE:2.69,SECUABBR:"日照港",ALISTEDSHARE:2630631660,ID:3133407,WCOSTAVG:3.0421,NETCASHFLOWOPERPS:0.122,SECUNAME:"日照港股份有限公司",CLOSINGPRICE:2.71,DAYCHANGERATE:1.1194,TURNOVERVAL:5634455,BVPS:2.674,DAYCHANGE:0.03,PE:17.342,TURNOVERRATE:0.0793,ADJUSTCLOSINGPRICE:8.5585,PB:1.2871}];
    //保留两位小数
    var fixed2 = function(val){
        return val.toFixed(2);
    }

    //加百分号
    var fixed2percentage = function(val){
        return fixed2(val)+'%';
    }
    //高亮
    var highliht = function(val){
        if(val > 0){
            return '<span style="color: #b00">' + fixed2(val) + '</span>';
        }else if(val < 0){
            return '<span style="color: #0b0">' + fixed2(val) + '</span>';
        }
        return fixed2(val);
    };





    var cols3 = [
        {title:'行情', name:'', width: 100, align: 'center', sortable: true, renderer: function(val,item,rowIndex){
            return '<div class="btnPrice"></div>';
        }},
        { title:'股票代码', name:'SECUCODE' ,width:100, align:'center', sortable: true, sortName:'secu_code'},
        { title:'股票名称', name:'SECUABBR' ,width:100, align:'center', sortable: true, sortName:'secu_abbr'},
        { title:'今收盘', name:'CLOSINGPRICE' ,width:60, align:'right',type:'number', sortable: true, renderer: fixed2},
        { title:'涨跌幅', name:'DAYCHANGERATE' ,width:60, align:'right',type:'number', sortable: true,renderer: highliht},
        { title:'涨跌额', name:'DAYCHANGE' ,width:60, align:'right',type:'number', sortable: true, renderer: highliht},
        { title:'振幅', name:'AMPLITUDE' ,width:60, align:'right',type:'number', sortable: true, renderer: fixed2percentage},
        { title:'成交量(手)', name:'TURNOVERVOL' ,width:100, align:'center',type:'number', sortable: true, renderer: function(val){
            return (val / 100).toFixed(2);
        }},
        { title:'成交额(万)', name:'TURNOVERVAL' ,width:100, align:'right',type:'number', sortable: true, renderer: function(val){
            return (val / 10000).toFixed(2);
        }},
        { title:'昨收盘', name:'PREVCLOSINGPRICE' ,width:60, align:'right',type:'number', sortable: true, renderer: fixed2},
        { title:'今开盘', name:'OPENINGPRICE',width:60, align:'right',type:'number', sortable: true, renderer: fixed2},
        { title:'最高价', name:'HIGHESTPRICE' ,width:60, align:'right',type:'number', sortable: true, renderer: fixed2},
        { title:'最低价', name:'LOWESTPRICE' ,width:60, align:'right',type:'number', sortable: true, renderer: fixed2}
    ];
    //客户端排序示例
    mmtable = $('#table3-1').mmGrid({
        
        cols: cols3,
        items: items,
        sortName: 'DAYCHANGERATE',
        sortStatus: 'desc'
    });
    mmtable.on('loadSuccess', function (e, data) {
        var mmbody = document.getElementsByClassName("mmGrid");
        mmbody[0].style.height = "500px";
        var mmgbodyheight = document.getElementsByClassName("mmg-bodyWrapper");
        mmgbodyheight[0].style.height = "350px";
        Drag("table3-1", "chenkbox");

    })


});


//拖拽事件
function Drag(table, chenkbox) {
    var clickthis;
    var ochek = document.getElementById(chenkbox);
    var otable = document.getElementById(table);
    var otody = otable.tBodies[0];
    var oth = $(".mmg-head th");//表头数据
    var otd = otody.getElementsByTagName("td");
    var box = document.getElementById("box");
    var arrn = [];

    for (var i = 0; i < oth.length; i++) {
        //鼠标按下事件
        oth[i].onmousedown = function (e) {
            var e = e || window.event,
                target = e.target || e.srcElement,
                thw = target.offsetWidth,
                maxl = ochek.offsetWidth - thw;
            rows = otable.rows,
                ckl = ochek.offsetLeft,
                disX = target.offsetLeft,
                _this = this,
                clickthis = this,
                cdisX = e.clientX - ckl - disX;
            console.log(e.clientX);
            console.log(ckl);
            console.log(disX);
            console.log(cdisX);
            var dragObj = target.tagName.toLowerCase('th');
            if (dragObj !="th")
            {
                return;
            }
            var opp = document.createElement("p");
            opp.style.display = "none";
            opp.innerHTML = this.innerHTML;
            box.appendChild(opp);
          
            for (var i = 0; i < rows.length; i++) {
                var op = document.createElement("p");
                op.innerHTML = rows[i].cells[this.cellIndex].innerHTML;
                box.appendChild(op);
            };
            for (var i = 0; i < oth.length; i++) {
                arrn.push(oth[i].offsetLeft);
            };
            box.style.display = "block";
            box.style.width = thw + "px";
            box.style.left = disX + "px";
            //鼠标移动事件
            document.onmousemove = function (e) {
                var e = e || window.event,
                    target = e.target || e.srcElement,
                    thw = target.offsetWidth;
                  //  box.style.top = 0;
             
                box.style.left = e.clientX - ckl - cdisX + "px";
                if (box.offsetLeft > maxl) {
                    box.style.left = maxl + "px";
                }
                else if (box.offsetLeft < 0) {
                    box.style.left = 0;
                }
                document.onselectstart = function () { return false; };
                window.getSelection ? window.getSelection().removeAllRanges() : doc.selection.empty();
            }
            //鼠标松开事件
            document.onmouseup = function (e) {
                var e = e || window.event,
                    opr = box.getElementsByTagName("p"),
                    target = e.target || e.srcElement,
                    oboxl = box.offsetLeft + cdisX;
             
                var dragObj = target.tagName.toLowerCase('th');
                if (dragObj != "th")
                {
                    box.innerHTML = "";
                    arrn.splice(0, arrn.length);
                    box.style.display = "none";
                    document.onmousemove = null;
                    document.onmouseup = null;
                    document.onselectstart = function () { return false };
                    return;
                }
                for (var i = 0; i < arrn.length; i++) {
                    if (arrn[i] < oboxl) {
                        var index = i;
                       
                    }
                };

                var beforeclick = target.getElementsByClassName("mmg-title mmg-canSort");
                
                var x, y;
                var fistobj = opr[0].getElementsByTagName("span");
                //if (fistobj[0] != "span")
                //{

                //}
                var firstsort = fistobj[0].innerHTML;
                var secondobj = target.getElementsByTagName("span");
                var seconsort = secondobj[0].innerHTML;
                //将鼠标按下和松开的两个列头的位置标出
                for (var i = 0; i < mmtable.opts.cols.length; i++)
                {
                    
                    if (mmtable.opts.cols[i].title == firstsort)
                    {
                        x = i;
                    }
                    if (mmtable.opts.cols[i].title == seconsort)
                    {
                        y = i;
                    }
                }
                //将列头在数组中的位置进行交换
                mmtable.opts.cols = swapsort(mmtable.opts.cols, x, y);
                console.log(mmtable.opts.cols);
                //交换各列的数据
                var _thisbeforearr = _this.getElementsByTagName("span");
                var _thisbefore = _thisbeforearr[0];
                var _thisbehindarr = target.getElementsByTagName("span");
                var _thisbehind = _thisbehindarr[0];
                _thisbefore.innerHTML = "";
                _thisbefore.innerHTML = _thisbehind.innerHTML;
                target.innerHTML = "";
                target.innerHTML = opr[0].innerHTML;
               
                for (var i = 0; i < rows.length; i++) {
                    rows[i].cells[_this.cellIndex].innerHTML = "";
                    rows[i].cells[_this.cellIndex].innerHTML = rows[i].cells[index].innerHTML;
                    rows[i].cells[index].innerHTML = "";
                    rows[i].cells[index].innerHTML = opr[i+1].innerHTML;
                };
                box.innerHTML = "";
                arrn.splice(0, arrn.length);
                box.style.display = "none";
                document.onmousemove = null;
                document.onmouseup = null;
                document.onselectstart = function () { return false };
                //保存拖拽后的表的顺序
                //savetable();
                //updata();
            }
        }
    };
}

//交换函数
function swapsort(arr, x, y)
{

        var temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
        return arr;
}
