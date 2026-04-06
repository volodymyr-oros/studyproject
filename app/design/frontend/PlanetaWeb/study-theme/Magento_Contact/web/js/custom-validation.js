define([
    'jquery',
    'jquery/validate',
    'mage/translate'
], function($) {
    'use strict';

    return function() {
        $.validator.addMethod(
            'validate-no-cyrillic',
            function(value, element) {
                if (this.optional(element)) {
                    return true;
                }
                return !/[\u0400-\u04FF]/.test(value);
            },
            $.mage.__('The Cyrillic characters are not allowed.')
        );

        $.validator.addMethod(
            'validate-ua-phone',
            function(value, element) {
                if (this.optional(element)) {
                    return true;
                }

                let phoneRegex = /^\+380 \d{2} \d{3}-\d{2}-\d{2}$/;
                
                if (!phoneRegex.test(value)) {
                    return false;
                }

                let operatorCode = '0' + value.substring(5, 7);
                
                let validOperators = [
                    '039', '067', '068', '096', '097', '098', // Kyivstar
                    '050', '066', '095', '099', // Vodafone
                    '063', '073', '093', // Lifecell
                    '091', '092', '094' // Others
                ];

                return validOperators.includes(operatorCode);
            },
            $.mage.__('An invalid operator code.')
        );
    }
});