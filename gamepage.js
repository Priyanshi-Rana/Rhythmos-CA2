document.getElementById("playButton").onclick = playFunction;
const Video = document.getElementById("video");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var Options_all = document.getElementsByClassName("options")
var option1_name = document.getElementById("option1.1");
var option2_name = document.getElementById("option2.2");
var option3_name = document.getElementById("option3.3");
const next = document.getElementById("board");
const Next_page = document.getElementById("Next-level");
const score_Live = document.getElementById("score");

var Score = 0;
var audio = new Audio;
var Check_play = 0;
var option_check = 0;
var Win_check;
var Winner;
var looser1;
var looser2;
option1.onclick = Play1;
option2.onclick = Play2;
option3.onclick = Play3;

// Correct Song variables.
var Ans_img = new Image;
var Ans_name;


// Option-1 Variable.
var OptionImg1 = new Image;
var Option1_index;
var Optionname1;


// Option-2 Variable.
var OptionImg2 = new Image;
var Option2_index;
var Optionname2;


// Option-boxes in an array for random display
var Options = [
    [option1,option1_name],
    [option2,option2_name],
    [option3,option3_name]
]

var Options2 = [
    option1, 
    option2, 
    option3
]


// Array of all the songs.
var Songs = 
[
    ["./assets/Songs/Hindi_songs/Ae dil hai mushkil.mp3","./assets/Covers/Hindi_covers/ae dil hai mushkil - Cover.jpg","Ae Dil Hai Mushkil"],
    ["./assets/Songs/Hindi_songs/Galiyaan.mp3","./assets/Covers/Hindi_covers/Galiyan-Cover.jpg","Galiyan"],
    ["./assets/Songs/Hindi_songs/tere Sang Yaara.mp3","./assets/Covers/Hindi_covers/tere sang yara - Cover.jpg","Tere Sang Yaara"],
    ["./assets/Songs/Hindi_songs/Saathiya.mp3","./assets/Covers/Hindi_covers/saathiya-Cover.jpg","Saathiya"],
    ["./assets/Songs/Hindi_songs/ishqwalalove.mp3","./assets/Covers/Hindi_covers/ishq wala love - Cover.jpg","Ishq Wala Love"],
    ["./assets/Songs/Hindi_songs/zara zara.mp3","./assets/Covers/Hindi_covers/Zara-Zara-Bahekta-Hai-Cover.jpg","Zara Zara"],
    ["./assets/Songs/Hindi_songs/Soch Na Sake.mp3","./assets/Covers/Hindi_covers/soch na sake - Cover.jpg","Soch Na Sake"],
    ["./assets/Songs/Hindi_songs/Khairiyat.mp3","./assets/Covers/Hindi_covers/khairiyat-Cover.jpg","Khairiyat"],
    ["./assets/Songs/Hindi_songs/Hasi ban gaya.mp3","./assets/Covers/Hindi_covers/hasi-Cover.jpg","Hasi"],
    ["./assets/Songs/Hindi_songs/gerua.mp3","./assets/Covers/Hindi_covers/gerua-cover.jpg","Gerua"],
    ["./assets/Songs/Hindi_songs/laalbindi.mp3","./assets/Covers/Hindi_covers/laal bindi - Cover.jpg","Laal Bindi"],
    ["./assets/Songs/Hindi_songs/kesariya.mp3","./assets/Covers/Hindi_covers/kesariya-cover.jpg","Kesariya"],
    ["./assets/Songs/Hindi_songs/channa ve.mp3","./assets/Covers/Hindi_covers/Channa ve - Cover.jpg","Channa Ve"]
]


// Required Misc. Functions.
function RandomInt(){ // For options
    i = Math.floor(Math.random()*Options.length);
    return i;
}
function randomInteger(){ // For Songs
    index_number = Math.floor(Math.random()*Songs.length);
    return index_number;
}
Level = 1;
function changeLevel(){
    Level++;
    document.getElementById("level").innerText = Level;
}


// Adding Options to the game.
function Song1(){
    randomInteger();
    audio.src = (Songs[index_number][0]);
    Ans_img.src = Songs[index_number][1];
    Ans_img.height = "200";
    Ans_name = Songs[index_number][2];
    audio.play();
    RandomInt();
    Winner = i;
    Options[i][0].appendChild(Ans_img);
    Options[i][1].innerText = Ans_name;
    Options.splice(i,1)
    Songs.splice(index_number,1)
}
function Song2(){
    randomInteger();
    OptionImg1.src = Songs[index_number][1];
    OptionImg1.height = "200"
    Optionname1 = Songs[index_number][2];
    RandomInt();
    looser1 = i;
    Options[i][0].appendChild(OptionImg1);
    Options[i][1].innerText = Optionname1;
    Options.splice(i,1)
    Songs.splice(index_number,1)
}
function Song3(){
    randomInteger();
    OptionImg2.src = Songs[index_number][1];
    OptionImg2.height = "200"
    Optionname2 = Songs[index_number][2];
    RandomInt();
    looser2 = i;
    Options[i][0].appendChild(OptionImg2);
    Options[i][1].innerText = Optionname2;
    Options.splice(i,1)
    Songs.splice(index_number,1)
}


function playFunction(){
    if(Check_play==0)
    {
        Video.play();
        Song1();
        Song2();
        Song3();
        Check_play++;
    }

}

function Play1(){
    if(Check_play==1)
    {
        if(option_check==0)
        {
            audio.pause();
            Video.pause();
            option1.style.backgroundColor = "yellow";
            Win_check = 0;
            option_check++;
        }
    }
    check();
}
function Play2(){
    if(Check_play==1)
    {
        if(option_check==0)
        {
            audio.pause();
            Video.pause();
            option2.style.backgroundColor = "yellow";
            Win_check = 1;
            option_check++;
        }
    }
    check();
}
function Play3(){
    if(Check_play==1)
    {
        if(option_check==0)
        {
            audio.pause();
            Video.pause();
            option3.style.backgroundColor = "yellow";
            Win_check = 2;
            option_check++;
        }
    }
    check();
}

function check(){
    if(Winner == Win_check)
    {
        Options2[Winner].style.backgroundColor = "green";
        Score+=10;
        score_Live.innerText = Score;
        startTimer();
    }
    else if(Winner != Win_check)
    {
        Options2[Win_check].style.backgroundColor = "red";
        localStorage.setItem("Score",Score);
        alert("Sorry Pal,Wrong answer.")
        window.location.assign("over.html")
    }
    else{
        alert("You didn't select any option")
        localStorage.setItem("Score",Score)
        window.location.assign("over.html")
    }
}

function reset()
{
    Options = [
        [option1,option1_name],
        [option2,option2_name],
        [option3,option3_name]
    ]
    changeLevel();
    Options2[Winner].style.backgroundColor = "rgba(255, 255, 255, 0.7)"
    Options2[Winner].removeChild(Ans_img);
    option1_name.innerText = "";
    Options2.splice(Winner,1);
    Options2[looser1].removeChild(OptionImg1);
    option2_name.innerText = "";
    Options2.splice(looser1,1);
    Options2[0].removeChild(OptionImg2);
    option3_name.innerText = "";
    audio = new Audio;
    Check_play = 0;
    option_check = 0;
    Win_check;
    Winner;
    looser1;
    looser2;
    Options2 = [
        option1, 
        option2, 
        option3
    ]
    playFunction();
}
// <----------------------------------------------------------------------------------------------------------------------------------->

// Timer here
var time;
var timerId;

function startTimer(){
    time = 4;
    timerId = setInterval(() => {
    time--;
    if (time == 0)
    {
        reset();
    }
    }, 1000);
}


