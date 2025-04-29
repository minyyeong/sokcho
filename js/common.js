$(function(){
    // ================================================================================
    // 인클루드
    // ================================================================================
    var includes1 = $('[data-include1="header"]');
    var includes2 = $('[data-include2="footer"]');
    jQuery.each(includes1, function(){
        $(this).load('./header.html');
    });
    jQuery.each(includes2, function(){
        $(this).load('./footer.html');
    });
});