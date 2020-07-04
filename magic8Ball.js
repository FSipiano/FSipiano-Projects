var userName = prompt('What is your name?')
var randomNumber = Math.floor(Math.random() * 8)

function checkName() {
    if (username == true) {
        console.log('Welcome' + userName)
    }
    else if (username == false) {
        console.log('Hello, user!')
    }
    else {
        console.log('Error, please try again')

    }

}
var userQuestion = prompt('Please ask a question!') 

    console.log (userName + ',you asked' + userQuestion + '!')


var eightBall = ['Better not tell you now.', 'Concentrate and ask again',
    'Reply hazy and try again', 'Cannot predict now', 'My reply is no',
    'My sources say no', 'Outlook not so good', 'Signs point to yes!']

var eightAnswer = (eightBall[randomNumber])

console.log('The eightBall says:' + eightAnswer)

