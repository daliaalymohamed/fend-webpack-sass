function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Cat Facts"
    ]

    if(names.includes(inputText)) {
        alert("Here are some cats facts!")
    }
}

export { checkForName }
