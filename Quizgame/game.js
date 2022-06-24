const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question : 'In which decade was the Internet first implemented?',
        choice1 : '1950s',
        choice2 : '1940s',
        choice3 : '1960s',
        choice4 : '1970s',
        answer : 3
    },

    {
        question : 'Which was the richest tech company in 2020?',
        choice1 : 'Amazon',
        choice2 : 'Facebook',
        choice3 : 'Microsoft',
        choice4 : 'Apple',
        answer : 4
    },
    {
        question : 'Who founded the OS(Operating System) Linux?',
        choice1 : 'Linus Torvalds',
        choice2 : 'Bill Gates',
        choice3 : 'Jeff Bezos',
        choice4 : 'Steve Jobs',
        answer : 1
    },
    {
        question : 'In which year was the first iPhone (iPhone 1/iPhone 2G) announced? A4.2007​',
        choice1 : '2006',
        choice2 : '2005',
        choice3 : '2004',
        choice4 : '2007',
        answer : 4
    },
    {
       question : 'What is 1 Gigabyte (GB) = ',
       choice1 : '1,000 Mb',
       choice2 : '1,275 Mb',
       choice3 : '1,024 Mb',
       choice4 : '1,200 Mb',
       answer : 3
    },
    {
        question : 'Who among the following has designed the JavaScript programing language?',
        choice1 : 'Rasmus Lerdorf',
        choice2 : 'Guido van Rossum',
        choice3 : 'James Gosling',
        choice4 : 'Brendan Eich',
        answer : 4
     },
     {
        question : 'USB is a ………………………… storage device.',
        choice1 : 'Primary',
        choice2 : 'Auxiliary',
        choice3 : 'Secondary',
        choice4 : 'Addition',
        answer : 1
     },
     {
        question : 'The largest unit of measuring computer storage capacity?',
        choice1 : 'GB',
        choice2 : 'TB',
        choice3 : 'MB',
        choice4 : 'KB',
        answer : 2
     },
     {
        question : "What is Apple's Operating System for Mac's called?",
        choice1 : 'MS',
        choice2 : 'Unix',
        choice3 : 'APP',
        choice4 : 'OS X',
        answer : 4
     },
     {
        question : "A computer use which type of number system to calculate and to store data",
        choice1 : 'decimal',
        choice2 : 'binary',
        choice3 : 'hexadecimal',
        choice4 : 'octal',
        answer : 2
     },
]
const SCORE_POINT = 100
const MAX_QUESTION = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()

} 
getNewQuestion = () =>{
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTION){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')

    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTION}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTION) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true

}
choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target 
        const selectedAnswers = selectedChoice.dataset['number']

        let classToApply = selectedAnswers == currentQuestion.answer ? 'correct' : 'incorrect'
        if(classToApply === 'correct'){
            incrementScore(SCORE_POINT)
        }
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })

})
incrementScore = num => {
    score += num
    scoreText.innerText = score
}
startGame()