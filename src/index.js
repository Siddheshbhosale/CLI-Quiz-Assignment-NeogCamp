var readlineSync = require("readline-sync");
var chalk = require('chalk');
var score = 0;

console.log(chalk.green.bold.underline("welcome to the Quiz! \n"));

// get username
var Username = readlineSync.question("\nWhat is your name ?\n> ")
console.log(chalk.cyanBright("\nwelcome",Username,"!\nlet's start the Quiz\n"));

//instruction and rules
console.log(chalk.white.bgYellow.bold.underline('Before starting the game go through the Rules & Instructions: '));
console.log(chalk.yellowBright('1. There are 10 Questions(5-written on GK and 5-MCQ on web development ) all are Compulsory.'));
console.log(chalk.yellowBright('2. You will get 2 points on each Right Answer.'));
console.log(chalk.yellowBright('3. One Point will be deducted if the Answer is Wrong.'));
console.log(chalk.yellowBright('4. In MCQ based questions you have to type the serial Number / Index Value.'));
console.log('\n');


var leaderboard = [
    { name: 'Siddhesh', score: '20' },
    { name: 'rushikesh', score: '17' },
    { name: 'ravindra', score: '14'}
];

console.log(chalk.yellowBright.underline('LeaderBoard:'));
console.log(chalk.cyanBright('Name       Score'));
for (var i = 0; i < leaderboard.length; i++) {
    console.log(chalk.greenBright(leaderboard[i].name, '   ', leaderboard[i].score));
}



// function to render question list
function checkAns(question,answer){
  var useranswer =readlineSync.question(question);
  if(useranswer.toLowerCase() === answer.toLowerCase()){
    score=score+2;
    console.log(chalk.green('You are correct..'));
  }
  else{
    score=score-1;
    if(score<0){
      score=0;
    }
    console.log(chalk.red("your answer :",useranswer));
    console.log(chalk.green("right answer :",answer));
  }
   console.log(chalk.cyan("Your Score is :",score));
}


//fucntion to render mcq list
function checkAnsMcq(Listofanswer,question, answer) {
    var userAnswer = readlineSync.keyInSelect(Listofanswer,question);
    if (userAnswer+1 === answer) {
        console.log(chalk.green('You are correct..'));
        score = score + 2;
    } else {
        score = score - 1;
        if (score < 0) {
         score = 0;
        }
        console.log(chalk.red("your answer :",userAnswer+1));
        console.log(chalk.green("right answer :",answer));
    }
    console.log(chalk.cyan('Your Score is: ', score));
}


//list of question
var questionlist =[
{
  question:"Where is Taj mahal situated in India?\n> ",
  answer:"Agra",
},
{
  question:"What is the National Animal of India??\n> ",answer:"tiger",
},
{
  question:"Which is national song of india ?\n> ",answer:"vande mataram",
},
{
  question:"Who wrote National Anthem of India??\n> ",answer:"Rabindranath Tagore"
},
{
  question:"Who is called as father of indian navy?\n> ",answer:"Shivaji Maharaj",
}
]


//list of mcq question
var mcqlist =[
{
  option:['User defined tags','Pre-specified tags','Fixed tags defined by the language','Tags only for linking'],
  question:'HTML uses ?\n>',
  answer:4
},
{
  option:['WWW','HTML','WYSIWYG','WYGWYSI'],
  question:'Web page editors works on a ____ principle.\n> ',
  answer:3
},
{
  option:['Current Style Sheets','Current Sheets Style','Cascading Style Sheets','Cascading Sheets Style'],
  question:'What does CSS stand for \n> ',
  answer:3
},
{
  option:['It is a server side scripting language','It is client side scripting language','It is a Software','It is a database'],
  question:'Which of the following is true about Javascript\n> ',
  answer:2
},
{
  option:['Robert Cailliau','Tim Thompson','Charles Darwin','Tim Berners-Lee'],
  question:'Who is Known as the father of World Wide Web (WWW)?\n> ',
  answer:4
}
]



for(var i=0;i<questionlist.length;i++){
  console.log(chalk.blue("\nQuestion"),i+1);
  checkAns(questionlist[i].question,questionlist[i].answer);
  console.log("---------------------------")
}

console.log("---------------------------")

for(var i=0;i<mcqlist.length;i++){
  console.log(chalk.blue("\nQuestion"),questionlist.length+i+1);
  checkAnsMcq(mcqlist[i].option,mcqlist[i].question,mcqlist[i].answer);
  console.log("---------------------------")
}

console.log('\n');
console.log(chalk.cyanBright.italic.underline('Congratulations,', Username, 'your Total Score is: ', score));
console.log('\n');
console.log(chalk.yellowBright.italic('Thanks for Solving the Quiz,if you have beaten the score that is on the leaderboard than Please take the Screenshot of the Score and Send it to Siddhesh.'));
console.log(chalk.cyanBright.italic.underline("LinkedIn : https://www.linkedin.com/in/SiddheshBhosale/"));
console.log(chalk.cyanBright.italic.underline("Github : https://github.com/siddheshbhosale"))