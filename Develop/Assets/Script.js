var hourList = document.getElementsByClassName('hour');

// Show the current day at the top of the calendar
$('#currentDay').text(moment().format('dddd, MMMM D'))


//add 9 time block Element
for (var i=0 ; i<9 ; i++) {

    var rowEl = $("<div class='row ' ></div>")

    var hourEL = $(`<div class='hour col-1'></div>`)

    var textEl =$(`<textarea class='description col-10'></textarea>`)

    var btnEl = $("<button class='saveBtn col-1'></button>")

    $(".container").append(rowEl)
    $(rowEl).append(hourEL)
    $(rowEl).append(textEl)
    $(rowEl).append(btnEl)
    // add text Time Block
    hourEL.text(moment(i+9,'h').format("h A"))

    // modified status textarea
    if(moment().format("h A") < (hourList[i].textContent) ){
        textEl.addClass('future')
    }else if (moment().format("h A") === hourList[i].textContent){
        textEl.addClass('present')
    }
}




