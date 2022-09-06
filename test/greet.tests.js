describe('Greet test' , function(){
    it('should show you how to use greet function' , function(){
        
        assert.equal(greet('Bob'), 'Hello, Bob');
        assert.equal(greet('Sam'), 'Hello, Sam');
    });

});