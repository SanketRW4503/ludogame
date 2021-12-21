

        let red=1;
        let green=2;
        let yellow=3;
        let blue=4;

    let player1 ={
        name:''
        ,p1score:0,
        p2score:0,p3score:0,p4score:0
    }

    let p1={
        openn:0,identifier1:0 , identifier3:0
        , identifier2:0, identifier4:0 
    }
    let p2 ={
        openn:0,identifier1:0 , identifier3:0
        , identifier2:0, identifier4:0 
    } 
    let p3={
        openn:0,identifier1:0 , identifier3:0
        , identifier2:0, identifier4:0 
    }
    let p4={
        openn:0,identifier1:0 , identifier3:0
        , identifier2:0, identifier4:0 
    }

    let player2 ={
        name:'',p1score:0,
        p2score:0,p3score:0,p4score:0
    }
    let player3 ={
        name:'',p1score:0,
        p2score:0,p3score:0,p4score:0  
        
    }
    let player4 ={
        name:'',p1score:0,
        p2score:0,p3score:0,p4score:0
    }

    let gamadata={
        totalPlayers:0,
        playerDie:1
        ,blinkdata:"",
        currentdiceValue:0

    }
    let order ={
        first:"",second:"",third:"",fourth:""
    }

    let home={
        p1p1:false,
        p1p2:false, p1p3:false,
        p1p4:false,

        p2p1:false,
        p2p2:false, p2p3:false,
        p2p4:false,
        
        p3p1:false,
        p3p2:false, p3p3:false,
        p3p4:false,

        p4p1:false,
        p4p2:false, p4p3:false,
        p4p4:false,
    }
    let winners={
        p11:false, p22:false,
        p33:false, p44:false,
        
    }

    
    names=document.getElementsByClassName('nameclass');


        
    function fun1(){
    let d = document.getElementsByClassName('r');
    for(i=0;i<d.length;i++){

        if(d[i].checked){
            let passValue=i+2;
                fun2(passValue);
        };
    }

    }
    function fun2(paraValue){
        document.getElementById('takeDATA').style.display='none';
        document.getElementById('takeDATA2').style.display='block';


        for(i=0;i<4;i++){
        document.getElementsByClassName('nameclass')[i].style.display='none';
        }

        for(let k=0;k<paraValue;k++){
            document.getElementsByClassName('nameclass')[k].style.display='block';

        }

    document.getElementById('takeDATA2').setAttribute('style','display:flex ;flex-direction:column;')


        

    }   
    

function fun3(){
    document.getElementById('takeDATA2').style.display='none';
    let totalNames=document.getElementsByClassName('nameclass');
    for(let i=0;i<4;i++){
    if(totalNames[i].value!=""){
        gamadata.totalPlayers+=1;
        console.log(gamadata.totalPlayers)

    }
    }
    document.getElementById('mainGame').style.display="block";
        // document.getElementById('dice').style.display="block";
    
        let allcolors= document.getElementsByClassName('playerDIE');

           


        for(let i =0;i<allcolors.length;i++){

            allcolors[i].style.display='none';
            document.getElementsByClassName('p')[i].setAttribute("style","display: flex;justify-content: center;align-items: center;")
        }


        if(gamadata.totalPlayers==4){
            player1.name= document.getElementsByClassName('nameclass')[0].value;
            player2.name= document.getElementsByClassName('nameclass')[1].value;
            player3.name= document.getElementsByClassName('nameclass')[2].value;
            player4.name= document.getElementsByClassName('nameclass')[3].value;
//playernames:
            document.getElementById('pname1').innerHTML= player1.name;
            document.getElementById('pname2').innerHTML= player2.name;
            document.getElementById('pname3').innerHTML= player3.name;
            document.getElementById('pname4').innerHTML= player4.name;
            document.getElementsByClassName('p')[0].append(allcolors[0]); 

            document.getElementsByClassName('p')[1].append(allcolors[1]); 
            document.getElementsByClassName('p')[2].append(allcolors[2]); 
            document.getElementsByClassName('p')[3].append(allcolors[3]);
            document.getElementsByClassName('p')[4].append(allcolors[4]); 

            document.getElementsByClassName('p')[5].append(allcolors[5]); 
            document.getElementsByClassName('p')[6].append(allcolors[6]);
            document.getElementsByClassName('p')[7].append(allcolors[7]); 
            document.getElementsByClassName('p')[8].append(allcolors[8]); 
            document.getElementsByClassName('p')[9].append(allcolors[9]); 
            document.getElementsByClassName('p')[10].append(allcolors[10]); 
            document.getElementsByClassName('p')[11].append(allcolors[11]);
            document.getElementsByClassName('p')[12].append(allcolors[12]); 
            document.getElementsByClassName('p')[13].append(allcolors[13]); 
            document.getElementsByClassName('p')[14].append(allcolors[14]); 
            document.getElementsByClassName('p')[15].append(allcolors[15]); 
            
            

        // playerplayinglogic

            for(let i =0;i<allcolors.length;i++){

            allcolors[i].style.display='block';
        
            }


        }else if(gamadata.totalPlayers==3){
            player1.name= document.getElementsByClassName('nameclass')[0].value;
            player2.name= document.getElementsByClassName('nameclass')[1].value;
            player3.name= document.getElementsByClassName('nameclass')[2].value;

            //playername:
            document.getElementById('pname1').innerHTML= player1.name;
            document.getElementById('pname2').innerHTML= player2.name;
            document.getElementById('pname4').innerHTML= player3.name;
            document.getElementById('pname3').innerHTML= player4.name;

            //ss
            document.getElementsByClassName('p')[0].append(allcolors[0]); 
            document.getElementsByClassName('p')[1].append(allcolors[1]); 
            document.getElementsByClassName('p')[2].append(allcolors[2]); 
            document.getElementsByClassName('p')[3].append(allcolors[3]);
            document.getElementsByClassName('p')[4].append(allcolors[4]); 

            document.getElementsByClassName('p')[5].append(allcolors[5]); 
            document.getElementsByClassName('p')[6].append(allcolors[6]);
            document.getElementsByClassName('p')[7].append(allcolors[7]); 
        
            document.getElementsByClassName('p')[12].append(allcolors[12]); 
            document.getElementsByClassName('p')[13].append(allcolors[13]); 
            document.getElementsByClassName('p')[14].append(allcolors[14]); 
            document.getElementsByClassName('p')[15].append(allcolors[15]);
            //playing logic
            for(let i =0;i<allcolors.length-4;i++){

            allcolors[i].style.display='block';
             }

        }else{

            player1.name= document.getElementsByClassName('nameclass')[0].value;
            player2.name= document.getElementsByClassName('nameclass')[1].value;
            //playername
            document.getElementById('pname1').innerHTML= player1.name;
            document.getElementById('pname2').innerHTML= player2.name;

            // ss
            
            document.getElementsByClassName('p')[0].append(allcolors[0]); 
            document.getElementsByClassName('p')[1].append(allcolors[1]); 
            document.getElementsByClassName('p')[2].append(allcolors[2]); 
            document.getElementsByClassName('p')[3].append(allcolors[3]);
            document.getElementsByClassName('p')[4].append(allcolors[4]); 

            document.getElementsByClassName('p')[5].append(allcolors[5]); 
            document.getElementsByClassName('p')[6].append(allcolors[6]);
            document.getElementsByClassName('p')[7].append(allcolors[7]); 
            // playingLogic
            for(let i =0;i<allcolors.length-8;i++){

                allcolors[i].style.display='block';
                }

        }
 


    }

     

  

    function dice(){

        clearInterval(gamadata.blinkdata);
        let dataa;
        call();
     
       function call(){
         dataa= Math.ceil(Math.random()*6);
        console.log(dataa);
        if(dataa!=6){
        if (gamadata.currentdiceValue==dataa){
            call();
        }
        }
       }

        
     
        gamadata.currentdiceValue=dataa;
        // gamadata.currentdiceValue=document.getElementById('testing').value;
    

        
        let xvalue;
            let yvalue;
            if (dataa==1){
                xvalue=360;
                yvalue=360;
            }else if(dataa==2){
                xvalue=180;
                yvalue=360;
            }else if(dataa==3){
                xvalue=360;
                yvalue=270;
            }else if(dataa==4){
                xvalue=360;
                yvalue=90;
            }else if(dataa==5){
                xvalue=270;
                yvalue=90;
            }else if(dataa==6){
                xvalue=450;
                yvalue=180;
            }
                
            document.getElementById('dice').style.transform = 'rotateX('+xvalue+'deg) rotateY('+yvalue+'deg)';

        
        


      
        checkDIE();
     
  

    }
    setInterval(setPosition,4000);



    function setPosition(){
    for (let i=1;i<4;i++){
    if(gamadata.playerDie==2){
            document.getElementById('container').setAttribute('style','left:85%; right:0px; top:-10px;');

        }else    if(gamadata.playerDie==3){
            document.getElementById('container').setAttribute('style','left:85%; right:0px; top:116%; bottom:-15px;');

        }else if(gamadata.playerDie==4){
            document.getElementById('container').setAttribute('style','left:0px; right:none; top:116%; bottom:-15px;');


        }else {
            document.getElementById('container').setAttribute('style','left:0px; right:none, top:-15px');


        }
    
   
}
}
  
                
 


   function  checkDIE(){

    console.log(gamadata.playerDie);


    if (gamadata.totalPlayers==4){
        console.log("done");
    }else if (gamadata.totalPlayers==3){
        if (gamadata.playerDie==4){
            gamadata.playerDie=1;
        }
    }else if (gamadata.totalPlayers==2){
        if (gamadata.playerDie==3){
            gamadata.playerDie=1;
        }
    }
    
    if(gamadata.playerDie==1){
        if(winners.p11==true){
            gamadata.playerDie+=1;
        }
    }
     if (gamadata.playerDie==2){
        if(winners.p22==true){
            gamadata.playerDie+=1;
        } }

        if(gamadata.playerDie==3){ if(winners.p33==true){
            gamadata.playerDie+=1;
        }}
     if(gamadata.playerDie==4){ if(winners.p44==true){
            gamadata.playerDie=1;
        }
    }

     console.log(gamadata.playerDie);
     if (parseInt( player1.p1score) + parseInt( player1.p2score) + parseInt( player1.p3score) + parseInt( player1.p4score )==0){
                        p1.openn=0; p1.identifier1=0; p1.identifier2=0; p1.identifier3; p1.identifier4=0;
                    }

    if(home.p1p1==true &&parseInt( player1.p2score) + parseInt( player1.p3score) + parseInt( player1.p4score )==0 ){
        p1.openn=0;  p1.identifier2=0; p1.identifier3; p1.identifier4=0;

    }
    if(home.p1p1==true && home.p1p2==true&&  parseInt( player1.p3score) + parseInt( player1.p4score )==0 ){
        p1.openn=0;  p1.identifier3; p1.identifier4=0;

    }
    if(home.p1p1==true && home.p1p2==true&&  home.p1p3==true && parseInt( player1.p4score )==0 ){
        p1.openn=0;  p1.identifier4=0;

    }
    if (parseInt( player1.p1score) + parseInt( player1.p2score) + parseInt( player1.p3score) ==0 && home.p1p4==true){
                        p1.openn=0;  p1.identifier4=0;
                    }
    if (parseInt( player1.p1score) + parseInt( player1.p2score) ==0 && home.p1p3==true && home.p1p4==true){
                        p1.openn=0;  p1.identifier3; p1.identifier4=0;
                    }
    if (parseInt( player1.p1score) ==0 &&home.p1p2==true && home.p1p3==true && home.p1p4==true){
                        p1.openn=0;  p1.identifier2=0; p1.identifier3; p1.identifier4=0;
    }
    if (parseInt( player1.p1score) +  parseInt( player1.p3score) + parseInt( player1.p4score )==0 &&home.p1p2==true){
                        p1.openn=0; p1.identifier1=0;  p1.identifier3; p1.identifier4=0;
                    }  
    if (parseInt( player1.p1score) + parseInt( player1.p2score) +  parseInt( player1.p4score )==0 && home.p1p3==true){
                        p1.openn=0; p1.identifier1=0; p1.identifier2=0;  p1.identifier4=0;
                    }
    if (parseInt( player1.p1score) +  parseInt( player1.p4score )==0 && home.p1p2==true && home.p1p3==true){
                        p1.openn=0; p1.identifier1=0; p1.identifier2=0; p1.identifier3; p1.identifier4=0;
    }

  
    

//player2
    if (parseInt( player2.p1score) + parseInt( player2.p2score)+ parseInt( player2.p3score)+ parseInt(player2.p4score)==0){
        p2.openn=0; p2.identifier1=0; p2.identifier2=0; p2.identifier3; p2.identifier4=0;
    }

    
    if(home.p2p1==true &&parseInt( player2.p2score) + parseInt( player2.p3score) + parseInt( player2.p4score )==0 ){
        p2.openn=0;  p2.identifier2=0; p2.identifier3; p2.identifier4=0;

    }
    if(home.p2p1==true && home.p2p2==true&&  parseInt( player2.p3score) + parseInt( player2.p4score )==0 ){
        p2.openn=0;  p2.identifier3; p2.identifier4=0;

    }
    if(home.p2p1==true && home.p2p2==true&&  home.p2p3==true && parseInt( player2.p4score )==0 ){
        p2.openn=0;  p2.identifier4=0;

    }
    if (parseInt( player2.p1score) + parseInt( player2.p2score) + parseInt( player2.p3score) ==0 && home.p2p4==true){
                        p2.openn=0;  p2.identifier4=0;
                    }
    if (parseInt( player2.p1score) + parseInt( player2.p2score) ==0 && home.p2p3==true && home.p2p4==true){
                        p2.openn=0;  p2.identifier3; p2.identifier4=0;
                    }
    if (parseInt( player2.p1score) ==0 &&home.p2p2==true && home.p2p3==true && home.p2p4==true){
                        p2.openn=0;  p2.identifier2=0; p2.identifier3; p2.identifier4=0;
    }
    if (parseInt( player2.p1score) +  parseInt( player2.p3score) + parseInt( player2.p4score )==0 &&home.p2p2==true){
                        p2.openn=0; p2.identifier1=0;  p2.identifier3; p2.identifier4=0;
                    }  
    if (parseInt( player2.p1score) + parseInt( player2.p2score) +  parseInt( player2.p4score )==0 && home.p2p3==true){
                        p2.openn=0; p2.identifier1=0; p2.identifier2=0;  p2.identifier4=0;
                    }
    if (parseInt( player2.p1score) +  parseInt( player2.p4score )==0 && home.p2p2==true && home.p2p3==true){
                        p2.openn=0; p2.identifier1=0; p2.identifier2=0; p2.identifier3; p2.identifier4=0;
    }


//player 3
    if (parseInt( player3.p1score)+ parseInt( player3.p2score)+ parseInt( player3.p3score)+ parseInt( player3.p4score )==0){
                        p3.openn=0; p3.identifier1=0; p3.identifier2=0; p3.identifier3; p3.identifier4=0;
                    }
    
                    if(home.p3p1==true &&parseInt( player3.p2score) + parseInt( player3.p3score) + parseInt( player3.p4score )==0 ){
        p3.openn=0;  p3.identifier2=0; p3.identifier3; p3.identifier4=0;

    }
    if(home.p3p1==true && home.p3p2==true&&  parseInt( player3.p3score) + parseInt( player3.p4score )==0 ){
        p3.openn=0;  p3.identifier3; p3.identifier4=0;

    }
    if(home.p3p1==true && home.p3p2==true&&  home.p3p3==true && parseInt( player3.p4score )==0 ){
        p3.openn=0;  p3.identifier4=0;

    }
    if (parseInt( player3.p1score) + parseInt( player3.p2score) + parseInt( player3.p3score) ==0 && home.p3p4==true){
                        p3.openn=0;  p3.identifier4=0;
                    }
    if (parseInt( player3.p1score) + parseInt( player3.p2score) ==0 && home.p3p3==true && home.p3p4==true){
                        p3.openn=0;  p3.identifier3; p3.identifier4=0;
                    }
    if (parseInt( player3.p1score) ==0 &&home.p3p2==true && home.p3p3==true && home.p3p4==true){
                        p3.openn=0;  p3.identifier2=0; p3.identifier3; p3.identifier4=0;
    }
    if (parseInt( player3.p1score) +  parseInt( player3.p3score) + parseInt( player3.p4score )==0 &&home.p3p2==true){
                        p3.openn=0; p3.identifier1=0;  p3.identifier3; p3.identifier4=0;
                    }  
    if (parseInt( player3.p1score) + parseInt( player3.p2score) +  parseInt( player3.p4score )==0 && home.p3p3==true){
                        p3.openn=0; p3.identifier1=0; p3.identifier2=0;  p3.identifier4=0;
                    }
    if (parseInt( player3.p1score) +  parseInt( player3.p4score )==0 && home.p3p2==true && home.p3p3==true){
                        p3.openn=0; p3.identifier1=0; p3.identifier2=0; p3.identifier3; p3.identifier4=0;
    }


    //player4
    if (parseInt( player4.p1score)+ parseInt( player4.p2score)+ parseInt( player4.p3score)+ parseInt( player4.p4score )==0){
        p4.openn=0; p4.identifier1=0; p4.identifier2=0; p4.identifier3; p4.identifier4=0;
    }

  
    
    if(home.p4p1==true &&parseInt( player4.p2score) + parseInt( player4.p3score) + parseInt( player4.p4score )==0 ){
p4.openn=0;  p4.identifier2=0; p4.identifier3; p4.identifier4=0;

}
if(home.p4p1==true && home.p4p2==true&&  parseInt( player4.p3score) + parseInt( player4.p4score )==0 ){
p4.openn=0;  p4.identifier3; p4.identifier4=0;

}
if(home.p4p1==true && home.p4p2==true&&  home.p4p3==true && parseInt( player4.p4score )==0 ){
p4.openn=0;  p4.identifier4=0;

}
if (parseInt( player4.p1score) + parseInt( player4.p2score) + parseInt( player4.p3score) ==0 && home.p4p4==true){
        p4.openn=0;  p4.identifier4=0;
    }
if (parseInt( player4.p1score) + parseInt( player4.p2score) ==0 && home.p4p3==true && home.p4p4==true){
        p4.openn=0;  p4.identifier3; p4.identifier4=0;
    }
if (parseInt( player4.p1score) ==0 &&home.p4p2==true && home.p4p3==true && home.p4p4==true){
        p4.openn=0;  p4.identifier2=0; p4.identifier3; p4.identifier4=0;
}
if (parseInt( player4.p1score) +  parseInt( player4.p3score) + parseInt( player4.p4score )==0 &&home.p4p2==true){
        p4.openn=0; p4.identifier1=0;  p4.identifier3; p4.identifier4=0;
    }  
if (parseInt( player3.p1score) + parseInt( player4.p2score) +  parseInt( player4.p4score )==0 && home.p4p3==true){
        p4.openn=0; p4.identifier1=0; p4.identifier2=0;  p4.identifier4=0;
    }
if (parseInt( player4.p1score) +  parseInt( player4.p4score )==0 && home.p4p2==true && home.p4p3==true){
        p4.openn=0; p4.identifier1=0; p4.identifier2=0; p4.identifier3; p4.identifier4=0;
}
    

   


     if(gamadata.playerDie==1 ){
        if (winners.p11!=true){
        if(gamadata.currentdiceValue==6){
            gamadata.blinkdata= setInterval(redblink,1000);

        }else{
            if(p1.openn==1){
                gamadata.blinkdata= setInterval(redblink,1000);
            }else
                if(gamadata.playerDie==4){
        gamadata.playerDie=1;
         }else{
        gamadata.playerDie+=1;
    }
            }
        
        }else {
            gamadata.playerDie+=1;
        }

     }else if(gamadata.playerDie==2){
         if (winners.p22!=true){

        if(gamadata.currentdiceValue==6){
            gamadata.blinkdata= setInterval(greenblink,1000);

        }else{
            if(p2.openn==1){
                gamadata.blinkdata= setInterval(greenblink,1000);
            } else  if(gamadata.playerDie==4){
        gamadata.playerDie=1;
    }else{
        gamadata.playerDie+=1;

        if (gamadata.totalPlayers==4){
        console.log("done");
    }else if (gamadata.totalPlayers==3){
        if (gamadata.playerDie==4){
            gamadata.playerDie=1;
        }
    }else if (gamadata.totalPlayers==2){
        if (gamadata.playerDie==3){
            gamadata.playerDie=1;
        }
    }
    }
        }


        if(player2.p1score>63){
        if(parseInt(player2.p1score)+parseInt(gamadata.currentdiceValue)!=70){
            gamadata.playerDie+=1;
        } if(player2.p1score==70){
            gamadata.playerDie-=1;
        }
        }else if(player2.p2score>63){
        if(parseInt(player2.p2score)+parseInt(gamadata.currentdiceValue)!=70){
            gamadata.playerDie+=1;
        } if(player2.p2score==70){
            gamadata.playerDie-=1;
        }
    }else if(player2.p3score>63){
        if(parseInt(player2.p3score)+parseInt(gamadata.currentdiceValue)!=70){
            gamadata.playerDie+=1;
        }  if(player2.p3score==70){
            gamadata.playerDie-=1;
        }
    }else  if(player2.p4score>63){
        if(parseInt(player2.p4score)+parseInt(gamadata.currentdiceValue)!=70){
            gamadata.playerDie+=1;
        }  if(player2.p4score==70){
            gamadata.playerDie-=1;
        }
    }
        // gamadata.playerDie=3;
         }else{
             gamadata.playerDie+=1;
         }
      }else if(gamadata.playerDie==3){
         if (winners.p33!=true){
        if(gamadata.currentdiceValue==6){
            gamadata.blinkdata= setInterval(yellowblink,1000);

        }else{
            if(p3.openn==1){
                gamadata.blinkdata= setInterval(yellowblink,1000);
            }else   if(gamadata.playerDie==4){
        gamadata.playerDie=1;
    }else{
        gamadata.playerDie+=1;
        if (gamadata.totalPlayers==4){
        console.log("done");
    }else if (gamadata.totalPlayers==3){
        if (gamadata.playerDie==4){
            gamadata.playerDie=1;
        }
    }else if (gamadata.totalPlayers==2){
        if (gamadata.playerDie==3){
            gamadata.playerDie=1;
        }
    }
    }
        }
        // gamadata.playerDie=4;

      }else {
                    gamadata.playerDie+=1;
      }}else{

    if(winners.p44!=true){
        if(gamadata.currentdiceValue==6){
            gamadata.blinkdata= setInterval(blueblink,1000);

        }else{
            if(p4.openn==1){
                gamadata.blinkdata= setInterval(blueblink,1000);
            }else   if(gamadata.playerDie==4){
        gamadata.playerDie=1;
    }else{
        gamadata.playerDie=1;
        if (gamadata.totalPlayers==4){
        console.log("done");
    }else if (gamadata.totalPlayers==3){
        if (gamadata.playerDie==4){
            gamadata.playerDie=1;
        }
    }else if (gamadata.totalPlayers==2){
        if (gamadata.playerDie==3){
            gamadata.playerDie=1;
        }
    }
    }
        }
            }else{
                gamadata.playerDie=1;
            }        // gamadata.playerDie=1;
    }

    



}


    function redblink(){
        if(player1.p1score!=0){
            if (p1.identifier1==1){
                if(player1.p1score>51){
            if(parseInt(player1.p1score)+parseInt(gamadata.currentdiceValue)==57){
        $('#red1').fadeOut(500);
        $('#red1').fadeIn(500);
            }
            }else{
        $('#red1').fadeOut(500);
        $('#red1').fadeIn(500);
            }
        }else{
        $('#red1').fadeOut(500);
        $('#red1').fadeIn(500);
        }
        
        }else if (gamadata.currentdiceValue==6){
            if(p1.identifier1!=1){
                $('#red1').fadeOut(500);
                $('#red1').fadeIn(500);
            }else{
                if(player1.p1score<51){
                $('#red1').fadeOut(500);
                $('#red1').fadeIn(500);
                }
            }

        }

        if(player1.p2score!=0){
            if (p1.identifier2==1){
                if(player1.p2score>51){
            if(parseInt(player1.p2score)+parseInt(gamadata.currentdiceValue)==57){
        $('#red2').fadeOut(500);
        $('#red2').fadeIn(500);
            }
            }else{
        $('#red2').fadeOut(500);
        $('#red2').fadeIn(500);
            }
        }else{
        $('#red2').fadeOut(500);
        $('#red2').fadeIn(500);
        }
        
        }else if (gamadata.currentdiceValue==6){
            if(p1.identifier2!=1){
                $('#red2').fadeOut(500);
                $('#red2').fadeIn(500);
            }else{
                if(player1.p2score<51){
                $('#red2').fadeOut(500);
                $('#red2').fadeIn(500);
                }
            }

        }

        if(player1.p3score!=0){
            if (p1.identifier3==1){
                if(player1.p3score>51){
            if(parseInt(player1.p3score)+parseInt(gamadata.currentdiceValue)==57){
        $('#red3').fadeOut(500);
        $('#red3').fadeIn(500);
            }
            }else{
        $('#red3').fadeOut(500);
        $('#red3').fadeIn(500);
            }
        }else{
        $('#red3').fadeOut(500);
        $('#red3').fadeIn(500);
        }
        
        }else if (gamadata.currentdiceValue==6){
            if(p1.identifier3!=1){
                $('#red3').fadeOut(500);
                $('#red3').fadeIn(500);
            }else{
                if(player1.p3score<51){
                $('#red3').fadeOut(500);
                $('#red3').fadeIn(500);
                }
            }

        }

        if(player1.p4score!=0){
            if (p1.identifier4==1){
                if(player1.p4score>51){
            if(parseInt(player1.p4score)+parseInt(gamadata.currentdiceValue)==57){
        $('#red4').fadeOut(500);
        $('#red4').fadeIn(500);
            }
            }else{
        $('#red4').fadeOut(500);
        $('#red4').fadeIn(500);
            }
        }else{
        $('#red4').fadeOut(500);
        $('#red4').fadeIn(500);
        }
        
        }else if (gamadata.currentdiceValue==6){
            if(p1.identifier4!=1){
                $('#red4').fadeOut(500);
                $('#red4').fadeIn(500);
            }else{
                if(player1.p4score<51){
                $('#red4').fadeOut(500);
                $('#red4').fadeIn(500);
                }
            }

        }
    }
    function greenblink(){
        if(player2.p1score!=0){
            if(parseInt( player2.p1score)+parseInt( gamadata.currentdiceValue)==70){
        $('#green1').fadeOut(500);
        $('#green1').fadeIn(500);
            }
        if(player2.p1score<64){
            $('#green1').fadeOut(500);
        $('#green1').fadeIn(500);
        }
        }else if(gamadata.currentdiceValue==6){
        $('#green1').fadeOut(500);
        $('#green1').fadeIn(500)
        }


        if(player2.p2score!=0){
            if(parseInt( player2.p2score)+parseInt( gamadata.currentdiceValue)==70){
        $('#green2').fadeOut(500);
        $('#green2').fadeIn(500);
            }
        if(player2.p2score<64){
            $('#green2').fadeOut(500);
        $('#green2').fadeIn(500);
        }
        }else if(gamadata.currentdiceValue==6){
        $('#green2').fadeOut(500);
        $('#green2').fadeIn(500)
        }


        if(player2.p3score!=0){
            if(parseInt( player2.p3score)+parseInt( gamadata.currentdiceValue)==70){
        $('#green3').fadeOut(500);
        $('#green3').fadeIn(500);
            }
        if(player2.p3score<64){
            $('#green3').fadeOut(500);
        $('#green3').fadeIn(500);
        }
        }else if(gamadata.currentdiceValue==6){
        $('#green3').fadeOut(500);
        $('#green3').fadeIn(500)
        }

        if(player2.p4score!=0){
            if(parseInt( player2.p4score)+parseInt( gamadata.currentdiceValue)==70){
        $('#green4').fadeOut(500);
        $('#green4').fadeIn(500);
            }
        if(player2.p4score<64){
            $('#green4').fadeOut(500);
        $('#green4').fadeIn(500);
        }
        }else if(gamadata.currentdiceValue==6){
        $('#green4').fadeOut(500);
        $('#green4').fadeIn(500);
        }

        
}
    function yellowblink(){
        if(player3.p1score!=0){
            if (p3.identifier1==1){
                if(player3.p1score>25){
            if(parseInt(player3.p1score)+parseInt(gamadata.currentdiceValue)==31){
        $('#yellow1').fadeOut(500);
        $('#yellow1').fadeIn(500);
            }
            }else{
        $('#yellow1').fadeOut(500);
        $('#yellow1').fadeIn(500);
            }
        }else{
        $('#yellow1').fadeOut(500);
        $('#yellow1').fadeIn(500);
        }
        
        }else if (gamadata.currentdiceValue==6){
            if(p3.identifier1!=1){
                $('#yellow1').fadeOut(500);
                $('#yellow1').fadeIn(500);
            }else{
                if(player3.p1score<25){
                $('#yellow1').fadeOut(500);
                $('#yellow1').fadeIn(500);
                }
            }

        }

        if(player3.p2score!=0){
            if (p3.identifier2==1){
                if(player3.p2score>25){
            if(parseInt(player3.p2score)+parseInt(gamadata.currentdiceValue)==31){
        $('#yellow2').fadeOut(500);
        $('#yellow2').fadeIn(500);
            }
            }else{
        $('#yellow2').fadeOut(500);
        $('#yellow2').fadeIn(500);
            }
        }else{
        $('#yellow2').fadeOut(500);
        $('#yellow2').fadeIn(500);
        }
        
        }else if (gamadata.currentdiceValue==6){
            if(p3.identifier2!=1){
                $('#yellow2').fadeOut(500);
                $('#yellow2').fadeIn(500);
            }else{
                if(player3.p2score<25){
                $('#yellow2').fadeOut(500);
                $('#yellow2').fadeIn(500);
                }
            }

        }

        if(player3.p3score!=0){
            if (p3.identifier3==1){
                if(player3.p3score>25){
            if(parseInt(player3.p3score)+parseInt(gamadata.currentdiceValue)==31){
        $('#yellow3').fadeOut(500);
        $('#yellow3').fadeIn(500);
            }
            }else{
        $('#yellow3').fadeOut(500);
        $('#yellow3').fadeIn(500);
            }
        }else{
        $('#yellow3').fadeOut(500);
        $('#yellow3').fadeIn(500);
        }
        
        }else if (gamadata.currentdiceValue==6){
            if(p3.identifier3!=1){
                $('#yellow3').fadeOut(500);
                $('#yellow3').fadeIn(500);
            }else{
                if(player3.p3score<25){
                $('#yellow3').fadeOut(500);
                $('#yellow3').fadeIn(500);
                }
            }
        }

        if(player3.p4score!=0){
            if (p3.identifier4==1){
                if(player3.p4score>25){
            if(parseInt(player3.p4score)+parseInt(gamadata.currentdiceValue)==31){
        $('#yellow4').fadeOut(500);
        $('#yellow4').fadeIn(500);
            }
            }else{
        $('#yellow4').fadeOut(500);
        $('#yellow4').fadeIn(500);
            }
        }else{
        $('#yellow4').fadeOut(500);
        $('#yellow4').fadeIn(500);
        }
        
        }else if (gamadata.currentdiceValue==6){
            if(p3.identifier4!=1){
                $('#yellow4').fadeOut(500);
                $('#yellow4').fadeIn(500);
            }else{
                if(player3.p4score<25){
                $('#yellow4').fadeOut(500);
                $('#yellow4').fadeIn(500);
                }
            }
        }

      
    }  
    
    
    function blueblink(){

        if(player4.p1score!=0){
            if (p4.identifier1==1){
                if(player4.p1score>38){
            if(parseInt(player4.p1score)+parseInt(gamadata.currentdiceValue)==44){
        $('#blue1').fadeOut(500);
        $('#blue1').fadeIn(500);
            }
            }else{
        $('#blue1').fadeOut(500);
        $('#blue1').fadeIn(500);
            }
        }else{
        $('#blue1').fadeOut(500);
        $('#blue1').fadeIn(500);
        }
        
        }else if (gamadata.currentdiceValue==6){
            if(p4.identifier1!=1){
                $('#blue1').fadeOut(500);
                $('#blue1').fadeIn(500);
            }else{
                if(player4.p1score<38){
                $('#blue1').fadeOut(500);
                $('#blue1').fadeIn(500);
                }
            }

        }


        if(player4.p2score!=0){
            if (p4.identifier2==1){
                if(player4.p2score>38){
            if(parseInt(player4.p2score)+parseInt(gamadata.currentdiceValue)==44){
        $('#blue2').fadeOut(500);
        $('#blue2').fadeIn(500);
            }
            }else{
        $('#blue2').fadeOut(500);
        $('#blue2').fadeIn(500);
            }
        }else{
        $('#blue2').fadeOut(500);
        $('#blue2').fadeIn(500);
        }
        
        }else if (gamadata.currentdiceValue==6){
            if(p4.identifier2!=1){
                $('#blue2').fadeOut(500);
                $('#blue2').fadeIn(500);
            }else{
                if(player4.p2score<38){
                $('#blue2').fadeOut(500);
                $('#blue2').fadeIn(500);
                }
            }

        }

        if(player4.p3score!=0){
            if (p4.identifier3==1){
                if(player4.p3score>38){
            if(parseInt(player4.p3score)+parseInt(gamadata.currentdiceValue)==44){
        $('#blue3').fadeOut(500);
        $('#blue3').fadeIn(500);
            }
            }else{
        $('#blue3').fadeOut(500);
        $('#blue3').fadeIn(500);
            }
        }else{
        $('#blue3').fadeOut(500);
        $('#blue3').fadeIn(500);
        }
        
        }else if (gamadata.currentdiceValue==6){
            if(p4.identifier3!=1){
                $('#blue3').fadeOut(500);
                $('#blue3').fadeIn(500);
            }else{
                if(player4.p3score<38){
                $('#blue3').fadeOut(500);
                $('#blue3').fadeIn(500);
                }
            }

        }

        if(player4.p4score!=0){
            if (p4.identifier4==1){
                if(player4.p4score>38){
            if(parseInt(player4.p4score)+parseInt(gamadata.currentdiceValue)==44){
        $('#blue4').fadeOut(500);
        $('#blue4').fadeIn(500);
            }
            }else{
        $('#blue4').fadeOut(500);
        $('#blue4').fadeIn(500);
            }
        }else{
        $('#blue4').fadeOut(500);
        $('#blue4').fadeIn(500);
        }
        
        }else if (gamadata.currentdiceValue==6){
            if(p4.identifier4!=1){
                $('#blue4').fadeOut(500);
                $('#blue4').fadeIn(500);
            }else{
                if(player4.p4score<38){
                $('#blue4').fadeOut(500);
                $('#blue4').fadeIn(500);
                }
            }

        }


    }


   
    function rungreen(idd){
        console.log(gamadata.playerDie)
        if(gamadata.playerDie==2){
            clearInterval(gamadata.blinkdata);

            if(idd=='green1'){
                clearInterval(gamadata.blinkdata);

                if(player2.p1score==0){
                    if(gamadata.currentdiceValue==6){
                    document.getElementById('k14').append(document.getElementById('green1'));
                    player2.p1score=14;
                    greensize();
                    kill2();
                    safe();
                    }
                }else{
                    
                    let data1= parseInt(gamadata.currentdiceValue) ;
                   
                    let data2 =player2.p1score;
                
                    let data3= data1 + data2;

                    if(data3>70){
                        data3-=data1;
                    }
                    let datee= "k"+data3;
                    console.log(datee)

                  console.log("data3:"+data3);


                    player2.p1score+=data1;
                  if(player2.p1score>70){
                      player2.p1score-=data1;
                  } 

                  let killchecking= kill2();
                 if(killchecking==true){
                    gamadata.playerDie=2;
                 }else{
                     gamadata.playerDie+=1;
                 }
                  if(player2.p1score!=70){
                      document.getElementById(datee).append(document.getElementById('green1'));
                  }else{
                      document.getElementById('centerDiv').append(document.getElementById('green1'));
                      home.p2p1=true;
                      gamadata.playerDie=2;
                      wincheck();

                  }
                  
                  greensize();
                  safe();

            

                clearInterval(gamadata.blinkdata);

            }
            
            if(gamadata.currentdiceValue==6){
                    gamadata.playerDie=2;
                    console.log("this is die is 2");
                    p2.openn=1;
                }


            }

           else  if(idd=='green2'){
                if(player2.p2score==0){
                    if(gamadata.currentdiceValue==6){

                    document.getElementById('k14').append(document.getElementById('green2'));
                    player2.p2score=14;
                    greensize();
                    kill2();
                    safe();

                    }
                }else{
                    let lata1= parseInt(gamadata.currentdiceValue) ;
                   
                   let lata2 =player2.p2score;
               
                   let lata3= lata1 + lata2;

                   if(lata3>70){
                       lata3-=lata1;
                   }
                   let datee= "k"+lata3;
                   console.log(datee)

                 console.log("data3:"+lata3);


                   player2.p2score+=lata1;
                 if(player2.p2score>70){
                     player2.p2score-=lata1;
                 } 


                 let killchecking= kill2();
                 if(killchecking==true){
                    gamadata.playerDie=2;
                 }else{
                     gamadata.playerDie+=1;
                 }
                 if(player2.p2score!=70){
                     document.getElementById(datee).append(document.getElementById('green2'));
                 }else{
                     document.getElementById('centerDiv').append(document.getElementById('green2'));
                     home.p2p2=true;
                     gamadata.playerDie=2;
                     wincheck();


                 }
                 
                   
                 greensize();
           
                 safe();



            

               clearInterval(gamadata.blinkdata);

                }

                if(gamadata.currentdiceValue==6){
                   gamadata.playerDie=2;
                   console.log("this is die is 2");
                   p2.openn=1;
               }

            }
              else  if(idd=='green3'){

                    if(player2.p3score==0){
                        if(gamadata.currentdiceValue==6){

                    document.getElementById('k14').append(document.getElementById('green3'));
                    player2.p3score=14;
                    greensize();
                    kill2();

safe();
                        }
                }else{
                    let aata1= parseInt(gamadata.currentdiceValue) ;
                   
                   let aata2 =player2.p3score;
               
                   let aata3= aata1 + aata2;

                   if(aata3>70){
                       aata3-=aata1;
                   }
                   let datee= "k"+aata3;
                   console.log(datee)

                 console.log("data3:"+aata3);


                   player2.p3score+=aata1;
                 if(player2.p3score>70){
                     player2.p3score-=aata1;
                 } 

                 let killchecking= kill2();
                 if(killchecking==true){
                    gamadata.playerDie=2;
                 }else{
                     gamadata.playerDie+=1;
                 }

                 if(player2.p3score!=70){
                     document.getElementById(datee).append(document.getElementById('green3'));
                 }else{
                     document.getElementById('centerDiv').append(document.getElementById('green3'));
                     home.p2p3=true;
                     gamadata.playerDie=2;
                     wincheck();


                 }
                 
                   
                 greensize();
               
                 safe();


               clearInterval(gamadata.blinkdata);

                }
                
               if(gamadata.currentdiceValue==6){
                   gamadata.playerDie=2;
                   console.log("this is die is 2");
                   p3.openn=1;
               }

        }  
      
          
         else   if(idd=='green4'){
                if(player2.p4score==0){
                    if(gamadata.currentdiceValue==6){

                    document.getElementById('k14').append(document.getElementById('green4'));
                    player2.p4score=14;
                    greensize();
                    kill2();
                    safe();

                    }
                }else{

                    let kata1= parseInt(gamadata.currentdiceValue) ;
                   
                   let kata2 =player2.p4score;
               
                   let kata3= kata1 + kata2;

                   if(kata3>70){
                       kata3-=kata1;
                   }
                   let datee= "k"+kata3;
                   console.log(datee)

                 console.log("data3:"+kata3);


                   player2.p4score+=kata1;
                 if(player2.p4score>70){
                     player2.p4score-=kata1;
                 } 

                 let killchecking= kill2();
                 if(killchecking==true){
                    gamadata.playerDie=2;
                 }else{
                     gamadata.playerDie+=1;
                 }

                 if(player2.p4score!=70){
                     document.getElementById(datee).append(document.getElementById('green4'));
                 }else{
                     document.getElementById('centerDiv').append(document.getElementById('green4'));
                    home.p2p4=true;
                    gamadata.playerDie=2;
                    wincheck();


                    }
                 
                   greensize();
                   safe();


               clearInterval(gamadata.blinkdata);
            }
            
            if(gamadata.currentdiceValue==6){
                   gamadata.playerDie=2;
                   console.log("this is die is 2");
                   p2.openn=1;
               }
                }


            
   
        
        }
    }
    
    
    function runyellow(idd){
        clearInterval(gamadata.blinkdata);

        if(gamadata.playerDie==3){
            clearInterval(gamadata.blinkdata);

            if(idd=='yellow1'){
                clearInterval(gamadata.blinkdata);

                if(player3.p1score==0){
                    if(gamadata.currentdiceValue==6){
                    document.getElementById('k27').append(document.getElementById('yellow1'));
                    player3.p1score=27;
                    p3.openn=1;
                    yellowsize();
                    kill3();safe();

                    }
                }else if (p3.openn==1){
                    
                    let data1= parseInt(gamadata.currentdiceValue);
                   
                    let data2 =player3.p1score;
                
                    let data3 = data1 +  data2;
                    console.log(("data3 is "+data3));
                    player3.p1score+=data1;

                    let datee;
                    if(parseInt( data3)>64){
                        if(data3==65){
                            data3=13;
                            player3.p1score=13;
                        }else if (data3==66){
                            data3=14;
                            player3.p1score=14;
                        }else if (data3==67){
                            data3=15;
                            player3.p1score=15;
                        }else if(data3==68){
                            data3=16;
                            player3.p1score=16;
                        }else if (data3==69){
                            data3=17;
                            player3.p1score=17;
                        }else if(data3==70){
                            data3=18;
                            player3.p1score=18;
                        }
                    }

                    if(p3.identifier1==1){
                        if(data3>31){
                            data3-=gamadata.currentdiceValue;
                            player3.p1score-=data1;

                        }
                    }

                    if(data3>20){
                    if(data3<26){
                        p3.identifier1=1;
                    }
                  }   
                    if (p3.identifier1==0){
                        datee="k"+data3;

                    }
                    if (p3.identifier1==1){
                        if(data3>25){
                            datee="k"+data3+"s";
                        }else{
                            datee="k"+data3;
                        }
                    }


                  
                 console.log(datee)

                  console.log("data3:"+data3);
                  if (p3.identifier1!=0&& player3.p1score>25){
            gamadata.playerDie+=1;
                 }else{
                  let killchecking= kill3();
                 if(killchecking==true){
                    gamadata.playerDie=3;
                 }else{
                     gamadata.playerDie+=1;
                 }
                }

                    if (datee!="k31s"){
                      document.getElementById(datee).append(document.getElementById('yellow1'));
                    }else{
                        document.getElementById("centerDiv").append(document.getElementById('yellow1'));
                        home.p3p1=true;
                        gamadata.playerDie=3;
                        wincheck();


                    }         
                    yellowsize();
                    safe();

                clearInterval(gamadata.blinkdata);
            

            }
            if(gamadata.currentdiceValue==6){
                    gamadata.playerDie=3;
                    console.log("this is die is 3");
                } 
            

            }

                    
            else if(idd=='yellow2'){

                clearInterval(gamadata.blinkdata);

            if(player3.p2score==0){
             if(gamadata.currentdiceValue==6){
                 document.getElementById('k27').append(document.getElementById('yellow2'));
                 player3.p2score=27;
                 p3.openn=1;
                 yellowsize();
                 kill3();

                 safe();


             }
                }else if (p3.openn==1){
    
                 let data1= parseInt(gamadata.currentdiceValue);
   
                  let data2 =player3.p2score;

                  let data3 = data1 +  data2;
                     console.log(("data3 is "+data3));
                     player3.p2score+=data1;

                    let datee;
                if(parseInt( data3)>64){
                       if(data3==65){
                      data3=13;
                      player3.p2score=13;
                 }else if (data3==66){
                     data3=14;
                     player3.p2score=14;
                  }else if (data3==67){
                     data3=15;
            player3.p2score=15;
              }else if(data3==68){
                  data3=16;
                 player3.p2score=16;
               }else if (data3==69){
                data3=17;
                player3.p2score=17;
                 }else if(data3==70){
             data3=18;
                player3.p2score=18;
        }
    }

    if(p3.identifier2==1){
        if(data3>31){
            data3-=gamadata.currentdiceValue;
            player3.p2score-=data1;

        }
    }

    if(data3>20){
    if(data3<26){
        p3.identifier2=1;
    }
  }   
    if (p3.identifier2==0){
        datee="k"+data3;

    }
    if (p3.identifier2==1){
        if(data3>25){
            datee="k"+data3+"s";
        }else{
            datee="k"+data3;
        }
    }


  
 
         console.log(datee)

        console.log("data3:"+data3);
        if (p3.identifier2!=0&& player3.p2score>25){
            gamadata.playerDie+=1;
        }else{
        let killchecking= kill3();
                 if(killchecking==true){
                    gamadata.playerDie=3;
                 }else{
                     gamadata.playerDie+=1;
                 }
                }
         if (datee!="k31s"){
          document.getElementById(datee).append(document.getElementById('yellow2'));
         }else{
         document.getElementById("centerDiv").append(document.getElementById('yellow2'));
         home.p3p2=true;                        gamadata.playerDie=3;
         wincheck();


        
        }         
        yellowsize();  safe();


                clearInterval(gamadata.blinkdata);


            }
                if(gamadata.currentdiceValue==6){
                    gamadata.playerDie=3;
                    console.log("this is die is 3");
                } 

                }



        //yelloow3
     else   if(idd=='yellow3'){
        clearInterval(gamadata.blinkdata);

if(player3.p3score==0){
 if(gamadata.currentdiceValue==6){
     document.getElementById('k27').append(document.getElementById('yellow3'));
     player3.p3score=27;
     player3.openn=1;
     yellowsize();
     kill3();
     safe();


 }
    }else if (p3.openn==1){

     let data1= parseInt(gamadata.currentdiceValue);

      let data2 =player3.p3score;

      let data3 = data1 +  data2;
         console.log(("data3 is "+data3));
         player3.p3score+=data1;

        let datee;
    if(parseInt( data3)>64){
           if(data3==65){
          data3=13;
          player3.p3score=13;
     }else if (data3==66){
         data3=14;
         player3.p3score=14;
      }else if (data3==67){
         data3=15;
player3.p3score=15;
  }else if(data3==68){
      data3=16;
     player3.p3score=16;
   }else if (data3==69){
    data3=17;
    player3.p3score=17;
     }else if(data3==70){
 data3=18;
    player3.p3score=18;
}
}

if(p3.identifier3==1){
if(data3>31){
data3-=gamadata.currentdiceValue;
player3.p3score-=data1;

}
}

        if(data3>20){
        if(data3<26){
        p3.identifier3=1;
        }
        }   
    if (p3.identifier3==0){
        datee="k"+data3;

        }
        if (p3.identifier3==1){
        if(data3>25){
        datee="k"+data3+"s";
        }else{
        datee="k"+data3;
        }
        }




        console.log(datee)

        console.log("data3:"+data3);
        if (p3.identifier3!=0&& player3.p3score>25){
            gamadata.playerDie+=1;
        }else{
        let killchecking= kill3();
                 if(killchecking==true){
                    gamadata.playerDie=3;
                 }else{
                     gamadata.playerDie+=1;
                 }
        }
        if (datee!="k31s"){
        document.getElementById(datee).append(document.getElementById('yellow3'));
        }else{
        document.getElementById("centerDiv").append(document.getElementById('yellow3'));
            home.p3p3=true;                        gamadata.playerDie=3;
            wincheck();


        }         
        yellowsize();
        safe();

       clearInterval(gamadata.blinkdata);


        }
       if(gamadata.currentdiceValue==6){
        gamadata.playerDie=3;
        console.log("this is die is 3");
    }

        

                }

            else    if(idd=='yellow4'){
                clearInterval(gamadata.blinkdata);

if(player3.p4score==0){
 if(gamadata.currentdiceValue==6){
     document.getElementById('k27').append(document.getElementById('yellow4'));
     player3.p4score=27;
     player3.openn=1;
     yellowsize();
     kill3();

     safe();

 }
    }else if (p3.openn==1){

     let data1= parseInt(gamadata.currentdiceValue);

      let data2 =player3.p4score;

      let data3 = data1 +  data2;
         console.log(("data3 is "+data3));
         player3.p4score+=data1;

        let datee;
    if(parseInt( data3)>64){
           if(data3==65){
          data3=13;
          player3.p4score=13;
     }else if (data3==66){
         data3=14;
         player3.p4score=14;
      }else if (data3==67){
         data3=15;
player3.p4score=15;
  }else if(data3==68){
      data3=16;
     player3.p4score=16;
   }else if (data3==69){
    data3=17;
    player3.p4score=17;
     }else if(data3==70){
 data3=18;
    player3.p4score=18;
}
}

if(p3.identifier4==1){
if(data3>31){
data3-=gamadata.currentdiceValue;
player3.p4score-=data1;

}
}

if(data3>20){
if(data3<26){
p3.identifier4=1;
}
}   
if (p3.identifier4==0){
datee="k"+data3;

}
if (p3.identifier4==1){
if(data3>25){
datee="k"+data3+"s";
}else{
datee="k"+data3;
}
}




console.log(datee)

console.log("data3:"+data3);
        if (p3.identifier4!=0&& player3.p4score>25){
            gamadata.playerDie+=1;
        }else{
            let killchecking= kill3();
                 if(killchecking==true){
                    gamadata.playerDie=3;
                 }else{
                     gamadata.playerDie+=1;
                 }
        }
if (datee!="k31s"){
document.getElementById(datee).append(document.getElementById('yellow4'));
}else{
document.getElementById("centerDiv").append(document.getElementById('yellow4'));
home.p3p4=true;                        gamadata.playerDie=3;
wincheck();


}         
yellowsize();
safe();

    clearInterval(gamadata.blinkdata);


}
    if(gamadata.currentdiceValue==6){
        gamadata.playerDie=3;
        console.log("this is die is 3");
    }

                }

        }
        
    } 
    
    function runblue(idd){

        clearInterval(gamadata.blinkdata);
        clearInterval(gamadata.blinkdata);
      


        if (gamadata.playerDie==4){

            //blue1
            clearInterval(gamadata.blinkdata);

            if(idd=='blue1'){
                clearInterval(gamadata.blinkdata);

                if(player4.p1score==0){
                    if(gamadata.currentdiceValue==6){
                    document.getElementById('k40').append(document.getElementById('blue1'));
                    player4.p1score=40;
                    p4.openn=1;
                        bluesize();  
                        kill4();
                        safe();

                    }
                }else {
                    
                    let data1= parseInt(gamadata.currentdiceValue);
                   
                    let data2 =player4.p1score;
                
                    let data3 = data1 +  data2;
                    console.log(("data3 is "+data3));
                    player4.p1score+=data1;

                    let datee;
                    if(parseInt( data3)>64){
                        if(data3==65){
                            data3=13;
                            player4.p1score=13;
                        }else if (data3==66){
                            data3=14;
                            player4.p1score=14;
                        }else if (data3==67){
                            data3=15;
                            player4.p1score=15;
                        }else if(data3==68){
                            data3=16;
                            player4.p1score=16;
                        }else if (data3==69){
                            data3=17;
                            player4.p1score=17;
                        }else if(data3==70){
                            data3=18;
                            player4.p1score=18;
                        }
                    }

                    if(p4.identifier1==1){
                        if(data3>44){
                            data3-=gamadata.currentdiceValue;
                            player4.p1score-=data1;

                        }
                    }

                    if(data3>33){
                    if(data3<39){
                        p4.identifier1=1;
                    }
                  }   
                    if (p4.identifier1==0){
                        datee="k"+data3;

                    }
                    if (p4.identifier1==1){
                        if(data3>38){
                            datee="k"+data3+"s";
                        }else{
                            datee="k"+data3;
                        }
                    }


                  
                 console.log(datee);

                  console.log("data3:"+data3);

                  if(p4.identifier1!=0&&player4.p1score>38){
                    gamadata.playerDie=1;

                  }else{
                  let killchecking= kill4();
                 if(killchecking==true){
                    gamadata.playerDie=4;
                 }else{
                     gamadata.playerDie=1;
                 }
                }
                    if (datee!="k44s"){
                      document.getElementById(datee).append(document.getElementById('blue1'));
                    }else{
                        document.getElementById("centerDiv").append(document.getElementById('blue1'));
                        home.p4p1=true;                        gamadata.playerDie=4;
                        wincheck();

                    }         
                    bluesize();
                    safe();


                clearInterval(gamadata.blinkdata);
            

            


            
        }
        
            if(gamadata.currentdiceValue==6){
              gamadata.playerDie=4;
              console.log("this is die is 3");
                 }

               }       else  if(idd=='blue2'){
                clearInterval(gamadata.blinkdata);

                if(player4.p2score==0){
                    if(gamadata.currentdiceValue==6){
                    document.getElementById('k40').append(document.getElementById('blue2'));
                    player4.p2score=40;
                    p4.openn=1;
                    bluesize();
                    kill4();
                    safe();


                    }
                }else {
                    
                    let data1= parseInt(gamadata.currentdiceValue);
                   
                    let data2 =player4.p2score;
                
                    let data3 = data1 +  data2;
                    console.log(("data3 is "+data3));
                    player4.p2score+=data1;

                    let datee;
                    if(parseInt( data3)>64){
                        if(data3==65){
                            data3=13;
                            player4.p2score=13;
                        }else if (data3==66){
                            data3=14;
                            player4.p2score=14;
                        }else if (data3==67){
                            data3=15;
                            player4.p2score=15;
                        }else if(data3==68){
                            data3=16;
                            player4.p2score=16;
                        }else if (data3==69){
                            data3=17;
                            player4.p2score=17;
                        }else if(data3==70){
                            data3=18;
                            player4.p2score=18;
                        }
                    }

                    if(p4.identifier2==1){
                        if(data3>44){
                            data3-=gamadata.currentdiceValue;
                            player4.p2score-=data1;

                        }
                    }

                    if(data3>33){
                    if(data3<39){
                        p4.identifier2=1;
                    }
                  }   
                    if (p4.identifier2==0){
                        datee="k"+data3;

                    }
                    if (p4.identifier2==1){
                        if(data3>38){
                            datee="k"+data3+"s";
                        }else{
                            datee="k"+data3;
                        }
                    }


                  
                 console.log(datee);

                  console.log("data3:"+data3);
                  if(p4.identifier2!=0&&player4.p2score>38){
                    gamadata.playerDie=1;

                  }else{
                  let killchecking= kill4();
                 if(killchecking==true){
                    gamadata.playerDie=4;
                 }else{
                     gamadata.playerDie=1;
                 }
                }
                    if (datee!="k44s"){
                      document.getElementById(datee).append(document.getElementById('blue2'));
                    }else{
                    
                        document.getElementById("centerDiv").append(document.getElementById('blue2'));
                        home.p4p2=true; gamadata.playerDie=4;
                        wincheck();

                    }         

bluesize();
safe();

                clearInterval(gamadata.blinkdata);
            

            


            
        }
        
            if(gamadata.currentdiceValue==6){
              gamadata.playerDie=4;
              console.log("this is die is 3");
                 } 
    
        
         clearInterval(gamadata.blinkdata);

     
        
    }

    else  if(idd=='blue3'){
                clearInterval(gamadata.blinkdata);

                if(player4.p3score==0){
                    if(gamadata.currentdiceValue==6){
                    document.getElementById('k40').append(document.getElementById('blue3'));
                    player4.p3score=40;
                    p4.openn=1;
                    bluesize();
                    kill4();
                    safe();

                    }
                }else{
                    
                    let data1= parseInt(gamadata.currentdiceValue);
                   
                    let data2 =player4.p3score;
                
                    let data3 = data1 +  data2;
                    console.log(("data3 is "+data3));
                    player4.p3score+=data1;

                    let datee;
                    if(parseInt( data3)>64){
                        if(data3==65){
                            data3=13;
                            player4.p3score=13;
                        }else if (data3==66){
                            data3=14;
                            player4.p3score=14;
                        }else if (data3==67){
                            data3=15;
                            player4.p3score=15;
                        }else if(data3==68){
                            data3=16;
                            player4.p3score=16;
                        }else if (data3==69){
                            data3=17;
                            player4.p3score=17;
                        }else if(data3==70){
                            data3=18;
                            player4.p3score=18;
                        }
                    }

                    if(p4.identifier3==1){
                        if(data3>44){
                            data3-=gamadata.currentdiceValue;
                            player4.p3score-=data1;

                        }
                    }

                    if(data3>33){
                    if(data3<39){
                        p4.identifier3=1;
                    }
                  }   
                    if (p4.identifier3==0){
                        datee="k"+data3;

                    }
                    if (p4.identifier3==1){
                        if(data3>38){
                            datee="k"+data3+"s";
                        }else{
                            datee="k"+data3;
                        }
                    }


                  
                 console.log(datee);

                  console.log("data3:"+data3);
                  if(p4.identifier3!=0&&player4.p3score>38){
                    gamadata.playerDie=1;

                  }else{
                  let killchecking= kill4();
                 if(killchecking==true){
                    gamadata.playerDie=4;
                 }else{
                     gamadata.playerDie=1;
                 }
                }
                    if (datee!="k44s"){
                      document.getElementById(datee).append(document.getElementById('blue3'));
                    }else{
                    
                        document.getElementById("centerDiv").append(document.getElementById('blue3'));
                        gamadata.playerDie=4;
                        home.p4p3=true;
                        wincheck();

                    }         
                    bluesize();
                    safe();

                
                clearInterval(gamadata.blinkdata);
            

            


            
        }
        
            if(gamadata.currentdiceValue==6){
              gamadata.playerDie=4;
              console.log("this is die is 3");
                 } 
         clearInterval(gamadata.blinkdata);

    
    }
    else  if(idd=='blue4'){
                clearInterval(gamadata.blinkdata);

                if(player4.p4score==0){
                    if(gamadata.currentdiceValue==6){
                    document.getElementById('k40').append(document.getElementById('blue4'));
                    player4.p4score=40;
                    p4.openn=1;
                    bluesize();
                    kill4();
                    safe();


                    }
                }else{
                    
                    let data1= parseInt(gamadata.currentdiceValue);
                   
                    let data2 =player4.p4score;
                
                    let data3 = data1 +  data2;
                    console.log(("data3 is "+data3));
                    player4.p4score+=data1;

                    let datee;
                    if(parseInt( data3)>64){
                        if(data3==65){
                            data3=13;
                            player4.p4score=13;
                        }else if (data3==66){
                            data3=14;
                            player4.p4score=14;
                        }else if (data3==67){
                            data3=15;
                            player4.p4score=15;
                        }else if(data3==68){
                            data3=16;
                            player4.p4score=16;
                        }else if (data3==69){
                            data3=17;
                            player4.p4score=17;
                        }else if(data3==70){
                            data3=18;
                            player4.p4score=18;
                        }
                    }

                    if(p4.identifier4==1){
                        if(data3>44){
                            data3-=gamadata.currentdiceValue;
                            player4.p4score-=data1;

                        }
                    }

                    if(data3>33){
                    if(data3<39){
                        p4.identifier4=1;
                    }
                  }   
                    if (p4.identifier4==0){
                        datee="k"+data3;

                    }
                    if (p4.identifier4==1){
                        if(data3>38){
                            datee="k"+data3+"s";
                        }else{
                            datee="k"+data3;
                        }
                    }


                  
                 console.log(datee);

                  console.log("data3:"+data3);
                  if(p4.identifier4!=0&&player4.p4score>38){
                    gamadata.playerDie=1;

                  }else{
                 let killchecking= kill4();
                 if(killchecking==true){
                    gamadata.playerDie=4;
                 }else{
                     gamadata.playerDie=1;
                 }
                }
                    if (datee!="k44s"){
                      document.getElementById(datee).append(document.getElementById('blue4'));
                    }else{
                        document.getElementById("centerDiv").append(document.getElementById('blue4'));
                        home.p4p4=true; gamadata.playerDie=4;
                        wincheck();

                    }         
                    bluesize();
                    safe();

                clearInterval(gamadata.blinkdata);
            

            


            
        }
        
            if(gamadata.currentdiceValue==6){
              gamadata.playerDie=4;
              console.log("this is die is 3");
                 } 
    
        }
        clearInterval(gamadata.blinkdata);
                       
}
    }



    function runred(idd){

        if(gamadata.playerDie==1){
    clearInterval(gamadata.blinkdata);
        if(idd=='red1'){
    if(player1.p1score==0){
                    if(gamadata.currentdiceValue==6){
                    document.getElementById('k53').append(document.getElementById('red1'));
                    player1.p1score=53;
                    p1.openn=1;
redsize();
kil1();
safe();

                    }
                }else{
                    
                    let data1= parseInt(gamadata.currentdiceValue);
                   
                    let data2 =player1.p1score;
                
                    let data3 = data1 +  data2;
                    console.log(("data3 is "+data3));
                    player1.p1score+=data1;

                    let datee;
                    if(parseInt( data3)>64){
                        if(data3==65){
                            data3=13;
                            player1.p1score=13;
                        }else if (data3==66){
                            data3=14;
                            player1.p1score=14;
                        }else if (data3==67){
                            data3=15;
                            player1.p1score=15;
                        }else if(data3==68){
                            data3=16;
                            player1.p1score=16;
                        }else if (data3==69){
                            data3=17;
                            player1.p1score=17;
                        }else if(data3==70){
                            data3=18;
                            player1.p1score=18;
                        }
                    }

                    if(p1.identifier1==1){
                        if(data3>57){
                            data3-=gamadata.currentdiceValue;
                            player1.p1score-=data1;

                        }
                    }

                    if(data3>45){
                    if(data3<51){
                        p1.identifier1=1;
                    }
                  }   
                    if (p1.identifier1==0){
                        datee="k"+data3;

                    }
                    if (p1.identifier1==1){
                        if(data3>51){
                            datee="k"+data3+"s";
                        }else{
                            datee="k"+data3;
                        }
                    }


                  
                 console.log(datee);

                  console.log("data3:"+data3);
                    
                if (p1.identifier1!=0 &&  player1.p1score>51){
                    gamadata.playerDie+=1;   
                }else{
                    
                let killchecking= kil1();
                
                if (killchecking==true){
                 gamadata.playerDie=1;
                }else {
                 gamadata.playerDie+=1;

                }
            }

                

                   console.log("datee is "+datee)
                    if (datee!="k57s"){
                      document.getElementById(datee).append(document.getElementById('red1'));
                    }else{
                        document.getElementById("centerDiv").append(document.getElementById('red1'));
                        home.p1p1=true; gamadata.playerDie=1;
                        wincheck();
                        }   
                        redsize();
                        
                        safe();

          

                clearInterval(gamadata.blinkdata);
            

            


            
        }
        
            if(gamadata.currentdiceValue==6){
              gamadata.playerDie=1;
              console.log("this is die is 1");
                 }
    
        }

        

      else  if(idd=='red2'){
    if(player1.p2score==0){
                    if(gamadata.currentdiceValue==6){
                    document.getElementById('k53').append(document.getElementById('red2'));
                    player1.p2score=53;
                    p1.openn=1;
                        redsize();
                        
kil1();
safe();

                    }
                }else{
                    
                    let data1= parseInt(gamadata.currentdiceValue);
                   
                    let data2 =player1.p2score;
                
                    let data3 = data1 +  data2;
                    console.log(("data3 is "+data3));
                    player1.p2score+=data1;

                    let datee;
                    if(parseInt( data3)>64){
                        if(data3==65){
                            data3=13;
                            player1.p2score=13;
                        }else if (data3==66){
                            data3=14;
                            player1.p2score=14;
                        }else if (data3==67){
                            data3=15;
                            player1.p2score=15;
                        }else if(data3==68){
                            data3=16;
                            player1.p2score=16;
                        }else if (data3==69){
                            data3=17;
                            player1.p2score=17;
                        }else if(data3==70){
                            data3=18;
                            player1.p2score=18;
                        }
                    }

                    if(p1.identifier2==1){
                        if(data3>57){
                            data3-=gamadata.currentdiceValue;
                            player1.p2score-=data1;

                        }
                    }

                    if(data3>46){
                    if(data3<51){
                        p1.identifier2=1;
                    }
                  }   
                    if (p1.identifier2==0){
                        datee="k"+data3;

                    }
                    if (p1.identifier2==1){
                        if(data3>51){
                            datee="k"+data3+"s";
                        }else{
                            datee="k"+data3;
                        }
                    }


                  
                 console.log(datee);

                  console.log("data3:"+data3);
                
                           
                if (p1.identifier2!=0 &&  player1.p2score>51){
                    gamadata.playerDie+=1;   
                 }else{

                  let killchecking= kil1();
                
                if (killchecking==true){
                 gamadata.playerDie=1;
                }else {
                 gamadata.playerDie+=1;

                }
            }

                    if (datee!="k57s"){
                      document.getElementById(datee).append(document.getElementById('red2'));
                    }else{
                        document.getElementById("centerDiv").append(document.getElementById('red2'));
                        home.p1p2=true; gamadata.playerDie=1;
                        wincheck();

                    }         
                    redsize(); 
                    safe();

     

                clearInterval(gamadata.blinkdata);
            

            


            
        }
        
            if(gamadata.currentdiceValue==6){
              gamadata.playerDie=1;
              console.log("this is die is 1");
                 } 
    
        }
    else if(idd=='red3'){
    if(player1.p3score==0){
                    if(gamadata.currentdiceValue==6){
                    document.getElementById('k53').append(document.getElementById('red3'));
                    player1.p3score=53;
                    p1.openn=1;
                    redsize();
                    kil1();
                    safe();


                    }
                }else{
                    
                    let data1= parseInt(gamadata.currentdiceValue);
                   
                    let data2 =player1.p3score;
                
                    let data3 = data1 +  data2;
                    console.log(("data3 is "+data3));
                    player1.p3score+=data1;

                    let datee;
                    if(parseInt( data3)>64){
                        if(data3==65){
                            data3=13;
                            player1.p3score=13;
                        }else if (data3==66){
                            data3=14;
                            player1.p3score=14;
                        }else if (data3==67){
                            data3=15;
                            player1.p3score=15;
                        }else if(data3==68){
                            data3=16;
                            player1.p3score=16;
                        }else if (data3==69){
                            data3=17;
                            player1.p3score=17;
                        }else if(data3==70){
                            data3=18;
                            player1.p3score=18;
                        }
                    }

                    if(p1.identifier3==1){
                        if(data3>57){
                            data3-=gamadata.currentdiceValue;
                            player1.p3score-=data1;

                        }
                    }

                    if(data3>46){
                    if(data3<51){
                        p1.identifier3=1;
                    }
                  }   
                    if (p1.identifier3==0){
                        datee="k"+data3;

                    }
                    if (p1.identifier3==1){
                        if(data3>51){
                            datee="k"+data3+"s";
                        }else{
                            datee="k"+data3;
                        }
                    }


                  
                 console.log(datee);

                  console.log("data3:"+data3);

                           
                if (p1.identifier3!=0 &&  player1.p3score>51){
                    gamadata.playerDie+=1;         
                
                }else{

                  let killchecking= kil1();
                
                if (killchecking==true){
                 gamadata.playerDie=1;
                }else {
                 gamadata.playerDie+=1;

                }

            }
                    if (datee!="k57s"){
                      document.getElementById(datee).append(document.getElementById('red3'));
                    }else{
                        document.getElementById("centerDiv").append(document.getElementById('red3'));
                        home.p1p3=true; gamadata.playerDie=1;
                        wincheck();

                    }         
                    redsize();   
                    safe();


                clearInterval(gamadata.blinkdata);
            

            


            
        }
        
            if(gamadata.currentdiceValue==6){
              gamadata.playerDie=1;
              console.log("this is die is 1");
                 } 
    
        }else  if(idd=='red4'){
    if(player1.p4score==0){
                    if(gamadata.currentdiceValue==6){
                    document.getElementById('k53').append(document.getElementById('red4'));
                    player1.p4score=53;
                    p1.openn=1;
                    redsize();
                    kil1();
                    safe();

                    }
                }else{
                    
                    let data1= parseInt(gamadata.currentdiceValue);
                   
                    let data2 =player1.p4score;
                
                    let data3 = data1 +  data2;
                    console.log(("data3 is "+data3));
                    player1.p4score+=data1;

                    let datee;
                    if(parseInt( data3)>64){
                        if(data3==65){
                            data3=13;
                            player1.p4score=13;
                        }else if (data3==66){
                            data3=14;
                            player1.p4score=14;
                        }else if (data3==67){
                            data3=15;
                            player1.p4score=15;
                        }else if(data3==68){
                            data3=16;
                            player1.p4score=16;
                        }else if (data3==69){
                            data3=17;
                            player1.p4score=17;
                        }else if(data3==70){
                            data3=18;
                            player1.p4score=18;
                        }
                    }

                    if(p1.identifier4==1){
                        if(data3>57){
                            data3-=gamadata.currentdiceValue;
                            player1.p4score-=data1;

                        }
                    }

                    if(data3>46){
                    if(data3<51){
                        p1.identifier4=1;
                    }
                  }   
                    if (p1.identifier4==0){
                        datee="k"+data3;

                    }
                    if (p1.identifier4==1){
                        if(data3>51){
                            datee="k"+data3+"s";
                        }else{
                            datee="k"+data3;
                        }
                    }


                  
                 console.log(datee);

                  console.log("data3:"+data3);

                           
                if (p1.identifier4!=0 &&  player1.p4score>51){
                    gamadata.playerDie+=1;
                }else{
                  let killchecking= kil1();
                
                if (killchecking==true){
                 gamadata.playerDie=1;
                }else {
                 gamadata.playerDie+=1;

                }
            }
                 
                    if (datee!="k57s"){
                      document.getElementById(datee).append(document.getElementById('red4'));
                    }else{
                        document.getElementById("centerDiv").append(document.getElementById('red4'));
                        home.p1p4=true; gamadata.playerDie=1;
                        wincheck();

                    }         
                    redsize();    
                 
                    safe();

                clearInterval(gamadata.blinkdata);
            

            


            
        }
        
            if(gamadata.currentdiceValue==6){
              gamadata.playerDie=1;
              console.log("this is die is 1");
                 } 
    
        }


    }

}

    function kil1(){
        for (let key1 of Object.keys(player1)){
        
        //for player 2
         for (let key of Object.keys(player2)){

            if(player1[key1]==player2[key]){

        

                if(player2[key]==0){
                    console.log(player2[key]);
                } else if(player2[key]==53){
                          console.log(";");
                        }else  if(player2[key]==14){
                            console.log(";");
                      }else  if(player2[key]==27){
                        console.log(";");
                 }else  if(player2[key]==40){
                    console.log(";");
                 }else  if(player2[key]==22){
                    console.log(";");
                 }else  if(player2[key]==35){
                          console.log(";");
                 }else  if(player2[key]==48){
                          console.log(";");
                 }else  if(player2[key]==61){
                          console.log(";");
                 }else{
                    if (player2[key]==player2.p1score){


                        document.getElementsByClassName('p')[4].append(document.getElementById('green1'));
                        player2.p1score=0;    return true;
                }
                    
                    if (player2[key]==player2.p2score){
                        document.getElementsByClassName('p')[5].append(document.getElementById('green2'));
                        player2.p2score=0;     return true;


                    }
                    if (player2[key]==player2.p3score){
                        document.getElementsByClassName('p')[6].append(document.getElementById('green3'));
                        player2.p3score=0;     return true;


                    }
                    if (player2[key]==player2.p4score){
                        document.getElementsByClassName('p')[7].append(document.getElementById('green4'));
                        player2.p4score=0;    return true; 
                }
              
            }
        }  
        }

        //for player 3
    for (let key3 of Object.keys(player3)){

    if(player1[key1]==player3[key3]){
        if(player3[key3]==0){
            console.log("not out");

        } else if(player3[key1]==53){
                    console.log(";");
                }else  if(player3[key1]==14){
                    console.log(";");
                }else  if(player3[key1]==27){
                    console.log(";");
                }else  if(player3[key1]==40){
                    console.log(";");
                }else  if(player3[key1]==22){
                          console.log(";");
                 }else  if(player3[key1]==35){
                          console.log(";");
                 }else  if(player3[key1]==48){
                          console.log(";");
                 }else  if(player3[key1]==61){
                          console.log(";");
                 }else{
            if (player3[key3]==player3.p1score){
                if (p3.identifier1!=0 && player3.p1score>25){
                    console.log('sjsjsj');
                }else{
                document.getElementsByClassName('p')[12].append(document.getElementById('yellow1'));
                player3.p1score=0;         return true;
                }
            }
            if (player3[key3]==player3.p2score){
                if (p3.identifier2!=0 && player3.p2score>25){
                    console.log('sjsjsj');
                }else{
                document.getElementsByClassName('p')[13].append(document.getElementById('yellow2'));
                player3.p2score=0;    return true;
                }

            }
            if (player3[key3]==player3.p3score){
                if (p3.identifier3!=0 && player3.p3score>25){
                    console.log('sjsjsj');
                }else{
                document.getElementsByClassName('p')[14].append(document.getElementById('yellow3'));
                player3.p3score=0;        return true;

                }
            }
            if (player3[key3]==player3.p4score){
                if (p3.identifier4!=0 && player3.p4score>25){
                    console.log('sjsjsj');
                }else{
                document.getElementsByClassName('p')[15].append(document.getElementById('yellow4'));
                player3.p4score=0;         return true;
                }
        }
            
    }
}
                    
    }


    //for player 4
    for (let key4 of Object.keys(player4)){

if(player1[key1]==player4[key4]){
    if(player4[key4]==0){
        console.log("not out");
    } else if(player4[key4]==53){
                    console.log(";");
                }else  if(player4[key4]==14){
                    console.log(";");
                }else  if(player4[key4]==27){
                    console.log(";");
                }else  if(player4[key4]==40){
                    console.log(";");
                }else  if(player4[key4]==22){
                          console.log(";");
                 }else  if(player4[key4]==35){
                          console.log(";");
                 }else  if(player4[key4]==48){
                          console.log(";");
                 }else  if(player4[key4]==61){
                          console.log(";");
                 }else{
        if (player4[key4]==player4.p1score){
            if (p4.identifier1!=0&&player4.p1score>38){
                console.log("majja");
            }else{
            document.getElementsByClassName('p')[8].append(document.getElementById('blue1'));
            player4.p1score=0;     return true;
            }
        }
        if (player4[key4]==player4.p2score){
            if (p4.identifier2!=0&&player4.p2score>38){
                console.log("majja");
            }else{
            document.getElementsByClassName('p')[9].append(document.getElementById('blue2'));
            player4.p2score=0;    return true;}

        }
        if (player4[key4]==player4.p3score){
            if (p4.identifier3!=0&&player4.p3score>38){
                console.log("majja");
            }else{
            document.getElementsByClassName('p')[10].append(document.getElementById('blue3'));
            player4.p3score=0;   return true;
            }

        }
        if (player4[key4]==player4.p4score){
            if (p4.identifier4!=0&&player4.p4score>38){
                console.log("majja");
            }else{
            document.getElementsByClassName('p')[11].append(document.getElementById('blue4'));
            player4.p4score=0;         return true;
            }
    }

}
}
                
}



    }
    }

    function kill2(){
       
        for (let key1 of Object.keys(player2)){

    //for player 1
    for (let key of Object.keys(player1)){

    if(player2[key1]==player1[key]){
    if(player1[key]==0){
        console.log("not out");
    } else if(player1[key]==53){
                    console.log(";");
                }else  if(player1[key]==14){
                    console.log(";");
                }else  if(player1[key]==27){
                    console.log(";");
                }else  if(player1[key]==40){
                    console.log(";");
                }else  if(player1[key]==22){
                          console.log(";");
                 }else  if(player1[key]==35){
                          console.log(";");
                 }else  if(player1[key]==48){
                          console.log(";");
                 }else  if(player1[key]==61){
                          console.log(";");
                 }else{
        if (player1[key]==player1.p1score){
            if (p1.identifier1!=0 && player1.p1score>51){
            console.log("sjsjds")
        }else{
            document.getElementsByClassName('p')[0].append(document.getElementById('red1'));
            player1.p1score=0;  return true;
            
        }
        }
        if (player1[key]==player1.p2score){
            if (p1.identifier2!=0 && player1.p2score>51){
            console.log("sjsjds")
        }else{
            document.getElementsByClassName('p')[1].append(document.getElementById('red2'));
            player1.p2score=0;  return true;
        }

        }
        if (player1[key]==player4.p3score){
            if (p1.identifier3!=0 && player1.p3score>51){
            console.log("sjsjds")
        }else{
            document.getElementsByClassName('p')[2].append(document.getElementById('red3'));
            player1.p3score=0;  return true;
        }
        }
        if (player1[key]==player1.p4score){
            if (p1.identifier4!=0 && player1.p4score>51){
            console.log("sjsjds")
        }else{
            document.getElementsByClassName('p')[3].append(document.getElementById('red4'));
            player1.p4score=0;       return true;
        }
    }

}
}
                
}

    //for player 3
    for (let key3 of Object.keys(player3)){

if(player2[key1]==player3[key3]){
    if(player3[key3]==0){
        console.log("not out");

    } else if(player3[key3]==53){
                    console.log(";");
                }else  if(player3[key3]==14){
                    console.log(";");
                }else  if(player3[key3]==27){
                    console.log(";");
                }else  if(player3[key3]==40){
                    console.log(";");
                }else  if(player3[key3]==22){
                          console.log(";");
                 }else  if(player3[key3]==35){
                          console.log(";");
                 }else  if(player3[key3]==48){
                          console.log(";");
                 }else  if(player3[key3]==61){
                          console.log(";");
                 }else{
        if (player3[key3]==player3.p1score){
            if (p3.identifier1!=0 && player3.p1score>25){
                    console.log('sjsjsj');
                }else{
            document.getElementsByClassName('p')[12].append(document.getElementById('yellow1'));
            player3.p1score=0; return true;
                }
        }
        if (player3[key3]==player3.p2score){
            if (p3.identifier2!=0 && player3.p2score>25){
                    console.log('sjsjsj');
                }else{
            document.getElementsByClassName('p')[13].append(document.getElementById('yellow2'));
            player3.p2score=0;  return true;
                }
        }
        if (player3[key3]==player3.p3score){
            if (p3.identifier3!=0 && player3.p3score>25){
                    console.log('sjsjsj');
                }else{
            document.getElementsByClassName('p')[14].append(document.getElementById('yellow3'));
            player3.p3score=0;  return true;
                }
            

        }
        if (player3[key3]==player3.p4score){
            if (p3.identifier4!=0 && player3.p4score>25){
                    console.log('sjsjsj');
                }else{
            document.getElementsByClassName('p')[15].append(document.getElementById('yellow4'));
            player3.p4score=0;  return true;
                }
    }
    gamadata.playerDie=2;
    console.log("this is die is 2");
}
}
                
}

//for player 4

for (let key4 of Object.keys(player4)){

if(player2[key1]==player4[key4]){
    if(player4[key4]==0){
        console.log("not out");

    } else if(player4[key4]==53){
                    console.log(";");
                }else  if(player4[key4]==14){
                    console.log(";");
                }else  if(player4[key4]==27){
                    safe(37);
                }else  if(player4[key4]==40){
                    console.log(";");
                }else  if(player4[key4]==22){
                          console.log(";");
                 }else  if(player4[key4]==35){
                          console.log(";");
                 }else  if(player4[key4]==48){
                          console.log(";");
                 }else  if(player4[key4]==61){
                          console.log(";");
                 }else{
        if (player4[key4]==player4.p1score){
            if (p4.identifier1!=0&&player4.p1score>38){
                console.log("majja");
            }else{
            document.getElementsByClassName('p')[8].append(document.getElementById('blue1'));
            player4.p1score=0;  return true;
            }

        }
        if (player4[key4]==player4.p2score){
            if (p4.identifier2!=0&&player4.p2score>38){
                console.log("majja");
            }else{
            document.getElementsByClassName('p')[9].append(document.getElementById('blue2'));
            player4.p2score=0;   return true;
            }

        }
        if (player4[key4]==player4.p3score){
            if (p4.identifier3!=0 && player4.p3score>38){
                console.log("majja");
            }else{
            document.getElementsByClassName('p')[10].append(document.getElementById('blue3'));
            player4.p3score=0;   return true;
            }

        }
        if (player4[key4]==player4.p4score){
            if (p4.identifier4!=0 && player4.p4score>38){
                console.log("majja");
            }else{
            document.getElementsByClassName('p')[11].append(document.getElementById('blue4'));
            player4.p4score=0;   return true;   
            } 
    }
    gamadata.playerDie=2;
              console.log("this is die is 2");
}
}
                
}


        }
    }



    function kill3(){
        for (let key3 of Object.keys(player3)){

            for (let key4 of Object.keys(player4)){

        if(player3[key3]==player4[key4]){
         if(player4[key4]==0){
            console.log("not out");

           } else if(player4[key4]==53){
                    console.log(";");
                }else  if(player4[key4]==14){
                    console.log(";");
                }else  if(player4[key4]==27){
                    console.log(";");
                }else  if(player4[key4]==40){
                    console.log(";");
                }else  if(player4[key4]==22){
                          console.log(";");
                 }else  if(player4[key4]==35){
                          console.log(";");
                 }else  if(player4[key4]==48){
                          console.log(";");
                 }else  if(player4[key4]==61){
                          console.log(";");
                 }else{
        if (player4[key4]==player4.p1score){
            if (p4.identifier1!=0 && player4.p1score>38){
                console.log("majja");
            }else{
            document.getElementsByClassName('p')[8].append(document.getElementById('blue1'));
            player4.p1score=0;                return true;
            }

        }
        if (player4[key4]==player4.p2score){
            if (p4.identifier2!=0&&player4.p2score>38){
                console.log("majja");
            }else{
            document.getElementsByClassName('p')[9].append(document.getElementById('blue2'));
            player4.p2score=0;                  return true;
            }

        }
        if (player4[key4]==player4.p3score){
            if (p4.identifier3!=0&&player4.p3score>38){
                console.log("majja");
            }else{
            document.getElementsByClassName('p')[10].append(document.getElementById('blue3'));
            player4.p3score=0;                return true;

            }

        }
        if (player4[key4]==player4.p4score){
            if (p4.identifier4!=0&&player4.p4score>38){
                console.log("majja");
            }else{
            document.getElementsByClassName('p')[11].append(document.getElementById('blue4'));
            player4.p4score=0;                        return true;
            }
    }
            
}
}
                
}


        //for player 2
        
        for (let key of Object.keys(player1)){

        if(player3[key3]==player1[key]){
        if(player1[key]==0){
            console.log("not out");

} else if(player1[key]==53){
                    console.log(";");
                }else  if(player1[key]==14){
                    console.log(";");
                }else  if(player1[key]==27){
                    console.log(";");
                }else  if(player1[key]==40){
                    console.log(";");
                }else  if(player1[key]==22){
                          console.log(";");
                 }else  if(player1[key]==35){
                          console.log(";");
                 }else  if(player1[key]==48){
                          console.log(";");
                 }else  if(player1[key]==61){
                          console.log(";");
                 }else{
    if (player1[key]==player1.p1score){
        if (p1.identifier1!=0 && player1.p1score>51){
            console.log("sjsjds")
        }else{
        document.getElementsByClassName('p')[0].append(document.getElementById('red1'));
        player1.p1score=0;                 return true;
        }
    }
    if (player1[key]==player1.p2score){
        if (p1.identifier2!=0 && player1.p2score>51){
            console.log("sjsjds")
        }else{
        document.getElementsByClassName('p')[1].append(document.getElementById('red2'));
        player1.p2score=0;                  return true;
        }

    }
    if (player1[key]==player4.p3score){
        if (p1.identifier3!=0 && player1.p3score>51){
            console.log("sjsjds")
        }else{
        document.getElementsByClassName('p')[2].append(document.getElementById('red3'));
        player1.p3score=0;                  return true;
        }

    }
    if (player1[key]==player1.p4score){
        if (p1.identifier4!=0 && player1.p4score>51){
            console.log("sjsjds")
        }else{
        document.getElementsByClassName('p')[3].append(document.getElementById('red4'));
        player1.p4score=0;                       return true;
        }
}
    
}
}
            
}


    //for player 2
    for (let key of Object.keys(player2)){

if(player3[key3]==player2[key]){
    if(player2[key]==0){
        console.log("not out");

    } else if(player2[key]==53){
                    console.log(";");
                }else  if(player2[key]==14){
                    console.log(";");
                }else  if(player2[key]==27){
                    console.log(";");
                }else  if(player2[key]==40){
                    console.log(";");
                }else  if(player2[key]==22){
                          console.log(";");
                 }else  if(player2[key]==35){
                          console.log(";");
                 }else  if(player2[key]==48){
                          console.log(";");
                 }else  if(player2[key]==61){
                          console.log(";");
                 }else{
        if (player2[key]==player2.p1score){
            document.getElementsByClassName('p')[4].append(document.getElementById('green1'));
            player2.p1score=0;               return true;

        }
        if (player2[key]==player2.p2score){
            document.getElementsByClassName('p')[5].append(document.getElementById('green2'));
            player2.p2score=0;              return true; 


        }
        if (player2[key]==player2.p3score){
            document.getElementsByClassName('p')[6].append(document.getElementById('green3'));
            player2.p3score=0;           return true;


        }
        if (player2[key]==player2.p4score){
            document.getElementsByClassName('p')[7].append(document.getElementById('green4'));
            player2.p4score=0;                 return true;


        
    }

}
}  }
    
        }

    }


function kill4(){

    for (let key4 of Object.keys(player4)){

            //for player 1
            for (let key of Object.keys(player1)){

if(player4[key4]==player1[key]){
if(player1[key]==0){
    console.log("not out");

} else if(player1[key]==53){
                    console.log(";");
                }else  if(player1[key]==14){
                    console.log(";");
                }else  if(player1[key]==27){
                    console.log(";");
                }else  if(player1[key]==40){
                    console.log(";");
                }else  if(player1[key]==22){
                          console.log(";");
                 }else  if(player1[key]==35){
                          console.log(";");
                 }else  if(player1[key]==48){
                          console.log(";");
                 }else  if(player1[key]==61){
                          console.log(";");
                 }else{
    if (player1[key]==player1.p1score){
        if (p1.identifier1!=0 && player1.p1score>51){
            console.log("sjsjds")
        }else{
        document.getElementsByClassName('p')[0].append(document.getElementById('red1'));
        player1.p1score=0;                 return true;
        }
    }
    if (player1[key]==player1.p2score){
        if (p1.identifier2!=0 && player1.p2score>51){
            console.log("sjsjds")
        }else{
        document.getElementsByClassName('p')[1].append(document.getElementById('red2'));
        player1.p2score=0;     return true;
        }
    }
    if (player1[key]==player4.p3score){
        if (p1.identifier3!=0 && player1.p3score>51){
            console.log("sjsjds")
        }else{
        document.getElementsByClassName('p')[2].append(document.getElementById('red3'));
        player1.p3score=0;      return true;
        }
    }
    if (player1[key]==player1.p4score){
        if (p1.identifier4!=0 && player1.p4score>51){
            console.log("sjsjds")
        }else{
        document.getElementsByClassName('p')[3].append(document.getElementById('red4'));
        player1.p4score=0;             return true;
        }
}

}
}
            
}

      //for player 2
      for (let key of Object.keys(player2)){

if(player4[key4]==player2[key]){
    if(player2[key]==0){
        console.log("not out");

    } else if(player2[key]==53){
                    console.log(";");
                }else  if(player2[key]==14){
                    console.log(";");
                }else  if(player2[key]==27){
                    console.log(";");
                }else  if(player2[key]==40){
                    console.log(";");
                }else  if(player2[key]==22){
                          console.log(";");
                 }else  if(player2[key]==35){
                          console.log(";");
                 }else  if(player2[key]==48){
                          console.log(";");
                 }else  if(player2[key]==61){
                          console.log(";");
                 }else{
        if (player2[key]==player2.p1score){
            document.getElementsByClassName('p')[4].append(document.getElementById('green1'));
            player2.p1score=0;      return true;
        }
        if (player2[key]==player2.p2score){
            document.getElementsByClassName('p')[5].append(document.getElementById('green2'));
            player2.p2score=0;     return true;

        }
        if (player2[key]==player2.p3score){
            document.getElementsByClassName('p')[6].append(document.getElementById('green3'));
            player2.p3score=0;
            return true;
        }
        if (player2[key]==player2.p4score){
            document.getElementsByClassName('p')[7].append(document.getElementById('green4'));
            player2.p4score=0;      return true;

        
    }
  
}
}  }


    //FOR PLAYER 3

    for (let key3 of Object.keys(player3)){

if(player4[key4]==player3[key3]){
    if(player3[key3]==0){
        console.log("not out");

    } else if(player3[key3]==53){
                    console.log(";");
                }else  if(player3[key3]==14){
                    console.log(";");
                }else  if(player3[key3]==27){
                    console.log(";");
                }else  if(player3[key3]==40){
                    console.log(";");
                }else  if(player3[key3]==22){
                          console.log(";");
                 }else  if(player3[key3]==35){
                          console.log(";");
                 }else  if(player3[key3]==48){
                          console.log(";");
                 }else  if(player3[key3]==61){
                          console.log(";");
                 }else{
        if (player3[key3]==player3.p1score){
            if (p3.identifier1!=0 && player3.p1score>25){
                    console.log('sjsjsj');
                }else{
            document.getElementsByClassName('p')[12].append(document.getElementById('yellow1'));
            player3.p1score=0;      return true;
                }
        }
        if (player3[key3]==player3.p2score){
            if (p3.identifier2!=0 && player3.p2score>25){
                    console.log('sjsjsj');
                }else{
            document.getElementsByClassName('p')[13].append(document.getElementById('yellow2'));
            player3.p2score=0;
            return true;
                }
        }
        if (player3[key3]==player3.p3score){
            if (p3.identifier3!=0 && player3.p3score>25){
                    console.log('sjsjsj');
                }else{
            document.getElementsByClassName('p')[14].append(document.getElementById('yellow3'));
            player3.p3score=0;     return true;
                }

        }
        if (player3[key3]==player3.p4score){
            if (p3.identifier4!=0 && player3.p4score>25){
                    console.log('sjsjsj');
                }else{
            document.getElementsByClassName('p')[15].append(document.getElementById('yellow4'));
            player3.p4score=0;             return true;
                }
    }

}
}
                
}


    }

}

function redsize (){

    if (player1.p1score==player1.p2score &&player1.p1score==player1.p3score&& player1.p1score==player1.p4score &&player1.p3score==player1.p4score){
        document.getElementById('red1').setAttribute("style","width:10px; display:block;");
        document.getElementById('red2').setAttribute("style","width:10px; display:block;");     
           document.getElementById('red3').setAttribute("style","width:10px; display:block;");
        document.getElementById('red4').setAttribute("style","width:10px; display:block;");
      
    }else{
        document.getElementById('red1').setAttribute("style","width:24px; display:block;");
        document.getElementById('red2').setAttribute("style","width:24px;display:block;");     
        document.getElementById('red3').setAttribute("style","width:24px; display:block;");
        document.getElementById('red4').setAttribute("style","width:24px;display:block;");
    }
    if (p1.identifier1==0 && p1.identifier2==0){
    if (player1.p1score==player1.p2score && player1.p1score!==0 && player1.p2score!==0){
        document.getElementById('red1').setAttribute("style","width:10px; display:block;");
        document.getElementById('red2').setAttribute("style","width:10px;display:block;");
    }
}else if (p1.identifier1==1 && p1.identifier2==1){
    if (player1.p1score==player1.p2score && player1.p1score!==0 && player1.p2score!==0){
        document.getElementById('red1').setAttribute("style","width:10px; display:block;");
        document.getElementById('red2').setAttribute("style","width:10px;display:block;");
    }
}       
if (p1.identifier1==0 && p1.identifier3==0){
     if(player1.p1score==player1.p3score && player1.p1score!==0 && player1.p3score!==0){
        document.getElementById('red1').setAttribute("style","width:10px;display:block;");
        document.getElementById('red3').setAttribute("style","width:10px;display:block;");
    }
 }else if(p1.identifier1==1 && p1.identifier3==1) {
    if(player1.p1score==player1.p3score && player1.p1score!==0 && player1.p3score!==0){
        document.getElementById('red1').setAttribute("style","width:10px;display:block;");
        document.getElementById('red3').setAttribute("style","width:10px;display:block;");
    }

 } 
if (p1.identifier1==0 && p1.identifier4==0){
 if(player1.p1score==player1.p4score &&player1.p1score!==0 && player1.p4score!==0){
        document.getElementById('red1').setAttribute("style","width:10px;display:block;");
        document.getElementById('red4').setAttribute("style","width:10px;display:block;");
    }}else if(p1.identifier1==1 && p1.identifier4==1){
        if(player1.p1score==player1.p4score &&player1.p1score!==0 && player1.p4score!==0){
        document.getElementById('red1').setAttribute("style","width:10px;display:block;");
        document.getElementById('red4').setAttribute("style","width:10px;display:block;");
    }

    }
    if(p1.identifier3==0 && p1.identifier4==0){
    if(player1.p3score==player1.p4score && player1.p3score!==0 && player1.p4score!==0){
        document.getElementById('red3').setAttribute("style","width:10px;display:block;");
        document.getElementById('red4').setAttribute("style","width:10px;display:block;");
    }}else if(p1.identifier3==1 && p1.identifier4==1){
        if(player1.p3score==player1.p4score && player1.p3score!==0 && player1.p4score!==0){
        document.getElementById('red3').setAttribute("style","width:10px;display:block;");
        document.getElementById('red4').setAttribute("style","width:10px;display:block;");
    }
    }

    if(p1.identifier2==0&&p1.identifier4==0){
    if(player1.p2score==player1.p4score && player1.p2score!==0 && player1.p4score!==0){
        document.getElementById('red2').setAttribute("style","width:10px;display:block;");
        document.getElementById('red4').setAttribute("style","width:10px;display:block;");
    }
 }else if(p1.identifier2==1 && p1.identifier4==1){
    if(player1.p2score==player1.p4score && player1.p2score!==0 && player1.p4score!==0){
        document.getElementById('red2').setAttribute("style","width:10px;display:block;");
        document.getElementById('red4').setAttribute("style","width:10px;display:block;");
    }
 } 
 
    if(p1.identifier2==0&& p1.identifier3==0){
 if(player1.p2score==player1.p3score && player1.p2score!==0 && player1.p3score!==0){
        document.getElementById('red2').setAttribute("style","width:10px;display:block;");
        document.getElementById('red3').setAttribute("style","width:10px;display:block;");
    }}else if(p1.identifier2==1&& p1.identifier3==1){
        if(player1.p2score==player1.p3score && player1.p2score!==0 && player1.p3score!==0){
        document.getElementById('red2').setAttribute("style","width:10px;display:block;");
        document.getElementById('red3').setAttribute("style","width:10px;display:block;");
    }
    }

    if (home.p1p1==true){
        document.getElementById('red1').setAttribute("style","transform:rotate(90deg); margin-top:12px; left:3px; width:18px; display:block;  position:absolute; ")
    }
    if (home.p1p2==true){
        document.getElementById('red2').setAttribute("style","transform:rotate(90deg); margin-top:29px; left:3px; width:18px; display:block; position:absolute;")
    } if (home.p1p3==true){
        document.getElementById('red3').setAttribute("style","transform:rotate(90deg); margin-top:45px; left:3px; width:18px; display:block; position:absolute;")
    } if (home.p1p4==true){
        document.getElementById('red4').setAttribute("style","transform: rotate(90deg); margin-top:60px; left:3px; width:18px; display:block;  position:absolute;")
    }

    
}

function greensize(){

if (player2.p1score==player2.p2score &&player2.p1score==player2.p3score&& player2.p1score==player2.p4score &&player2.p3score==player2.p4score){
    document.getElementById('green1').setAttribute("style","width:10px; display:block;");
    document.getElementById('green2').setAttribute("style","width:10px;display:block;");     
       document.getElementById('green3').setAttribute("style","width:10px; display:block;");
    document.getElementById('green4').setAttribute("style","width:10px;display:block;");
}else{
    document.getElementById('green1').setAttribute("style","width:24px; display:block;");
    document.getElementById('green2').setAttribute("style","width:24px;display:block;");     
    document.getElementById('green3').setAttribute("style","width:24px; display:block;");
    document.getElementById('green4').setAttribute("style","width:24px;display:block;");
}
if(p2.identifier1==0 && p2.identifier2==0){
if (player2.p1score==player2.p2score && player2.p1score!==0 && player2.p2score!==0){
    document.getElementById('green1').setAttribute("style","width:10px; display:block;");
    document.getElementById('green2').setAttribute("style","width:10px;display:block;");
}}else if(p2.identifier1==1 && p2.identifier2==1){
    if (player2.p1score==player2.p2score && player2.p1score!==0 && player2.p2score!==0){
    document.getElementById('green1').setAttribute("style","width:10px; display:block;");
    document.getElementById('green2').setAttribute("style","width:10px;display:block;");
}
}

if(p2.identifier1==0 && p2.identifier3==0){
 if(player2.p1score==player2.p3score && player2.p1score!==0 && player2.p3score!==0){
    document.getElementById('green1').setAttribute("style","width:10px;display:block;");
    document.getElementById('green3').setAttribute("style","width:10px;display:block;");
}
}else if(p2.identifier1==1 && p2.identifier3==1){
    if(player2.p1score==player2.p3score && player2.p1score!==0 && player2.p3score!==0){
    document.getElementById('green1').setAttribute("style","width:10px;display:block;");
    document.getElementById('green3').setAttribute("style","width:10px;display:block;");
}
} 

if(p2.identifier1==0 && p2.identifier4==0){
if(player2.p1score==player2.p4score &&player2.p1score!==0 && player2.p4score!==0){
    document.getElementById('green1').setAttribute("style","width:10px;display:block;");
    document.getElementById('green4').setAttribute("style","width:10px;display:block;");
}}else if(p2.identifier1==1 && p2.identifier4==1){
    if(player2.p1score==player2.p4score &&player2.p1score!==0 && player2.p4score!==0){
    document.getElementById('green1').setAttribute("style","width:10px;display:block;");
    document.getElementById('green4').setAttribute("style","width:10px;display:block;");
}
} 

if(p2.identifier3==0 && p2.identifier4==0){
if(player2.p3score==player2.p4score && player2.p3score!==0 && player2.p4score!==0){
    document.getElementById('green3').setAttribute("style","width:10px;display:block;");
    document.getElementById('green4').setAttribute("style","width:10px;display:block;");
}}else if(p2.identifier3==1 && p2.identifier4==1){
    if(player2.p3score==player2.p4score && player2.p3score!==0 && player2.p4score!==0){
    document.getElementById('green3').setAttribute("style","width:10px;display:block;");
    document.getElementById('green4').setAttribute("style","width:10px;display:block;");
}
}

if(p2.identifier2==0 && p2.identifier4==0){
if(player2.p2score==player2.p4score && player2.p2score!==0 && player2.p4score!==0){
    document.getElementById('green2').setAttribute("style","width:10px;display:block;");
    document.getElementById('green4').setAttribute("style","width:10px;display:block;");
}}else if(p2.identifier2==1 && p2.identifier4==1){
    if(player2.p2score==player2.p4score && player2.p2score!==0 && player2.p4score!==0){
    document.getElementById('green2').setAttribute("style","width:10px;display:block;");
    document.getElementById('green4').setAttribute("style","width:10px;display:block;");
}
} 
if(p2.identifier2==0 && p2.identifier3==0){
if(player2.p2score==player2.p3score && player2.p2score!==0 && player2.p3score!==0){
    document.getElementById('green2').setAttribute("style","width:10px;display:block;");
    document.getElementById('green3').setAttribute("style","width:10px;display:block;");
}
}else if(p2.identifier2==1 && p2.identifier3==1){
    if(player2.p2score==player2.p3score && player2.p2score!==0 && player2.p3score!==0){
    document.getElementById('green2').setAttribute("style","width:10px;display:block;");
    document.getElementById('green3').setAttribute("style","width:10px;display:block;");
}
}
if (home.p2p1==true){
        document.getElementById('green1').setAttribute("style","transform:rotate(179deg); position:absolute; top:0px; margin-left:14px; width:18px; display:block;")
    }
    if (home.p2p2==true){
        document.getElementById('green2').setAttribute("style","transform:rotate(179deg); position:absolute; top:0px; margin-left:28px; width:18px; display:block;")
    } if (home.p2p3==true){
        document.getElementById('green3').setAttribute("style","transform:rotate(179deg); position:absolute; top:0px; margin-left:45px; width:18px; display:block;")
    } if (home.p2p4==true){
        document.getElementById('green4').setAttribute("style","transform: rotate(179deg); position:absolute; top:0px; margin-left:61px; width:18px; display:block;")
    }
}

function yellowsize (){

if (player3.p1score==player3.p2score &&player3.p1score==player3.p3score&& player3.p1score==player3.p4score &&player3.p3score==player3.p4score){
    document.getElementById('yellow1').setAttribute("style","width:10px; display:block;");
    document.getElementById('yellow2').setAttribute("style","width:10px;display:block;");     
       document.getElementById('yellow3').setAttribute("style","width:10px; display:block;");
    document.getElementById('yellow4').setAttribute("style","width:10px;display:block;");
}else{
    document.getElementById('yellow1').setAttribute("style","width:24px; display:block;");
    document.getElementById('yellow2').setAttribute("style","width:24px;display:block;");     
    document.getElementById('yellow3').setAttribute("style","width:24px; display:block;");
    document.getElementById('yellow4').setAttribute("style","width:24px;display:block;");
}

if(p3.identifier1==0 && p3.identifier2==0){
if (player3.p1score==player3.p2score && player3.p1score!==0 && player3.p2score!==0){
    document.getElementById('yellow1').setAttribute("style","width:10px; display:block;");
    document.getElementById('yellow2').setAttribute("style","width:10px;display:block;");
}}else if(p3.identifier1==1 && p3.identifier2==1){
    if (player3.p1score==player3.p2score && player3.p1score!==0 && player3.p2score!==0){
    document.getElementById('yellow1').setAttribute("style","width:10px; display:block;");
    document.getElementById('yellow2').setAttribute("style","width:10px;display:block;");
}
}
if(p3.identifier1==0 && p3.identifier3==0){
 if(player3.p1score==player3.p3score && player3.p1score!==0 && player3.p3score!==0){
    document.getElementById('yellow1').setAttribute("style","width:10px;display:block;");
    document.getElementById('yellow3').setAttribute("style","width:10px;display:block;");
} }else if(p3.identifier1==1 && p3.identifier3==1){
    if(player3.p1score==player3.p3score && player3.p1score!==0 && player3.p3score!==0){
    document.getElementById('yellow1').setAttribute("style","width:10px;display:block;");
    document.getElementById('yellow3').setAttribute("style","width:10px;display:block;");
}

}

if(p3.identifier1==0 && p3.identifier4==0){
if(player3.p1score==player3.p4score &&player3.p1score!==0 && player3.p4score!==0){
    document.getElementById('yellow1').setAttribute("style","width:10px;display:block;");
    document.getElementById('yellow4').setAttribute("style","width:10px;display:block;");
}}else if(p3.identifier1==1 && p3.identifier4==1) {
    if(player3.p1score==player3.p4score &&player3.p1score!==0 && player3.p4score!==0){
    document.getElementById('yellow1').setAttribute("style","width:10px;display:block;");
    document.getElementById('yellow4').setAttribute("style","width:10px;display:block;");
}
}


if(p3.identifier3==0 && p3.identifier4==0){
if(player3.p3score==player3.p4score && player3.p3score!==0 && player3.p4score!==0){
    document.getElementById('yellow3').setAttribute("style","width:10px;display:block;");
    document.getElementById('yellow4').setAttribute("style","width:10px;display:block;");
}}else if(p3.identifier3==1 && p3.identifier4==1){
    if(player3.p3score==player3.p4score && player3.p3score!==0 && player3.p4score!==0){
    document.getElementById('yellow3').setAttribute("style","width:10px;display:block;");
    document.getElementById('yellow4').setAttribute("style","width:10px;display:block;");
}
}

if(p3.identifier2==0 && p3.identifier4==0){
if(player3.p2score==player3.p4score && player3.p2score!==0 && player3.p4score!==0){
    document.getElementById('yellow2').setAttribute("style","width:10px;display:block;");
    document.getElementById('yellow4').setAttribute("style","width:10px;display:block;");
} }else if(p3.identifier2==1 && p3.identifier4==1){
    if(player3.p2score==player3.p4score && player3.p2score!==0 && player3.p4score!==0){
    document.getElementById('yellow2').setAttribute("style","width:10px;display:block;");
    document.getElementById('yellow4').setAttribute("style","width:10px;display:block;");
}
    
}

if(p3.identifier2==0 && p3.identifier3==0 ){
if(player3.p2score==player3.p3score && player3.p2score!==0 && player3.p3score!==0){
    document.getElementById('yellow2').setAttribute("style","width:10px;display:block;");
    document.getElementById('yellow3').setAttribute("style","width:10px;display:block;");
}}else if(p3.identifier2==1 && p3.identifier3==1){
    if(player3.p2score==player3.p3score && player3.p2score!==0 && player3.p3score!==0){
    document.getElementById('yellow2').setAttribute("style","width:10px;display:block;");
    document.getElementById('yellow3').setAttribute("style","width:10px;display:block;");
}

}

if (home.p3p1==true){
        document.getElementById('yellow1').setAttribute("style","transform:rotate(-90deg); margin-top:12px; right:0px; width:18px; display:block; position:absolute;")
    }
    if (home.p3p2==true){
        document.getElementById('yellow2').setAttribute("style","transform:rotate(-90deg); margin-top:29px; right:0px; width:18px; display:block; position:absolute;")
    } if (home.p3p3==true){
        document.getElementById('yellow3').setAttribute("style","transform:rotate(-90deg); margin-top:45px; right:0px; width:18px; display:block; position:absolute;")
    } if (home.p3p4==true){
        document.getElementById('yellow4').setAttribute("style","transform: rotate(-90deg); margin-top:60px; right:0px; width:18px; display:block; position:absolute;")
    }


}

function bluesize(){


if (player4.p1score==player4.p2score &&player4.p1score==player4.p3score&& player4.p1score==player4.p4score &&player4.p3score==player4.p4score){
    document.getElementById('blue1').setAttribute("style","width:10px; display:block;");
    document.getElementById('blue2').setAttribute("style","width:10px;display:block;");     
    document.getElementById('blue3').setAttribute("style","width:10px; display:block;");
    document.getElementById('blue4').setAttribute("style","width:10px;display:block;");
}else{
    document.getElementById('blue1').setAttribute("style","width:24px; display:block;");
    document.getElementById('blue2').setAttribute("style","width:24px;display:block;");     
    document.getElementById('blue3').setAttribute("style","width:24px; display:block;");
    document.getElementById('blue4').setAttribute("style","width:24px;display:block;");
}
if(p4.identifier1==0 && p4.identifier2==0){
if (player4.p1score==player4.p2score && player4.p1score!==0 && player4.p2score!==0){
    document.getElementById('blue1').setAttribute("style","width:10px; display:block;");
    document.getElementById('blue2').setAttribute("style","width:10px;display:block;");
}}else if(p4.identifier1==1 && p4.identifier2==1){
    if (player4.p1score==player4.p2score && player4.p1score!==0 && player4.p2score!==0){
    document.getElementById('blue1').setAttribute("style","width:10px; display:block;");
    document.getElementById('blue2').setAttribute("style","width:10px;display:block;");
}
}

if(p4.identifier1==0 && p4.identifier3==0){
 if(player4.p1score==player4.p3score && player4.p1score!==0 && player4.p3score!==0){
    document.getElementById('blue1').setAttribute("style","width:10px;display:block;");
    document.getElementById('blue3').setAttribute("style","width:10px;display:block;");
} }else if(p4.identifier1==1 && p4.identifier3==1){
    if(player4.p1score==player4.p3score && player4.p1score!==0 && player4.p3score!==0){
    document.getElementById('blue1').setAttribute("style","width:10px;display:block;");
    document.getElementById('blue3').setAttribute("style","width:10px;display:block;");
}
}

if(p4.identifier1==0 && p4.identifier4==0){
if(player4.p1score==player4.p4score &&player4.p1score!==0 && player4.p4score!==0){
    document.getElementById('blue1').setAttribute("style","width:10px;display:block;");
    document.getElementById('blue4').setAttribute("style","width:10px;display:block;");
}}else if(p4.identifier1==1 && p4.identifier4==1){
    if(player4.p1score==player4.p4score &&player4.p1score!==0 && player4.p4score!==0){
    document.getElementById('blue1').setAttribute("style","width:10px;display:block;");
    document.getElementById('blue4').setAttribute("style","width:10px;display:block;");
}
} 
if(p4.identifier3==0 && p4.identifier4==0){
if(player4.p3score==player4.p4score && player4.p3score!==0 && player4.p4score!==0){
    document.getElementById('blue3').setAttribute("style","width:10px;display:block;");
    document.getElementById('blue4').setAttribute("style","width:10px;display:block;");
}}else if(p4.identifier3==1 && p4.identifier4==1){
    if(player4.p3score==player4.p4score && player4.p3score!==0 && player4.p4score!==0){
    document.getElementById('blue3').setAttribute("style","width:10px;display:block;");
    document.getElementById('blue4').setAttribute("style","width:10px;display:block;");
}
}

if(p4.identifier2==0 && p4.identifier4==0){
if(player4.p2score==player4.p4score && player4.p2score!==0 && player4.p4score!==0){
    document.getElementById('blue2').setAttribute("style","width:10px;display:block;");
    document.getElementById('blue4').setAttribute("style","width:10px;display:block;");
}}else if(p4.identifier2==1 && p4.identifier4==1){
    if(player4.p2score==player4.p4score && player4.p2score!==0 && player4.p4score!==0){
    document.getElementById('blue2').setAttribute("style","width:10px;display:block;");
    document.getElementById('blue4').setAttribute("style","width:10px;display:block;");
}
}
if(p4.identifier2==0 && p4.identifier3==0){
if(player4.p2score==player4.p3score && player4.p2score!==0 && player4.p3score!==0){
    document.getElementById('blue2').setAttribute("style","width:10px;display:block;");
    document.getElementById('blue3').setAttribute("style","width:10px;display:block;");
}}else if(p4.identifier2==1 && p4.identifier3==1){
    if(player4.p2score==player4.p3score && player4.p2score!==0 && player4.p3score!==0){
    document.getElementById('blue2').setAttribute("style","width:10px;display:block;");
    document.getElementById('blue3').setAttribute("style","width:10px;display:block;");
}
}

if (home.p4p1==true){
        document.getElementById('blue1').setAttribute("style","bottom:0px; margin-left:14px; width:18px; display:block; position:absolute;")
    }
    if (home.p4p2==true){
        document.getElementById('blue2').setAttribute("style","bottom:0px; margin-left:28px; width:18px; display:block; position:absolute;")
    } if (home.p4p3==true){
        document.getElementById('blue3').setAttribute("style","bottom:0px; margin-left:42px; width:18px; display:block; position:absolute;")
    } if (home.p4p4==true){
        document.getElementById('blue4').setAttribute("style","bottom:0px; margin-left:56px; width:18px; display:block; position:absolute;")
    }

}






    function winlogic(){

        
        if (home.p1p1==true && home.p1p2==true && home.p1p3==true && home.p1p4==true  &&winners.p11!=true){
                        return 1;
                    }
             
        if (home.p2p1==true && home.p2p2==true && home.p2p3==true && home.p2p4==true && winners.p22!=true){
                        return 2;
                    } 
        if (home.p3p1==true && home.p3p2==true && home.p3p3==true && home.p3p4==true && winners.p33!=true){
                        return 3;
                    } 
        if (home.p4p1==true && home.p4p2==true && home.p4p3==true && home.p4p4==true && winners.p44!=true){
                        return 4;
                    }else{
                        return 0;
                    }
                
    



    }

    function wincheck(){
        let name1;
        let name2;
        let name3;
        let name4;
        let checkvar= winlogic();
    if (checkvar==1 && winners.p11!=true){
        alert("player 1 win");
        winners.p11=true;
        name1=player1.name;
      
        insetorder(name1);
    }else if (checkvar==2 && winners.p22!=true) {
        alert("player 2 win");
        winners.p22=true;
        name2=player2.name;

        insetorder(name2);

    }else if( checkvar==3 && winners.p33!=true){
        alert("player3 win");
        winners.p33=true;
        name3=player3.name;
        insetorder(name3);

    }else if (checkvar==4 && winners.p44!=true){
        alert("player4 win");
        winners.p44=true;
        name4=player4.name;
        insetorder(name4);
    }else{
        console.log("sws")
    }
    }

function insetorder(names){
          if(order.first==""){
            order.first=names;
            
        }else if (order.second==""){
            order.second=names;
        } else if (order.third==""){
            order.third=names;
        }else if(order.fourth==""){
            order.fourth=names;
        }

        winnerdeclation();


}

function winnerdeclation(){
    if(gamadata.totalPlayers==2){
        if(order.first!=""){
           
            document.getElementById('mainGame').style.display='none';
            document.getElementById('winnerboard').setAttribute('style','display:flex; flex-direction:column;');
            // document.getElementById('container').style.display='none';

            document.getElementById('winforth').style.display='none';
            document.getElementById('winthird').style.display='none';
            if(order.first==player1.name){
                document.getElementById('winsecond').innerHTML="2] "+player2.name+" Nice Try !"  
              document.getElementById('winfirst').innerHTML="1] Congratulations...."+order.first+"!";
            }else{
                document.getElementById('winsecond').innerHTML="2] "+player1.name+" Nice Try !"  
              document.getElementById('winfirst').innerHTML="1] Congratulations.... "+order.first+"!";
            }
         
            


        }
    }
    if(gamadata.totalPlayers==3){
        if(order.first!="" && order.second!=""){
            document.getElementById('mainGame').style.display='none';
            document.getElementById('winnerboard').setAttribute('style','display:flex; flex-direction:column;');
            // document.getElementById('container').style.display='none';

            if(order.first!=player3.name && order.second!=player3.name){
            document.getElementById('winforth').style.display='none';            
            document.getElementById('winthird').innerHTML="3] "+player3.name+" Nice Try !"
            document.getElementById('winsecond').innerHTML="2] "+order.second+" well played !"  
            document.getElementById('winfirst').innerHTML="1] Congratulations...."+order.first+" You Won !";
            }
            if(order.first!=player1.name && order.second!=player1.name){
            document.getElementById('winforth').style.display='none';            
            document.getElementById('winthird').innerHTML="3] "+player1.name+" Nice Try !"
            document.getElementById('winsecond').innerHTML="2] "+order.second+" well played !"  
            document.getElementById('winfirst').innerHTML="1] Congratulations...."+order.first+" You Won !";
            }
            if(order.first!=player2.name && order.second!=player2.name){
            document.getElementById('winforth').style.display='none';            
            document.getElementById('winthird').innerHTML="3] "+player2.name+" Nice Try !"
            document.getElementById('winsecond').innerHTML="2] "+order.second+" well played !"  
            document.getElementById('winfirst').innerHTML="1] Congratulations...."+order.first+" You Won !";
            }
        }
    }

    if(gamadata.totalPlayers==4){
        
        if(order.first!="" && order.second!="" && order.third!=""){
            document.getElementById('mainGame').style.display='none';
            document.getElementById('winnerboard').setAttribute('style','display:flex; flex-direction:column;');
            // document.getElementById('container').style.display='none';
            if(order.first!=player1.name && order.second!=player1.name && order.third!=player1.name)
            {
            document.getElementById('winforth').innerHTML="4] "+player1.name+" Nice Try !";
            document.getElementById('winthird').innerHTML="3] "+order.third+" Well Played !";
            document.getElementById('winsecond').innerHTML="2] "+order.second+" well played !";  
              document.getElementById('winfirst').innerHTML="1] Congratulations...."+order.first+" You Won !";
        }


        if(order.first!=player2.name && order.second!=player2.name && order.third!=player2.name)
            {
            document.getElementById('winforth').innerHTML="4] "+player2.name+" Nice Try !";
            document.getElementById('winthird').innerHTML="3] "+order.third+" Well Played !";
            document.getElementById('winsecond').innerHTML="2] "+order.second+" well played !";  
              document.getElementById('winfirst').innerHTML="1] Congratulations...."+order.first+" You Won !";
        }
        if(order.first!=player4.name && order.second!=player4.name && order.third!=player4.name )
            {
            document.getElementById('winforth').innerHTML="4] "+player4.name+" Nice Try !";
            document.getElementById('winthird').innerHTML="3] "+order.third+" Well Played !";
            document.getElementById('winsecond').innerHTML="2] "+order.second+" well played !";  
              document.getElementById('winfirst').innerHTML="1] Congratulations...."+order.first+" You Won !";
        }
        if(order.first!=player3.name && order.second!=player3.name && order.third!=player3.name)
            {
            document.getElementById('winforth').innerHTML="4] "+player3.name+" Nice Try !";
            document.getElementById('winthird').innerHTML="3] "+order.third+" Well Played !";
            document.getElementById('winsecond').innerHTML="2] "+order.second+" well played !";  
              document.getElementById('winfirst').innerHTML="1] Congratulations...."+order.first+" You Won !";
        }
    }
        
    }
}


    function safe(){
  
        
        for(let i=12;i<62;i++){
        if(i==53 || i==14|| i==22||i==27||i==35||i==40||i==48||i==61){
            if(player1.p1score==i){
                document.getElementById('red1').setAttribute('style','width:10px;');
                
            }
              
            if(player1.p2score==i){
                document.getElementById('red2').setAttribute('style','width:10px;');
                

            } 
            
            if(player1.p3score==i){
                document.getElementById('red3').setAttribute('style','width:10px;');
                

            }
            
            if(player1.p4score==i){
                document.getElementById('red4').setAttribute('style','width:10px;');
                

            }

            if(player2.p1score==i){
                document.getElementById('green1').setAttribute('style','width:10px;');
                

            }
              
            if(player2.p2score==i){
                document.getElementById('green2').setAttribute('style','width:10px;');
                

            }
             
            if(player2.p3score==i){
                document.getElementById('green3').setAttribute('style','width:10px;');
                

            }
            
            if(player2.p4score==i){
                document.getElementById('green4').setAttribute('style','width:10px;');
                

            }

            if(player3.p1score==i){
                document.getElementById('yellow1').setAttribute('style','width:10px;');
                

            }
             
            if(player3.p2score==i){
                document.getElementById('yellow2').setAttribute('style','width:10px;');
                

            }
             if(player3.p3score==i){
                document.getElementById('yellow3').setAttribute('style','width:10px;');

                

            } 
            if(player3.p4score==i){
                document.getElementById('yellow4').setAttribute('style','width:10px;');
                

            }

            if(player4.p1score==i){
                document.getElementById('blue1').setAttribute('style','width:10px;');
                

            }
             
            if(player4.p2score==i){
                document.getElementById('blue2').setAttribute('style','width:10px;');
                

            }
            
            if(player4.p3score==i){
                document.getElementById('blue3').setAttribute('style','width:10px;');
                

            }
             
            if(player4.p4score==i){
                document.getElementById('blue4').setAttribute('style','width:10px;');
                

            }
            console.log('dhewd');
        }
    }
        
    
    }

