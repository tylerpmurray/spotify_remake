var debug = true;

$(document).ready(function ($) {
    window.dataLayer = window.dataLayer || [];

    $.fn.isInViewport = function () {
        let elementTop = $(this).offset().top;
        let elementBottom = elementTop + $(this).outerHeight();

        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    /* init */
    if ($(".lia-quilt-layout-custom-home-page-layout").length) {
        var owl = $('.owl-carousel').last();
        var owlTopics = $('#carouselTopics.owl-carousel');
        var owlBlog = $('#carouselBlog.owl-carousel');
        var topicsWidgetTS = 0, topicsWidgetDwellTime = 10, topicsWidgetDwelled = false;
        var rockstarWidgetTS = 0, rockstarWidgetDwellTime = 10, rockstarWidgetDwelled = false;
        var blogWidgetTS = 0, blogWidgetDwellTime = 10, blogWidgetDwelled = false;
        var owlTopicsMob = $('#carouselTopics .owl-carousel');

        owl.on('initialized.owl.carousel', function (event) {
            setTimeout(function () {
                /* Featured/Popular/Latest Topics widget */
                $(".lia-quilt-layout-custom-home-page-layout .lia-quilt-row-main-topics .homepage-panel-topics .radioTitles li").on("click", function () {
                    gtmTagPush("Homepage.Widget.Topics.Tabs", "click", $(this).text());
                });
                //-- prev/next buttons
                $("#carouselTopics .owl-nav button").on("click", function () {
                    gtmTagPush("Homepage.Widget.Topics", "click", $(this).find('span').attr("aria-label"), $(this).closest('section').find('ul li.active').text());
                });

                //-- clicking on an article
                $("#carouselTopics a").on("click", function () {
                    gtmTagPush("Homepage.Widget.Topics." + $(this).closest('.topicTheme1').attr('id'), "click", $(this).attr('href'));
                });

                //-- clicking on more
                $("#carouselTopics .topicTheme1 button").on("click", function () {
                    gtmTagPush("Homepage.Widget.Topics." + $(this).closest('.topicTheme1').attr('id'), "click", $(this).text());
                });

                //-- dot buttons
                $("#carouselTopics .owl-dots button").on("click", function () {
                    gtmTagPush("Homepage.Widget.Topics", "click", "dot", $(this).attr('aria-label'));
                });

                //-- track slide loads
                gtmTagPush("Homepage.Widget.Topics", "load", "n/a", "Featured topics");
                owlTopics.on('changed.owl.carousel', function (event) {
                    if ($(window).width() > 768) {
                        gtmTagPush("Homepage.Widget.Topics", "load", "n/a", $(this).closest('section').find('ul li.active').text());
                    }
                })
                //-- track drags
                owlTopics.on('dragged.owl.carousel', function (event) {
                    if ($(window).width() > 768) { //desktop
                        gtmTagPush("Homepage.Widget.Topics", "dragSlide", "n/a", $(this).closest('section').find('ul li.active').text());
                    }
                });
                owlTopicsMob.on('dragged.owl.carousel', function () {
                    gtmTagPush("Homepage.Widget.Topics", "dragPosts", "n/a", $(this).closest('.topicTheme1').attr('id').replace("-", " "));
                })
                /* -- Featured/Popular/Latest Topics widget */

                /* Rockstars widget */
                // circle clicks
                $('.homepage-panel-stars .jbTooltip').on('click', function (e) {
                    gtmTagPush("Homepage.Widget.Rockstars", "click", "circle", $(this).attr('alt'));
                })
                // circle hovers
                $('.homepage-panel-stars .jbTooltip').on('mouseover', function (e) {
                    gtmTagPush("Homepage.Widget.Rockstars", "hover", "circle", $(this).attr('alt'));
                })
                // find out more
                $('.homepage-panel-stars .btn-primary').on('click', function (e) {
                    gtmTagPush("Homepage.Widget.Rockstars", "click", $(this).text());
                })
                /* -- Rockstars widget */

                /* Blog widget */
                //-- prev/next buttons
                $("#carouselBlog .owl-nav button").on("click", function () {
                    gtmTagPush("Homepage.Widget.Blog", "click", $(this).find('span').attr("aria-label"));
                });

                //-- clicking on an article
                $("#carouselBlog a").on("click", function () {
                    gtmTagPush("Homepage.Widget.Blog.Item", "click", $(this).attr('href'));
                });

                //-- dot buttons
                $(".homepage-panel-blog .owl-dots button").on("click", function () {
                    gtmTagPush("Homepage.Widget.Blog", "click", "dot", $(this).attr('aria-label'));
                });
                //-- track drags
                owlBlog.on('dragged.owl.carousel', function () {
                    gtmTagPush("Homepage.Widget.Blog", "dragPosts", "n/a");
                })
                /* -- Blog widget */

                /* Homepage category browser widget */
                //-- clicking on one of the 3 sections
                $('.homepage-category-browser a').on("click", function () {
                    gtmTagPush("Homepage.Widget.Categories", "click", $(this).find('h3').text());
                });
                /* -- Homepage category browser widget */

            }, 500);

            debug ? console.log("initialised last owl") : null;
        });


        //-- dwell times
        $(window).scroll(function () {
            /* Featured/Popular/Latest Topics widget */
            if (topicsWidgetTS == 0 && !topicsWidgetDwelled) {
                if ($('.lia-quilt-layout-custom-home-page-layout .lia-quilt-row-main-topics .homepage-panel-topics .topicListContainer').isInViewport()) {
                    topicsWidgetTS = Date.now();
                    setTimeout(function () {
                        if ($('.lia-quilt-layout-custom-home-page-layout .lia-quilt-row-main-topics .homepage-panel-topics ').isInViewport()) {
                            gtmTagPush("Homepage.Widget.Topics", "dwell", "Featured/Popular/Latest Topics", "At least " + topicsWidgetDwellTime + " seconds");
                            topicsWidgetDwelled = true;
                        }
                    }, (topicsWidgetDwellTime * 1000));
                }
            }

            /* Rockstars widget */
            if (rockstarWidgetTS == 0 && !rockstarWidgetDwelled) {
                if ($('.lia-quilt-layout-custom-home-page-layout .lia-quilt-row-main-stars').isInViewport()) {
                    rockstarWidgetTS = Date.now();
                    setTimeout(function () {
                        if ($('.lia-quilt-layout-custom-home-page-layout .lia-quilt-row-main-topics .homepage-panel-topics ').isInViewport()) {
                            gtmTagPush("Homepage.Widget.Blog", "dwell", "The Spotify Stars Program", "At least " + blogWidgetDwellTime + " seconds");
                            blogWidgetDwelled = true;
                        }
                    }, (blogWidgetDwellTime * 1000));
                }
            }


            /* Blog widget */
            if (blogWidgetTS == 0 && !rockstarWidgetDwelled) {
                if ($('.lia-quilt-layout-custom-home-page-layout .lia-quilt-row-main-stars').isInViewport()) {
                    blogWidgetTS = Date.now();
                    setTimeout(function () {
                        if ($('.lia-quilt-layout-custom-home-page-layout #carouselBlog').isInViewport()) {
                            gtmTagPush("Homepage.Widget.Rockstars", "dwell", "Community Blog", "At least " + rockstarWidgetDwellTime + " seconds");
                            rockstarWidgetDwelled = true;
                        }
                    }, (rockstarWidgetDwellTime * 1000));
                }
            }
        });
    }
});

function gtmTagPush(event, action, label, value) {
    //ga('send', 'event', cat, action, label, value?value:null);
    const data = {
        'event': 'CustomTracking',
        'gaEvent': event,
        'gaAction': action,
        'gaLabel': label,
        'gaValue': value ? value : null
    };
    window.dataLayer.push(data);
    debug ? console.debug('Sending GTM Tag Push', data) : null;
}

console.log("Ingelby GTM loaded");