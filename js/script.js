/* ======================================================
   Raphael Chorus Digital Program
   Version 1.0
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    //--------------------------------------------------
    // 1. details(곡) 하나만 열기
    //--------------------------------------------------

    const details = document.querySelectorAll("details");

    details.forEach(target => {

        target.addEventListener("toggle", () => {

            if (!target.open) return;

            details.forEach(item => {

                if (item !== target) {

                    item.open = false;

                }

            });

        });

    });




    //--------------------------------------------------
    // 2. 부드럽게 열리는 효과
    //--------------------------------------------------

    details.forEach(item => {

        item.addEventListener("toggle", () => {

            if(item.open){

                item.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });




    //--------------------------------------------------
    // 3. 후원버튼 효과
    //--------------------------------------------------

    document.querySelectorAll(".donate").forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.boxShadow="0 0 25px gold";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.boxShadow="none";

        });

    });

});





/*======================================================
        글자크기 조절
======================================================*/

let currentSize=20;

function increaseFont(){

    currentSize+=2;

    document.body.style.fontSize=currentSize+"px";

}

function decreaseFont(){

    if(currentSize>16){

        currentSize-=2;

        document.body.style.fontSize=currentSize+"px";

    }

}

function resetFont(){

    currentSize=20;

    document.body.style.fontSize="20px";

}





/*======================================================
            현재 연주곡 표시
======================================================*/

function highlightSong(songTitle){

    document.querySelectorAll("summary").forEach(item=>{

        item.style.background="";

        item.style.color="";

    });

    document.querySelectorAll("summary").forEach(item=>{

        if(item.innerText.includes(songTitle)){

            item.style.background="#D4AF37";

            item.style.color="#111";

        }

    });

}


/*

사용법

highlightSong("담쟁이");

highlightSong("Ave verum");

highlightSong("Carmina");

*/





/*======================================================
            맨 위 버튼
======================================================*/

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";

topButton.style.right="20px";

topButton.style.bottom="20px";

topButton.style.width="60px";

topButton.style.height="60px";

topButton.style.borderRadius="50%";

topButton.style.fontSize="24px";

topButton.style.background="#D4AF37";

topButton.style.color="#111";

topButton.style.border="none";

topButton.style.cursor="pointer";

topButton.style.display="none";

topButton.style.zIndex="9999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};





/*======================================================
      공연중 화면 꺼짐 방지
======================================================*/

let wakeLock=null;

async function requestWakeLock(){

    try{

        if('wakeLock' in navigator){

            wakeLock=await navigator.wakeLock.request('screen');

            console.log("Wake Lock 활성");

        }

    }

    catch(e){

        console.log(e);

    }

}

requestWakeLock();

document.addEventListener("visibilitychange",()=>{

    if(document.visibilityState==="visible"){

        requestWakeLock();

    }

});
