export function urlParams(location){
    const queryStrings = location.search.split('?').filter(Boolean);
    const name = queryStrings.map((data)=> data.split('=')[0])
    const queryParams = new URLSearchParams(queryStrings.join('&'));
    const result = {}
    name.forEach((data)=> {
        result[data] = queryParams.get(data)
    } )
    return result;
}