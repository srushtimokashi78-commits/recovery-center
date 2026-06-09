let hp = 13;

function nextPage(page){

    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    document.getElementById("page"+page).classList.add("active");
}

function failSmile(){

const jokes = [

"Why did the cookie go to the doctor? Because it felt crumblyy ",

"Why don't eggs tell jokes? They'd crack each other up ",

];

const randomJoke =
jokes[Math.floor(Math.random() * jokes.length)];

document.getElementById("smileResult").innerHTML =
"Baby please smileeee okay read this <br><br>" +
randomJoke +
"<br><br>Please laugh I am extremely serious about this medical treatment";
}

function passSmile(){

    document.getElementById("smileResult").innerHTML =
    "✅ Smile detected. Headache intimidated.";
}

function heal(amount){

    hp += amount;
    createHeart();

    if(hp > 100){
        hp = 100;
    }

    document.getElementById("hpText").innerHTML =
    "❤️ HP: " + hp + "%";

    document.getElementById("fill").style.width =
    hp + "%";

    const messages = [

        "I love you so muchh",

        "You are so so cuteee",

        "Yes smile moreee",

        "Recovery speed increased",

        "Patient feels loved",

        "Most handsome patient award"
    ];

    document.getElementById("message").innerHTML =
    messages[Math.floor(Math.random()*messages.length)];

    if(hp >= 100){

    document.body.classList.add("shake");

    document.getElementById("message").innerHTML =
    " LOVE OVERLOAD DETECTED ";

    setTimeout(()=>{

    document.querySelector("#page3 .sprite").src =
    "images/him.png";

    document.getElementById("message").innerHTML =
    "PATIENT HEALED! Looking much better alreadyyyy ";

},500);

setTimeout(()=>{

    nextPage(4);

},2500);
    }
}

function payBill(){

    document.getElementById("billMessage").innerHTML =
    "Payment accepted. Please send cute photos immediatelyyy ";
}

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "💙";

    heart.classList.add("floating-heart");

    heart.style.left =
    Math.random() * window.innerWidth + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },2000);
}