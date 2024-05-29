import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <strong>NATTOSYSTEM</strong>
            {/* <b>プライバシーポリシー</b> */}
            <ul className='privacyBox'>
                <li><Link to='/privacy'>プライバシーポリシー</Link></li>
                <li><Link to='/commerce'>特定商取引に関する法律に基づく表示</Link></li>
            </ul>
            <address>
                <dl>
                    <dt>法人番号</dt>
                    <dd>4010601064570</dd>
                </dl>
                <dl>
                    <dt>代表取締役</dt>
                    <dd>LEE SEUNG HYUN</dd>
                </dl>
                <dl>
                    <dt>電話番号</dt>
                    <dd>070-8080-5970</dd>
                </dl>
                <p>東京都港区南 青山 2-2-8 DF ビル 6F</p>
            </address>
            <p>https://www.nattosystem.com</p>
            <ul className='snsBox' data-styleidx>
                <li><Link to=''>TWITTER</Link></li>
                <li><Link to=''>LINE</Link></li>
            </ul>
        </footer>
    );
}

