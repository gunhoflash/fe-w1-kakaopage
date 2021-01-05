
// <img src="//dn-img-page.kakao.com/download/resource?kid=SSWdU/hyQ9OzbbQK/rMxp2Vnwp722KYMe1griR0" data-src="//dn-img-page.kakao.com/download/resource?kid=SSWdU/hyQ9OzbbQK/rMxp2Vnwp722KYMe1griR0" alt="마족의 계약" draggable="false" class="jsx-922166243" style="width: 720px; display: block;"></img>
// <img src="//dn-img-page.kakao.com/download/resource?kid=X02WF/hyF23OPdUV/bLe5n84gXc7xzxI365lGVK" data-src="//dn-img-page.kakao.com/download/resource?kid=X02WF/hyF23OPdUV/bLe5n84gXc7xzxI365lGVK" alt="빅 라이프" draggable="false" class="jsx-922166243" style="width: 720px; display: block;"></img>
// <img src="//dn-img-page.kakao.com/download/resource?kid=bd1YIi/hyLjaWpLxw/OG6T8AFKeyiEXG3ROoJklK" data-src="//dn-img-page.kakao.com/download/resource?kid=bd1YIi/hyLjaWpLxw/OG6T8AFKeyiEXG3ROoJklK" alt="까마귀 우는 밤" draggable="false" class="jsx-922166243" style="width: 720px; display: block;"></img>
// <img src="//dn-img-page.kakao.com/download/resource?kid=dd4pcU/hyLi8YzZCF/oYOeq1v6oFslykkyMhveaK" data-src="//dn-img-page.kakao.com/download/resource?kid=dd4pcU/hyLi8YzZCF/oYOeq1v6oFslykkyMhveaK" alt="트리거" draggable="false" class="jsx-922166243" style="width: 720px; display: block;"></img>


const carousel=document.getElementById("carousel");
(function carouselInit(){
  const dataList=[
      {src:"https://dn-img-page.kakao.com/download/resource?kid=SSWdU/hyQ9OzbbQK/rMxp2Vnwp722KYMe1griR0",alt:"마족의 계약"},
      {src:"https://dn-img-page.kakao.com/download/resource?kid=X02WF/hyF23OPdUV/bLe5n84gXc7xzxI365lGVK",alt:"빅 라이프"},
      {src:"https://dn-img-page.kakao.com/download/resource?kid=bd1YIi/hyLjaWpLxw/OG6T8AFKeyiEXG3ROoJklK",alt:"까마귀 우는 밤"},
      {src:"https://dn-img-page.kakao.com/download/resource?kid=dd4pcU/hyLi8YzZCF/oYOeq1v6oFslykkyMhveaK",alt:"트리거"},
  ]
  let img="";
  for(let i=0;i<dataList.length; i++){
      let data=dataList[i];
      img+=`<img class="main-carousel" src="${data.src}" alt=${data.alt} draggable="false" style="width: 720px; display: block;"></img>`;
  }
  carousel.innerHTML=img;
})();



let index = 0;
runCarousel();
function runCarousel() {
  let x = carousel.getElementsByClassName("main-carousel");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  index++;
  if (index > x.length) {index = 1}    
  x[index-1].style.display = "block";  
  setTimeout(runCarousel, 4000); 
};
