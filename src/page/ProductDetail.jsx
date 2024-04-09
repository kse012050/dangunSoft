import React from 'react';
import { iconList } from '../js/product'

export default function ProductDetail() {
    return (
        <>
            <section className='topArea' style={{'--styleTotal': iconList.length, '--styleIdx': 2}}>
                <h2>IntelliJ IDEA</h2>
                <p>
                    IntelliJ IDEA는 Java 와 Kotlin 개발을 위한 IDE(통합 개발 환경) 입니다.<br />
                    IntelliJ IDEA는 전세계 수많은 사용자들이 신뢰하는 강력한 코딩 지원 기능을 제공합니다.
                </p>
            </section>

            <section>
                <h3>제품 정보</h3>
                <p>IntelliJ IDEA는 Java 와 Kotlin 개발을 위한 IDE(통합 개발 환경) 입니다. IntelliJ IDEA는 코딩 지원 기능은 물론이고 그 이상의 기능들로 IDE를 확장합니다. IntelliJ IDEA의 코드 완성, 정적 코드 분석, 리팩토링 등 강력한 코딩 지원 기능들은 개발자의 생산성을 극대화 합니다. 또한 Spring 및 Spring Boot, Jakarta EE, JPA, Reactor 등 주요 기술 및 프레임워크도 IntelliJ IDEA에서 사용할 수 있습니다. 만약 필요한 기능이 있다면 플러그인을 추가해 IntelliJ IDEA 기능을 확장할 수 있습니다. 전세계 Java 개발자의 78%가 선택한 IntelliJ IDEA는 Java와 Kotlin 개발을 위한 최고의 환경을 제공합니다.</p>
                <ul>
                    <li>
                        <strong></strong>
                        <p></p>
                    </li>
                    <li>
                        <strong></strong>
                        <p></p>
                    </li>
                    <li>
                        <strong></strong>
                        <p></p>
                    </li>
                </ul>
            </section>
        </>
    );
}

