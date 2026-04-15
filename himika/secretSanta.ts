const fs = require('fs')
const path = require('path')
const csvParse = require('csv-parse')
const parse = csvParse.parse

type SecretSantaData = {
    name: string
    email: string
}

const csvFilePath = path.resolve(__dirname, 'secretSanta.csv')

const headers = ['name', 'email']

const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' })

parse(fileContent, {
delimiter: ',',
columns: headers,
fromLine: 2,
on_record: (line: SecretSantaData) => {
    if (line.name === 'Name' && line.email === 'Email') {
        return
    }
    return line.email
    }
}, (error: Error, result: string[]) => {
if (error) {
    console.error(error)
}
console.log({result})

// random pairings
const createSecretSantaList = (emailList: string[])=>{
    const receiverArray = [...emailList]
    const secretSantaList = emailList.map((giverEmail)=> {
        let receiverIndex = Math.floor(Math.random() * receiverArray.length)
        console.log({receiverIndex})
        while (receiverArray[receiverIndex] === giverEmail){
            if (receiverArray.length === 1){
                return null
            } else {
                receiverIndex = Math.floor(Math.random() * receiverArray.length)
            }
        }
        console.log({receiverIndex})
        const receiverEmail = receiverArray.splice(receiverIndex,1)[0]
        console.log({receiverEmail})
        console.log({receiverArray})
        return [giverEmail, receiverEmail]
    })
    if (secretSantaList.includes(null)) createSecretSantaList(result)
    
    return secretSantaList
}


console.log(createSecretSantaList(result))
})


// isolate the emails into an array // this could also be a set

//random pairings
// create random function that selects a number between 1-length-1
// gift giving array, gift receiving array
// output: gift giver, gift receiver
// loop over gift giver array, and select a number between 0-length-1 excluding current position
// remove from the receving array the person selected



