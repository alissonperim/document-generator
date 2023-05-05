import BigNumber from 'bignumber.js'
import { docsTypes } from './docsTypest.enum.js'

export const mainNumbersGenerator = (quantity, docType) => {
    const mainNumbers = []
    for (let count = 0; count < quantity; count++) {
        mainNumbers.push(Math.floor(Math.random() * 10))
    }
    return docType === docsTypes[0] ? mainNumbers : mainNumbers.concat([0,0,0,1])
}

/**
 * 
 * O parämetro quantity deve ser a quantidade de números a serem geradas
 * O parämetro potency é a potência que será gerada
 */
export const weightsGenerator = (quantity, potency) => {
    return Array.from(Array(quantity).keys()).map(e => BigNumber(e).plus(potency).toNumber()).sort((a, b) => b - a)
}

const digityGuarantee = (dividend) => {
    const DIVISOR = 11
    const modResult = BigNumber(dividend).mod(DIVISOR).toNumber()
    return modResult < 2 ? Number(0) : BigNumber(DIVISOR).minus(modResult).toNumber()
}

const mainNumbersAndWeightsCalc = (mainNumbers, potencyArray) => {
    return mainNumbers.reduce((acc, mainNumber, index) => {
        return acc.concat(BigNumber(mainNumber).multipliedBy(potencyArray[index]).toNumber())
    }, []).reduce((acc, current) => BigNumber(acc).plus(current).toNumber(),0)
}

export const firstDigity = (mainNumbers) => {
    const WEIGHT = 2
    const weightsArray = weightsGenerator(mainNumbers.length, WEIGHT)
    const mainNumbersAndWeightCalcResult = mainNumbersAndWeightsCalc(mainNumbers, weightsArray)

    return digityGuarantee(mainNumbersAndWeightCalcResult)
}

export const secondDigity = (mainNumbers) => {
    const WEIGHT = 2
    const weightsArray = weightsGenerator(mainNumbers.length, WEIGHT)
    const mainNumbersAndWeightCalcResult =  mainNumbersAndWeightsCalc(mainNumbers, weightsArray)

    return digityGuarantee(mainNumbersAndWeightCalcResult)
}
