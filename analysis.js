const dataresults = {};

function evaluateScore(score) {
    if (score > 1.2) {
        return '높은 발달';
    } else if (score >= 0.7) {
        return '안정적 발달';
    } else if (score >= -0.7) {
        return '평균적 발달';
    } else if (score >= -1.2) {
        return '새싹 발달';
    } else {
        return '잠재적 발달';
    }
}

function chooseSector(key){
    if(['Z학습기술', 'Z메타인지', 'Z스트레스조절'].includes(key)) return '인지영역';
    else if(['Z가족관계', 'Z인정추구', 'Z친구관계'].includes(key)) return '관계영역';
    else if(['Z정돈', 'Z공부방', 'Z학습장비', 'Z학원'].includes(key)) return '환경영역';
    else if(['Z전략', 'Z태도', 'Z실행력', 'Z방해지연행동조절', 'Z휴대전화사용조절'].includes(key)) return '행동영역';
    else if(['Z긍정심리자원2', 'Z회복탄력성', 'Z추진력', 'Z신중성'].includes(key)) return '기질영역';
    else if(['Z정서자각능력', 'Z정서처리방식', 'Z정서조절능력', 'Z자기평가'].includes(key)) return '정서영역';
    else return ;
    
}

const datarow = JSON.parse(sessionStorage.getItem('data'));
const datanum = {};
for (let key in datarow) {
    if (key == 'ID' || key == '이름' || key == '번호') {
        continue;
    }
    datanum[key] = datarow[key];
    dataresults[key] = evaluateScore(datarow[key]);
}


let maxKey = Object.keys(datanum).reduce((a, b) => datanum[a] > datanum[b] ? a : b);
let minKey = Object.keys(datanum).reduce((a, b) => datanum[a] < datanum[b] ? a : b);

document.getElementById('maxkey').textContent = maxKey;
document.getElementById('maxkey2').textContent = maxKey;
document.getElementById('maxkeys').textContent = chooseSector(maxKey);
document.getElementById('maxkeys2').textContent = chooseSector(maxKey);


document.getElementById('name2').textContent = datarow["이름"];

document.getElementById('minkey').textContent = minKey;
document.getElementById('minkey2').textContent = minKey;
document.getElementById('minkeys').textContent = chooseSector(minKey);
document.getElementById('minkeys2').textContent = chooseSector(minKey);

function sectortext(sector){
    if(sector=='Z학습기술') return `학습을 위해 필요한 실제적인 기술, 집중하기 위해 필요한 조건을 알고, 전략적으로 집중하는 능력, 학습과정에서 정보를 받아들이고 이해하는 데 필요한 전략, 능률적인
    학습을 위해 적절한 필기방법과 전략의 수준`;
    else if(sector=='Z메타인지') return `학습과정에서 계획수립, 실천을 위한 전략적 사고능력, 자신의 수행과정을 관리감독하고 결과를 예측하며 오류나 실수를 점검하고 인지할수 있는 상위인지능력`;
    else if(sector=='Z스트레스조절') return `학업에서 경험하는 학습 및 학습수행과정에 대한 심리적인 압박감과 스트레스를 조절할 수 있는 능력`;
    
    else if(sector=='Z가족관계') return `부모님, 가족간의 관계에서 자녀가 느끼는 1) 부모님의 정서적 지원, 2) 고민을 부모님에게 알리고 도움을 요청하는 것에 대한 심리적 수월성, 3) 자신의 어려움에
    대한 가족들의 이해도, 4) 어려움이 있을때 가족들에게 의지할수 있다는 신뢰감, 5) 가족간의 친밀도`;
    else if(sector=='Z인정추구') return '부모  주변사람들과의 관계에서 1) 기대에 미치지 못할 것에 대한 두려움 2) 기대에 부응하고자 하는 욕구 3) 타인에게 인정받고자 하는 인정동기';
    else if(sector=='Z친구관계') return '친구와의 관계에서 1) 고민들 개방할 수 있는 심리적으로 가깝고 편안한 친구관계 2) 친구관계에 대한 평가 3) 타인에 대한 신뢰감';

    else if(sector=='Z정돈') return '학습을 위해 주변공간이 효율적으로 정리되어 있는지 확인하는 항목';
    else if(sector=='Z공부방') return '학습공간이 적절하게 구성되어 있는지 확인하는 항목';
    else if(sector=='Z학습장비') return '학습에 필요한 학습도구들이 준비되어 있는지 확인하는 항목';
    else if(sector=='Z학원') return '학습에 도움이 되는 교육자원의 가용성을 확인하는 항목';

    else if(sector=='Z전략') return '학습과정에서 계획수립, 수행과정에서의 조절과 대처능력과 같이 스스로 학습수행을 조절하는 능력';
    else if(sector=='Z태도') return '학습과정에서의 자기주도적이고 능동적인 학습태도';
    else if(sector=='Z실행력') return '학습에서 실제로 학습을 실천하는 역량';
    else if(sector=='Z방해지연행동조절') return '학습수행을 막는 방해 및 지연행동';
    else if(sector=='Z휴대전화사용조절') return '학습과정에서 인지효율을 높이는 방식으로 적절하게 휴대전화사용을 조절하는 능력';

    else if(sector=='Z긍정심리자원2') return '타고난 기질적인 특성 중에서 청소년이 가지고 있는 긍정적인 심리적 자본';
    else if(sector=='Z회복탄력성') return '좌절과 실패, 어려움에 직면하여 극복하는 회복탄력성';
    else if(sector=='Z추진력') return '학습과정에서 주의 집중력과 실행과정에서의 방해요인을 통제하는 조절능력';
    else if(sector=='Z신중성') return '학습과정에서 목표달성을 위한 인내력과 성찰능력, 전략적 대응능력';
    
    else if(sector=='Z정서자각능력') return '자신과 타인의 감정을 알아차리고 인식하며 이해하는 역량';
    else if(sector=='Z정서처리방식') return '학습과정에서 경험할 수 있는 정서적인 어려움을 성숙하고 긍정적이며 학습에 도움이 되는 방식으로 처리할 수 있는 능력';
    else if(sector=='Z정서조절능력') return '다양한 상황에서 자신의 감정을 관리하고 조절하며 스트레스 상황에서 적절하게 대처하는 능력';
    else if(sector=='Z자기평가') return '스스로에 대한 효능감, 존중정도, 만족감';


}

document.getElementById('maxtrait').textContent = sectortext(maxKey);
document.getElementById('mintrait').textContent = sectortext(minKey);



/*let minKeyElement =document.getElementsByClassName('minkey')[0];
minKeyElement.textcontent = minKey;

let maxKeySElement = document.getElementsByClassName('maxsector')[0];
maxKeySElement.textContent = chooseSector(maxKey);

let minKeySElement = document.getElementsByClassName('minsector')[0];
minKeySElement.textContent = chooseSector(minKey);*/


document.getElementById('z1').textContent = datarow['Z학습기술'].toFixed(2);
document.getElementById('z2').textContent = datarow['Z메타인지'].toFixed(2);
document.getElementById('z3').textContent = datarow['Z스트레스조절'].toFixed(2);
document.getElementById('z4').textContent = datarow['Z가족관계'].toFixed(2);
document.getElementById('z5').textContent = datarow['Z인정추구'].toFixed(2);
document.getElementById('z6').textContent = datarow['Z친구관계'].toFixed(2);
document.getElementById('z7').textContent = datarow['Z정돈'].toFixed(2);
document.getElementById('z8').textContent = datarow['Z공부방'].toFixed(2);
document.getElementById('z9').textContent = datarow['Z학습장비'].toFixed(2);
document.getElementById('z10').textContent = datarow['Z학원'].toFixed(2);
document.getElementById('z11').textContent = datarow['Z전략'].toFixed(2);
document.getElementById('z12').textContent = datarow['Z태도'].toFixed(2);
document.getElementById('z13').textContent = datarow['Z실행력'].toFixed(2);
document.getElementById('z14').textContent = datarow['Z방해지연행동조절'].toFixed(2);
document.getElementById('z15').textContent = datarow['Z휴대전화사용조절'].toFixed(2);
document.getElementById('z16').textContent = datarow['Z긍정심리자원2'].toFixed(2);
document.getElementById('z17').textContent = datarow['Z회복탄력성'].toFixed(2);
document.getElementById('z18').textContent = datarow['Z추진력'].toFixed(2);
document.getElementById('z19').textContent = datarow['Z신중성'].toFixed(2);
document.getElementById('z20').textContent = datarow['Z정서자각능력'].toFixed(2);
document.getElementById('z21').textContent = datarow['Z정서처리방식'].toFixed(2);
document.getElementById('z22').textContent = datarow['Z정서조절능력'].toFixed(2);
document.getElementById('z23').textContent = datarow['Z자기평가'].toFixed(2);

document.getElementById('zs1').textContent = dataresults['Z학습기술'];
document.getElementById('zs2').textContent = dataresults['Z메타인지'];
document.getElementById('zs3').textContent = dataresults['Z스트레스조절'];
document.getElementById('zs4').textContent = dataresults['Z가족관계'];
document.getElementById('zs5').textContent = dataresults['Z인정추구'];
document.getElementById('zs6').textContent = dataresults['Z친구관계'];
document.getElementById('zs7').textContent = dataresults['Z정돈'];
document.getElementById('zs8').textContent = dataresults['Z공부방'];
document.getElementById('zs9').textContent = dataresults['Z학습장비'];
document.getElementById('zs10').textContent = dataresults['Z학원'];
document.getElementById('zs11').textContent = dataresults['Z전략'];
document.getElementById('zs12').textContent = dataresults['Z태도'];
document.getElementById('zs13').textContent = dataresults['Z실행력'];
document.getElementById('zs14').textContent = dataresults['Z방해지연행동조절'];
document.getElementById('zs15').textContent = dataresults['Z휴대전화사용조절'];
document.getElementById('zs16').textContent = dataresults['Z긍정심리자원2'];
document.getElementById('zs17').textContent = dataresults['Z회복탄력성'];
document.getElementById('zs18').textContent = dataresults['Z추진력'];
document.getElementById('zs19').textContent = dataresults['Z신중성'];
document.getElementById('zs20').textContent = dataresults['Z정서자각능력'];
document.getElementById('zs21').textContent = dataresults['Z정서처리방식'];
document.getElementById('zs22').textContent = dataresults['Z정서조절능력'];
document.getElementById('zs23').textContent = dataresults['Z자기평가'];

document.getElementById('d1').textContent = datarow['Z학습기술'].toFixed(2);
document.getElementById('d2').textContent = datarow['Z메타인지'].toFixed(2);
document.getElementById('d3').textContent = datarow['Z스트레스조절'].toFixed(2);
document.getElementById('d4').textContent = datarow['Z가족관계'].toFixed(2);
document.getElementById('d5').textContent = datarow['Z인정추구'].toFixed(2);
document.getElementById('d6').textContent = datarow['Z친구관계'].toFixed(2);

document.getElementById('d7').textContent = datarow['Z정돈'].toFixed(2);
document.getElementById('d8').textContent = datarow['Z공부방'].toFixed(2);
document.getElementById('d9').textContent = datarow['Z학습장비'].toFixed(2);
document.getElementById('d10').textContent = datarow['Z학원'].toFixed(2);

document.getElementById('d11').textContent = datarow['Z전략'].toFixed(2);
document.getElementById('d12').textContent = datarow['Z태도'].toFixed(2);
document.getElementById('d13').textContent = datarow['Z실행력'].toFixed(2);
document.getElementById('d14').textContent = datarow['Z방해지연행동조절'].toFixed(2);
document.getElementById('d15').textContent = datarow['Z휴대전화사용조절'].toFixed(2);

document.getElementById('d16').textContent = datarow['Z긍정심리자원2'].toFixed(2);
document.getElementById('d17').textContent = datarow['Z회복탄력성'].toFixed(2);
document.getElementById('d18').textContent = datarow['Z추진력'].toFixed(2);
document.getElementById('d19').textContent = datarow['Z신중성'].toFixed(2);

document.getElementById('d20').textContent = datarow['Z정서자각능력'].toFixed(2);
document.getElementById('d21').textContent = datarow['Z정서처리방식'].toFixed(2);
document.getElementById('d22').textContent = datarow['Z정서조절능력'].toFixed(2);
document.getElementById('d23').textContent = datarow['Z자기평가'].toFixed(2);

const resultText = {};






const data = {
    labels: ['Zc인지', 'ZR관계', 'ZE환경', 'ZA행동', 'Z기질2', 'Ze정서'],
    datasets: [{
        label: '종합수치',
        data: [
            datarow['Zc인지'],
            datarow['ZR관계'],
            datarow['ZE환경'],
            datarow['ZA행동'],
            datarow['Z기질2'],
            datarow['Ze정서'],
        ],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]

};


const data1 = {
    labels: ['Z학습기술', 'Z메타인지', 'Z스트레스조절', 'Zc인지', 'Z가족관계', 'Z인정추구', 'Z친구관계', 'ZR관계', 'Z정돈', 'Z공부방',
        'Z학습장비', 'Z학원', 'ZE환경', 'Z전략', 'Z실행력', 'Z방해지연행동조절', 'Z휴대전화사용조절', 'ZA행동', 'Z긍정심리자원2', 'Z회복탄력성', 'Z추진력', 'Z신중성',
        'Z기질2', 'Z정서자각능력', 'Z정서처리방식', 'Z정서조절능력', 'Z자기평가', 'Ze정서'],
    datasets: [{
        label: '하위요인(23개)',
        data: [
            datarow['Z학습기술'],
            datarow['Z메타인지'],
            datarow['Z스트레스조절'],
            datarow['Zc인지'],
            datarow['Z가족관계'],
            datarow['Z인정추구'],
            datarow['Z친구관계'],
            datarow['ZR관계'],
            datarow['Z정돈'],
            datarow['Z공부방'],
            datarow['Z학습장비'],
            datarow['Z학원'],
            datarow['ZE환경'],
            datarow['Z전략'],
            datarow['Z실행력'],
            datarow['Z방해지연행동조절'],
            datarow['Z휴대전화사용조절'],
            datarow['ZA행동'],
            datarow['Z긍정심리자원2'],
            datarow['Z회복탄력성'],
            datarow['Z추진력'],
            datarow['Z신중성'],
            datarow['Z기질2'],
            datarow['Z정서자각능력'],
            datarow['Z정서처리방식'],
            datarow['Z정서조절능력'],
            datarow['Z자기평가'],
            datarow['Ze정서'],
        ],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        barPercentage: 0.5
    }]

};


const header_name = document.getElementById('name');
header_name.textContent = datarow['이름'] + ' 학생';

const ctx0 = document.getElementById('radar-chart').getContext('2d');
const myChart0 = new Chart(ctx0, {
    type: 'radar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: '요인(6개)',
                color: '#333',
                font: {
                    size: 20
                }
            },
            datalabels: {
                align: 'end',
                anchor: 'end',
                color: '#555',
                formatter: function (value, context) {
                    return value.toFixed(2); // 소수점 두 자리까지
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});


const ctx1 = document.getElementById('bar-chart').getContext('2d');
const redIndex = [3, 7, 12, 17, 22, 27];
const backgroundColors = data1.datasets[0].data.map((value, index) =>
    redIndex.includes(index) ? 'red' : 'darkblue'
);
data1.datasets[0].backgroundColor = backgroundColors;
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: data1,
    options: {
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    autoSkip: false, // 필요하면 자동으로 레이블 건너뛰기
                    maxRotation: 80, // 레이블 회전 없음
                    minRotation: 80
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: '하위요인(23개)',
                color: '#333',
                font: {
                    size: 20
                }
            },
            datalabels: {
                align: 'end',
                anchor: 'end',
                color: '#555',
                formatter: function (value, context) {
                    return value.toFixed(2); // 소수점 두 자리까지
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});


document.getElementById('logout').addEventListener('click', () => {
    if (confirm('로그아웃 하시겠습니까?')) {
        sessionStorage.clear();
        location.href = "./login.html";
    }
})
export { dataresults };