$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('[data-add-to-cart]').click(function(e){
       alert('أضف الي عربة الشراء');
       e.stopPropagation();
    });
});