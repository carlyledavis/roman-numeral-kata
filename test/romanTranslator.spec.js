
var expect = require( 'chai').expect,
    romanTranslator = require( '../js/romanTranslator');

describe( 'foo', function()
{

    it( 'should true is true', function()
    {
        expect( true).is.equal(true);
    });

    it( 'should see that false is false', function()
    {
        expect( false).is.not.equal(true);
    })

    it( 'should test some stuff', function()
    {
        //expect( )
    })

    it( 'should convert roman numeral I to 1', function()
    {
        expect( romanTranslator.translate('i')).equal(1);
    })
});