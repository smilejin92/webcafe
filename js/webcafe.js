var section = $('.board section');
var tab = $('.tab');

// 'e' as event
tab.on('click', function(e){
    e.preventDefault(); // cancel default function (ex. href="url")
    if((e.keyCode === 13 && e.type === 'keyup') || e.type ==='click') {
        section.removeClass('tab-act');
        $(this).parent().parent().addClass('tab-act');
    }
});