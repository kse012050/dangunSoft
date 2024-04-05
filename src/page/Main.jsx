import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <>
            <section className='welcomeArea'>
                <h2>
                    Welcome to the <br className='pc_tablet'/>
                    NATTOSYSTEM
                </h2>
                <p>
                    NATTOSYSTEM은 JetBrains 공식 공급 기업입니다.
                    당사는 제품에 대한 전문적인 지식을 바탕으로<br className='pc_tablet'/>
                    고객들의 개발 환경, 고객이 당면한 문제점 등을 파악하여 
                    그에 맞는 제품과 서비스를 합리적인 가격으로 제공합니다. 
                </p>
            </section>

            <section className='productArea'>
                <div>
                    <h3>주요제품</h3>
                    <p>JetBrains는 소프트웨어 개발에 필요한 모든 도구를 제공합니다. JetBrains는 단순한 코딩 지원뿐만 아니라 코드 품질 검사, 협업 등 모든 개발 과정을 지원합니다.</p>
                </div>
                <ul>
                    <li>
                        <Link to=''>
                            <strong>IntelliJ IDEA</strong>
                            <p>IntelliJ IDEA는 Java 와 Kotlin 개발자를 위한 IDE(통합 개발 환경) 입니다. IntelliJ IDEA의 지능적인 코드 완성으로 개발자의 생산성이 증가합니다. 또한 IntelliJ IDEA의 다양한 프레임워크 지원으로 개발자가 자유롭게 개발할 수 있습니다.</p>
                        </Link>
                    </li>
                    <li>
                        <Link to=''>  
                            <strong>All Products Pack</strong>
                            <p>All Products Pack은 말 그대로 모든 JetBrains 데스크탑 도구를 단 하나의 라이선스에 담은 제품입니다. 이제 All Products Pack을 통해 수많은 라이선스를 더욱 경제적으로 사용할 수 있습니다.</p>
                        </Link>
                    </li>
                    <li>
                        <Link to=''>
                            <strong>Qodana</strong>
                            <p>Qodana는 코드 품질 검사 플랫폼입니다. Qodana의 2천5백여 개의 코드 검사는 코드 품질을 더욱 높여줍니다. 또한 Qodana의 라이선스 감사 기능은 부적절한 라이선스 사용을 방지합니다.</p>
                        </Link>
                    </li>
                    <li>
                        <Link to=''>
                            <strong>WebStorm</strong>
                            <p>WebStorm은 JavaScript 와 TypeScript 를 위한 IDE(통합 개발 환경) 입니다. WebStorm은 React를 시작으로 Vue, Angular, NodeJS 까지 다양한 기술 스택을 완벽하게 지원합니다.</p>
                        </Link>
                    </li>
                    <li>
                        <Link to=''>
                            <strong>JetBrains AI</strong>
                            <p>JetBrains AI는 IDE(통합 개발 환경) 내부에 강력한 AI 기능을 제공하는 JetBrains 플러그인 입니다. JetBrains AI는 AI 채팅 부터 리팩토링, 런타임 에러 설명, 코드 완성 까지 수많은 AI 기능을 제공합니다.</p>
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    );
}

