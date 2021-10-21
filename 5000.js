const idNumber = document.querySelector(".idNumber");
let result= document.querySelector(".result");
let showResult= document.querySelector(".showResult");
let showPrize= document.querySelector(".showPrize");
let showPrize2= document.querySelector(".showPrize2"); 
let showNumber= document.querySelector(".showNumber");
let showWarn= document.querySelector(".showWarn");
const submit = document.querySelector(".submit");


function check() {
  let guess = idNumber.value;
  let guesson = guess[0];
  let lucky32 = guesson+32;
  let lucky19 = guesson+19;
  let lucky396 = 396;
  let lucky798 = 798;
  let lucky498 = 498;
  let lucky98 = guesson+98;
  let lucky597 = 597;
  let lucky97 = guesson+97;
  let lucky985 = 985;
  let lucky521 = 521;
  let lucky467 = 467;
  let lucky367 = 367;
  let lucky089 = 089;
  let lucky453 = 453;
  let lucky381 = 381;
  let lucky081 = 081;
  let lucky81 = guesson+81;
  let lucky11 = guesson+11;
  let lucky15 = guesson+15;
  let lucky37 = guesson+37;
  let lucky39 = guesson+39;
  let lucky23 = guesson+23;
  let lucky71 = guesson+71;
  let lucky13 = guesson+13;
  let lucky912 = 912;
  let lucky900 = 900;
  let lucky04 = guesson+"0"+4;
  let lucky439 = 439;
  let lucky206 = 206;
  let lucky161 = 161;
  let lucky457 = 457;
  let lucky012 = 012;
  let lucky293 = 293;
  let lucky589 = 589;
  let travelW1 = [guesson+21, guesson+32, guesson +98, guesson+67, guesson+97, 410];
  let travelW2 = [ guesson +"0"+4, guesson+87, guesson +40, guesson +29, guesson+71];
  let iCouponW1 = [guesson+64, guesson+85];
  let iCouponW2 = [guesson+12, guesson+59];
  let agriW1 =  [guesson+89, guesson+32, guesson +54, 597, 453, 152];
  let agriW2 =  [guesson+50, guesson+13];
  let funW1Digi =  [guesson+96, guesson+15, guesson +"0"+7, guesson+30, guesson+73, guesson +98,guesson+19, guesson +11];
  let funW1Paper =  [guesson+39, guesson+37, guesson +23, guesson+36, guesson+79, guesson +"0"+8,guesson+14, guesson +75];
  let funW2Digi =   [guesson+78, guesson+"0"+"0", guesson +39, guesson+22, guesson+61, guesson +23,guesson+15];
  let funW2Paper =   [guesson+37, guesson+76, guesson +31, guesson+"0"+6, guesson +51,guesson+65, guesson +81];
  let moveW1 =  [guesson+97, guesson+13, guesson +19, guesson+55, guesson+71, guesson +93,381, 734, 644, 453, 985];
  let moveW2 =  [guesson+91, guesson+11, guesson +"0"+4, guesson+18, guesson+57, 498, 756];
  let hakaW1 =  [guesson+81, 900];
  let hakaW2 =  [841, 052, 205, 446];
  let localW1 =  [081,105,594,188,089,396,521,467,912,798,358,441,367,941,335];
    showResult.textContent = " " + " " +" " + "🐢 金拍謝！沒中獎～再接再厲啦！";
    showPrize.textContent = "";
    showWarn.textContent ="";
    showPrize2.textContent = "";
    if (guess === "") {
      showResult.textContent = "";
      showPrize.textContent = "";
      showPrize2.textContent = "";
      showWarn.textContent =  "⚠️ "+"  請輸入身分證後三碼⚠️ ";
    } 
  
  for (let i=0; i<localW1.length; i++){
    if(isNaN(Number(guess))) {
      showResult.textContent = "";
      showWarn.textContent =  "⚠️ "+"  請輸入身分證後三碼⚠️ ";
    } else if(guess.length!=3) {
      showResult.textContent = "";
      showWarn.textContent =  "⚠️ "+"   請輸入身分證後三碼⚠️ ";
    } else if (Number(guess) ===Number(lucky32)) {
      showResult.textContent = "恭喜抽到 第一週 ";
      showPrize.textContent ="🀄 國旅券(週二) &";
      showPrize2.textContent ="🀄 農遊券(週三)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    }  else if (Number(guess) ===Number(lucky19)) {
      showResult.textContent = "恭喜抽到 第一週 ";
      showPrize.textContent ="🀄 藝Fun券-數位(週三) &";
      showPrize2.textContent ="🀄 動滋券(週四)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) ===Number(lucky396)) {
      showResult.textContent = "恭喜抽到 第一週 ";
      showPrize.textContent ="🀄 國旅券(週二) &";
      showPrize2.textContent ="🀄 地方創生券(週五)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky798)) {
      showResult.textContent = "恭喜抽到 第一週 ";
      showPrize.textContent ="🀄 國旅券(週二) & 藝FUN券-數位(週三) &";
      showPrize2.textContent ="🀄 地方創生券(週五)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky498)) {
      showResult.textContent = "恭喜抽到 ";
      showPrize.textContent ="🀄 第一週 國旅券(週二) & 藝FUN券-數位(週三)";
      showPrize2.textContent ="🀄 第二週 動滋券(週四)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky98)) {
      showResult.textContent = "恭喜抽到 第一週";
      showPrize.textContent ="🀄 國旅券(週二)";
      showPrize2.textContent ="🀄 藝Fun券-數位(週三)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky597)) {
      showResult.textContent = "恭喜抽到 第一週 ";
      showPrize.textContent ="🀄 國旅券(週二) & 農遊券(週三) &";
      showPrize2.textContent ="🀄  動滋券(週四)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    }else if (Number(guess) === Number(lucky97)) {
      showResult.textContent = "恭喜抽到 第一週 ";
      showPrize.textContent ="🀄 國旅券(週二) &";
      showPrize2.textContent ="🀄 動滋券(週四)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    }else if (Number(guess) === Number(lucky985)) {
      showResult.textContent = "恭喜抽到 第一週 ";
      showPrize.textContent ="🀄 i原券(週二) &";
      showPrize2.textContent ="🀄 動滋券(週四)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    }else if (Number(guess) === Number(lucky521)) {
      showResult.textContent = "恭喜抽到 第一週 ";
      showPrize.textContent ="🀄 國旅券(週二) &";
      showPrize2.textContent ="🀄 地方創生券(週五)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    }else if (Number(guess) === Number(lucky467)) {
      showResult.textContent = "恭喜抽到 第一週 ";
      showPrize.textContent ="🀄 國旅券(週二) &";
      showPrize2.textContent ="🀄 地方創生券(週五)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    }else if (Number(guess) === Number(lucky367)) {
      showResult.textContent = "恭喜抽到 第一週 ";
      showPrize.textContent ="🀄 國旅券(週二) &";
      showPrize2.textContent ="🀄 地方創生券(週五)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    }else if (Number(guess) === Number(lucky089)) {
      showResult.textContent = "恭喜抽到 第一週 ";
      showPrize.textContent ="🀄 農遊券(週三) &";
      showPrize2.textContent ="🀄 地方創生券(週五)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    }else if (Number(guess) === Number(lucky453)) {
      showResult.textContent = "恭喜抽到 第一週 ";
      showPrize.textContent ="🀄 農遊券(週三) &";
      showPrize2.textContent ="🀄 動滋券(週四)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    }else if (Number(guess) === Number(lucky381)) {
      showResult.textContent = "恭喜抽到 ";
      showPrize.textContent ="🀄 第一週(週四) 動滋券 & 客庄券";
      showPrize2.textContent ="🀄 第二週 藝FUN券-紙本(週三)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    }else if (Number(guess) === Number(lucky081)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="🀄 第一週 客庄券(週四) & 地方創生券(週五)";
      showPrize2.textContent ="🀄 第二週 藝FUN券-紙本(週三)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    }else if (Number(guess) === Number(lucky81)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="第一週 🀄 客庄券(週四)";
      showPrize2.textContent ="第二週 🀄 藝FUN券-紙本(週三)";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky11)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="第一週 🀄 藝FUN券-數位(週三)";
      showPrize2.textContent ="第二週(週四) 🀄 動滋券 & 客庄券" ;
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky15)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="第一週 🀄 藝FUN券-數位(週三)";
      showPrize2.textContent ="第二週 🀄 藝FUN券-數位(週三)";
      showWarn.textContent ="每種券別僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky37)) {
      showResult.textContent = "恭喜抽到 ";
      showPrize.textContent =" 第一週 🀄 藝FUN券-紙本(週三)";
      showPrize2.textContent ="第二週 🀄 藝FUN券-數位(週三)";
      showWarn.textContent ="每種券別僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky39)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent =" 第一週 🀄 藝FUN券-紙本(週三)";
      showPrize2.textContent ="第二週 🀄 藝FUN券-數位(週三)";
      showWarn.textContent ="每種券別僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky23)) {
      showResult.textContent = "恭喜抽到  ";
      showPrize.textContent ="第一週 🀄 藝FUN券-紙本(週三)";
      showPrize2.textContent ="第二週 🀄 藝FUN券-數位(週三)";
      showWarn.textContent ="每種券別僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky71)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="第一週 🀄 動滋券(週四)";
      showPrize2.textContent ="第二週 🀄 國旅券(週二)";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky13)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="🀄 第一週 動滋券(週四)";
      showPrize2.textContent ="🀄 第二週 農遊券(週三)";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky912)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="🀄 第一週 地方創生券(週五)"
      showPrize2.textContent ="🀄 第二週 i原券(週二)";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky900)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="🀄 第一週 客庄券(週四)";
      showPrize2.textContent ="🀄 第二週 藝FUN券-數位(週三)";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky04)) {
      showResult.textContent = "恭喜抽到 第二週";
      showPrize.textContent ="🀄 國旅券(週二) &";
      showPrize2.textContent ="🀄 動滋券(週四) ";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky439)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent =" 第一週 🀄 藝FUN券-紙本(週三)";
      showPrize2.textContent ="第二週 🀄 藝FUN券-數位(週三) & 客庄券(週四)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky206)) {
      showResult.textContent = "恭喜抽到 第二週";
      showPrize.textContent ="🀄 藝FUN券-紙本(週三) &";
      showPrize2.textContent ="🀄 客庄券(週四)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky161)) {
      showResult.textContent = "恭喜抽到 第二週";
      showPrize.textContent ="🀄 藝FUN券-數位(週三) &";
      showPrize2.textContent ="🀄 客庄券(週四)";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky457)) {
      showResult.textContent = "恭喜抽到 第二週 (週四)";
      showPrize.textContent ="🀄 動滋券 &";
      showPrize2.textContent ="🀄 客庄券";
      showWarn.textContent ="一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky012)) {
      showResult.textContent = "恭喜抽到 第二週";
      showPrize.textContent = "🀄 i原券(週二) & ";
      showPrize2.textContent = "🀄 客庄券(週四) ";
      showWarn.textContent = "一週僅能中籤一次，實際中獎內容，請依官方簡訊為主。";
    } else if (Number(guess) === Number(lucky293)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="第一週 🀄 動滋券(週四) &";
      showPrize2.textContent ="第二週 🀄 客庄券(週四)";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(lucky589)) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="第一週 🀄 農遊券(週三) &";
      showPrize2.textContent ="第二週 🀄 客庄券(週四) ";
      showWarn.textContent ="跨週中籤超級幸運！快去買樂透吧！";
    } else if (Number(guess) === Number(travelW1[i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent ="🎁 國旅券(第一週)";
    } else if (Number(guess) == Number(travelW2[i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 國旅券(第二週)";
    } else if (Number(guess) === Number(iCouponW1 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 i原券(第一週)";
    } else if (Number(guess) === Number(iCouponW2 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 i原券(第二週)";
    }else if (Number(guess) === Number(agriW1 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 農遊券(第一週)";  
    } else if (Number(guess) === Number(agriW2 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 農遊券(第二週)";
    } else if (Number(guess) === Number(funW1Digi [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 藝Fun券-數位(第一週)";  
    } else if (Number(guess) === Number(funW1Paper [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 藝Fun券-紙本(第一週)";
    } else if (Number(guess) === Number(funW2Digi [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 藝Fun券-數位(第二週)";  
    } else if (Number(guess) === Number(funW2Paper [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 藝Fun券-紙本(第二週)";
    } else if (Number(guess) === Number(moveW1 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 動滋券(第一週)";
    } else if (Number(guess) === Number(moveW2 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 動滋券(第二週)";
    } else if (Number(guess) === Number(hakaW1 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 客庄券(第一週)";
    } else if (Number(guess) === Number(hakaW2 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 客庄券(第二週)";
    } else if (Number(guess) === Number(localW1 [i])) {
      showResult.textContent = "恭喜抽到";
      showPrize.textContent = "🎁 地方創生券(第一週)";
    } 
} 
}
submit.addEventListener("click", check);
result.style.fontSize = "13px";