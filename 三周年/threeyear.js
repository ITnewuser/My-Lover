window.onload = function () {
    // 得到大盒子小面的小盒子
    var divs = document.getElementById('imgBox').children;
    var imgs = document.getElementById('imgBox').getElementsByTagName('img');

    // console.log(divs);
    // console.log(imgs);

    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    // console.log(width);
    // console.log(height);

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.height = height + 'px';

        // imgs[i].style.width = (width  / imgs.length)+ 'px';
        divs[i].style.height = height + 'px';

        divs[i].style.width = (width / imgs.length) + 'px';

        // 可以通过改变 盒子的大小  来改变 图片的大小
        // divs[i].style.width = 500 + 'px';

        // 每个盒子 距离最外面的盒子的距离 会根据 当前 位置的不同 而 不同
        // divs[i].style.left = 224 * i + 'px';

        // 当鼠标 移动到 盒子上的时候 触发动画效果  
        divs[i].onmouseenter = function () {
            for (var i = 0; i < divs.length; i++) {
                animate(divs[i], {
                    width: 200
                });;
            }
            animate(this, {
                width: 349
            });
        };
        // 当鼠标 移开 盒子的时候 触发 动画 让盒子恢复原来的样子
        divs[i].onmouseleave = function () {
            for (var i = 0; i < divs.length; i++) {
                animate(divs[i], {
                    width: 215
                })
            }
        }

    };




    /* 下面盒子的展示 区域 */


    // 获取 下面的盒子 的整体
    var downDiv = document.getElementById('bottom');
    console.log(downDiv);

    var Downdivs = downDiv.getElementsByClassName('public');
    console.log(Downdivs);
    // var Downdivs = downDiv.children;

    console.log(Downdivs);


    // 当鼠标点击 图片的时候 直接连接到 需要展示的 区域
    var As = document.getElementById('imgBox').getElementsByTagName('a');

    // console.log(As[0]);

    for (var i = 0; i < As.length; i++) {
        // console.log(As[i]);
        var arr = [0, 1, 2, 3, 4, 5];
        As[i].onclick = function () {

            for (var j = 0; j < As.length; j++) {
                // console.log(Downdivs[0]);
                // 让对应的 盒子 展示出来  其他的盒子消失
                Downdivs[j].classList.remove('active')

                // 给每一个 a 标签 设置一个类名 --> 这个类名的主要作用就是 方便之后盒子的显示 添加索引值
                As[j].setAttribute('class', j);

            };

            // 通过获取 a 标签上面的 类名 可以为 下面的盒子 添加 类名 以使得 下面的目标盒子 显示
            console.log(Downdivs[this.getAttribute('class')]);
            Downdivs[this.getAttribute('class')].classList.add('active');

        };
    };


}