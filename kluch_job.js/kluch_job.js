var jobAdvantages = document.getElementsByClassName('job_advantages')[0];
var sliderPage = document.getElementsByClassName('job_advantages__content__item');
var sliderCounter = 0;

jobAdvantages.addEventListener('click', function(event) {
    var target = event.target;

    if(target.classList.contains('slider_contoller')) {
        changeSlide(target);
    }
})

function changeSlide(el) {
    if(el.classList.contains('arrow_next')) {
        sliderCounter++;
        if(sliderCounter <3) {
            for(var i = 0; i < sliderPage.length;i++) {
                sliderPage[i].classList.add('invisible_item');
            }
            sliderPage[sliderCounter].classList.add('slider_animation');
            animatedSlides('slider_animation')
            sliderPage[sliderCounter].classList.remove('invisible_item');
        }
        else if(sliderCounter == 3) {
            sliderCounter=0;
            for(var i = 0; i < sliderPage.length;i++) {
                sliderPage[i].classList.add('invisible_item');
            }
            sliderPage[sliderCounter].classList.add('slider_animation');
            animatedSlides('slider_animation')
            sliderPage[sliderCounter].classList.remove('invisible_item');
        }
    }
    else if(el.classList.contains('arrow_prev')) {
        if(sliderCounter > 0) {
            sliderCounter--;
            for(var i = 0; i < sliderPage.length;i++) {
                sliderPage[i].classList.add('invisible_item');
            }
            sliderPage[sliderCounter].classList.add('slider_animation_back');
            animatedSlides('slider_animation_back')
            sliderPage[sliderCounter].classList.remove('invisible_item');
        }
        else if(sliderCounter == 0) {
            sliderCounter=2;
            for(var i = 0; i < sliderPage.length;i++) {
                sliderPage[i].classList.add('invisible_item');
            }
            sliderPage[sliderCounter].classList.add('slider_animation_back');
            animatedSlides('slider_animation_back')
            sliderPage[sliderCounter].classList.remove('invisible_item');
        }
    }

    ativePegination()
}

function ativePegination() {
    var paginationBullets = document.getElementsByClassName('job_advantages__pagination_bullet');
    for(var i = 0; i < paginationBullets.length; i++) {
        paginationBullets[i].classList.remove('activ_bullet');
    }

    paginationBullets[sliderCounter].classList.add('activ_bullet');
}

function animatedSlides(y) {
    var x = 0;
    if(y == "slider_animation") {
        var timerId = setInterval(function () {
            sliderPage[sliderCounter].classList.remove('slider_animation')
            x++
        }, 500)
    }

    else if(y == "slider_animation_back") {
        var timerId = setInterval(function () {
            sliderPage[sliderCounter].classList.remove('slider_animation_back')
            x++
        }, 500)
    }

    setTimeout(function () {
        clearInterval(timerId);
    }, 550)
}

var jobApplyInput = document.getElementsByClassName('job_apply__form_group_input');

for(var i = 0; i < jobApplyInput.length; i++) {
    jobApplyInput[i].addEventListener('input', function(event) {
        var target = event.target;

        if(target.value.length == 0) {
            target.style.opacity = 0.7;
        }

        else if(target.value.length != 0) {
            target.style.opacity = 1;
        }
    })
}