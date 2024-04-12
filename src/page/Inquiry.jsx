import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Inquiry() {
    const navigate = useNavigate();

    return (
        <section>
            <h2>문의하기</h2>
            <p>질문이 있으신가요? 문의를 남겨보세요.</p>
            <form>
                <fieldset className='inputBox'>
                    <ul>
                        <li>
                            <label htmlFor="">이름(성/이름)</label>
                            <div>
                                <input type="text" placeholder='성' required/>
                                <input type="text" placeholder='이름' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">후리가나</label>
                            <div>
                                <input type="text" placeholder='성' required/>
                                <input type="text" placeholder='이름' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">기업명</label>
                            <div>
                                <input type="text" placeholder='기업명을 입력해 주세요'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">연락처</label>
                            <div>
                                <input type="text" placeholder='연락처를 입력해 주세요' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">Email</label>
                            <div>
                                <input type="text" placeholder='이메일 주소를 입력해 주세요' required/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">제목</label>
                            <div>
                                <input type="text" placeholder='제목을 입력해 주세요'/>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">문의내용</label>
                            <div>
                                <textarea name="" id="" placeholder='문의를 남겨주세요'></textarea>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <label htmlFor="">미팅 요청</label>
                        </li>
                    </ul>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">비밀글</label>
                        <input type="password" placeholder='비밀번호를 입력해주세요'/>
                    </div>
                </fieldset>
                <div className='submitBox'>
                    <input type="reset" className='btn-border-black' value='취소'/>
                    <input type="submit" className='btn-bg' value='확인' onClick={()=>navigate('/inquiryResult')}/>
                </div>
            </form>
        </section>
    );
}

