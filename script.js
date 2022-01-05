    
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
            "user": data.user,
            "age": data.age,
            "role": data.role
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => console.log(error));
};

getData("./db.json");