define([
    'Magento_Customer/js/model/address-list'
], function (addressList) {
    'use strict';

    return function (Component) {
        return Component.extend({
            isNewAddressAdded: function () {
                return this._super() || addressList().length >= 2;
            }
        });
    };
});