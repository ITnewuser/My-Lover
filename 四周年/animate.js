/**
 * Created by Administrator on 2017/1/9.
 */
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            var current = 0;
            if ("opacity" == attr) {
                current = parseInt(getStyle(obj, attr) * 100) || 0;

            } else {
                current = parseInt(getStyle(obj, attr));
            }

            var step = (json[attr] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            // console.log(current);
            if ("opacity" == attr) {
                if ("opacity" in obj.style) {
                    obj.style[attr] = (current + step) / 100;
                } else {
                    obj.style.filter = "alpha(opacity = 30)"
                }

            } else if (attr == "zIndex") {
                obj.style.zIndex = json[attr];
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


function getStyle(box, attr) {
    if (box.currentStyle) {
        return box.currentStyle[attr];
    } else {
        return window.getComputedStyle(box, null)[attr];
    }
}