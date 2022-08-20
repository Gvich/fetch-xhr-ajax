const requestURL = 'https://jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest()
//
// xhr.open('GET', requestURL)
//
// xhr.responseType = 'json'
//
// xhr.onload = () => {
//     //console.log(JSON.parse(xhr.response))
//     if (xhr.status >= 400) {
//         console.error(xhr.response)
//     } else {
//         console.log(xhr.response)
//     }
//     //console.log(xhr.response)
// }
//
// xhr.onerror = () => {
//     console.log(xhr.response)
// }
//
// xhr.send()

function sendRequest (method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type',  'application/json')

        xhr.onload = () => {
            xhr.status >= 400 ? reject(xhr.response)
                : resolve(xhr.response)
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const body = {
    name: 'Eugene',
    age: 20,
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))

