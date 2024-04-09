import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { tabList, iconList } from '../js/product'

// const tabList = [
//     'View All',
//     'JavaScript / TypeScript',
//     'HTML / CSS',
//     'Python',
//     'SQL / databases',
//     'Java / Scala',
//     'C# / C++ / C',
//     'PHP',
//     'Go',
//     'Kotlin',
//     'Ruby',
//     'R',
//     'VB.NET / F#',
//     'Extension',
//     'Profiler',
//     'Product Pack',
//     'Plugin',
//     'Team Tool',
// ]

// const iconList = [
//     {
//         idx: 0,
//         title: 'All Products Pack',
//         detail: '모든 JetBrains 데스크탑 도구를 담은 패키지',
//         type: [
//             'IDE',
//             'Extension',
//             'Profiler',
//         ]
//     },
//     {
//         idx: 1,
//         title: 'JetBrains AI',
//         detail: 'IDE 내부에 강력한 AI 기능을 제공하는 플러그인',
//         type: [
//             'Java',
//             'Kotlin',
//         ]
//     },
//     {
//         idx: 2,
//         title: 'IntelliJ IDEA',
//         detail: 'Java와 Kotlin 개발자를 위한 IDE',
//         type: [
//             'Spring',
//             'AI',
//             'IDE',
//             'JakartaEE',
//             'JavaScript',
//             'TypeScript',
//         ]
//     },
//     {
//         idx: 3,
//         title: 'PyCharm',
//         detail: 'Python 개발자를 위한 IDE',
//         type: [
//             'Python',
//             'Django',
//             'Jupyter',
//             'PHP',
//             'Laravel',
//             'Symfony',
//         ]
//     },
//     {
//         idx: 4,
//         title: 'PhpStorm',
//         detail: 'PHP 개발자를 위한 IDE',
//         type: [
//             'Go',
//             'JavaScript',
//             'TypeScript',
//             'SQL',
//             'JavaScript',
//             'Flask',
//         ]
//     },
//     {
//         idx: 5,
//         title: 'GoLand',
//         detail: 'Go 개발자를 위한 IDE',
//         type: [
//             'WordPress',
//             'JavaScript',
//             'TypeScript',
//             'SQL',
//             'React',
//         ]
//     },
//     {
//         idx: 6,
//         title: 'Rider',
//         detail: '.NET 개발자를 위한 IDE',
//         type: [
//             'C#',
//             '.NET',
//             'ASP.NET',
//             'C',
//             'C++',
//             'CMake',
//         ]
//     },
//     {
//         idx: 7,
//         title: 'CLion',
//         detail: 'C와 C++ 개발자를 위한 IDE',
//         type: [
//             'JavaScript',
//             'TypeScript',
//             'React',
//             'F#',
//             'Unity',
//             'Unreal Engine',
//         ]
//     },
//     {
//         idx: 8,
//         title: 'WebStorm',
//         detail: 'JavaScript와 TypeScript 개발자를 위한 IDE',
//         type: [
//             'Embedded',
//             'SQL',
//             'Assembly',
//             'Vue',
//             'Angular',
//         ]
//     },
//     {
//         idx: 9,
//         title: 'RubyMine',
//         detail: 'Ruby 와 Rails 개발자를 위한 IDE',
//         type: [
//             'Rubyon Rails (RoR)',
//             'Hotwire',
//             'MySQL',
//             'PostgreSQL',
//             'Oracle',
//             'Python',
//         ]
//     },
//     {
//         idx: 10,
//         title: 'DataGrip',
//         detail: '수많은 데이터베이스와 완벽하게 연결되는 데이터베이스 도구',
//         type: [
//             'Jupyter',
//             'SQL cells',
//             'RuboCop',
//             'RSpec',
//             'React',
//             'Vue',
//         ]
//     },
//     {
//         idx: 11,
//         title: 'DataSpell',
//         detail: '데이터 과학자를 위한 IDE',
//         type: [
//             'SQL Server',
//             'MongoDB',
//             'Redis',
//             'dbt Core',
//             'SQL',
//             'Low-code',
//             'R',
//         ]
//     },
//     {
//         idx: 12,
//         title: 'ReSharper',
//         detail: '.NET 개발자를 위한 Visual Studio 확장 프로그램',
//         type: [
//             'C#',
//             '.NET',
//             'ASP.NET',
//             'VB.NET',
//         ]
//     },
//     {
//         idx: 13,
//         title: 'ReSharper C++',
//         detail: 'C++ 개발자를 위한 Visual Studio 확장 프로그램',
//         type: [
//             'C++',
//             'Unreal Engine',
//         ]
//     },
//     {
//         idx: 14,
//         title: 'dotCover',
//         detail: '.NET 유닛 테스트 러너이자 코드 커버리지 도구',
//         type: [
//             '.NET',
//             'Unit Test',
//             'Code Coverage',
//         ]
//     },
//     {
//         idx: 15,
//         title: 'dotTrace',
//         detail: '.NET 성능 프로파일러',
//         type: [
//             '.NET',
//             'Performance Profiler',
//         ]
//     },
//     {
//         idx: 16,
//         title: 'dotMemory',
//         detail: '.NET 메모리 프로파일러',
//         type: [
//             '.NET',
//             'Memory Profiler',
//         ]
//     },
//     {
//         idx: 17,
//         title: 'dotUltimate',
//         detail: 'Rider, ReSharper C++, 모든 .NET 도구를 담은 패키지',
//         type: [
//             '.NET',
//             'Visual Studio',
//         ]
//     },
//     {
//         idx: 18,
//         title: 'Code With Me',
//         detail: '리얼타임 원격 협업을 위한 솔루션',
//         type: [
//             'Pair Programming',
//             'Collaboration',
//         ]
//     },
//     {
//         idx: 19,
//         title: 'Datalore',
//         detail: '스마트 코딩으로 데이터를 분석하고 편리하게 협업하는 데이터 과학 플랫폼',
//         type: [
//             'Jupyter',
//             'Python',
//             'Kotlin',
//             'Project',
//             'Issue',
//         ]
//     },
//     {
//         idx: 20,
//         title: 'YouTrack',
//         detail: '모든 팀을 위한 유연한 프로젝트 및 이슈 관리 도구',
//         type: [
//             'Task Management',
//             'SQL cells',
//             'Collaboration',
//         ]
//     },
//     {
//         idx: 21,
//         title: 'Space',
//         detail: '개발 프로세스를 향상시킬 모든 기능이 포함된 올인원 협업 플랫폼',
//         type: [
//             'Quality Gate',
//             'Static Analysis',
//             'CI/CD',
//         ]
//     },
//     {
//         idx: 22,
//         title: 'Qodana',
//         detail: '코드 품질 검사 플랫폼',
//         type: [
//             'Test Automation',
//             'Git Hosting',
//             'Development',
//         ]
//     },
//     {
//         idx: 23,
//         title: 'TeamCity',
//         detail: '강력하고 간편한 CI/CD 서버',
//         type: [
//             'CI/CD',
//             'License Audit',
//         ]
//     }
// ]

export default function Product() {
    const [activeTab, setActiveTab] = useState(tabList[0])

    return (
        <>
            <section className='welcomeArea'>
                <h2>
                    Welcome to<br/>
                    JetBrains Tool!
                </h2>
                <p>JetBrains는 개인과 팀 모두를 위한 다양한 도구를 제공합니다.</p>
                <Link to='' className='btn-border-white'>견적요청</Link>
            </section>

            <section className='productArea'>
                <h3>주요제품</h3>
                <div className='tabArea'>
                    <button>{ activeTab }</button>
                    <ul>
                        { tabList.map((data, i)=>
                            <li key={i}>
                                <button className={activeTab === data ? 'active' : ''}>{ data }</button>
                            </li>
                        )}
                    </ul>
                </div>

                <ul style={{'--styleTotal': iconList.length}}>
                    { iconList.map((data)=>
                        <li style={{'--styleIdx': data.idx}} key={data.idx}>
                            <Link to={`/product/${data.idx}`}>
                                <b>{ data.title }</b>
                                <p>{ data.detail }</p>
                                <ul>
                                    { data.type.map((typeName, i)=>
                                        <li key={i}>{ typeName }</li>
                                    )}
                                </ul>
                            </Link>
                        </li>
                    )}
                </ul>
            </section>
        </>
    );
}

