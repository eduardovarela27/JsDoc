const callApi = async (url) => {
    //la url desde donde se hara la peticion
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
}

callApi('https://jsonplaceholder.typicode.com/users');
