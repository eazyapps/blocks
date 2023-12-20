import {ObjectMap} from '../../src/private_utils';
import {IconName} from '../../src/ui/icon_config';
import {FieldType} from '../../src/types/field';

export const ReadableFieldTypes: ObjectMap<FieldType, string> = {
    [FieldType.SINGLE_LINE_TEXT]: 'Single line text',
    [FieldType.EMAIL]: 'Email',
    [FieldType.URL]: 'URL',
    [FieldType.MULTILINE_TEXT]: 'Long text',
    [FieldType.NUMBER]: 'Number',
    [FieldType.PERCENT]: 'Percent',
    [FieldType.CURRENCY]: 'Currency',
    [FieldType.SINGLE_SELECT]: 'Single select',
    [FieldType.MULTIPLE_SELECTS]: 'Multiple select',
    [FieldType.SINGLE_COLLABORATOR]: 'Collaborator (single)',
    [FieldType.MULTIPLE_COLLABORATORS]: 'Collaborators (multiple)',
    [FieldType.MULTIPLE_RECORD_LINKS]: 'Linked records',
    [FieldType.DATE]: 'Date',
    [FieldType.DATE_TIME]: 'Date with time',
    [FieldType.PHONE_NUMBER]: 'Phone number',
    [FieldType.MULTIPLE_ATTACHMENTS]: 'Attachment',
    [FieldType.CHECKBOX]: 'Checkbox',
    [FieldType.FORMULA]: 'Formula',
    [FieldType.CREATED_TIME]: 'Created time',
    [FieldType.ROLLUP]: 'Rollup',
    [FieldType.COUNT]: 'Count',
    [FieldType.MULTIPLE_LOOKUP_VALUES]: 'Lookup',
    [FieldType.AUTO_NUMBER]: 'Autonumber',
    [FieldType.BARCODE]: 'Barcode',
    [FieldType.RATING]: 'Rating',
    [FieldType.RICH_TEXT]: 'Rich text',
    [FieldType.DURATION]: 'Duration',
    [FieldType.LAST_MODIFIED_TIME]: 'Last modified time',
    [FieldType.CREATED_BY]: 'Created by',
    [FieldType.LAST_MODIFIED_BY]: 'Last modified by',
    [FieldType.BUTTON]: 'Button',
    [FieldType.EXTERNAL_SYNC_SOURCE]: 'Sync source',
    [FieldType.AI_TEXT]: 'Ai Assist',
};

export const IconNamesByFieldType: ObjectMap<FieldType, IconName> = {
    [FieldType.SINGLE_LINE_TEXT]: 'text',
    [FieldType.EMAIL]: 'envelope',
    [FieldType.URL]: 'hyperlink',
    [FieldType.MULTILINE_TEXT]: 'paragraph',
    [FieldType.NUMBER]: 'number',
    [FieldType.PERCENT]: 'percent',
    [FieldType.CURRENCY]: 'dollar',
    [FieldType.SINGLE_SELECT]: 'select',
    [FieldType.MULTIPLE_SELECTS]: 'multiselect',
    [FieldType.SINGLE_COLLABORATOR]: 'personal',
    [FieldType.MULTIPLE_COLLABORATORS]: 'multicollaborator',
    [FieldType.MULTIPLE_RECORD_LINKS]: 'link1',
    [FieldType.DATE]: 'day',
    [FieldType.DATE_TIME]: 'day',
    [FieldType.PHONE_NUMBER]: 'phone',
    [FieldType.MULTIPLE_ATTACHMENTS]: 'file',
    [FieldType.CHECKBOX]: 'checkbox',
    [FieldType.FORMULA]: 'formula',
    [FieldType.CREATED_TIME]: 'dayAuto',
    [FieldType.ROLLUP]: 'rollup1',
    [FieldType.COUNT]: 'count1',
    [FieldType.MULTIPLE_LOOKUP_VALUES]: 'lookup',
    [FieldType.AUTO_NUMBER]: 'autonumber',
    [FieldType.BARCODE]: 'barcode',
    [FieldType.RATING]: 'star',
    [FieldType.RICH_TEXT]: 'richText',
    [FieldType.DURATION]: 'time',
    [FieldType.LAST_MODIFIED_TIME]: 'dayAuto',
    [FieldType.CREATED_BY]: 'personalAuto',
    [FieldType.LAST_MODIFIED_BY]: 'personalAuto',
    [FieldType.BUTTON]: 'cursor',
    [FieldType.EXTERNAL_SYNC_SOURCE]: 'bolt',
    [FieldType.AI_TEXT]: 'aiAssistant',
};
