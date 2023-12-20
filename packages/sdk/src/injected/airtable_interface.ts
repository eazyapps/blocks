import {spawnError} from '../error_utils';
import {AirtableInterface} from '../types/airtable_interface';

const AIRTABLE_INTERFACE_VERSION = 0;

let airtableInterface: AirtableInterface | null = null;

const missingAirtableInterfaceErrorMessage = [
    'Error: Extension environment misconfigured',
    '\n\n',
    'Airtable Extensions can only run in the presence of an Airtable Base. If you ',
    'are trying to run your Extension with a Base hosted on airtable.com, then be ',
    'sure you are using the Airtable CLI to serve your code and accessing it ',
    'through a Custom Extension installed inside a Base on airtable.com.',
    '\n\n',
    'If you are trying to run automated tests for your Extension, then make sure ',
    'you have loaded the `@airtable/testing-library` module *before* the ',
    '`@airtable/blocks` module.',
].join('');

const defaultInterface = (_arg: number): AirtableInterface => {
    return {
        sdkInitData: {
            initialKvValuesByKey: {},
            isDevelopmentMode: true,
            baseData: {
                id: '',
                name: '',
                tableOrder: [],
                activeTableId: null,
                tablesById: {},
                appInterface: {},
                collaboratorsById: {
                    a: {
                        id: 'a',
                        name: 'Jess Patel',
                    },
                    b: {
                        id: 'b',
                        name: 'Casey Park',
                    },
                    d: {
                        id: 'd',
                        name: 'Sandy Hagen',
                    },
                    e: {
                        id: 'e',
                        name: 'Logan Grandmont',
                    },
                },
                activeCollaboratorIds: ['a', 'b', 'd', 'e'],
                currentUserId: null,
                permissionLevel: '',
                enabledFeatureNames: [],
                cursorData: null,
            },
            blockInstallationId: '',
            isFullscreen: false,
            isFirstRun: false,
        },
        subscribeToModelUpdates: () => {},
        subscribeToGlobalConfigUpdates: () => {},
        subscribeToSettingsButtonClick: () => {},
        subscribeToEnterFullScreen: () => {},
        subscribeToExitFullScreen: () => {},
        subscribeToFocus: () => {},
        assertAllowedSdkPackageVersion: () => {},
        aggregators: {
            getAllAvailableAggregatorKeys: () => {
                return [];
            },
        },
    };
}; /** @hidden */
export default function getAirtableInterface(): AirtableInterface {
    const w = typeof window === 'undefined' ? {} : window;
    const aInterface: any = (((w as any).__getAirtableInterfaceAtVersion ||
        defaultInterface) as unknown) as AirtableInterface;
    const getAirtableInterfaceAtVersion: ((arg1: number) => AirtableInterface) | void = aInterface;

    if (!airtableInterface) {
        if (!getAirtableInterfaceAtVersion) {
            throw spawnError(missingAirtableInterfaceErrorMessage);
        }

        airtableInterface = getAirtableInterfaceAtVersion(AIRTABLE_INTERFACE_VERSION);
    }

    return airtableInterface;
}
