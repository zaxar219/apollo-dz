
$(document).ready(function(){
	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	//Создали переменные
	var pull = $("#navigation-toggle");
	var nav = $(".navigation ul");
	//Описание событие при нажатии на ссылку
	$(pull).on("click",function(e){
		//Отменяем стандартное повидение ссылки в браузере
		e.preventDefault();
		//Открываем/Скрываем меню
		$(nav).slideToggle();
		
		//Добовляем модификатор --activ
		$(this).toggleClass('navigation__toggle-button--active');
	});
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 720 && nav.is(':hidden')) {
			nav.removeAttr('style');
		}
	});
});