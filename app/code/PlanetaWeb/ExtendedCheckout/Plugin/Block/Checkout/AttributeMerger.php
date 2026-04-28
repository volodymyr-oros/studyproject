<?php

namespace PlanetaWeb\ExtendedCheckout\Plugin\Block\Checkout;

class AttributeMerger
{
    public function afterMerge(\Magento\Checkout\Block\Checkout\AttributeMerger $subject, $result)
    {
        if (isset($result['firstname'])) {
            $result['firstname']['placeholder'] = __('First Name');
        }
        if (isset($result['lastname'])) {
            $result['lastname']['placeholder'] = __('Last Name');
        }
        if (isset($result['company'])) {
            $result['company']['placeholder'] = __('Enter Company');
        }
        if (isset($result['city'])) {
            $result['city']['placeholder'] = __('Enter City');
        }
        if (isset($result['postcode'])) {
            $result['postcode']['placeholder'] = __('Enter Zip/Postal Code');
        }
        if (isset($result['telephone'])) {
            $result['telephone']['placeholder'] = __('Enter Phone Number');
        }
        if (isset($result['street']['children'][0])) {
            $result['street']['children'][0]['placeholder'] = __('Line no 1');
        }
        if (isset($result['street']['children'][1])) {
            $result['street']['children'][1]['placeholder'] = __('Line no 2');
        }

        return $result;
    }
}