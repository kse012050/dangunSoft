import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function InquiryResult () {
    const navigate = useNavigate();

    const inputsDetail = JSON.parse(sessionStorage.getItem('inquiryDetail'))

    useEffect(()=>{
        inputsDetail || navigate('/support/inquiry')

        sessionStorage.setItem('inquiryDetail', sessionStorage.getItem('inquiryDetail'))
        return () => {
            sessionStorage.removeItem('inquiryDetail')
        }
    },[inputsDetail, navigate])

    return (
        <>
            <section>
                <h2>見積もり依頼が完了しました。</h2>
                <p>
                    見積もり依頼ありがとうございます。<br/>
                    確認後、記載のメールで見積もりの金額をお知らせいたします。
                </p>
                <div className='resultBox'>
                    <dl>
                        <dt>名前</dt>
                        <dd>{ inputsDetail?.write_name }</dd>
                    </dl>
                    <dl>
                        <dt>ふりがな</dt>
                        <dd>{ inputsDetail?.phonetic_guide }</dd>
                    </dl>
                    { inputsDetail?.company_name &&
                        <dl>
                            <dt>会社名</dt>
                            <dd>{ inputsDetail.company_name }</dd>
                        </dl>
                    }
                    <dl>
                        <dt>電話番号</dt>
                        <dd>{ inputsDetail?.contact_information }</dd>
                    </dl>
                    <dl>
                        <dt>Email</dt>
                        <dd>{ inputsDetail?.email }</dd>
                    </dl>
                    {inputsDetail?.title &&
                        <dl>
                            <dt>タイトル</dt>
                            <dd>{ inputsDetail.title }</dd>
                        </dl>
                    }
                    {inputsDetail?.comment &&
                        <dl>
                            <dt>お問い合わせ</dt>
                            <dd>{ inputsDetail.comment }</dd>
                        </dl>
                    }
                </div>
                
                <Link to='/support/inquiry' className='btn-bg'>確認</Link>
            </section>
        </>
    );
}

