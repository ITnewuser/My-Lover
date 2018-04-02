$(function () {


    var imgs = $(".row img");
    var spans = $(".row span");

    // 获取页面中的 div 元素
    var divs = $(".row div");

    for (var i = 0; i < divs.length; i++) {

        // divs[i].children[0].children[1].style.opacity = 0;
        spans[i].style.opacity = 0;

        // console.log(imgs[i].width);
        // console.log(imgs[i].height);
        // 将 图片的 宽 高 赋值给 span 标签 

        spans[i].style.width = imgs[i].width + 'px';
        spans[i].style.height = imgs[i].height + 'px';

        // 设置行高等于 图片的高度  使得 文字能在盒子中间显示
        spans[i].style.lineHeight = imgs[i].height + 'px';

        // 给 span 标签中 添加文字 
        spans[i].innerText = (i + 1) + '周年快乐！！！';

        // 自定义 最后一个盒子的 内容  
        spans[4].innerText = '纪念毕业旅行！！';

        // 设置 当 鼠标移动到 盒子上的时候 需要的 动画 显示与隐藏
        divs[i].onmouseover = function () {
            $(this.children[0].children[1]).stop(false, false).animate({
                opacity: 0.6
            }, '0.5s');
        };

        divs[i].onmouseout = function () {
            $(this.children[0].children[1]).stop(false, false).animate({
                opacity: 0
            }, '0.5s');
        };

    };

});