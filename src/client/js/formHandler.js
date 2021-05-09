function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    let catFactsList = []
    let factsList = ""
    console.log("::: Form Submitted :::")
    fetch('https://cat-fact.herokuapp.com/facts')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        data.map(fact => {
            catFactsList.push(fact.text)
        })
        for (var i = 0, fact; fact = catFactsList[i]; i++) {
            factsList += "<li>" + fact + "</li>";
          }
        document.getElementById('results').innerHTML = factsList;
    })
}

export { handleSubmit }
