$(document).ready(function() {
    var anchors = $(".nav-link")

	$('#views').pagepiling({
        menu: "#site-menu",
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ["home", "about", "portfolio", "contact"],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#CF0000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['Home', 'About', 'Portfolio', 'Contact']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
        
		//events
		onLeave: function(index, nextIndex, direction){
            
        },
		afterLoad: function(anchorLink, index){},
		afterRender: function(){
            var tools = $("li[data-tooltip]")
            for (const tip in tools) {
                if (Object.hasOwnProperty.call(tools, tip)) {
                    var li = $(tools[tip]);

                    li.addClass("text-red")
                }
            }
        },
	});
});