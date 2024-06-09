import React, { useLayoutEffect, useState } from 'react';
import { adminApi } from '../api/api';

export default function MyInfo() {
    const [inputs, setInputs] = useState();

    useLayoutEffect(()=>{
        adminApi('profile')
            .then((result)=>{
                console.log(result.data);
                if(result.result){
                    setInputs(result.data)
                }
            })
    },[])

    return (
        <>
            <h2>내 정보 관리</h2>
            <form>
                <fieldset className='myInfoArea'>
                    <ul>
                        <li>
                            <label htmlFor="">ID</label>
                            <div>
                                <input type="text" defaultValue={inputs?.id} readOnly/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">이름</label>
                            <div>
                                <input type="text" defaultValue={inputs?.name}/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">지사/부서</label>
                            <div>
                                <input type="text" defaultValue={inputs?.branch_department}/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">연락처(내선)</label>
                            <div>
                                <input type="text" defaultValue={inputs?.name}/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">이메일</label>
                            <div>
                                <input type="text" defaultValue={inputs?.email}/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">비번</label>
                            <div>
                                <input type="text" defaultValue={inputs?.pw}/>
                            </div>
                        </li>
                    </ul>
                    <input type="submit" value="저장" />
                </fieldset>
            </form>
        </>
    );
}

