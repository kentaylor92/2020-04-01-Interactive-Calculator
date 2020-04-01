$(document).ready(function () {

    function tipCalculator() {
        
        const billTotal = $("#billInput").val();
        const tipPercent = $("#tipPercent").val();
           
        const tip = billTotal * (tipPercent / 100);
        const total = +billTotal + tip;

        $("#tip").text(tip.toFixed(2));
        $("#total").text(total.toFixed(2));
    };

    $('#submit').on('click', function(e) {
        e.preventDefault();
        tipCalculator();
        // $('#billInput').val('');
        $('#tipPercent').val('');
    })
 
});