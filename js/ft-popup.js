$(function() {
    $('.wkl-icon').on('click', function() {

        var alert = $(this).data('alert');

        $('.ft-alert.wkl-unhide').removeClass('wkl-unhide');
        $(alert).addClass('wkl-unhide');
    });
    $('.close').on('click', function() {
        $('.ft-alert.wkl-unhide').removeClass('wkl-unhide');
    });
    // $('.workloads').on('click', function() {
    //     $('.ft-alert.wkl-unhide').removeClass('wkl-unhide');
    // });
});
