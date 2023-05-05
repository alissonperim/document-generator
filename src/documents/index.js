import { mainNumbersGenerator, firstDigity, secondDigity } from '../helpers/index.js'
import { docsTypes } from '../helpers/docsTypest.enum.js'

/**
 * documentWithMask é um boolean, caso o usuário queira o retorno do cpf com pontos e digito ele deve ser true
 */
export const document = {
    cpf: (documentWithMask = false) => {
        const mainNumbers = mainNumbersGenerator(9, docsTypes[0])
        mainNumbers.push(firstDigity(mainNumbers))
        mainNumbers.push(secondDigity(mainNumbers))
    
        return documentWithMask ?
            mainNumbers.join('').replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4') :
            mainNumbers.join('')
    },
    cnpj: (documentWithMask = false) => {
        const mainNumbers = mainNumbersGenerator(9, docsTypes[1])
        mainNumbers.push(firstDigity(mainNumbers))
        mainNumbers.push(secondDigity(mainNumbers))
    
        return documentWithMask ?
            mainNumbers.join('').replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4') :
            mainNumbers.join('')
    },
}
