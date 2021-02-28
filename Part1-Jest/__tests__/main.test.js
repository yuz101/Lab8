const formatVolumeIconPath = require('../assets/scripts/main');
describe('Testing the format outputs correct file path for volume icon', () => {
    test('level 3', () => {
        expect(formatVolumeIconPath(86)).toMatch(`./assets/media/icons/volume-level-3.svg`);
    });
    test('level 2', () => {
        expect(formatVolumeIconPath(40)).toMatch(`./assets/media/icons/volume-level-2.svg`);
    });
    test('level 1', () => {
        expect(formatVolumeIconPath(17)).toMatch(`./assets/media/icons/volume-level-1.svg`);
    });
    test('level 0', () => {
        expect(formatVolumeIconPath(0)).toMatch(`./assets/media/icons/volume-level-0.svg`);
    });
})