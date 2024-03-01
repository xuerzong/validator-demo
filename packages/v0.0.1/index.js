const EMAIL_REGEXP = new RegExp(/^\S+@\S+\.\S+$/)
const PHONE_REGEXP = new RegExp(/^\d{11}$/)

const isPhone = (phone) => PHONE_REGEXP.test(phone)
const isEmail = (email) => EMAIL_REGEXP.test(email)

module.exports = { isPhone, isEmail }
