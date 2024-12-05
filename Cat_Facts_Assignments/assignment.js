page = document.getElementsByClassName("page");
factsButton = document.getElementById('catFacts');


factsButton.addEventListener('click', () =>{
    newFact = new Promise((resolve, reject) => {
        setTimeout(() =>{
            // resolve("kachi")
            const req = new XMLHttpRequest()
            const getFacts = new Promise((resolve, reject) =>{
                req.open("GET", "https://catfact.ninja/facts?limit=15max_length=60")
                req.send()
                req.responseType = "json"
                req.onload = () => resolve(req.response)
                req.onerror =() => reject(req.statusText)
            })
            console.log(getFacts);
            getFacts.then(result => result.data
            )
            // .then(result => console.log(result[0].fact)
            // )
            .then(result => resolve(result[Math.floor(Math.random() * result.length)].fact))
            .catch(error => console.log(error)
            )
        }, 3000);
    })

    const greeting = async () => {
        try{
        page[0].textContent = "...Loading"
        page[0].style = "text-align: center"
        fact = await newFact
        page[0].textContent = "Cat Fact: " + name
        }catch(error){
            console.log(error);
    
        }
        finally{
    
        }
    }
    
    greeting()

}) 