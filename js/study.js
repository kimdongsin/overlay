var menuBtn = document.querySelector(".menubtn");
var menu = document.querySelector(".menu");
var wrapper = document.querySelector(".wrap");

menuBtn.addEventListener("click", function (){
    menu.style.width = "300px";
    wrapper.style.display = "initial";
})

wrapper.addEventListener("click", function() {
    menu.style.width = "0px";
    wrapper.style.display = "none";
});

// 순서를 정해 헷갈리거나 복잡하면 
 
//의미있는삽질 이 있고 의미없는삽질

//공부
//블로그글
//공부한거로 사이드프로젝트 혹은 본인에게 스스로 문제내서 풀기
