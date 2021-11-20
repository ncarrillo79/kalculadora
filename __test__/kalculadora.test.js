const sum =require('../src/sum.js')
const substract = require('../src/substract.js')
const multiply = require('../src/multiply.js')
const  {divide}  = require('../src/div.js')






describe('test para suma', ()=>{
    test('15+5 is 20', ()=>{
        expect(sum.soma(15,5)).toBe(20)
    })
    it('should return 20 whit 15 + 5', ()=>{
        expect(sum.soma(15,5)).toBe(20)
    })

    test('15-5 is 10', ()=>{
        expect(substract.subs(15,5)).toBe(10)
    })
    it('should return 20 whit 15 - 5', ()=>{
        expect(substract.subs(15,5)).toBe(10)
    })

    test('15x5 is 75', ()=>{
        expect(multiply.multiply(15,5)).toBe(75)
    })
    it('should return 75 whit 15 x 5', ()=>{
        expect(multiply.multiply(15,5)).toBe(75)
    })

    test('15/5 is 3', ()=>{
        expect(divide(15,5)).toBe(3)
    })
    it('should return 3 whit 15 / 5', ()=>{
        expect(divide(15,5)).toBe(3)
    })





})
