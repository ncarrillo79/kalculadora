const multiply = require('../src/multiply.js')



describe('test para multiply', ()=>{
    test('15x5 is 75', ()=>{
        expect(multiply.multiply(15,5)).toBe(75)
    })
    it('should return 75 whit 15 x 5', ()=>{
        expect(multiply.multiply(15,5)).toBe(75)
    })


})