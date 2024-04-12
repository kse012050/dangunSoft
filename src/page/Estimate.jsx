import React from 'react';
import Select from '../components/Select';
import { useNavigate } from 'react-router-dom';

export default function Estimate() {
    const navigate = useNavigate();

    return (
        <section>
            <h2>견적요청</h2>
            <form>
                <fieldset className='inputBox-product'>
                    <ul>
                        <li>
                            <label htmlFor="">제조사</label>
                            <div>
                                <Select />
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">제품명</label>
                            <div>
                                <div>
                                    <Select />
                                </div>
                            </div>
                        </li>
                        <li className='half'>
                            <label htmlFor="">옵션</label>
                            <div>
                                <div>
                                    <Select />
                                </div>
                            </div>
                        </li>
                        <li className='half'>
                            <label htmlFor="">수량</label>
                            <div>
                                <input type="number" />
                            </div>
                        </li>
                        <li>
                            <label htmlFor="">구독옵션</label>
                            <div>
                                <input type="radio" defaultChecked={true}/>
                                <label htmlFor="">신규</label>
                                <input type="radio" />
                                <label htmlFor="">갱신</label>
                                <input type="radio" />
                                <label htmlFor="">업그레이드</label>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <button type='button'>+ 제품 추가</button>
                        <button type='button'>- 삭제</button>
                    </div>
                </fieldset>

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
                    </ul>
                    <p>견적 문의 시 <button type='button'>개인정보보호정책</button>에 동의하는 것으로 간주합니다.</p>
                </fieldset>
                <div className='submitBox'>
                    <input type="reset" className='btn-border-black' value='취소'/>
                    <input type="submit" className='btn-bg' value='확인' onClick={()=>navigate('/estimateResult')}/>
                </div>
            </form>
        </section>
    );
}

