document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signupBtn');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const authForm = document.getElementById('authForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const statusMessage = document.getElementById('statusMessage');

    function updateUI() {
        if (localStorage.getItem('loggedInUser')) {
            statusMessage.textContent = `${localStorage.getItem('loggedInUser')}님, 로그인 중입니다.`;
            logoutBtn.style.display = 'inline-block';
            loginBtn.style.display = 'none';
            signupBtn.style.display = 'none';
            authForm.style.display = 'none';
        } else {
            statusMessage.textContent = '';
            logoutBtn.style.display = 'none';
            loginBtn.style.display = 'inline-block';
            signupBtn.style.display = 'inline-block';
            authForm.style.display = 'block';
        }
    }

    signupBtn.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (!username || !password) {
            alert('아이디와 비밀번호를 모두 입력해 주세요.');
            return;
        }

        if (localStorage.getItem(username)) {
            alert('이미 존재하는 사용자입니다.');
        } else {
            localStorage.setItem(username, password);
            alert('회원가입이 완료되었습니다!');
            usernameInput.value = '';
            passwordInput.value = '';
        }
    });

    loginBtn.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (!username || !password) {
            alert('아이디와 비밀번호를 입력해 주세요.');
            return;
        }

        if (localStorage.getItem(username) === password) {
            localStorage.setItem('loggedInUser', username);
            alert(`${username}님, 로그인 되었습니다.`);
            usernameInput.value = '';
            passwordInput.value = '';
            updateUI();
        } else {
            alert('아이디 또는 비밀번호가 잘못되었습니다.');
        }
    });

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        alert('로그아웃 되었습니다.');
        updateUI();
    });

    updateUI();
});