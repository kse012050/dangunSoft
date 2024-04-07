import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <strong>NATTOSYSTEM</strong>
            <b>개인정보보호정책</b>
            <address>
                <dl>
                    <dt>법인번호</dt>
                    <dd>4010601064570</dd>
                </dl>
                <dl>
                    <dt>대표명</dt>
                    <dd>이승현</dd>
                </dl>
                <dl>
                    <dt>대표 전화</dt>
                    <dd>82-10-3951-6206</dd>
                </dl>
                <p>東京都江東区豊洲六丁目２番３１－１９１７号</p>
            </address>
            <p>http://www.nattosystem.com</p>
            <ul data-styleidx>
                <li><Link to=''>TWITTER</Link></li>
                <li><Link to=''>LINE</Link></li>
            </ul>
        </footer>
    );
}

