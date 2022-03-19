// const { default: axios } = require("axios")

const fullName = document.querySelector('.reg-name')
const phoneNumber = document.querySelector('.reg-phone-number')
const password = document.querySelector('#reg-password')
const regBtn = document.querySelector("#reg-btn")

regBtn.addEventListener('click', async (e) => {

    e.preventDefault();

    console.log(fullName)
    console.log(phoneNumber)
    console.log(password)
    const user = await axios.post('/api/v1/user/signup', { name: fullName.value, phoneNumber: phoneNumber.value, password: password.value })
    console.log(user);
})