/*global $*/
//Theme Switcher
$("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='assets/css/customize/switcher.css' type='text/css'>");

var switcherHTML="";
switcherHTML += "<div id=\"switcher\">";
switcherHTML += "    <i class=\"fa fa-cog fa-2x toggle-btn\"><\/i>";
switcherHTML += "    <div class=\"content\">";
switcherHTML += "        <div class=\"inner\">";
switcherHTML += "            <label>Layout<\/label><br>";
switcherHTML += "            <input id=\"fixedNav\" type=\"checkbox\" checked>";
switcherHTML += "            <label>Fixed Naviation<\/label><br>";
switcherHTML += "            <input id=\"boxed\" type=\"checkbox\" checked>";
switcherHTML += "            <label>Boxed Content<\/label><br><br>";
switcherHTML += "            <label>Theme Skin<\/label><br>";
switcherHTML += "            <div class=\"color-container\">";
switcherHTML += "        		<span data-skin=\"\" style=\"background:#f8f8f8;\"><\/span>";
switcherHTML += "        		<span data-skin=\"skin-blue\" style=\"background:#2494F2;\"><\/span>";
switcherHTML += "        		<span data-skin=\"skin-green\" style=\"background:#2ecc71;\"><\/span>";
switcherHTML += "        		<span data-skin=\"skin-red\" style=\"background:#e74c3c;\"><\/span>";
switcherHTML += "        		<span data-skin=\"skin-purple\" style=\"background:#9b59b6;\"><\/span>";
switcherHTML += "        		<span data-skin=\"skin-dark\" style=\"background:#34495e;\"><\/span>";
switcherHTML += "            <\/div>";
switcherHTML += "        <\/div>";
switcherHTML += "    <\/div>";
switcherHTML += "<\/div>";



$('body').append(switcherHTML);

$('#switcher .toggle-btn').on('click', function () {
    "use strict";
    $('#switcher').toggleClass('open');
});

$('#combo-color').on('change', function () {
    "use strict";
    $('#dynamic-style').attr('href', $('#combo-color').val());
});

$('#fixedNav').on('click', function () {
    "use strict";
    var obj = $(this);
    if(obj.is(':checked')) {
        $('body').addClass('header-fixed')
    } else {
        $('body').removeClass('header-fixed');
    }
});

$('#boxed').on('click', function () {
    "use strict";
    var obj = $(this);
    if(obj.is(':checked')) {
        $('.content-wrapper .content').removeClass('full-width')
    } else {
        $('.content-wrapper .content').addClass('full-width');
    }
});

$('span[data-skin]').on('click', function () {
    "use strict";
    var obj = $(this);
    $('body').removeClass('skin-blue').removeClass('skin-green').removeClass('skin-red').removeClass('skin-purple').removeClass('skin-dark');
    $('body').addClass(obj.data('skin'));
})
//End Theme Switcher