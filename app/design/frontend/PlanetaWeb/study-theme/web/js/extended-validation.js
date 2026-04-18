define([
    'jquery',
    'mage/validation',
    'mage/translate'
], function ($) {
  'use strict';

    $.validator.addMethod(
        'cyrillic-only',
        function(value, element) {
            if (value === '') {
                return true;
            }
            return /^[а-яёіїєґА-ЯЁІЇЄҐ\-]+$/.test(value);
        },
        $.mage.__('Only Cyrillic and hyphens are allowed')
    );

    $.validator.addMethod(
        'age-range',
        function(value, element) {
            if (value === '') {
                return true;
            }

            if (!/^\d+$/.test(value)) {
                return false;
            }

            const age = parseInt(value, 10);

            return age >= 18 && age <= 120;
        },
        $.mage.__('Age must be between 18 and 120 years old')
    );
});
