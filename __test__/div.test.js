const  {divide}  = require('../src/div.js')


describe('test para suma', ()=>{
    test('15/5 is 3', ()=>{
        expect(divide(15,5)).toBe(3)
    })
    it('should return 3 whit 15 / 5', ()=>{
        expect(divide(15,5)).toBe(3)
    })


})
