// 필수 입력 학목 추가
export const inputsRequiredAdd = (setInputs) =>{
    document.querySelectorAll('[required]').forEach(({ name, type, value, checked })=>{
        if(type === 'radio' || type === 'checkbox'){
            setInputs((input)=>({...input, [name]: checked ? 'y': 'n'}))
        }else{
            setInputs((input)=>({...input, [name]: value || ''}))
        }
    })
}

// 입력 값 검사
const formetMap = {
    id(value) {
        const regex = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*()_+-=,.<>?/;:'"]*$/;
        return {
            is: regex.test(value),
            value: /^[0-9!@#$%^&*()_+-=,.<>?/;:'"]/.test(value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')) ? value.slice(1) : value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
        };
    },
    pw(value) {
        const regex = /^[a-zA-Z0-9!@#$%^&*()_+-=,.<>?/;:'"]*$/;
        return {
            is: regex.test(value),
            value: value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
        };
    },
    nickname(value) {
        const regex = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/;
        return {
            is: regex.test(value),
            value: value.replace(/[!@#$%^&*()_+\-=,.<>?/;:'"]/g, '')
        };
    },
    numb(value) {
        const regex = /^[0-9]+$/;
        return {
            is: regex.test(value),
            value: value.replace(/\D/g, '')
        };
    },
}

export function isFormet(type, value){
    return Object.keys(formetMap).includes(type) && formetMap[type](value);
}

const validationMap = {
    id(value) {
        const regex = /^.{4,20}$/;
        return regex.test(value);
    },
    pw(value) {
        const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=,.<>?/;:'"]).{8,20}$/;
        return regex.test(value);
    },
    nickname(value) {
        const regex = /^.{2,10}$/;
        return regex.test(value);
    },
    mobile(value){
        const regex = /^.{11}$/;
        return regex.test(value);
    },
    mobileConfirm(value){
        const regex = /^.{6}$/;
        return regex.test(value);
    },
}

export function isValidation(type, value){
    return Object.keys(validationMap).includes(type) && validationMap[type](value);
}

export const inputChange = (e, setInputs) => {
    const { value, name, checked, type, dataset: { formet, validation } } = e.target;
    if(formet && !!value && !isFormet(formet, value)['is']){
        const cur = e.target.selectionStart - 1;
        e.target.value = isFormet(formet, value)['value'];
        e.target.setSelectionRange(cur, cur);
        e.target.classList.add('error')
        return
    }else if(validation && !isValidation(validation, value)){
        e.target.classList.add('error')
        return
    }else if(e.target.classList.contains('error')){
        e.target.classList.remove('error')
    }

    if(type === 'checkbox'){
        setInputs((input)=> ({...input, [name]: checked ? 'y': 'n'}))
    }else if(type === 'radio'){
        setInputs((input)=> ({...input, [name]: value}))
    }else{
        setInputs((input)=> ({...input, [name]: e.target.value}))
    }
}

export const pwInputChange = (e, momentInputs, setInputs) => {
    e.stopPropagation()
    const { name } = e.target;
    if(e.target.value === momentInputs.pw){
        setInputs((input)=> ({...input, [name]: e.target.value}))
        e.target.classList.remove('error')
    }else {
        setInputs((input)=> ({...input, [name]: ''}))
        e.target.classList.add('error')
    }
        

}

// 회원가입 전용
export const momentInputChange = (e, setMomentInputs, setInputs) => {
    e.stopPropagation()
    const { value, name, dataset: { formet, validation } } = e.target;

    setInputs && setInputs((input)=> ({...input, [name]: ''}))

    if(formet && !!value && !isFormet(formet, value)['is']){
        const cur = e.target.selectionStart - 1;
        e.target.value = isFormet(formet, value)['value'];
        e.target.setSelectionRange(cur, cur);
        // e.target.classList.add('error')
        return
    }else if(!isValidation(validation, value)){
        e.target.classList.add('error')
        setMomentInputs((input)=> ({...input, [name]: ''}))
        return
    }else if(e.target.classList.contains('error')){
        e.target.classList.remove('error')
    }

    setMomentInputs((input)=> ({...input, [name]: e.target.value}))
}

// 회원정보 변경 전용
export const momentInputChange2 = (e, setMomentInputs, setInputs) => {
    e.stopPropagation()
    const { value, name, dataset: { formet, validation } } = e.target;

    if(formet && !!value && !isFormet(formet, value)['is']){
        const cur = e.target.selectionStart - 1;
        e.target.value = isFormet(formet, value)['value'];
        e.target.setSelectionRange(cur, cur);
        // e.target.classList.add('error')
        return
    }else if(!isValidation(validation, value)){
        e.target.classList.add('error')
        setMomentInputs((input)=> ({...input, [name]: ''}))
        return
    }else if(e.target.classList.contains('error')){
        e.target.classList.remove('error')
    }

    setMomentInputs((input)=> ({...input, [name]: e.target.value}))
}
