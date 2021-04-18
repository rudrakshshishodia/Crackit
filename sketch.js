var count = 2;
var screen1img,screen1;
var startbutton, optionQ1;
var optionQ2, optionQ3, optionQ4;
var choice1, choice2, choice3, choice4;
var answer1, answer2, answer3, answer4
var ans1, ans2, ans3, ans4;
var an1, an2, an3, an4;
var a1, a2, a3, a4;
var n1, n2, n3, n4;
var ma1, ma2, ma3, ma4;
var m1, m2, m3, m4;
var l1, l2, l3, l4;
var gamestate="screen1";
var q1,q1img
var q2,q2img;
var q3,q3img;
var q4,q4img;
var q5,q5img;
var q6,q6img;
var q7,q7img;
var q8,q8img;
var q9,q9img;
var q10,q10img;
var gs,gsimg;
var sec;

    function preload(){
        screen1img= loadImage("images/screen1.1.PNG");
        //infoimg= loadImage("INFO.png");
        q1img= loadImage("images/C1 CODE.png");
        q2img= loadImage("images/C2 CODE.png");
        q3img= loadImage("images/C3 CODE.png");
        q4img= loadImage("images/C4 CODE.png");
        q5img= loadImage("images/C5 CODE.png");
        q6img= loadImage("images/C6 CODE.png");
        q7img= loadImage("images/C7 CODE.png");
        q8img= loadImage("images/C8 CODE.png");
        q9img= loadImage("images/C9 CODE.png");
        q10img= loadImage("images/C10 CODE.png");
        gsimg= loadImage("images/GREAT SUCCESS.png");
        loszimg= loadImage("images/game over.jpeg");


    }

    function setup(){
        createCanvas(windowWidth, windowHeight);
        screen1 = createSprite(width/2, height/2);
        screen1.addImage(screen1img);
        screen1.scale=width/1500;

        startbutton=createButton("Start");
        startbutton.position(width-400, height-300);
        startbutton.size(200, 100);
        startbutton.style("background-color","#00A693");
        startbutton.style("font-size","38px");
        startbutton.style("color","white");
        startbutton.style("border-radius","18px");

       // info = createSprite(width/2, height/2);
       // info.addImage(infoimg);
       // info.scale=width/950;

        //startbutton=createButton("Start");
        //startbutton.position(width-400, height-300);
        //startbutton.size(200, 100);
        //startbutton.style("background-color","#00A693");
        //startbutton.style("font-size","38px");
        //startbutton.style("color","white");
        //startbutton.style("border-radius","18px");

      }

    function draw(){
        background("rgb(0,0,139	)");

        
        startbutton.mousePressed(()=>{
            R1();
            gamestate = "C1CODE"});
        if (gamestate === "C1CODE"){
            sec=World.seconds;
            if (sec>=30){
                gamestate="lost";
            }
            startbutton.hide();
            screen1.visible=false;

            

        }
        if (gamestate === "GREATSUCCESS"){
            victory= createSprite(width/2, height/2);
            victory.addImage(gsimg);
        }
        if(gamestate === "lost"){
            losz=createSprite(width/2, height/2);
            losz.addImage(loszimg);
        }
        drawSprites();
    }


    function R1(){
        q1=createSprite(width/2 , height/2-height/4.5);
        q1.addImage(q1img);
        
        optionQ1=createButton("1)   SAVE");
        optionQ1.position(width/2-width/3,height-height/2.5);
        optionQ1.size(150,80);
        optionQ1.style("background-color","#00A693");
        optionQ1.style("font-size","30px");
        optionQ1.style("color","whitex");
        optionQ1.style("border-radius","18px");

        optionQ2=createButton("2)   CAVE");
        optionQ2.position(width/2+width/5,height-height/2.5);
        optionQ2.size(150,80);
        optionQ2.style("background-color","#00A693");
        optionQ2.style("font-size","30px");
        optionQ2.style("color","whitex");
        optionQ2.style("border-radius","18px");

        optionQ3=createButton("3)   PAVE");
        optionQ3.position(width/2-width/3,height-height/3.5);
        optionQ3.size(150,80);
        optionQ3.style("background-color","#00A693");
        optionQ3.style("font-size","30px");
        optionQ3.style("color","whitex");
        optionQ3.style("border-radius","18px");

        optionQ4=createButton("4)   WAVE");
        optionQ4.position(width/2+width/5,height-height/3.5);
        optionQ4.size(150,80);
        optionQ4.style("background-color","#00A693");
        optionQ4.style("font-size","30px");
        optionQ4.style("color","whitex");
        optionQ4.style("border-radius","18px");

        optionQ1.mousePressed(()=>{
            optionQ1.hide();
            optionQ2.hide();
            optionQ3.hide();
            optionQ4.hide();
            q1.visible=false;
        R2();
            gamestate = "C2CODE"});
            optionQ2.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            optionQ3.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            optionQ4.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
        
    }


    function R2(){
        q2=createSprite(width/2 , height/2-height/4.5);
        q2.addImage(q2img);
        
        choice1=createButton("1)   CURD");
        choice1.position(width/2-width/3,height-height/2.5);
        choice1.size(150,80);
        choice1.style("background-color","#00A693");
        choice1.style("font-size","30px");
        choice1.style("color","whitex");
        choice1.style("border-radius","18px");

        choice2=createButton("2)   SOLD");
        choice2.position(width/2+width/5,height-height/2.5);
        choice2.size(150,80);
        choice2.style("background-color","#00A693");
        choice2.style("font-size","30px");
        choice2.style("color","whitex");
        choice2.style("border-radius","18px");

        choice3=createButton("3)   FOOD");
        choice3.position(width/2-width/3,height-height/3.5);
        choice3.size(150,80);
        choice3.style("background-color","#00A693");
        choice3.style("font-size","30px");
        choice3.style("color","whitex");
        choice3.style("border-radius","18px");

        choice4=createButton("4)   LOOK");
        choice4.position(width/2+width/5,height-height/3.5);
        choice4.size(150,80);
        choice4.style("background-color","#00A693");
        choice4.style("font-size","30px");
        choice4.style("color","whitex");
        choice4.style("border-radius","18px");

        choice3.mousePressed(()=>{
            choice1.hide();
            choice2.hide();
            choice3.hide();
            choice4.hide();
            q2.visible=false;
        R3();
            gamestate = "C3CODE"});
            choice1.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            choice2.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            choice4.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
        
    }

    function R3(){
        q3=createSprite(width/2 , height/2-height/4.5);
        q3.addImage(q3img);
        
        answer1=createButton("1)   TIME");
        answer1.position(width/2-width/3,height-height/2.5);
        answer1.size(150,80);
        answer1.style("background-color","#00A693");
        answer1.style("font-size","30px");
        answer1.style("color","whitex");
        answer1.style("border-radius","18px");

        answer2=createButton("2)   LIFE");
        answer2.position(width/2+width/5,height-height/2.5);
        answer2.size(150,80);
        answer2.style("background-color","#00A693");
        answer2.style("font-size","30px");
        answer2.style("color","whitex");
        answer2.style("border-radius","18px");

        answer3=createButton("3)   FOOD");
        answer3.position(width/2-width/3,height-height/3.5);
        answer3.size(150,80);
        answer3.style("background-color","#00A693");
        answer3.style("font-size","30px");
        answer3.style("color","whitex");
        answer3.style("border-radius","18px");

        answer4=createButton("4)   DUKE");
        answer4.position(width/2+width/5,height-height/3.5);
        answer4.size(150,80);
        answer4.style("background-color","#00A693");
        answer4.style("font-size","30px");
        answer4.style("color","whitex");
        answer4.style("border-radius","18px");

        answer2.mousePressed(()=>{
            answer1.hide();
            answer2.hide();
            answer3.hide();
            answer4.hide();
            q3.visible=false;
        R4();
            gamestate = "C3CODE"});
            answer1.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            answer3.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            answer4.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
        
    }


    function R4(){
        q4=createSprite(width/2 , height/2-height/4.5);
        q4.addImage(q4img);
        
        ans1=createButton("1)   MUSCLE");
        ans1.position(width/2-width/3,height-height/2.5);
        ans1.size(180,110);
        ans1.style("background-color","#00A693");
        ans1.style("font-size","30px");
        ans1.style("color","whitex");
        ans1.style("border-radius","18px");

        ans2=createButton("2)   LETTER");
        ans2.position(width/2+width/5,height-height/2.5);
        ans2.size(180,110);
        ans2.style("background-color","#00A693");
        ans2.style("font-size","30px");
        ans2.style("color","whitex");
        ans2.style("border-radius","18px");

        ans3=createButton("3)   SONGS");
        ans3.position(width/2-width/3,height-height/4);
        ans3.size(180,110);
        ans3.style("background-color","#00A693");
        ans3.style("font-size","30px");
        ans3.style("color","whitex");
        ans3.style("border-radius","18px");

        ans4=createButton("4)   CLASS");
        ans4.position(width/2+width/5,height-height/4);
        ans4.size(180,110);
        ans4.style("background-color","#00A693");
        ans4.style("font-size","30px");
        ans4.style("color","whitex");
        ans4.style("border-radius","18px");

        ans1.mousePressed(()=>{
            ans1.hide();
            ans2.hide();
            ans3.hide();
            ans4.hide();
            q4.visible=false;
        R5();
            gamestate = "C5CODE"});
            ans2.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            ans3.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            ans4.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
        
    }

   
    function R5(){
        q5=createSprite(width/2 , height/2-height/4.5);
        q5.addImage(q5img);
        
        an1=createButton("1)   MOBILE");
        an1.position(width/2-width/3,height-height/2.5);
        an1.size(180,110);
        an1.style("background-color","#00A693");
        an1.style("font-size","30px");
        an1.style("color","whitex");
        an1.style("border-radius","18px");

        an2=createButton("2)   GREASE");
        an2.position(width/2+width/5,height-height/2.5);
        an2.size(180,110);
        an2.style("background-color","#00A693");
        an2.style("font-size","30px");
        an2.style("color","whitex");
        an2.style("border-radius","18px");

        an3=createButton("3)   SONGS");
        an3.position(width/2-width/3,height-height/4);
        an3.size(180,110);
        an3.style("background-color","#00A693");
        an3.style("font-size","30px");
        an3.style("color","whitex");
        an3.style("border-radius","18px");

        an4=createButton("4)   MARUTI");
        an4.position(width/2+width/5,height-height/4);
        an4.size(180,110);
        an4.style("background-color","#00A693");
        an4.style("font-size","30px");
        an4.style("color","whitex");
        an4.style("border-radius","18px");

        an2.mousePressed(()=>{
            an1.hide();
            an2.hide();
            an3.hide();
            an4.hide();
            q5.visible=false;
        R6();
            gamestate = "C6CODE"});
            an1.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            an3.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            an4.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
        
    }

    function R6(){
        q6=createSprite(width/2 , height/2-height/4.5);
        q6.addImage(q6img);
        
        a1=createButton("1)   LAPTOP");
        a1.position(width/2-width/3,height-height/2.5);
        a1.size(180,110);
        a1.style("background-color","#00A693");
        a1.style("font-size","30px");
        a1.style("color","whitex");
        a1.style("border-radius","18px");

        a2=createButton("2)   iPHONE");
        a2.position(width/2+width/5,height-height/2.5);
        a2.size(180,110);
        a2.style("background-color","#00A693");
        a2.style("font-size","30px");
        a2.style("color","whitex");
        a2.style("border-radius","18px");

        a3=createButton("3)   SONGS");
        a3.position(width/2-width/3,height-height/4);
        a3.size(180,110);
        a3.style("background-color","#00A693");
        a3.style("font-size","30px");
        a3.style("color","whitex");
        a3.style("border-radius","18px");

        a4=createButton("4)   MOBILE");
        a4.position(width/2+width/5,height-height/4);
        a4.size(180,110);
        a4.style("background-color","#00A693");
        a4.style("font-size","30px");
        a4.style("color","whitex");
        a4.style("border-radius","18px");

        a1.mousePressed(()=>{
            a1.hide();
            a2.hide();
            a3.hide();
            a4.hide();
            q6.visible=false;
        R7();
            gamestate = "C7CODE"});
            a2.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            a3.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            a4.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
        
    }

    function R7(){
        q7=createSprite(width/2 , height/2-height/4.5);
        q7.addImage(q7img);
        
        n1=createButton("1)   ROSE");
        n1.position(width/2-width/3,height-height/2.5);
        n1.size(180,110);
        n1.style("background-color","#00A693");
        n1.style("font-size","30px");
        n1.style("color","whitex");
        n1.style("border-radius","18px");

        n2=createButton("2)   WATCH");
        n2.position(width/2+width/5,height-height/2.5);
        n2.size(180,110);
        n2.style("background-color","#00A693");
        n2.style("font-size","30px");
        n2.style("color","whitex");
        n2.style("border-radius","18px");

        n3=createButton("3)   MOBILE");
        n3.position(width/2-width/3,height-height/4);
        n3.size(180,110);
        n3.style("background-color","#00A693");
        n3.style("font-size","30px");
        n3.style("color","whitex");
        n3.style("border-radius","18px");

        n4=createButton("4)   GLASSES");
        n4.position(width/2+width/5,height-height/4);
        n4.size(200,110);
        n4.style("background-color","#00A693");
        n4.style("font-size","30px");
        n4.style("color","whitex");
        n4.style("border-radius","18px");

        n3.mousePressed(()=>{
            n1.hide();
            n2.hide();
            n3.hide();
            n4.hide();
            q7.visible=false;
        R8();
            gamestate = "C8CODE"});
            n1.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            n2.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            n4.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
        
    }  
    

    function R8(){
        q8=createSprite(width/2 , height/2-height/4.5);
        q8.addImage(q9img);
        
        ma1=createButton("1)   ANDROID");
        ma1.position(width/2-width/3,height-height/2.5);
        ma1.size(200,110);
        ma1.style("background-color","#00A693");
        ma1.style("font-size","30px");
        ma1.style("color","whitex");
        ma1.style("border-radius","18px");

        ma2=createButton("2)   WINDOWS");
        ma2.position(width/2+width/5,height-height/2.5);
        ma2.size(215,110);
        ma2.style("background-color","#00A693");
        ma2.style("font-size","30px");
        ma2.style("color","whitex");
        ma2.style("border-radius","18px");

        ma3=createButton("3)   SOFTWARE");
        ma3.position(width/2-width/3,height-height/4);
        ma3.size(225,110);
        ma3.style("background-color","#00A693");
        ma3.style("font-size","30px");
        ma3.style("color","whitex");
        ma3.style("border-radius","18px");

        ma4=createButton("4)   MAC-os");
        ma4.position(width/2+width/5,height-height/4);
        ma4.size(200,110);
        ma4.style("background-color","#00A693");
        ma4.style("font-size","30px");
        ma4.style("color","whitex");
        ma4.style("border-radius","18px");

        ma1.mousePressed(()=>{
            ma1.hide();
            ma2.hide();
            ma3.hide();
            ma4.hide();
            q8.visible=false;
        R9();
            gamestate = "C9CODE"});
            ma2.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            m3.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            m4.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
        
    }  

    function R9(){
        q9=createSprite(width/2 , height/2-height/4.5);
        q9.addImage(q8img);
        
        m1=createButton("1)   PLAYER");
        m1.position(width/2-width/3,height-height/2.5);
        m1.size(200,110);
        m1.style("background-color","#00A693");
        m1.style("font-size","30px");
        m1.style("color","whitex");
        m1.style("border-radius","18px");

        m2=createButton("2)   LOOSER");
        m2.position(width/2+width/5,height-height/2.5);
        m2.size(215,110);
        m2.style("background-color","#00A693");
        m2.style("font-size","30px");
        m2.style("color","whitex");
        m2.style("border-radius","18px");

        m3=createButton("3)   SMART");
        m3.position(width/2-width/3,height-height/4);
        m3.size(225,110);
        m3.style("background-color","#00A693");
        m3.style("font-size","30px");
        m3.style("color","whitex");
        m3.style("border-radius","18px");

        m4=createButton("4)   STAIRCASE ");
        m4.position(width/2+width/5,height-height/4);
        m4.size(200,110);
        m4.style("background-color","#00A693");
        m4.style("font-size","30px");
        m4.style("color","whitex");
        m4.style("border-radius","18px");

        m1.mousePressed(()=>{
            m1.hide();
            m2.hide();
            m3.hide();
            m4.hide();
            q9.visible=false;
       R10();
            gamestate = "C10CODE"});
            m2.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            m3.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            m4.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
        
    }  

    function R10(){
        q10=createSprite(width/2 , height/2-height/4.5);
        q10.addImage(q10img);
        
        l1=createButton("1)   TREE HOUSE");
        l1.position(width/2-width/3,height-height/2.5);
        l1.size(200,110);
        l1.style("background-color","#00A693");
        l1.style("font-size","30px");
        l1.style("color","whitex");
        l1.style("border-radius","18px");

        l2=createButton("2)  TABLE LAMP");
        l2.position(width/2+width/5,height-height/2.5);
        l2.size(215,110);
        l2.style("background-color","#00A693");
        l2.style("font-size","30px");
        l2.style("color","whitex");
        l2.style("border-radius","18px");

        l3=createButton("3)   SMART APP");
        l3.position(width/2-width/3,height-height/4);
        l3.size(225,110);
        l3.style("background-color","#00A693");
        l3.style("font-size","30px");
        l3.style("color","whitex");
        l3.style("border-radius","18px");

        l4=createButton("4)   APPLICATION ");
        l4.position(width/2+width/5,height-height/4);
        l4.size(230,110);
        l4.style("background-color","#00A693");
        l4.style("font-size","30px");
        l4.style("color","whitex");
        l4.style("border-radius","18px");

        l2.mousePressed(()=>{
            l1.hide();
            l2.hide();
            l3.hide();
            l4.hide();
            q10.visible=false;
    //   last();
            gamestate = "GREATSUCCESS"});
            l1.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            l3.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
            l4.mousePressed(()=>{
                count = count-1;
                if(count === 0){
                    gamestate = "lost";
                }
            })
        
    }  
    
     