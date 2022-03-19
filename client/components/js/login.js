// const { default: axios } = require("axios");

const phnNo = document.querySelector('#typeEmailX-2')
const password = document.querySelector('#login-password')
const loginBtn = document.querySelector('#login-btn')



loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    let user = await axios.post('/api/v1/user/login', { phoneNumber: phnNo.value, password: password.value })

})