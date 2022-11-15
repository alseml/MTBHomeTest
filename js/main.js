let page = $(".img_index");
let pageIndex = 0; // 현재 이미지 순서
let imgCount = page.find("img").length; // 이지미 개수
let interval = 5000; // 7.5초마다
let pageSpeed = 500; // 50의 속도로
var pageBtn = $(".category_button > ul li");

var currentAni;

// 페이지 넘어가는 애니메이션 윗단
function pageAni() {
    pageBtn.css("border", "2px solid rgba(0, 0, 0, 0)");
    pageBtn.css("border-bottom", "2px solid rgba(0, 0, 0, 0.09)");
    var NnumberBtn = $(".category_button > ul li:eq(" + pageIndex + ")");
    NnumberBtn.css("border", "2px solid rgb(66, 66, 255)");

    page.stop().animate({ left: -1200 * pageIndex }, pageSpeed);
}

// 일정시간마다 인덱스 플러스됨.
function setTimer() {
    currentAni = setInterval(() => {
        pageIndex > imgCount - 2 ? (pageIndex = 0) : pageIndex++;
        pageAni();
    }, interval);
}

// 작은 버튼에 마우스 올리면 애니메이션 진행.
function pageBtnOver() {

    pageBtn.on("mouseover", function () {
        clearInterval(currentAni);

        pageIndex = $(this).index();
        pageAni();
    });

    pageBtn.on("mouseout", () => { setTimer(); });
}

setTimer();
pageBtnOver();

// 및 단 페이지 애니메이션
var bikePage = $(".bike_img_page>ul");
let bikePageIndex = 0;
let imgCountMax = 5;
// let bkieImgCount = bikePage.children().length;
let bkieInterval = 4500;
var bikeCurrentAni;

function categoryPageAni() {
    bikePage.stop().animate({ left: -325 * bikePageIndex }, pageSpeed);
}

function bikeSetTimer() {
    bikeCurrentAni = setInterval(() => {
        bikePageIndex > imgCountMax - 2 ? (bikePageIndex = 0) : bikePageIndex++;
        categoryPageAni();
    }, bkieInterval);
}

bikeSetTimer();