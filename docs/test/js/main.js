var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on" + type] = callback;
    }
};

function onResize() {
    arrow_img = document.getElementById('arrow');
    leftH6 = document.getElementById('left-h4');
    slctLeftMenu = document.querySelector('#left-menu');
    cmptLeftMenu = getComputedStyle(slctLeftMenu);
    slctArrowImg = document.querySelector('#arrow');
    cmptArrowImg = getComputedStyle(slctArrowImg);
    lMenuHeight = onlyNums(cmptLeftMenu.height);
    lMenuWidth = onlyNums(cmptLeftMenu.width);
    aImgHeight = onlyNums(cmptArrowImg.height);
    mTop = ((lMenuHeight / 2) - (aImgHeight / 2))
    arrow_img.setAttribute("style", "margin-top: " + mTop + "px;width: 12px;float:right;");
    if (lMenuWidth > 16) {
        leftH6.setAttribute("style", "margin: 0;transform: rotate(0deg);");
    }
}

function onlyNums(string) {
    return string.replace(/[^0-9]/g, "");
}

function changeLeftMenu() {
    leftMenu = document.getElementById('left-menu');
    leftH6 = document.getElementById('left-h4');
    ibodyWrap = document.getElementById('ibody-wrap');
    if (getComputedStyle(
            document.querySelector(
                '#left-menu')).width.replace(
            /[^0-9]/g, "") > 16) {
        ibodyWrap.setAttribute("style", "display: flex;");
        leftH6.setAttribute("style", "transform: rotate(90deg);display: block;margin: 0;");
        leftMenu.setAttribute("style", "width: 16px;");
        return;
    }
    ibodyWrap.setAttribute("style", "display: none;")
    leftMenu.setAttribute("style", "width: " + (window.innerWidth - 17) + "px;");
    leftH6.setAttribute("style", "transform: rotate(0deg);display: inline-block; margin: 0 auto;")
    leftMenu.setAttribute("style", "width: 100%;text-align: center;");
}