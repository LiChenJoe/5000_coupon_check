let idNumber = document.getElementById("idNumber");
let result= document.querySelector(".result");
let showResult= document.querySelector(".showResult");
let showPrize= document.querySelector(".showPrize");
let showPrize2= document.querySelector(".showPrize2"); 
let showNumber= document.querySelector(".showNumber");
let showWarn= document.querySelector(".showWarn");
let submit = document.getElementById("submit");
console.log(submit === null);

function check() {
  let guess = idNumber.value;
  let guesson = guess[0];
  let lucky32 = guesson+32;
  let lucky98 = guesson+98;
  let lucky15 = guesson+15;
  let lucky37 = guesson+37;
  let lucky39 = guesson+39;
  let lucky23 = guesson+23;
  let lucky71 = guesson+71;
  let lucky13 = guesson+13;
  let lucky912 = 912;
  let lucky900 = 900;
  let travelW1 = [guesson+21, guesson+32, guesson +98, guesson+67, guesson+97, 410];
  let travelW2 = [guesson+87, guesson+04, guesson +40, guesson+29, guesson+71];
  let iCouponW1 = [guesson+64, guesson+85];
  let iCouponW2 = [guesson+12, guesson+59];
  let agriW1 =  [guesson+89, guesson+32, guesson +54, 597, 453, 152];
  let agriW2 =  [guesson+50, guesson+13];
  let funW1Digi =  [guesson+96, guesson+15, guesson +07, guesson+30, guesson+73, guesson +98,guesson+19, guesson +11];
  let funW1Paper =  [guesson+39, guesson+37, guesson +23, guesson+36, guesson+79, guesson +08,guesson+14, guesson +75];
  let funW2Digi =   [guesson+78, guesson+00, guesson +39, guesson+22, guesson+61, guesson +23,guesson+15];
  let funW2Paper =   [guesson+37, guesson+76, guesson +31, guesson+06, guesson +51,guesson+65, guesson +81];
  let moveW1 =  [guesson+97, guesson+13, guesson +19, guesson+55, guesson+71, guesson +93,381, 734, 644, 453, 985];
  let hakaW1 =  [guesson+81, 900];
  let localW1 =  [081,105,594,188,089,396,521,467,912,798,358,441,367,941,335];
    showResult.textContent = "🐢 金拍謝！沒中獎～再接再厲啦！";
    showPrize.textContent = "";
    showWarn.textContent ="";
    showPrize2.textContent = "";
    if (guess === "") {
      showResult.textContent = "請重新輸入";
      showPrize.textContent = "";
      showPrize2.textContent = "";
      showWarn.textContent ="";
    } 
  
  for (let i=0; i<18; i++){
    if (Number(guess) === Number(lucky32)) {
      showResult.textContent = "恭喜抽到 第一週 ";
      showPrize.textContent ="🀄 國旅卷( 週一) &";
      showPrize2.textContent ="🀄 農遊券(週三)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky98)) {
      showResult.textContent = "恭喜抽到 第一週 &";
      showPrize.textContent ="🀄 國旅卷( 週一)";
      showPrize2.textContent ="🀄 藝Fun券-數位(週三)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky15)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="第一週 🀄 藝FUN券-數位(週一)  &";
      showPrize2.textContent ="第二週 🀄 藝FUN券(週三)-數位";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky37)) {
      showResult.textContent = "恭喜抽到 ";
      showPrize.textContent =" 第一週 🀄 藝FUN券(週三) &";
      showPrize2.textContent ="第二週 🀄 藝FUN券-數位(週三)";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky39)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent =" 第一週 🀄 藝FUN券(週三) &";
      showPrize2.textContent ="第二週 🀄 藝FUN券-數位(週三)";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky23)) {
      showResult.textContent = "恭喜抽到  ";
      showPrize.textContent ="第一週 🀄 藝FUN券(週三) &";
      showPrize2.textContent ="第二週 🀄 藝FUN券-數位(週三)";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky71)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="第一週 🀄 動滋券(週四) &";
      showPrize2.textContent ="第二週 🀄 國旅券(週一)";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky13)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="🀄 第一週 動滋券(週四) &";
      showPrize2.textContent ="🀄 第二週 農遊券(週三)";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky912)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="🀄 第一週 地方創生券(週五) &"
      showPrize2.textContent ="🀄 第二週 i原券(週二)";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky900)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="🀄 第一週 客庄券(週四) &"
      showPrize2.textContent ="🀄 第二週 藝FUN券-數位(週三)";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(travelW1[i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 國旅卷(第一週)";
    } else if (Number(guess) === Number(travelW2[i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 國旅卷(第二週)";
    } else if (Number(guess) === Number(iCouponW1 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 i原卷(第一週)";
    } else if (Number(guess) === Number(iCouponW2 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 i原卷(第二週)";
    }else if (Number(guess) === Number(agriW1 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 農遊券(第一週)";  
    } else if (Number(guess) === Number(agriW2 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 農遊券(第二週)";
    } else if (Number(guess) === Number(funW1Digi [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 數位藝Fun券(第一週)";  
    } else if (Number(guess) === Number(funW1Paper [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 紙本藝Fun券(第一週)";
    } else if (Number(guess) === Number(funW2Digi [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 數位藝Fun券(第二週)";  
    } else if (Number(guess) === Number(funW2Paper [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 紙本藝Fun券(第二週)";
    } else if (Number(guess) === Number(moveW1 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 動滋券(第一週)";
    } else if (Number(guess) === Number(hakaW1 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 客庄券(第一週)";
    } else if (Number(guess) === Number(localW1 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 地方創生券(第一週)";
    } 
    } 
} 

submit.addEventListener("click",check);
result.style.fontSize = "13px";