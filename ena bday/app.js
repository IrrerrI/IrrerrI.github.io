const submitButton = document.querySelector('.submit')
const bdayMessage = document.querySelector(".message")
const container = document.querySelector(".container")
const displayRandomMessage = () => {
    const messages = [
        'autistic bitch',
        'literally 5 foot 2',
        'kys',
        'u can never be irre',
        'ruerue loves me more',
        'u have no bitches',
        'u suck at chess',
        'ily ure cool',
        'idk what else to type',
        'orpehues is better than odyssye',
        'we r not bwest fwens',
        'another year with luka most dateable mlb character - jaymie',
        'why r u still trying',
        'i wrote a lot',
        'these will never end',
        'happy bday',
        'filthy amino kid',
        'ur taste suks',
        'tell arfa i say hi',
        'mewoemwomeow (ruerue will translate)',
        '*teleports behind u*',
        'whats ur fav creepyspasta',
        'u should get limblenghtening surgery',
        'snow white and the seven they/thems on the spectrum',
        'one two buckle my shoe',
        'i m better designer',
        'IT WAS A FUCKING OUTLINE',
        'the end',
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    bdayMessage.innerHTML = randomMessage
}
function handleSubmit(event) {
    event.preventDefault();
    const nameInput = document.querySelector('.name');
    const name = nameInput.value.toLowerCase();
    const validNames = ['ena', 'menahil', 'mena'];
    if (validNames.includes(name)) {
        displayRandomMessage();
    }
}

submitButton.addEventListener('click',handleSubmit)
document.querySelector('.name').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        handleSubmit(event);
    }})