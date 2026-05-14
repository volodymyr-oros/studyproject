define([
    'jquery',
    'jqueryMask'
], function ($) {
    'use strict';

    return function (target) {
        return target.extend({

            initialize: function () {
                this._super();
                this._initTelephoneMask();
                return this;
            },

            _initTelephoneMask: function () {
                $('body').on('focusin', 'input[name$="telephone"]', function () {
                    const $input = $(this);

                    if ($input.data('mask-applied')) return; 

                    $input.mask(
                        '+380 XX XXX-XX-XX',
                        {
                            translation: {
                                '0': null,
                                'X': {
                                    pattern: /[0-9]/
                                }
                            },
                            placeholder: '+380 __ ___-__-__',
                            clearIfNotMatch: true
                        }
                    );

                    $input.data('mask-applied', true);
                });
            }
        });
    };
});
