let myImage = document.querySelector('img');

/*
点击图像实现图像切换
首先把 <img> 元素的引用存放在 myImage 变量里。
然后将这个变量的 onclick 事件与一个匿名函数绑定。
点击图片时，判断 src 的值是否等于原始图像的路径：是则修改，不是则复原
*/
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/baiyuekui.png') {
        myImage.setAttribute('src', 'images/mountain.jpeg');
    } else {
        myImage.setAttribute('src', 'images/baiyuekui.png');
    }
}

/*
添加个性化欢迎信息，在用户初次进入站点时即在标题中添加用户的名字。
名字信息会由 Web Storage API 保存下来，即使用户关闭页面之后再重新打开，仍可得到之前的信息。
还会添加一个选项，可以根据需要改变用户名字以更新欢迎信息。
*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        // 用 localStorage 的 setItem() 函数来创建'name' 数据项，并把 myName 变量复制给它。
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

// 检测name是否存在，决定是否调用setUserName
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

// 按键可以直接调用setusername
myButton.onclick = function () {
    setUserName();
}

