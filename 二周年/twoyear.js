window.onload = function () {

    // 滚屏代码
    function scrollScreen(id) {

        var id = document.getElementById(id);
        var el = id.getElementsByTagName('div');
        // var Ps = id.getElementsByTagName('p');
        // console.log(Ps);

        // console.log(el);
        // console.log(id.style.top);
        var ul = document.getElementById('list');
        var height = document.documentElement.clientHeight;
        var width = document.documentElement.clientWidth;
        // 遍历元素 动态生成 指定元素  
        for (var i = 0; i < el.length; i++) {
            el[i].style.height = height + 'px';
            el[i].style.width = width + 'px';

            var li = document.createElement("li");
            var span = document.createElement('span');
            ul.appendChild(li);
            li.appendChild(span);
        }

        var lis = ul.getElementsByTagName('li');
        var spans = ul.getElementsByTagName('span');

        // 制作动画设置的一个 变量  --> 主要作用就是 监听滚动事件 并且 给后续的动画设置变量
        // 这个是一个贱招 不能放之四海皆准的
        var num = 0;
        spans[num].classList.add('active');
        // 兼容性写法
        // spans[num].className += 'active';

        // 这是定时器的
        var leader = 0;
        var timer = null;

        // 滚动鼠标 改变 变量
        document.onmousewheel = function (event) {

            var event = event || window.event;
            var delta = event.wheelDelta;

            if (delta > 0) {
                // alert('向上滚动了');

                if (num < lis.length && num > 0) {

                    // 滚动之后改变变量的值
                    num--;
                    console.log(num);
                    // 原生的  添加类名  就是 classList 
                    spans[num].classList.add('active');
                    spans[num + 1].classList.remove('active');

                    setTimeout(function () {
                        // alert(111);
                        // id.style.top = -(height * num) + 'px';
                        childs = el[num].children;

                        switch (num) {
                            case 0:
                                childs[0].style.top = 3 + '%';
                                childs[1].style.bottom = 60 + '%';

                                // childs[num +1].style.

                                el[num + 1].children[0].style.left = -20 + '%';
                                el[num + 1].children[1].style.right = -20 + '%';
                                break;
                            case 1:

                                // alert(11);
                                childs[0].style.left = 2 + '%';
                                childs[1].style.right = 2 + '%';

                                el[num + 1].children[0].style.top = -25 + '%';
                                break;
                            case 2:
                                childs[0].style.top = 8 + '%';

                                el[num + 1].children[0].style.left = -50 + '%';
                                el[num + 1].children[0].style.backgroundColor = '';
                                el[num + 1].children[0].style.transform = '';

                                break;
                            case 3:
                                childs[0].style.left = 27 + '%';
                                // childs[0].style.backgroundColor = "rgb(255, 115, 0)";
                                childs[0].style.transform = 'rotate(360deg) scale(1.5)';

                                el[num + 1].children[0].style.top = 100 + '%';

                                break;
                            case 4:
                                childs[0].style.top = 8 + '%';
                                // childs[0].style.backgroundColor = 'red';
                                break;
                        }

                        clearInterval(timer);

                        timer = setInterval(function () {
                            var target = -(height * num);
                            leader = leader + (target - leader) / 20;
                            leader = Math.ceil(leader);
                            id.style.top = leader + 'px';
                            // console.log(leader);
                            Math.abs(target - leader) < 3 ? target == leader : leader == leader;
                            if (target == leader) {
                                id.style.top = leader + 'px';
                                clearInterval(timer);
                            }

                        }, 10);

                    }, 300);

                }
                /* 当滚轮向上滚动时  可以回到最后一个元素*/

                //  else {
                //     spans[0].classList.remove('active');
                //     num = 4;
                //     setTimeout(function () {
                //         id.style.top = -(height * num) + 'px';
                //     }, 300);
                //     spans[num].classList.add('active');

                //     console.log(num);
                // }

            } else {
                // alert('向下滚动了');

                if (num >= 0 && num < lis.length - 1) {

                    num++;
                    console.log(num);

                    spans[num].classList.add('active');

                    spans[num - 1].classList.remove('active');

                    // 缓动动画 效果展示 设置定时器
                    // var timer = null;

                    // 调用之前封装好的 函数
                    setTimeout(function () {
                        // 没有动画效果的展示图片
                        // id.style.top = -(height * num) + 'px';

                        // 当滚动滚轮时 当前页面内的元素发生动画效果
                        // console.log(el[num].children);
                        var childs = el[num].children;

                        switch (num) {
                            case 0:
                                childs[0].style.top = 3 + '%';
                                childs[1].style.bottom = 60 + '%';
                                break;
                            case 1:

                                childs[0].style.left = 2 + '%';
                                childs[1].style.right = 2 + '%';

                                el[num - 1].children[0].style.top = -35 + '%';
                                el[num - 1].children[1].style.bottom = -40 + '%';

                                break;
                            case 2:
                                childs[0].style.top = 8 + '%';
                                // console.log(num);
                                el[num - 1].children[0].style.left = -20 + '%';
                                el[num - 1].children[1].style.right = -20 + '%';

                                break;
                            case 3:
                                childs[0].style.left = 27 + '%';
                                // childs[0].style.backgroundColor = "rgb(255, 115, 0)";
                                childs[0].style.transform = 'rotate(360deg) scale(1.5)';

                                el[num - 1].children[0].style.top = -25 + '%';
                                break;
                            case 4:
                                childs[0].style.top = 8 + '%';

                                el[num - 1].children[0].style.left = -50 + '%';
                                el[num - 1].children[0].style.backgroundColor = '';
                                el[num - 1].children[0].style.transform = '';
                                // childs[0].style.backgroundColor = 'red';
                                break;
                        }

                        // switch (num - 1) {
                        //     case -1:
                        //         childs[0].style.top = -35 + "%";
                        //         childs[1].style.bottom = -40 + '%';
                        //         break;
                        //     case 0:
                        //         childs[0].style.left = -20 + '%';
                        //         childs[1].style.right = -20 + '%';
                        //         break;
                        // }

                        // 滚屏动画效果
                        clearInterval(timer);

                        timer = setInterval(function () {
                            // console.log(target);
                            // console.log(num);
                            var target = -(height * num);
                            // leader = 0;

                            leader = leader + (target - leader) / 20;
                            leader = Math.floor(leader);
                            id.style.top = leader + 'px';
                            // console.log(leader);
                            Math.abs(target - leader) < 3 ? target == leader : leader == leader;
                            // console.log(target);
                            // console.log(target);
                            // console.log(leader);
                            if (target == leader) {
                                id.style.top = leader + 'px';
                                clearInterval(timer);
                                // console.log(leader);
                                // return leader;
                            }
                            // console.log(111);
                        }, 10);

                    }, 300);

                }
                /* 当滚轮可以 返回到第一个 元素的时候 才这样写*/

                // else {

                //     num = 0;
                //     // clearInterval(timer);
                //     setTimeout(function () {

                //         timer = setInterval(function () {

                //             // console.log(target);
                //             // console.log(num);
                //             var target = -(height * num);
                //             // leader = 0;
                //             console.log(num);
                //             leader = leader + (target - leader) / 20;
                //             leader = Math.floor(leader);
                //             id.style.top = leader + 'px';
                //             // console.log(leader);
                //             // console.log(target);
                //             Math.abs(target - leader) < 3 ? target == leader : leader == leader;
                //             // clearInterval(timer);
                //             if (target == leader) {
                //                 console.log(target);
                //                 console.log(leader);
                //                 id.style.top = leader + 'px';
                //                 clearInterval(timer);
                //                 // console.log(leader);
                //                 // return leader;
                //             }

                //         }, 10);

                //     }, 300);

                //     spans[4].classList.remove('active');
                //     console.log(num);
                //     spans[num].classList.add('active');
                // }

            }

        }



        childs = el[0].children;
        childs[0].style.top = 3 + '%';
        childs[1].style.bottom = 60 + '%';
    }

    
    // 调用滚屏函数
    scrollScreen('box');

}