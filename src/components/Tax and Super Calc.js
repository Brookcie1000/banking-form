//Run this function with a POSITIVE SALARY

const findTaxRate = (salary) => {
    const superRate = 0.1
    let taxToPay = 0

    console.log(`Super Rate is currently at ${0.1*100}%`)

    const salaryAdjusted = salary - salary%1
    const superToPay = salaryAdjusted*superRate

    if (salary < 18201) {
        console.log("No Tax")

    } else if (salaryAdjusted >= 18201 && salaryAdjusted < 37001) {
        console.log("First Tax Bracket")

        taxToPay = (salaryAdjusted-18200)*0.19

    } else if (salaryAdjusted >= 37001 && salaryAdjusted < 90001) {
        console.log("Second Tax Bracket")

        taxToPay = 3572 + (salaryAdjusted-37000)*0.325

    } else if (salaryAdjusted >= 90001 && salaryAdjusted < 180001) {
        console.log("Third Tax Bracket")

        taxToPay = 20797 + (salaryAdjusted-90000)*0.37

    } else {
        console.log("Last Tax Bracket")

        taxToPay = 54097 + (salaryAdjusted-180000)*0.45
    }

    console.log('====================================')
    console.log(`Tax to pay is $${taxToPay}`)
    console.log(`Super to pay is $${superToPay}`)
    console.log('====================================')
}