const adminApiUrl =  process.env.REACT_APP_ADMIN_API_URL

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

function fileOptions(data){
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "PHPSESSID=1952e743d076ecac736e8d3afcb92d06");
    
    const formdata = new FormData();
    formdata.append("file", data);

    return {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
    };
}


export function isSubmit(inputs){
    if(inputs){
        Object.entries(inputs).forEach(([key, value]) =>{
            !value && document.querySelector(`[name="${key}"]`) && 
                document.querySelectorAll(`[name="${key}"]`).forEach((prev)=>{
                    prev.classList.add('error')
                })
        })

        return Object.entries(inputs).some(([key, value]) => {
            if (!value && document.querySelector(`[name="${key}"]`)) {
                document.querySelector(`[name="${key}"]`).focus()
                return true; // 반복을 멈추기 위해 true를 반환
            }
            return false;
        });
    }
    
}


// 관리자 API
function adminOptions(type, data){
    const myHeaders = new Headers();
    const token = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken')
    myHeaders.append("Content-Type", "application/json");
    token && myHeaders.append("Authorization", `Bearer ${token}`);
    // myHeaders.append("Authorization", `Bearer Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNzE3ODkwMzU3LCJleHAiOjE3MjY1MzAzNTcsInN1YiI6IntcInVzZXJfaWRcIjo5fSJ9.k3KU70VsMeAPc9yfug03kc8fLkOuMQ8yrej4cFv0xgs`);
    // myHeaders.append("Cookie", "PHPSESSID=8c75d3d6131afd93f802cda5dc841fd4");

    data = {...data, 'func_type': type}
    data = JSON.stringify(data)


    return {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: "follow"
    }
}

export function adminApi(url, type, data){
    const options = adminOptions(type, data);
    return fetch(`${adminApiUrl}${url}`, options)
            .then(response => response.json())
            .catch(error => console.log('error', error));
}