<?php
namespace PlanetaWeb\ExtendedCheckout\Plugin\Block\Checkout;
 
class FieldsCustomCommentPlugin
{
    public function afterProcess(
        \Magento\Checkout\Block\Checkout\LayoutProcessor $subject,
    	array  $jsLayout
    ) {
    	$jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']
            ['children']['shippingAddress']['children']['shipping-address-fieldset']['children']['firstname']['notice'] = __('The test Comment #1');
    	$jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']
            ['children']['shippingAddress']['children']['shipping-address-fieldset']['children']['lastname']['notice'] = __('The test Comment #2');
    	
        return $jsLayout;
    }
}