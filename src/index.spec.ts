import { colors } from './index';

describe('@robert.tools/colors', () => {
    it('should have the correct color codes', () => {
        expect(colors.FgBlack).toBe('\x1b[30m');
        expect(colors.BgBlack).toBe('\x1b[40m');
        expect(colors.Reset).toBe('\x1b[0m');
    });
});
