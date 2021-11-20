const substract = require('../src/substract.js')

describe('test para substract', ()=>{
    test('15-5 is 10', ()=>{
        expect(substract.subs(15,5)).toBe(10)
    })

    it('should return 20 whit 15 - 5', ()=>{
        expect(substract.subs(15,5)).toBe(10)
    })

})
