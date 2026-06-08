define([
    'jquery',
    'mage/translate'
], function ($, $t) {
    'use strict';

    return function (validator) {
        validator.addRule(
            'cyrillic-only',
            function (value) {
                if (value === '' || value == null) {
                    return true;
                }
                return /^[а-яёіїєґА-ЯЁІЇЄҐ\s\-]+$/.test(value);
            },
            $t('Only Cyrillic and hyphens are allowed')
        );

        return validator;
    };
});