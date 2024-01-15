import {titleCase, divide, sum, isapple} from '../components/MiComponente'

describe('funciones dentro del componente MiComponente', () => {
    describe('titleCase', () => {
        test('debe retornar un string', () =>
        {   //Compruebo si la ejecuación de la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = titleCase('Un valor');
            expect(typeof result).toBe('string')
        })

        test('debe retornar el string transformado', () => 
        {
            const result = titleCase('es una string chiquitita');
            expect(result).toBe('Es Una String Chiquitita');

        })


    });

    describe('divide', () => {
        test('debe retornar un numero', () =>
        {
            // comprobar que el tipo que devuelve es un número
            const result = divide(2,3);
            expect(typeof result).toBe('number')
        })

        test('debe retornar null si hay una string', () =>
        {   
            //comprobar que si entra una string te devuelve null
            const result = divide('hola',3);
            expect(result).toBeNull()
        })

        test('debe realizar la división', () => 
        {
            //comprobar que realiza la división de 10 y 2
            const result = divide(10,2);
            expect(result).toBe(5); 
        })

        test('debe realizar la división', () => 
        {
            //comprobar que realiza la división de 10 y 4
            const result = divide(10,4);
            expect(result).toBeCloseTo(2.5); 
        })

        test('debe retornar cualquier numero de la division pero si sale 0 devuelve null', () => 
        {
            // comprobar que la división de cualquier número y 0 te devuelve null
            const result = divide(10,0);
            expect(result).toBeNull();
        })
    });
    
    describe('sum', () => {
        test('debe retornar un número si los sumandos son números', () =>
        {   //Compruebo si la ejecuaciónd e la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = sum(2,3);
            expect(typeof result).toBe('number')
        })

        test('debe retornar null si algún sumando no es un número', () =>
        {   
            const result = sum('hola',3);
            expect(result).toBe(null)
        })
        test('debe retornar la suma', () => 
        {
            const result = sum(-2,5);
            expect(result).toBe(3);
        })
       
    });

    describe('isapple', () => {
        test('debe retornar un booleano', () =>
        {
            // comprobar que la función devuelva un resultado de tipo booelan
            const result = isapple('hola');
            expect(typeof result).toBe('boolean')
        })

        test('debe retornar true si es una string manzana', () =>
        {
            //comprobar que si entra la string manzana devuelve true
            const result = isapple('manzana');
            expect(result).toBeTruthy()
        })

        test('debe retornar false si no es una string manzana', () =>
        {
            //comprobar que si entra una string que no sea manzana devuelve false
            const result = isapple('pera');
            expect(result).toBeFalsy()
        })
    });

});