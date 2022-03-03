const  {divide}  = require('../src/div.js')


describe('test para divide', ()=>{
    test('15/5 is 3', ()=>{
        expect(divide(15,5)).toBe(3)
    })
    it('should return 3 whit 15 / 5', ()=>{
        expect(divide(15,5)).toBe(3)
    })

})



describe('test para divide por Zero', ()=>{
    it('should return false if  15 is divided by zero ', ()=>{
        expect(divide(15,0)).toBe(false)
    })
   

})


it('valores mesclados', () => {
    const mockValues = {
    a:15,
    b: 'banana',
    divide: 'undefined'
    }
})
;

