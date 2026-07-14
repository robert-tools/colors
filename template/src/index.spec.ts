import { hello } from './index';

describe('@scope/package-name', () => {
    it('should return a greeting', () => {
        expect(hello('World')).toBe('Hello, World!');
    });
});
