var config = {
    config: {
        mixins: {
            'mage/validation': {
                'Magento_Contact/js/validation-mixin': true,
                'js/validation-mixin': true
            }
        }
    },
    map: {
        '*': {
            slickCarousel: 'js/slick-carousel',
        }
    },
    paths: {
        slick: 'js/slick.min',
        'jqueryMask': 'js/jquery.mask.min'
    },
    shim: {
        slick: {
            deps: ['jquery']
        },
        'jqueryMask': {
            deps: ['jquery']
        }
    }
};
