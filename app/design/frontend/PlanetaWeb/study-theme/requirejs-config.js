var config = {
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
   },
   deps: [
        'js/extended-validation'
    ]
};
