import { OpaqueToken } from '@angular/core';

import { LANG_PL_NAME, LANG_PL_TRANS } from './lang-pl';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
const dictionary = {
    [LANG_PL_NAME]: LANG_PL_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];