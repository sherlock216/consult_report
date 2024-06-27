document.addEventListener("DOMContentLoaded", () => {
    if(!sessionStorage.getItem('name')) {
        alert('로그인을 해야 데이터 확인이 가능합니다.');
        location.href = "./login.html";
    }
})