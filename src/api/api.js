const userApiUrl =  `${process.env.REACT_APP_API_URL}`;

function commonOptions(type, data){
    const myHeaders = new Headers();
    const token = localStorage.getItem('token') || sessionStorage.getItem('token') || sessionStorage.getItem('findToken');
    myHeaders.append("Content-Type", "application/json");
    token && myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "PHPSESSID=8c75d3d6131afd93f802cda5dc841fd4");

    data = {...data, 'func_type': type}
    data = JSON.stringify(data)


    return {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: "follow"
    }
}

// function fileOptions(data){
//     const myHeaders = new Headers();
//     myHeaders.append("Cookie", "PHPSESSID=1952e743d076ecac736e8d3afcb92d06");
    
//     const formdata = new FormData();
//     formdata.append("file", data);

//     return {
//         method: "POST",
//         headers: myHeaders,
//         body: formdata,
//         redirect: "follow"
//     };
// }


export function isSubmit(inputs){
    if(inputs){
        Object.entries(inputs).forEach(([key, value]) =>{
            !value && document.querySelector(`[name="${key}"]`) && 
                document.querySelectorAll(`[name="${key}"]`).forEach((prev)=>{
                    prev.classList.add('error')
                })
        })

        return Object.entries(inputs).some(([key, value]) => {
            if (!value && document.querySelector(`[name="${key}"][required]`)) {
                document.querySelector(`[name="${key}"]`).focus()
                return true; 
            }
            return false;
        });
    }
}

export function userApi(url, type, data){
    const options = commonOptions(type, data);
    return fetch(`${userApiUrl}${url}`, options)
            .then(response => response.json())
            .catch(error => console.log('error', error));
}
