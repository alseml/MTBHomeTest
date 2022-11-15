
var menu = $(".nav_clamp_box > ul > li");
let times = 200;


// sub메뉴 on off
menu.on("mouseover", function () {
    let len = $(this).children().length;

    if (len != 1) {
        var subMenu = $(this).children("ul");
        subMenu.css("display", "flex");

        subMenu.stop().animate({ opacity: 1 }, times);
    }
});

menu.on("mouseout", function () {

    var subMenu = $(this).children("ul");

    subMenu.css("display", "none");
    subMenu.stop().animate({ opacity: 0 }, times);
});


// 전체카테고리 on off
var category = $(".main_nav li:first-child");

category.on("mouseover", function () {
    $(this).children(".all_category").css("display", "flex");
    var allmenu = category.children(".all_category");
    allmenu.stop().animate({ opacity: 1 }, times);
})

category.on("mouseout", function () {
    $(this).children(".all_category").css("display", "none");
    var allmenu = category.children(".all_category");
    allmenu.stop().animate({ opacity: 0 }, times);
})



// 새로시작시 창 사이즈 결정.
function navResize() {
    let width = $(this).width();
    var nav = $("nav");

    width < 1200 ? nav.css("width", "1200px") : nav.css("width", "100%");
}

// 스크롤시 nav크기 변화.
$(window).scroll(function () {
    $(window).resize(function () {
        navResize();
    });
});

navResize();