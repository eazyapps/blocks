// eslint-disable-next-line import/order
import MockAirtableInterface from './airtable_interface_mocks/mock_airtable_interface';
import * as sdk from '../src';
import * as models from '../src/models/models';
import * as UI from '../src/ui/ui';

let mockAirtableInterface: jest.Mocked<MockAirtableInterface>;
jest.mock('../src/injected/airtable_interface', () => ({
    __esModule: true,
    default() {
        if (!mockAirtableInterface) {
            mockAirtableInterface = MockAirtableInterface.projectTrackerExample();
        }
        return mockAirtableInterface;
    },
}));

describe('index', () => {
    describe('legacy `UI` property', () => {
        test('value', () => {
            expect((sdk as any).UI).toBe(UI);
        });

        test('enumerability', () => {
            expect(Object.keys(sdk).some(key => key === 'UI')).toBe(true);
        });
    });

    describe('legacy `models` property', () => {
        test('value', () => {
            expect((sdk as any).models).toBe(models);
        });

        test('enumerability', () => {
            expect(Object.keys(sdk).some(key => key === 'models')).toBe(true);
        });
    });

    describe('internal `undoRedo` property', () => {
        test('value', () => {
            expect((sdk as any).undoRedo).toBe(sdk.__sdk.undoRedo);
        });

        test('enumerability', () => {
            expect(Object.keys(sdk).some(key => key === 'undoRedo')).toBe(true);
        });
    });
});
