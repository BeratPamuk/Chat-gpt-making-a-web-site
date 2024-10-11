const burger = document.getElementById('burger');
const menuItems = document.querySelector('.menu-items');
const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-btn');
const accountButton = document.getElementById('account-btn');
const registerForm = document.getElementById('register-form');
const accountUsername = document.getElementById('account-username');
const accountPassword = document.getElementById('account-password');

document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
        accountUsername.textContent = username;
        accountPassword.textContent = password;
        loginButton.style.display = 'none';
        accountButton.style.display = 'inline';
        showSection('home'); // Ana sayfayı göster
    } else {
        showSection('home'); // Ana sayfayı göster
    }
});

burger.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameValue = document.getElementById('username').value;
    const passwordValue = document.getElementById('password').value;

    localStorage.setItem('username', usernameValue);
    localStorage.setItem('password', passwordValue);

    if (usernameValue && passwordValue) {
        alert('Başarıyla giriş yapıldı!');
        accountUsername.textContent = usernameValue;
        accountPassword.textContent = passwordValue;
        loginButton.style.display = 'none';
        accountButton.style.display = 'inline';
        showSection('home'); // Ana sayfaya dön
    }
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUsernameValue = document.getElementById('new-username').value;
    const newPasswordValue = document.getElementById('new-password').value;
    const confirmPasswordValue = document.getElementById('confirm-password').value;

    if (newPasswordValue !== confirmPasswordValue) {
        alert('Şifreler uyuşmuyor! Lütfen kontrol edin.');
        return;
    }

    localStorage.setItem('username', newUsernameValue);
    localStorage.setItem('password', newPasswordValue);
    
    alert('Hesap başarıyla oluşturuldu!');
    showSection('login'); // Giriş yap sayfasına dön
});

// Hesap sekmesine tıklanınca görünürlüğü kontrol et
accountButton.addEventListener('click', () => {
    const username = localStorage.getItem('username');
    if (username) {
        showSection('account');
    } else {
        alert('Önce giriş yapmalısınız.');
    }
});

// Çıkış yap butonuna tıklandığında
document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    accountUsername.textContent = '';
    accountPassword.textContent = '';
    loginButton.style.display = 'inline';
    accountButton.style.display = 'none';
    showSection('login'); // Giriş yap sayfasına geri dön
});

// Bölümleri gösterme fonksiyonu
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
