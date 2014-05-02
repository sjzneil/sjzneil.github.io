//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$(document).on('click', '.btn-number', function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
//    var node=$target.closest('.input-group').find('.btn-number');
    var node=$target;
    fieldName = node.attr('data-field');
    type      = node.attr('data-type');
    var input = $target.closest('.input-group').find("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                node.attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                node.attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$(document).on('focusin', '.input-number', function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    $target.data('oldValue', $target.val());
});
//$('.input-number').focusin(function(){
//   $(this).data('oldValue', $(this).val());
//});
$(document).on('change', '.input-number', function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $target.attr('name');
    if(valueCurrent >= minValue) {
        $target.closest(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $target.val($target.data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $target.closest(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $target.val($target.data('oldValue'));
    }
    
});
               
//$('.input-number').change(function() {
//    
//    minValue =  parseInt($(this).attr('min'));
//    maxValue =  parseInt($(this).attr('max'));
//    valueCurrent = parseInt($(this).val());
//    
//    name = $(this).attr('name');
//    if(valueCurrent >= minValue) {
//        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
//    } else {
//        alert('Sorry, the minimum value was reached');
//        $(this).val($(this).data('oldValue'));
//    }
//    if(valueCurrent <= maxValue) {
//        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
//    } else {
//        alert('Sorry, the maximum value was reached');
//        $(this).val($(this).data('oldValue'));
//    }
//    
//    
//});
$(document).on('keydown', '.input-number', function (event) {
//    event.preventDefault();
    var $target = $(event.currentTarget);
    // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(event.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) || 
             // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
            event.preventDefault();
        }
});
//$(".input-number").keydown(function (e) {
//        // Allow: backspace, delete, tab, escape, enter and .
//        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
//             // Allow: Ctrl+A
//            (e.keyCode == 65 && e.ctrlKey === true) || 
//             // Allow: home, end, left, right
//            (e.keyCode >= 35 && e.keyCode <= 39)) {
//                 // let it happen, don't do anything
//                 return;
//        }
//        // Ensure that it is a number and stop the keypress
//        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//            e.preventDefault();
//        }
//    });