/**
 * Created by Administrator on 2017/1/10.
 */


window.onload = function () {

    // 第一部分的 动画效果  旋转轮播图
    var box = document.getElementById("box");
    var button = box.children[1];
    var lis = box.children[0].children[0].children;

    box.onmouseover = function () {
        animate(button, {
            opacity: 100
        })
    }

    box.onmouseout = function () {
        animate(button, {
            opacity: 0
        })
    }

    // 这是手动设置 的 数据 一般情况下 这个数据是可以从后台请求得来的
    var json = [{ // li1
            width: 400,
            top: 20,
            left: 50,
            opacity: 20,
            zIndex: 2
        },
        { //li2
            width: 600,
            top: 70,
            left: 0,
            opacity: 80,
            zIndex: 3
        },
        { //li3
            width: 800,
            top: 100,
            left: 200,
            opacity: 100,
            zIndex: 4
        },
        { //li4
            width: 600,
            top: 70,
            left: 600,
            opacity: 80,
            zIndex: 3
        },
        { //li5
            width: 400,
            top: 20,
            left: 650,
            opacity: 20,
            zIndex: 2
        }
    ];

    var btns = button.children;
    Change();
    var fn = true;

    for (var k in btns) {
        btns[k].onclick = function () {
            if (this.className == "btn-left") {
                if (fn == true) {
                    Change(false);
                    fn = false;
                }
            } else {
                if (fn == true) {
                    Change(true);
                    fn = false;
                }
            };
        };
    };

    // 封装的 变换 图片的函数
    function Change(flag) {
        if (flag) {

            json.unshift(json.pop());

        } else {

            json.push(json.shift());

        };

        for (var i = 0; i < json.length; i++) {

            animate(lis[i], {
                width: json[i].width,
                top: json[i].top,
                left: json[i].left,
                opacity: json[i].opacity,
                zIndex: json[i].zIndex
            }, function () {
                fn = true
            })
        };
    };


    // 监听滚动事件 当 滚动到了一定的位置 使得 视频展示

    // window.onscroll = function () {
    //     // console.log(11);
    //     // var height = window.scroll;
    //     // console.log(height);
    // }

}