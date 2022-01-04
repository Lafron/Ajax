const getData = (url, itemId) =>{
    return fetch(url + itemId, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json());
};

const sendData = (url, parameters) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            parameters
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => console.log(error));
};


let url = 'https://jsonplaceholder.typicode.com/posts/';

getData(url, 77).then((data) => console.log(data))
    .catch(error => console.log(error));


let parameters = {
    title: 'Send Data',
    body: 'request POST',
    userId: 2,
};
sendData(url, parameters);


const getData2 = () => {
    return fetch('db.json', {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
    .catch(error => console.log(error));
};

getData2().then(data => sendData2(data));

const sendData2 = parameters => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            parameters
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => console.log(error));
};
