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


export function userPageLog(pageName, page_link, user_agent, referer/* , ip */){
    let page_name = ''
    
    if(!pageName){
        page_name = '메인 페이지'
    }else if(pageName === 'product'){
        page_name = '제품 페이지'
    }else if(pageName.includes('product/')){
        page_name = '제품 상세 페이지'
    }else if(pageName === 'solution'){
        page_name = '솔루션 페이지'
    }else if(pageName === 'support' || pageName === 'support/board'){
        page_name = '게시판 페이지'
    }else if(pageName.includes('support/board/')){
        page_name = '게시판 상세 페이지'
    }else if(pageName === 'support/inquiry'){
        page_name = '문의 페이지'
    }else if(pageName === 'support/inquiryResult'){
        page_name = '문의 결과 페이지'
    }else if(pageName === 'support/faq'){
        page_name = 'FAQ 페이지'
    }else if(pageName === 'estimate'){
        page_name = '견적요청 페이지'
    }else if(pageName === 'estimateResult'){
        page_name = '견적 요청 결과 페이지'
    }else if(pageName === 'buy'){
        page_name = '구매 페이지'
    }else if(pageName === 'buyResult'){
        page_name = '구매 결과 페이지'
    }else if(pageName === 'privacy'){
        page_name = '개인 정보 보호 정책 페이지'
    }else if(pageName === 'commerce'){
        page_name = '특정 상거래에 관한 법률 페이지'
    }else if(pageName === 'admin'){
        page_name = '관리자 로그인 페이지'
    }else if(pageName === '/admin/statistics'){
        page_name = '관리자 - 관리자 통계 페이지'
    }else if(pageName === '/admin/product/vendor'){
        page_name = '관리자 - 상품 관리 - 벤더사 관리 페이지'
    }else if(pageName === '/admin/product/product'){
        page_name = '관리자 - 상품 관리 - 제품 관리 페이지'
    }else if(pageName === '/admin/product/product/create'){
        page_name = '관리자 - 상품 관리 - 제품 등록 페이지'
    }else if(pageName.includes('/admin/product/product/')){
        page_name = '관리자 - 상품 관리 - 제품 수정 페이지'
    }else if(pageName === '/admin/product/detailManagement'){
        page_name = '관리자 - 상품 관리 - 제품 상세 관리 페이지'
    }else if(pageName === '/admin/product/detailManagement/create'){
        page_name = '관리자 - 상품 관리 - 제품 상세 등록 페이지'
    }else if(pageName.includes('/admin/product/detailManagement/')){
        page_name = '관리자 - 상품 관리 - 제품 상세 수정 페이지'
    }else if(pageName === '/admin/estimate'){
        page_name = '관리자 - 견적 관리 - 견적 요청 내역 페이지'
    }else if(pageName.includes('/admin/estimate/') && !pageName.includes('calculation')){
        page_name = '관리자 - 견적 관리 - 견적 요청 상세 정보 페이지'
    }else if(pageName.includes('/admin/estimate/calculation/')){
        page_name = '관리자 - 견적 관리 - 견적 산정 페이지'
    }else if(pageName === '/admin/purchase'){
        page_name = '관리자 - 구매 관리 - 구매 내역 페이지'
    }else if(pageName.includes('/admin/purchase/')){
        page_name = '관리자 - 구매 관리 - 구매 상세 페이지'
    }else if(pageName === '/admin/inquiry'){
        page_name = '관리자 - 문의 관리 - 문의 내역 페이지'
    }else if(pageName.includes('/admin/inquiry/')){
        page_name = '관리자 - 문의 관리 - 문의 상세 페이지'
    }else if(pageName === '/admin/support/faq'){
        page_name = '관리자 - 지원 관리 - 카테고리 관리 페이지'
    }else if(pageName === '/admin/support/qna'){
        page_name = '관리자 - 지원 관리 - 문답 관리 페이지'
    }else if(pageName === '/admin/support/qna/create'){
        page_name = '관리자 - 지원 관리 - 문답 등록 페이지'
    }else if(pageName.includes('/admin/support/qna/')){
        page_name = '관리자 - 지원 관리 - 문답 수정 페이지'
    }else if(pageName === 'admin'){
        page_name = ''
    }else if(pageName === 'admin'){
        page_name = ''
    }else if(pageName === 'admin'){
        page_name = ''
    }

    userApi('pageview/manage', '', {page_name, page_link, user_agent, referer})
        .then((result)=>{
        })

}