$('.services_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableHeight: true,
    variablWidth: true,
    vertical: true,
    customPaging : function(slider, i) {
        let btnName;
        let btnText;
        switch(i){
            case 0:
                btnName = 'Покупка авто';
                btnText = 'Подбор автомобиля и экспертная проверка';
                break;
            case 1:
                btnName = 'Доставка морем';
                btnText = 'Расчет оптимальной стоимости доставки авто';
                break;
            case 2:
                btnName = 'Растаможка авто';
                btnText = 'Прохождение таможенного оформления (2-3 дня)';
                break;
            case 3: 
                btnName = 'Ремонт авто';
                btnText = 'Комплексный ремонт автомобиля на  СТО';
                break;
            case 4:
                btnName = 'Сертификация';
                btnText = 'Услуга предоставляется по желанию';
                break;
            case 5:
                btnName = 'Постановка на учет';
                btnText = 'Оформление автомобиля в Украине';
                break;
        }
        return '<div class="slider_button"><div class="btn_num">0'+ String(i+1) + '</div><div class="slider_btn_text"><h3 class="slider_btn_name">'+btnName+'</h3><p class="text">'+btnText+'</p></div></div>';
    },
  });

  $('.car_slider_wrapper').slick({
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging : function(slider, i) {
        return '<div class="car_slide_dot"></div>'
    }
  });