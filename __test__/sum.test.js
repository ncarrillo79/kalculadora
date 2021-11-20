const sum =require('../src/sum.js')

describe('test2 para suma', ()=>{
    test('15+5 is 20', ()=>{
        expect(sum.soma(15,5)).toBe(20)
    })
    it('should return 20 whit 15 + 6', ()=>{
        expect(sum.soma(15,5)).toBe(20)
    })

})

    