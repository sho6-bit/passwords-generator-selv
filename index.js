let characters = {
    alphabets: [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbols: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
}

    let allCharacters = [
        ...characters.alphabets,
        ...characters.numbers,
        ...characters.symbols
    ]

let firstPasswordEl = document.getElementById("first-password")
let secondPasswordEl = document.getElementById("second-password")

function generatePasswords() {
    let length = parseInt(document.getElementById("password-length").value)

    let allCharacters = [...characters.alphabets]

    let firstPassword = ""
    let secondPassword = ""

    
    if (document.getElementById("include-symbols").checked) {
        allCharacters = allCharacters.concat(characters.symbols)
    }
    
    if (document.getElementById("include-numbers").checked) {
        allCharacters = allCharacters.concat(characters.numbers)
    }
    
    for (let i = 0; i < length; i ++) {
        let randomIndex1 = Math.floor(Math.random() * allCharacters.length)
        let randomIndex2 = Math.floor(Math.random() * allCharacters.length)
        
        firstPassword += allCharacters[randomIndex1]
        secondPassword += allCharacters[randomIndex2]
    }

    if (allCharacters.length === 0) {
        alert("Please select at least one character type to generate passwords.")
        return
    }

    firstPasswordEl.textContent = firstPassword
    secondPasswordEl.textContent = secondPassword
}

function copyPassword() {
    let passwordToCopy = document.getElementById("first-password").textContent || document.getElementById("second-password").textContent

    if (passwordToCopy) {
        navigator.clipboard.writeText(passwordToCopy)
            .then(() => {
                alert("Password copied to clipboard!")
            })
            .catch(err => {
                console.error("Failed to copy password: ", err)
            })
        }
    }