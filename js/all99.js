//建立監聽器
const cardList = document.querySelector('.warp');

//複迴圈9*9
let card = '';
for (i=2 ; i<10; i++){
  //  console.log("i="+i);
  let bigNum = i;
  let str='';
  let newWord=''; 

  for(j=1; j<10;j++){
    // console.log("j="+j);
    // console.log( i+"*"+j+"="+i*j);
    newWord = `<li class="multiNum">${i}×${j}=${i*j}</li>`;
    str += newWord;
    }

  //第 2~9張圖卡
  card += `<div class="card99">
          <ul > <li class="bigNum"> ${bigNum}</li>`
           + str
           +`</ul></div>`;
  // console.log(str);
};
// console.log('card', card);

//第一張圖卡(沒有乘法)
const card0 = ` <div class="warp">    
                <div class="card0">
                <h2>九九乘法表</h2>
                <h3>MULTIPLICATION CHART</h3>
                </div>`;

//合併全部圖卡   
cardList.innerHTML = card0 + card;

