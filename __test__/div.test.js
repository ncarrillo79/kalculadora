const  {divide}  = require('../src/div.js')


describe('test para divide', ()=>{
    test('15/5 is 3', ()=>{
        expect(divide(15,5)).toBe(3)
    })
    it('should return 3 whit 15 / 5', ()=>{
        expect(divide(15,5)).toBe(3)
    })

    it('should return false whit 15 / 0', ()=>{
        expect(divide(15,0)).toBe(false)
    })

    


})
