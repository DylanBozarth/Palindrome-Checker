
// working as intended. 
function check () {
    let userinput = document.getElementById('input').value
    let finished = userinput.split('').reverse().join('');
    if (finished === userinput) {
        document.getElementById('span').innerHTML = "Yep, that is a palindrome!"
        document.getElementById('span').classList.add('success')
        document.getElementById('span').classList.remove('fail')
    }
    else { document.getElementById('span').innerHTML = "Sorry, that's not a palindrome."
    document.getElementById('span').classList.add('fail')
    document.getElementById('span').classList.remove('success')
};
}