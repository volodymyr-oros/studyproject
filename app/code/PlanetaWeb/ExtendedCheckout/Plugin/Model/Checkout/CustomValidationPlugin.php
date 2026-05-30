<?php

namespace PlanetaWeb\ExtendedCheckout\Plugin\Model\Checkout;

class CustomValidationPlugin
{
    public function afterProcess(
        \Magento\Checkout\Block\Checkout\LayoutProcessor $subject,
        array $jsLayout
    ) {
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['company']['validation'] = [
            'max_text_length' => 10
        ];
        
        return $jsLayout;
    }
}