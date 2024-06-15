const adminApiUrl =  `${process.env.REACT_APP_API_URL}admin/`;
const userApiUrl =  `${process.env.REACT_APP_API_URL}`;

// function commonOptions(type, data){
//     const myHeaders = new Headers();
//     const token = localStorage.getItem('token') || sessionStorage.getItem('token') || sessionStorage.getItem('findToken');
//     myHeaders.append("Content-Type", "application/json");
//     token && myHeaders.append("Authorization", `Bearer ${token}`);
//     myHeaders.append("Cookie", "PHPSESSID=8c75d3d6131afd93f802cda5dc841fd4");

//     data = {...data, 'func_type': type}
//     data = JSON.stringify(data)


//     return {
//         method: 'POST',
//         headers: myHeaders,
//         body: data,
//         redirect: "follow"
//     }
// }

function fileOptions(data){
    const myHeaders = new Headers();
    const token = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');
    myHeaders.append("Cookie", `Bearer ${token}`);
    
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

export function adminFileApi(data){
    const fetchData = async () => {
        try{
            let array = []
            for(let a = 0; a < data.length; a++){
                if(typeof(data[a]) === 'object'){
                    await fetch(`${userApiUrl}imageUploadS3`, fileOptions(data[a]))
                        .then((response) => response.json())
                        .then((result) => array.push(result.data.file_id))
                }

                if(typeof(data[a]) === 'string'){
                    array.push(data[a])
                }
            }
            return array.join(',')
        } catch(err){
            console.error('Error fetching data:', err);
        }
    }
    return fetchData().then((result)=>result)
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