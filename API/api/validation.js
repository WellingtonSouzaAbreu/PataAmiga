module.exports = app => {

    const existsOrError = (value, msg) => {
        if (!value) throw msg
        if (Array.isArray(value) && value.length === 0) throw msg
        if (typeof value === 'string' && !value.trim()) throw msg
    }

    const setFirstLetterUpperCase = (text) => {
        let modifiedText = text[0].toUpperCase() + text.substring(1, text.length)
        return modifiedText
    }

    const setAllWordsWithInitialUpperCase = (text) => {
        const conjunctions = ['das','dos', 'uns', 'pra', 'aos','nas', 'nos']
        let words = text.split(' ')

        let modifiedText = words.map(word => {
            if(word.length > 2 || word[1] == '.' && !conjunctions.includes(word)){
                return word[0] = word[0].toUpperCase() + word.substring(1, word.length)
            }else{
                return word
            }   
        })

        return modifiedText.join(' ')
    }

    // console.log(setFirstLetterUpperCase('esse é um teste'))
    // console.log(setAllWordsWithInitialUpperCase('luiz da silva p. josé'))

    return { existsOrError, setFirstLetterUpperCase, setAllWordsWithInitialUpperCase }
}