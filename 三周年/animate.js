/**
 * Created by Administrator on 2017/1/7.
 */

function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            var current = parseInt(getstyle(obj, attr));
            var step = (json[attr] - current) / 20;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            if ("opacity" == attr) {
                if ("opacity" in obj.style) { // 判断这个是否在一般浏览器下执行该函数。。  (W3C标准写法)
                    obj.style.opacity = json[attr]; // 这个是在一般浏览器下设置样式属性的。。
                } else {
                    obj.style.filter = "alpha(opacity = " + json[attr] * 100 + " )"; // 这个是在IE浏览器下设置样式属性的。。
                }
            } else {
                obj.style[attr] = current + step + "px";
            }

            if (current != json[attr]) {
                flag = false;
            }
        }

        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 10)
}


function getstyle(obj, attr) {
    if (obj.currentStyle) {

        return obj.currentStyle[attr];
    } else {

        return window.getComputedStyle(obj, null)[attr];
    }
}