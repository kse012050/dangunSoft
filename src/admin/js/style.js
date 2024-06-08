// css용 index
export function styleIdx(){
    document.querySelectorAll('[data-styleidx]').forEach((parents)=>{
        let children = []
        parents.getAttribute('data-styleIdx') !== 'true' ?
            parents.childNodes.forEach((element)=>{
                element.tagName.toLowerCase() === parents.getAttribute('data-styleIdx') && children.push(element)
            }) : 
            (children = [...parents.childNodes]);
        parents.style.setProperty('--styleTotal', children.length);
        children.forEach((element, idx)=>{
            element.style.setProperty('--styleIdx', idx);
        })
    })
}

// 시간 형태 변경
export function timeFormat(value){
    return value.split(' ')[0].replace(/-/g, '.')
}
