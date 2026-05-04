var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/checkout-data-resolver': {
                'PlanetaWeb_ExtendedCheckout/js/model/checkout-data-resolver-mixin': true
            },
            'Magento_Checkout/js/view/summary/abstract-total': {
                'PlanetaWeb_ExtendedCheckout/js/view/summary/abstract-total-mixin': true
            },
            'Magento_Checkout/js/model/shipping-rates-validation-rules': {
                'PlanetaWeb_ExtendedCheckout/js/model/shipping-rates-validation-rules-mixin': true
            }
        }
    }
};
