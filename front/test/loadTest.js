const axios = require('axios')

const MAX_CONCURRENCY = 80

const urls = [
    'http://localhost:3000/comments',
    'http://localhost:3000/comments'
]

function createConcurrency(url){
    const result = []

    for (let i = 0; i < MAX_CONCURRENCY; i++){
        result.push(axios.get(url))
    }

    return result
}

function runLoadTest(){
    const listOfPromises = []

    for (let url of urls){
        listOfPromises.push(
            Promise.any(createConcurrency(url))            
        )        
    }

    const handleResult = (result) => {
        const responses = []
        for (let item of result){
            console.log(item.status)
            responses.push(item.value.data)
        }

        return responses
    }

    Promise.allSettled(listOfPromises)
        .then(handleResult)
}

runLoadTest()