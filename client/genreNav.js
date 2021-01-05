(function genreNav(){
    const genreNav=document.getElementById("genre-nav");
    const dataList=[
        {text:"홈"},
        {text:"요일연재"},
        {text:"웹툰"},
        {text:"소년"},
        {text:"드라마"},
        {text:"로맨스"},
        {text:"로판"},
        {text:"액션무협"},
        {text:"BL/GL"},
    ]
    let li="";
    for(let i=0;i<dataList.length; i++){
        let data=dataList[i];
        li+=`<li class="genre-nav-li" style="font-family:sans-serif;font-size:18px"><a class="webfont">${data.text}</a></li>`;
    }
    genreNav.innerHTML=li;
})();