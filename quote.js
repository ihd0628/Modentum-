const quotes = [
    {
        quote: "집에 가고 싶다.",
        auther: "이승훈"
    },
    {
        quote: "증착엔지니어는 건강에 좋진 않다.",
        auther: "이승훈"
    },
    {
        quote: "중국에서 5천만원 꼭 모아가자",
        auther: "이승훈"
    },
    {   
        quote: "주식으로 1억은 세팅해야 시작이지",
        auther: "이승훈"
    },
    {
        quote: "현금도 꼭 5천을 만들자",
        auther: "이승훈"
    },
    {
        quote: "퇴사후 생활자금은 퇴직금으로..",
        auther: "이승훈"
    },
    {
        quote: "주식으로 1억, 현금 5천, 퇴직금 3천",
        auther: "이승훈"
    },
    {
        quote: "회사에 의존하지말고 나의 능력을 키우자",
        auther: "이승훈"
    },
    {
        quote: "회사는 나를 책임져 주지 않는다.",
        auther: "이승훈"
    },
    {
        quote: "성장하지 않는건 도태되는것과 같지.",
        auther: "이승훈"
    }
]

const quote = document.querySelector("#quote");
const randomQuote = quotes[Math.floor((Math.random())*quotes.length)];

quote.innerText = `${randomQuote.quote}/${randomQuote.auther}`
