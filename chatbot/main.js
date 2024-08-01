let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro= ["a situation in which a long line of vehicals on a road have stopped moving or are moving very slowly"];
let traffic = ["Traffic is the movement of people and goods from one location to another."];
let signals= ["Traffic signals are primarily used to control traffic in urban street systems—particularly at conventional intersections accommodating large traffic volumes"];
let lights=["The traffic signal works on light signals which include three colours: red ,yellow and green.As mentioned earlier, red indicates the vehicles to stop,yellow indicates the vehicles to slow down and get ready to stop, and the green light indicates the vehicles to go ahead."]
let zebra=["Zebra crossings are marked with black and white stripes on the road and zigzag lines on either side. These markings warn drivers that there may be pedestrians crossing or waiting to cross the road.They also tell drivers that they must give way to pedestrians on the crossing."];
let doc=["Driving license (or) Registration certificate, Taxation Certificate, Emission Test Certificate,  Insurance Certificate, Fitness Certificate & Permit (in case of transport vehicles)."];
let foreign=["No,but if he carries an IDP from his counry he can."];
let fine=["You will be fined Rs.300/-."];
let helmet=["Yes. Wearing helmet is compulsory. Violators will be charged U/sec.177 of M.V.Act-1988 for which fine is Rs.100/-."];
let drunk=["In the first instance there can be penalty up to Rs.3000/- which may extend to imprisonment in subsequent offence."];
let mobile=["As per section 250 (A) MMVR, r/w 177 M.V.Act, no driver while driving or riding a motor vehicle (including two wheelers) can use a mobile phone."];
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    if(message.includes('what is traffic') || message.includes('what is traffic jam')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    else if(message.includes('what is the main function of traffic') || message.includes('what is the main role of traffic')){
        let finalresult = traffic[Math.floor(Math.random() * traffic.length)];
        speech.text = finalresult;
    }
    else if(message.includes('what is the purpose of a traffic signal') || message.includes('purpose of a traffic signal')){
        let finalresult = signals[Math.floor(Math.random() * signals.length)];
        speech.text = finalresult;
    }
    else if(message.includes('what are traffic lights') || message.includes('about traffic lights')){
        let finalresult = lights[Math.floor(Math.random() * lights.length)];
        speech.text = finalresult;
    }
    else if(message.includes('what is the purpose of zebra crossing') || message.includes('what is a zebra crossing')){
        let finalresult = zebra[Math.floor(Math.random() * zebra.length)];
        speech.text = finalresult;
    }
    else if(message.includes('what documents should a driver carry when driving')){
        let finalresult = doc[Math.floor(Math.random() * doc.length)];
        speech.text = finalresult;
    }
    else if(message.includes('can a foreigner drive in India with foreign driving licence') || message.includes('is foreign driving licence valid to drive in India')){
        let finalresult = foreign[Math.floor(Math.random() * foreign.length)];
        speech.text = finalresult;
    }
    else if(message.includes('what are the consequences for driving without a licence') || message.includes('what is the punishment for driving without a licence')){
        let finalresult = fine[Math.floor(Math.random() * fine.length)];
        speech.text = finalresult;
    }
    else if(message.includes('is wearing helmet compulsory for scooter and motorcycle riders') || message.includes('is helmet compulsory for bike riders')){
        let finalresult = helmet[Math.floor(Math.random() * helmet.length)];
        speech.text = finalresult;
    }
    else if(message.includes('what is the punishment for drunk and driving') || message.includes('what are consequences of drunk and driving')){
        let finalresult = drunk[Math.floor(Math.random() * drunk.length)];
        speech.text = finalresult;
    }
    else if(message.includes('what is the rule for use of mobile phone') || message.includes('is using mobile while driving permitted')){
        let finalresult = mobile[Math.floor(Math.random() * mobile.length)];
        speech.text = finalresult;
    }
    else{
        speech.text="I am trying to know about it! Sorry for inconvenience.";
    }

    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
