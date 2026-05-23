define(
	[
    	'ko',
        'uiComponent',
        'Magento_Checkout/js/model/step-navigator',
        'Magento_Checkout/js/model/full-screen-loader',
        'mage/storage',
        'Magento_Customer/js/model/customer',
        'Magento_Checkout/js/model/quote',
        'Magento_Checkout/js/model/shipping-rate-registry',
        'Magento_Checkout/js/action/get-totals',
        'Magento_Checkout/js/model/totals',
        'Magento_Checkout/js/model/cart/totals-processor/default',
        'Magento_Checkout/js/model/cart/cache'
	],
	function (ko,
              Component,
              stepNavigator,
              fullScreenLoader,
              storage,
              customer,
              quote,
              rateRegistry,
              totals,
              getTotalsAction,
              defaultTotal,
              cartCache) {
    	'use strict';

    	return Component.extend({
            defaults: {
                template: 'PlanetaWeb_ExtendedCheckout/check-new'
        	},
            isVisible: ko.observable(false),
      	    isVisibleDrop: ko.observable(false),
            isLogedIn: customer.isLoggedIn(),
            stepCode: 'newstep',
            stepTitle: "New Step",
        	/**
         	* @returns {*}
         	*/
            initialize: function () {
                this._super();
                stepNavigator.registerStep(
                    this.stepCode,
                    null,
                    this.stepTitle,
                    this.isVisible,
                    this.navigate.bind(this),
                    15
                );
                return this;
        	},
            isStepDisplayed: function () {
                return true;
        	},
            navigate: function () {
                this.isVisible(true);
        	},
        	/**
         	* @returns void
         	*/
            navigateToNextStep: function () {
                stepNavigator.next();
        	}
        });
	}
);