// Agency Theme JavaScript
$(".modal-transparent").on('show.bs.modal', function () {
    setTimeout(function () {
        $(".modal-backdrop").addClass("modal-backdrop-transparent");
    }, 0);
});
$(".modal-transparent").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
});

$(".modal-fullscreen").on('show.bs.modal', function () {
    setTimeout(function () {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    }, 0);
});
$(".modal-fullscreen").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});

$('#designer_row').hide();
$('#developer_row').hide();
$('#brand_row').hide();
$('#qa_row').hide();
$('#estimate_table').hide();
$('#btn_next').hide();
$('#duration_row').hide();
$('#marketing_row').hide();
$('#social_media_row').hide();
$('#accounts_row').hide();
$('#consumer_row').hide();
$('#community_row').hide();
$('#digital_row').hide();
$('#metrics_row').hide();
$('#sem_row').hide();

var app = angular.module('myApp', []);

$developer_pltforms = 0;
$design_pltforms = 0;
$brand_pltforms = 0;
$branding_total = 0;
$design_total = 0;
$qa_total = 0;
$duration = 0;

$isWebDesign = false;
$isAndroidDesign = false;
$isiOSDesign = false;

$isWebDevelopment = false;
$isiOSDevelopment = false;
$isAndroidDevelopment = false;
$isBackendDevelopment = false;
$design_badge_total = 0;


$('input[name=web_design]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $design_badge_total = $design_badge_total + 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isWebDesign = true;
        $design_pltforms = $design_pltforms + 1;
        if ($design_pltforms == 1) {
            $design_total = 20;
        } else if ($design_pltforms == 2) {
            $design_total = 20;
        } else if ($design_pltforms == 3) {
            $design_total = 20;
        } else {
            $design_total = 0;
        }
        recalculateDesignTotal();
        $('#designer_row').show();
    } else {
        // Checkbox is not checked.
        $design_badge_total = $design_badge_total - 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isWebDesign = false;
        $design_pltforms = $design_pltforms - 1;
        if ($design_pltforms == 1) {
            $design_total = 20;
        } else if ($design_pltforms == 2) {
            $design_total = 20;
        } else if ($design_pltforms == 3) {
            $design_total = 20;
        } else {
            $design_total = 0;
        }
        recalculateDesignTotal();
        if ($('input[name=ios_design]').is(':checked')) {
            $('#designer_row').show();
        } else if ($('input[name=android_design]').is(':checked')) {
            $('#designer_row').show();
        } else {
            $('#designer_row').hide();
        }
    }

});

$('input[name=ios_design]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $design_badge_total = $design_badge_total + 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isiOSDesign = true;
        $design_pltforms = $design_pltforms + 1;
        if ($design_pltforms == 1) {
            $design_total = 20;
        } else if ($design_pltforms == 2) {
            $design_total = 20;
        } else if ($design_pltforms == 3) {
            $design_total = 20;
        } else {
            $design_total = 0;
        }
        recalculateDesignTotal();
        $('#designer_row').show();
    } else {
        // Checkbox is not checked.
        $design_badge_total = $design_badge_total - 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isiOSDesign = false;
        $design_pltforms = $design_pltforms - 1;
        if ($design_pltforms == 1) {
            $design_total = 20;
        } else if ($design_pltforms == 2) {
            $design_total = 20;
        } else if ($design_pltforms == 3) {
            $design_total = 20;
        } else {
            $design_total = 0;
        }
        recalculateDesignTotal();
        if ($('input[name=web_design]').is(':checked')) {
            $('#designer_row').show();
        } else if ($('input[name=android_design]').is(':checked')) {
            $('#designer_row').show();
        } else {
            $('#designer_row').hide();
        }
    }

});

$('input[name=android_design]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $design_badge_total = $design_badge_total + 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isAndroidDesign = true;
        $design_pltforms = $design_pltforms + 1;
        if ($design_pltforms == 1) {
            $design_total = 20;
        } else if ($design_pltforms == 2) {
            $design_total = 20;
        } else if ($design_pltforms == 3) {
            $design_total = 20;
        } else {
            $design_total = 0;
        }
        recalculateDesignTotal();
        $('#designer_row').show();
    } else {
        // Checkbox is not checked.
        $design_badge_total = $design_badge_total - 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isAndroidDesign = false;
        $design_pltforms = $design_pltforms - 1;
        if ($design_pltforms == 1) {
            $design_total = 20;
        } else if ($design_pltforms == 2) {
            $design_total = 20;
        } else if ($design_pltforms == 3) {
            $design_total = 20;
        } else {
            $design_total = 0;
        }
        recalculateDesignTotal();
        if ($('input[name=web_design]').is(':checked')) {
            $('#designer_row').show();
        } else if ($('input[name=ios_design]').is(':checked')) {
            $('#designer_row').show();
        } else {
            $('#designer_row').hide();
        }
    }
});

$('input[name=web_development]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $design_badge_total = $design_badge_total + 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isWebDevelopment = true;
        $developer_pltforms = $developer_pltforms + 1;
        $duration = 1;
        recalculateDeveloperTotal();
        $('#developer_row').show();
        $('#qa_row').show();
    } else {
        // Checkbox is not checked.
        $design_badge_total = $design_badge_total - 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isWebDevelopment = false;
        $developer_pltforms = $developer_pltforms - 1;
        recalculateDeveloperTotal();
        if ($('input[name=ios_development]').is(':checked')) {
            $duration = 1;
            $('#developer_row').show();
            $('#qa_row').show();
        } else if ($('input[name=android_development]').is(':checked')) {
            $duration = 1;
            $('#developer_row').show();
            $('#qa_row').show();
        } else if ($('input[name=backend_development]').is(':checked')) {
            $duration = 1;
            $('#developer_row').show();
            $('#qa_row').show();
        } else {
            $duration = 0;
            $('#developer_row').hide();
            $('#qa_row').hide();
        }
    }

});

$('input[name=ios_development]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $design_badge_total = $design_badge_total + 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isiOSDevelopment = true;
        $developer_pltforms = $developer_pltforms + 1;
        $duration = 1;
        recalculateDeveloperTotal();
        $('#developer_row').show();
        $('#qa_row').show();
    } else {
        // Checkbox is not checked.
        $design_badge_total = $design_badge_total - 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isiOSDevelopment = false;
        $developer_pltforms = $developer_pltforms - 1;
        recalculateDeveloperTotal();
        if ($('input[name=web_development]').is(':checked')) {
            $duration = 1;
            $('#developer_row').show();
            $('#qa_row').show();
        } else if ($('input[name=android_development]').is(':checked')) {
            $duration = 1;
            $('#developer_row').show();
            $('#qa_row').show();
        } else if ($('input[name=backend_development]').is(':checked')) {
            $duration = 1;
            $('#developer_row').show();
            $('#qa_row').show();
        } else {
            $duration = 0;
            $('#developer_row').hide();
            $('#qa_row').hide();
        }
    }

});

$('input[name=android_development]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $design_badge_total = $design_badge_total + 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isAndroidDevelopment = true;
        $developer_pltforms = $developer_pltforms + 1;
        $duration = 1;
        recalculateDeveloperTotal();
        $('#developer_row').show();
        $('#qa_row').show();
    } else {
        // Checkbox is not checked.
        $design_badge_total = $design_badge_total - 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isAndroidDevelopment = false;
        $developer_pltforms = $developer_pltforms - 1;
        recalculateDeveloperTotal();
        if ($('input[name=web_development]').is(':checked')) {
            $duration = 1;
            $('#developer_row').show();
            $('#qa_row').show();
        } else if ($('input[name=ios_development]').is(':checked')) {
            $duration = 1;
            $('#developer_row').show();
            $('#qa_row').show();
        } else if ($('input[name=backend_development]').is(':checked')) {
            $duration = 1;
            $('#developer_row').show();
            $('#qa_row').show();
        } else {
            $duration = 0;
            $('#developer_row').hide();
            $('#qa_row').hide();
        }
    }
});

$('input[name=backend_development]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $design_badge_total = $design_badge_total + 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isBackendDevelopment = true;
        $developer_pltforms = $developer_pltforms + 1;
        $duration = 1;
        recalculateDeveloperTotal();
        $('#developer_row').show();
        $('#qa_row').show();
    } else {
        // Checkbox is not checked.
        $design_badge_total = $design_badge_total - 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $isBackendDevelopment = false;
        $developer_pltforms = $developer_pltforms - 1;
        recalculateDeveloperTotal();
        if ($('input[name=web_development]').is(':checked')) {
            $duration = 1;
            $('#developer_row').show();
            $('#qa_row').show();
        } else if ($('input[name=ios_development]').is(':checked')) {
            $duration = 1;
            $('#developer_row').show();
            $('#qa_row').show();
        } else if ($('input[name=android_development]').is(':checked')) {
            $duration = 1;
            $('#developer_row').show();
            $('#qa_row').show();
        } else {
            $('#developer_row').hide();
            $duration = 0;
            $('#qa_row').hide();
        }
    }
});

$('input[name=logo_design]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $design_badge_total = $design_badge_total + 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $brand_pltforms = $brand_pltforms + 1;
        if ($design_pltforms == 0) {
            $branding_total = 15 * 1;
        } else if ($brand_pltforms == 1) {
            $branding_total = 15 * 1;
        } else {
            $branding_total = 15;
        }
        recalculateBrandingTotal();
        $('#brand_row').show();
    } else {
        // Checkbox is not checked.
        $design_badge_total = $design_badge_total - 1;
        $("#prodducts").attr("data-badge", $design_badge_total);
        $brand_pltforms = $brand_pltforms - 1;
        if ($brand_pltforms == 0) {
            $branding_total = 0;
        } else if ($brand_pltforms == 1) {
            $branding_total = 15 * 1;
        } else {
            $branding_total = 15;
        }
        recalculateBrandingTotal();
        if ($('input[name=app_icon]').is(':checked')) {
            $('#brand_row').show();
        } else {
            $('#brand_row').hide();
        }
    }

});

$('input[name=app_icon]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $brand_pltforms = $brand_pltforms + 1;
        if ($brand_pltforms == 0) {
            $branding_total = 0;
        } else if ($brand_pltforms == 1) {
            $branding_total = 15 * 1;
        } else {
            $branding_total = 15;
        }
        recalculateBrandingTotal();
        $('#brand_row').show();
    } else {
        // Checkbox is not checked.
        $brand_pltforms = $brand_pltforms - 1;
        if ($brand_pltforms == 0) {
            $branding_total = 0;
        } else if ($brand_pltforms == 1) {
            $branding_total = 15 * 1;
        } else {
            $branding_total = 15;
        }
        recalculateBrandingTotal();
        if ($('input[name=logo_design]').is(':checked')) {
            $('#brand_row').show();
        } else {
            $('#brand_row').hide();
        }
    }

});

$paid_accounts_total = 0;

$('input[name=paid_accounts]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $paid_accounts_total = 15;
        recalculatePaidAccountsTotal();
        $('#marketing_row').show();
    } else {
        // Checkbox is not checked.
        $paid_accounts_total = 0;
        recalculatePaidAccountsTotal();
        $('#marketing_row').hide();
    }

});

function recalculatePaidAccountsTotal() {
    $('#marketing_total').text($paid_accounts_total + "K");
    calculateTotal();
}

$social_media_campaign_total = 0;

$('input[name=social_media_campaigns]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $social_media_campaign_total = 30;
        recalculateSocialMediaTotal();
        $('#social_media_row').show();
    } else {
        // Checkbox is not checked.
        $social_media_campaign_total = 0;
        recalculateSocialMediaTotal();
        $('#social_media_row').hide();
    }

});

function recalculateSocialMediaTotal() {
    $('#social_media_total').text($social_media_campaign_total + "K");
    calculateTotal();
}

$account_strategy_total = 0;

$('input[name=accounts_strategy]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $account_strategy_total = 30;
        recalculateAccountsStrategyTotal();
        $('#accounts_row').show();
    } else {
        // Checkbox is not checked.
        $account_strategy_total = 0;
        recalculateAccountsStrategyTotal();
        $('#accounts_row').hide();
    }

});

function recalculateAccountsStrategyTotal() {
    $('#accounts_total').text($account_strategy_total + "K");
    calculateTotal();
}

$digital_strategy_total = 0;

$('input[name=digital_strategy]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $digital_strategy_total = 20;
        recalculateDigitalStrategyTotal();
        $('#digital_row').show();
    } else {
        // Checkbox is not checked.
        $digital_strategy_total = 0;
        recalculateAccountsStrategyTotal();
        $('#digital_row').hide();
    }

});

function recalculateDigitalStrategyTotal() {
    $('#digital_total').text($digital_strategy_total + "K");
    calculateTotal();
}

$consumer_insights_total = 0;

$('input[name=consumer_insights]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $consumer_insights_total = 20;
        recalculateConsumerInsightsTotal();
        $('#consumer_row').show();
    } else {
        // Checkbox is not checked.
        $consumer_insights_total = 0;
        recalculateConsumerInsightsTotal();
        $('#consumer_row').hide();
    }

});

function recalculateConsumerInsightsTotal() {
    $('#consumer_total').text($consumer_insights_total + "K");
    calculateTotal();
}

$community_management_total = 0;

$('input[name=community_management]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $community_management_total = 25;
        recalculateCommunityManagementTotal();
        $('#community_row').show();
    } else {
        // Checkbox is not checked.
        $community_management_total = 0;
        recalculateCommunityManagementTotal();
        $('#community_row').hide();
    }

});

function recalculateCommunityManagementTotal() {
    $('#community_total').text($community_management_total + "K");
    calculateTotal();
}

$sem_campaign_total = 0;

$('input[name=sem_campaigns]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $sem_campaign_total = 35;
        recalculateSEMTotal();
        $('#sem_row').show();
    } else {
        // Checkbox is not checked.
        $sem_campaign_total = 0;
        recalculateSEMTotal();
        $('#sem_row').hide();
    }

});

function recalculateSEMTotal() {
    $('#sem_total').text($sem_campaign_total + "K");
    calculateTotal();
}

$media_campaign_metrics_total = 0;

$('input[name=campaign_metrics]').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $media_campaign_metrics_total = 10;
        recalculateSMMetricsTotal();
        $('#metrics_row').show();
    } else {
        // Checkbox is not checked.
        $media_campaign_metrics_total = 0;
        recalculateSMMetricsTotal();
        $('#metrics_row').hide();
    }

});

function recalculateSMMetricsTotal() {
    $('#media_metrics_total').text($media_campaign_metrics_total + "K");
    calculateTotal();
}


function recalculateDeveloperTotal() {
    $('#developer_platforms').text($developer_pltforms);
    $('#developer_total').text((20 * $developer_pltforms) + "K");
    $('#qa_platforms').text($developer_pltforms);
    if ($developer_pltforms == 0) {
        $qa_total = 0;
        $duration = 0
    } else {
        $qa_total = (5 * $developer_pltforms);
        $duration = 1;
        $('#qa_total').text($qa_total + "K");
    }
    calculateTotal();
}

function recalculateDesignTotal() {
    $('#design_platforms').text($design_pltforms);
    $('#design_total').text($design_total + "K");
    calculateTotal();
}

function recalculateBrandingTotal() {
    $('#branding_platforms').text($brand_pltforms);
    $('#branding_total').text($branding_total + "K");
    calculateTotal();
}

function calculateTotal() {
    $('#total').text("R" + ((20 * $developer_pltforms) + ($design_total + $branding_total) + $qa_total + $paid_accounts_total + $social_media_campaign_total + $sem_campaign_total + $account_strategy_total + $digital_strategy_total + $consumer_insights_total + $community_management_total + $media_campaign_metrics_total) + "K");

    if ($('#total').text() == "R0K") {
        $('#total_row').hide();
        $('#estimate_table').hide();
        $('#btn_next').hide();
    } else {
        $('#total_row').show();
        $('#estimate_table').show();
        $('#btn_next').show();
    }

    if ($duration == 0) {
        $('#duration_row').hide();
        $('#duration_total').text("-");
    } else {
        $('#duration_total').text("Over 3 Months");
        $('#duration_row').show();
    }
}

$('#read_case_study').hover(function () {
    $(this).append("<i class='fa fa-arrow-right fa-1x'></i>").show('slow');
}, function () {
    $(this).text("READ A CASE STUDY");
});

$('#btn_next').click(function () {
    $message = "We would like the services of a ";
    if ($isWebDesign) {
        $message = $message + " Web Designer,";
    }

    if ($isiOSDesign) {
        $message = $message + " iOS Designer,";
    }

    if ($isAndroidDesign) {
        $message = $message + " Android Designer,";
    }

    if ($isWebDevelopment) {
        $message = $message + " Web Developer,";
    }

    if ($isiOSDevelopment) {
        $message = $message + " iOS Developer, ";
    }

    if ($isAndroidDevelopment) {
        $message = $message + " Android Developer, ";
    }

    if ($isBackendDevelopment) {
        $message = $message + " Backend Developer, ";
    }

    if ($duration == 1) {
        $message = $message + " We know it could take over 3 months and have seen the rough estimate costs"
    }

    alert($message);
});

(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
        , offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })


})(jQuery); // End of use strict