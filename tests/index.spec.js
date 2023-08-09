const Aekatva = require('@logmedaily/aekatva');
const aekatva = new Aekatva();


describe('UUID Tests', () => {
    // Test for v1
    test('UUID v1', () => {
        const uuid_v1 = aekatva.uuid_v1();
        console.log(uuid_v1);
        expect(typeof uuid_v1).toBe('string');
        expect(uuid_v1.length).toBe(36);
        expect(uuid_v1.split('-').length).toBe(5);
        expect(/^[0-9a-f]{8}-[0-9a-f]{4}-1[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid_v1)).toBe(true);
    });

    // Test for v2
    test('UUID v2', () => {
        const domain = 0xa;
        const identifier = 1;
        const uuid_v2 = aekatva.uuid_v2(domain, identifier);
        console.log(uuid_v2);
        expect(typeof uuid_v2).toBe('string');
        expect(uuid_v2.length).toBe(36);
        expect(uuid_v2.split('-').length).toBe(5);
        expect(/^[0-9a-f]{8}-[0-9a-f]{4}-2[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid_v2)).toBe(true);
        expect(uuid_v2.slice(-12)).toBe((domain & 0xf).toString(16) + identifier.toString(16).padStart(11, '0'));

    });


    // Test for v3
    test('UUID v3', () => {
        const namespace = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
        const name = 'example.com';
        const uuid_v3 = aekatva.uuid_v3(namespace, name);
        console.log(uuid_v3);
        expect(typeof uuid_v3).toBe('string');
        expect(uuid_v3.length).toBe(36);
        expect(uuid_v3.split('-').length).toBe(5);
        expect(/^[0-9a-f]{8}-[0-9a-f]{4}-3[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid_v3)).toBe(true);
    });

    // Test for v4
    test('UUID v4', () => {
        const uuid_v4 = aekatva.uuid_v4();
        console.log(uuid_v4);
        expect(typeof uuid_v4).toBe('string');
        expect(uuid_v4.length).toBe(36);
        expect(uuid_v4.split('-').length).toBe(5);
        expect(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid_v4)).toBe(true);
    });

    // Test for v5
    test('UUID v5', () => {
        const namespace = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
        const name = 'example.com';
        const uuid_v5 = aekatva.uuid_v5(namespace, name);
        console.log(uuid_v5);
        expect(typeof uuid_v5).toBe('string');
        expect(uuid_v5.length).toBe(36);
        expect(uuid_v5.split('-').length).toBe(5);
        expect(/^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid_v5)).toBe(true);
    });

    const length = 10;

    test('random_code_numeric generates a numeric string of the correct length', () => {
        const code = aekatva.random_code_numeric(length);
        expect(code.length).toBe(length);
        expect(/^\d+$/.test(code)).toBe(true);
    });

    test('random_code_strings generates a string of letters of the correct length', () => {
        const code = aekatva.random_code_strings(length);
        expect(code.length).toBe(length);
        expect(/^[A-Za-z]+$/.test(code)).toBe(true);
    });

    test('random_code_alphanumeric generates an alphanumeric string of the correct length', () => {
        const code = aekatva.random_code_alphanumeric(length);
        expect(code.length).toBe(length);
        expect(/^[A-Za-z0-9]+$/.test(code)).toBe(true);
    });
});
