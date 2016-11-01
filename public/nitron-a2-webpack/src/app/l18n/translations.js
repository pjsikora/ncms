"use strict";
var core_1 = require('@angular/core');
var lang_pl_1 = require('./lang-pl');
// translation token
exports.TRANSLATIONS = new core_1.OpaqueToken('translations');
// all traslations
var dictionary = (_a = {},
    _a[lang_pl_1.LANG_PL_NAME] = lang_pl_1.LANG_PL_TRANS,
    _a
);
// providers
exports.TRANSLATION_PROVIDERS = [
    { provide: exports.TRANSLATIONS, useValue: dictionary },
];
var _a;
//# sourceMappingURL=translations.js.map