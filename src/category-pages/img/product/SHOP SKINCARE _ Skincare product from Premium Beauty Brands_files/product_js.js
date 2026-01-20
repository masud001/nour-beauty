
function get_skincare_product(response){
    var add_skincare_data = '';
    $('#skincare_product_div').html('');
    // var skincareProductDiv = document.getElementById("skincare_product_div");
    if(response.code == '1'){
        add_skincare_data = response.htmlData;
        // $('#skincare_product_div').html(add_skincare_data);
    } else {
        add_skincare_data = '<h1 style="text-align:center;color:white;margin:10px;">'+response.htmlData+'</h1>';
    }
    $('#skincare_product_div').append(add_skincare_data);
    hideLoader();
}

function get_mackup_product(response){
    var add_mackup_data = '';
    $('#mackup_product_div').html('');
    if(response.code == '1'){
        add_mackup_data = response.htmlData;
        // $('#skincare_product_div').html(add_skincare_data);
    } else {
        add_mackup_data = '<h1 style="text-align:center;color:white;margin:10px;">'+response.htmlData+'</h1>';
    }
    console.log(add_mackup_data);
    $('#mackup_product_div').html(add_mackup_data);
    hideLoader();
}

function get_hair_product(response){
    var add_haircare_data = '';
    $('#haircare_product_div').html('');
    if(response.code == '1'){
        add_haircare_data = response.htmlData;
        // $('#skincare_product_div').html(add_skincare_data);
    } else {
        add_haircare_data = '<h1 style="text-align:center;color:white;margin:10px;">'+response.htmlData+'</h1>';
    }
    console.log(add_haircare_data);
    $('#haircare_product_div').html(add_haircare_data);
    hideLoader();
}

function get_fragrance_product(response){
    var add_fragrance_data = '';
    $('#fragrance_product_div').html('');
    if(response.code == '1'){
        add_fragrance_data = response.htmlData;
        // $('#skincare_product_div').html(add_skincare_data);
    } else {
        add_fragrance_data = '<h1 style="text-align:center;color:white;margin:10px;">'+response.htmlData+'</h1>';
    }
    console.log(add_fragrance_data);
    $('#fragrance_product_div').html(add_fragrance_data);
    hideLoader();
}

function get_page_skincare_product(response){
    var add_skincare_data = '';

    // var skincareProductDiv = document.getElementById("skincare_product_div");
    if(response.code == '1'){
        add_skincare_data = response.htmlData;
        // $('#skincare_product_div').html(add_skincare_data);
    } else {
        add_skincare_data = '<h1 style="text-align:center;color:white;margin:10px;">'+response.htmlData+'</h1>';
    }
    $('#skincare_product_div').append(add_skincare_data);
    // window.scrollBy(0, 300);
    hideLoader();
}

function get_page_mackup_product(response){
    var add_mackup_data = '';

    if(response.code == '1'){
        add_mackup_data = response.htmlData;
        // $('#skincare_product_div').html(add_skincare_data);
    } else {
        add_mackup_data = '<h1 style="text-align:center;color:white;margin:10px;">'+response.htmlData+'</h1>';
    }
    console.log(add_mackup_data);
    $('#mackup_product_div').append(add_mackup_data);
    // window.scrollBy(0, 300);
    hideLoader();
}

function get_page_hair_product(response){
    var add_haircare_data = '';

    if(response.code == '1'){
        add_haircare_data = response.htmlData;
        // $('#skincare_product_div').html(add_skincare_data);
    } else {
        add_haircare_data = '<h1 style="text-align:center;color:white;margin:10px;">'+response.htmlData+'</h1>';
    }
    console.log(add_haircare_data);
    $('#haircare_product_div').append(add_haircare_data);
    // window.scrollBy(0, 300);
    hideLoader();
}

function get_page_fragrance_product(response){
    var add_fragrance_data = '';

    if(response.code == '1'){
        add_fragrance_data = response.htmlData;
        // $('#skincare_product_div').html(add_skincare_data);
    } else {
        add_fragrance_data = '<h1 style="text-align:center;color:white;margin:10px;">'+response.htmlData+'</h1>';
    }
    console.log(add_fragrance_data);
    $('#fragrance_product_div').append(add_fragrance_data);
    // window.scrollBy(0, 300);
    hideLoader();
}



function uncheckAllCheckboxesAndRadios() {
    var modal = document.getElementById('filter_menu');

    if (modal) {
        // Get all checkboxes and radio buttons inside the modal
        var checkboxesAndRadios = modal.querySelectorAll('input[type="checkbox"], input[type="radio"]');

        // Uncheck each checkbox and radio button
        checkboxesAndRadios.forEach(function (checkboxOrRadio) {
            checkboxOrRadio.checked = false;
        });
    }
}

