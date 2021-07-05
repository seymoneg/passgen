const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

const createPwd = (length = 8, hasNumbers = true, hasSymbols = true) => {
    let chars = alpha
    //if hasNumbers/hasSymbols = true, append, else don't append
    //? is if, : is false
    hasNumbers ? (chars += numbers) : ''
    hasSymbols ? (chars += symbols) : ''
    return generatePwd(length, chars)
}

const generatePwd = (length, chars) => {
    let pwd = ''
    for(let i = 0; i< length; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return pwd
}

module.exports = createPwd