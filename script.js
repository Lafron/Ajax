    
const getData = file => {
    return fetch(file, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
    .then(data => sendData(data))
    .catch(error => console.log(error));
};

const sendData = data => {
    let url = 'https://jsonplaceholder.typicode.com/posts/';
    
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            data
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => console.log(error));
};

getData("file:///D:/Learning/javascript/Glo%20Academy/Home%20Work%2026/db.json");