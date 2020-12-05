import React from "react";

function MagicEightBall() {
    
/*const answers = ["It is certain", 
"It is decidedly so", 
"Without a doubt", 
"Yes - definitely",
"You may rely on it", 
"As I see it, yes", 
"Most likely", 
"Outlook good", 
"Yes", "Signs point to yes",
"Don't count on it", 
"My reply is no",
"My sources say no", 
"Outlook not so good",
"Very doubtful", 
"Reply hazy, try again", 
"Ask again later", 
"Better not tell you now",
"Cannot predict now", 
"Concentrate and ask again"];
//let answer; */

//askQuestion = () => {
//  let num = Math.floor(Math.random() * Math.floor(answers.length));
//  this.answer = answers[num];
//};

  return (
    <div>
      <h1 className="font-bold font-serif text-5xl">Magic 8 ball</h1>
      <p className="">
        Ask me what you want to know and click on the Magic 8 Ball
      </p>
      <input type="text" className="" />
      <div className=" bg-black rounded-full h-64 w-64 flex items-center justify-center... m-3">
        <div className="bg-white rounded-full h-32 w-32 place-self-center m-16">
          <p className="font-bold text-7xl m-11 mt-5">8</p>
          <p className="">{this.answer}</p>
        </div>
      </div>
      <button className="" onClick="{this.askQuestion}">Shake</button>
    </div>
  );
}

export default MagicEightBall;
