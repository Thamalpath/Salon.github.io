(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});
// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});


// data - background
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

$('a.smoth-scroll').on('click', function (event) {
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top - 0
	}, 1000);
	event.preventDefault();
});



// Homepage slider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"> <i class="fas fa-arrow-left"></i> </button>',
		nextArrow: '<button type="button" class="slick-next"> <i class="fas fa-arrow-right"></i></button>',
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();

})(jQuery);



// Service data
var services = [
    {
        category: "skin",
        imgSrc1: "./assets/img/services/s1.png",
        imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-04.png",
        title: "Anti-Ageing Treatments",
        description1: "Bellaviva offers personalized anti-aging treatments combining medical-grade products, advanced technology, and customized plans for rejuvenated skin.",
        description2: "At Bellaviva, we offer a variety of anti-aging treatments to reduce fine lines, wrinkles, and improve skin texture. Our customized plans include medical-grade products, advanced technology like laser and ultrasound, and personalized treatment options. Our experienced professionals will diagnose your skin concerns and develop a tailored plan for your desired results. Our minimally invasive treatments have minimal downtime, pain, or discomfort. Treatments may include Botox, dermal fillers, facial peels, and laser treatments. Achieve a youthful appearance at Bellaviva.",
        link: "anti-ageing.html",
        tableData1: "1 Hr",
        tableData2: "Bellaviva Skin Clinic"
    },
    {
        category: "skin",
        imgSrc1: "./assets/img/services/s2.png",
        imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-05.jpg",
        title: "Skin Lightening",
        description1: "At Bellaviva, our skin lightening treatment reduces dark spots and hyper-pigmentation, revealing a brighter and more even complexion. Personalized and effective with medical-grade products and advanced technology.",
        description2: "At Bellaviva, our skin lightening treatment aims to achieve a more even skin tone by reducing dark spots and hyper-pigmentation. We utilize a blend of medical-grade products and cutting-edge technology to safely and effectively lighten the skin, resulting in a brighter complexion. Our expert team of professionals will customize the treatment to address your specific needs and provide guidance throughout the process, ensuring optimal results.",
        link: "service-data.html",
        tableData1: "1 Hr",
        tableData2: "Bellaviva Skin Clinic"
    },
	{
		category: "skin",
		imgSrc1: "./assets/img/services/s3.png",
		imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-04.png",
		title: "Facial Peels",
		description1: "At Bellaviva, our facial peels enhance skin appearance, texture, and tone using medical-grade products and advanced technology. Personalized treatment for optimal results.",
        description2: "At Bellaviva, we provide a range of facial peels to enhance skin appearance. Our peels utilize advanced technology and medical-grade products to improve skin texture, tone, and reduce fine lines and wrinkles. Our skilled professionals will assess your needs and recommend the most suitable peel for your skin type, ensuring desired results.",
        link: "service-data.html",
        tableData1: "30 Min",
        tableData2: "Bellaviva Skin Clinic"
	},
	{
		category: "skin",
		imgSrc1: "./assets/img/services/s4.png",
		imgSrc2: "./assets/img/services/Hydra_Facial.jpg",
		title: "Hydra Facial",
		description1: "Bellaviva offers Hydra Facial—a non-invasive, multi-step treatment for immediate, radiant skin results.",
        description2: "At Bellaviva, we offer the Hydra Facial, a non-invasive, multi-step treatment that combines cleansing, exfoliation, extractions, hydration, and antioxidant protection in one procedure. This non-surgical and non-invasive treatment delivers immediate results, enhancing the overall health and appearance of your skin. The Hydra Facial utilizes a specialized serum delivery system to cleanse, exfoliate, extract impurities, and hydrate your skin. Our team of skilled professionals will personalize a treatment plan to target your specific needs, helping you achieve your desired look while reducing fine lines, wrinkles, improving skin tone and texture, and minimizing the appearance of dark spots. ",
        link: "service-data.html",
        tableData1: "1 Hr",
        tableData2: "Bellaviva Skin Clinic"
	},
	{
		category: "skin",
		imgSrc1: "./assets/img/services/s5.jpg",
		imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-04.png",
		title: "Pigmentation Treatment",
		description1: "Bellaviva offers personalized pigmentation treatments using advanced technology and medical-grade products to reduce dark spots and uneven skin tone. Achieve a radiant complexion with our customized treatment plans.",
        description2: "At Bellaviva, we provide a range of pigmentation treatments to diminish dark spots and achieve a more even skin tone. Our customized approach combines medical-grade products and advanced technology to safely and effectively enhance your complexion. Our team of skilled professionals will collaborate with you to create a personalized treatment plan tailored to your desired outcome. Our pigmentation treatments may incorporate techniques such as chemical peels, laser therapy, and specialized skincare products to attain optimal results.",
        link: "service-data.html",
        tableData1: "1 Hr",
        tableData2: "Bellaviva Skin Clinic"
	},
	{
		category: "skin",
		imgSrc1: "./assets/img/services/s6.png",
		imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-05.jpg",
		title: "Acne/Rosacea",
		description1: "Effective acne and rosacea treatments at Bellaviva Skin Clinic. Clearer skin and improved complexion. Visit us for personalized care.",
        description2: "Bellaviva Skin Clinic specializes in personalized treatments for acne and rosacea. Our advanced therapies specifically address the underlying causes of these conditions, effectively reducing inflammation and enhancing the overall appearance of your skin. With our experienced team, you can trust that your skin will receive the best care possible. Take the first step towards clearer and healthier skin by visiting us today. We are committed to providing exceptional and tailored treatments just for you.",
        link: "service-data.html",
        tableData1: "1 Hr",
        tableData2: "Bellaviva Skin Clinic"
	},

	{
		category: "body",
		imgSrc1: "./assets/img/services/b1.jpg",
		imgSrc2: "./assets/img/services/b1_back.jpg",
		title: "Holistic Massages",
		description1: "Indulge in our holistic massage therapy at Bellaviva Skin Clinic, where skilled therapists combine relaxation techniques and natural remedies to rejuvenate your body and mind, promoting overall wellness and inner harmony.",
        description2: "Indulge in our holistic massage therapy at Bellaviva Skin Clinic, where skilled therapists combine relaxation techniques and natural remedies to rejuvenate your body and mind, promoting overall wellness and inner harmony.",
        link: "holistic.html",
        tableData1: "30M | 30M | 90M",
        tableData2: "Bellaviva Skin Clinic"
	},


	{
		category: "laser",
		imgSrc1: "./assets/img/services/h1.png",
		imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-04.png",
		title: "Laser Hair Removal",
		description1: "Bellaviva offers safe and effective laser hair removal for both men and women, targeting hair follicles with advanced technology. Achieve long-lasting results with minimal discomfort and downtime.",
        description2: "At Bellaviva, we offer laser hair removal, a safe and effective method to eliminate unwanted hair from any body area. Our advanced laser treatments precisely target hair follicles, inhibiting future hair growth. Laser hair removal is a popular, long-lasting solution suitable for both men and women. Our experienced team will customize a treatment plan to help you achieve your desired results. The procedure is minimally invasive, with minimal downtime, and minimal discomfort. Additionally, it provides a cost-effective solution by reducing the need for frequent hair removal treatments.",
        link: "service-data.html",
        tableData1: "2 Hr",
        tableData2: "Bellaviva Skin Clinic"
	},
	{
		category: "laser",
		imgSrc1: "./assets/img/services/h2.png",
		imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-05.jpg",
		title: "Mole & Wart Removal",
		description1: "At Bellaviva, we provide safe and effective mole and wart removal services using advanced technology. Our experienced team ensures minimal scarring and offers proper aftercare for optimal healing.",
        description2: "At Bellaviva, we provide safe and effective mole and wart removal services. Our team of experienced professionals utilizes advanced technology, including laser and surgical excision, for optimal results. Each treatment is customized based on individual needs, ensuring a thorough examination and discussion of the best options. We prioritize minimizing scarring and offer proper aftercare to support healing.",
        link: "service-data.html",
        tableData1: "1 Hr",
        tableData2: "Bellaviva Skin Clinic"
	},
	{
		category: "laser",
		imgSrc1: "./assets/img/services/h3.png",
		imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-04.png",
		title: "Micro - Pigmentation Treatment",
		description1: "At Bellaviva, our advanced laser technology safely removes or fades tattoos of any size, color, or location. Personalized treatment plans ensure optimal results.",
        description2: "At Bellaviva, we provide safe and effective tattoo removal services utilizing advanced laser technology. Our treatments effectively remove or fade unwanted tattoos, regardless of their size, color, or location on the body. Our experienced professionals will collaborate with you to develop a personalized treatment plan for optimal results. The number of sessions required may vary based on the tattoo's size, color, location, and individual skin type and healing process. ",
        link: "service-data.html",
        tableData1: "1 Hr",
        tableData2: "Bellaviva Skin Clinic"
	},
	{
		category: "laser",
		imgSrc1: "./assets/img/services/h4.png",
		imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-05.png",
		title: "Hair Loss Treatment",
		description1: "Bellaviva offers personalized hair loss treatments using advanced technology and medical-grade products to promote hair growth and reduce hair loss.",
        description2: "At Bellaviva, we provide hair loss treatments to address thinning hair and hair loss. Our customized plans incorporate medical-grade products, advanced technology like Low-Level Laser Therapy, and personalized approaches. These treatments aim to enhance hair and scalp health, stimulate hair growth, and reduce hair loss. Our experienced professionals will diagnose the underlying cause of hair loss and create a personalized treatment plan for your desired outcome. The procedure is minimally invasive, with minimal downtime and discomfort.",
        link: "service-data.html",
        tableData1: "1 Hr",
        tableData2: "Bellaviva Skin Clinic"
	},
	{
		category: "laser",
		imgSrc1: "./assets/img/services/h5.png",
		imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-04.png",
		title: "Hair Transplant",
		description1: "Bellaviva offers hair transplant procedures with advanced techniques like FUE and FUT for natural-looking results. Personalized treatment plans and minimal recovery time.",
        description2: "At Bellaviva, we offer hair transplant procedures to address hair thinning and promote natural hair growth. Our experienced professionals utilize advanced techniques like FUE or FUT for optimal results. The procedure is performed under local anesthesia with minimal discomfort. We assess your suitability and create a personalized treatment plan. Recovery time is minimal, and the results are long-lasting.",
        link: "service-data.html",
        tableData1: "7 HrS",
        tableData2: "Bellaviva Skin Clinic"
	},


	{
		category: "injectables",
		imgSrc1: "./assets/img/services/i1.png",
		imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-05.png",
		title: "Botox & Fillers",
		description1: "Bellaviva provides Botox and dermal filler treatments to reduce wrinkles and enhance facial contours. Personalized treatment plans for your desired results.",
        description2: "At Bellaviva, we provide Botox and dermal filler treatments to minimize fine lines, wrinkles, and enhance facial contours. Botox temporarily relaxes wrinkle-causing muscles, while dermal fillers add volume and smooth out wrinkles and hollow areas. Our experienced team will customize a treatment plan to achieve your desired results.",
        link: "service-data.html",
        tableData1: "1 Hr 30 Min",
        tableData2: "Bellaviva Skin Clinic"
	},
	{
		category: "injectables",
		imgSrc1: "./assets/img/services/i2.png",
		imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-04.png",
		title: "Vampire Facelift",
		description1: "Bellaviva offers the vampire facelift, a non-surgical PRP therapy using the patient's blood plasma to rejuvenate the skin. Enhance your appearance with our experienced team.",
        description2: "The vampire facelift, also known as Platelet-Rich Plasma (PRP) therapy, is a non-surgical treatment offered at Bellaviva. It utilizes the patient's own blood plasma to rejuvenate the skin, stimulate collagen production, and promote cell growth. This treatment enhances skin appearance, reduces fine lines and wrinkles, and improves facial contours. Our experienced professionals will guide you through the process for optimal results.",
        link: "service-data.html",
        tableData1: "1 Hr 30 Min",
        tableData2: "Bellaviva Skin Clinic"
	},
	{
		category: "injectables",
		imgSrc1: "./assets/img/services/i3.png",
		imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-05.png",
		title: "Jawline Shaping",
		description1: "Bellaviva offers jawline shaping using dissolvable threads for a non-surgical lift and sculpting of the jawline and lower face. Customized treatments by experienced professionals. Minimally invasive with minimal downtime and discomfort.",
        description2: "Bellaviva offers jawline shaping using thread techniques, a non-surgical and minimally invasive treatment that sculpts and lifts the jawline, enhancing the lower face. Dissolvable PDO threads are strategically inserted to provide an immediate lift while stimulating collagen production for long-lasting tightening effects. Our skilled professionals will customize a treatment plan to help you achieve your desired look. This minimally invasive procedure entails minimal downtime and discomfort.",
        link: "service-data.html",
        tableData1: "1 Hr 30 Min",
        tableData2: "Bellaviva Skin Clinic"
	},
	{
		category: "injectables",
		imgSrc1: "./assets/img/services/i4.png",
		imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-04.png",
		title: "Cheek and Eyebrow Contouring",
		description1: "Bellaviva: Lift and contour cheeks and eyebrows with dissolvable threads. Non-surgical, minimally invasive treatment for a defined and youthful appearance.",
        description2: "Bellaviva offers cheek and eyebrow contouring using dissolvable threads, a non-surgical and minimally invasive treatment that utilizes Polydioxanone (PDO) threads to lift and shape the cheeks and eyebrows. Our experienced professionals customize a treatment plan to help you achieve your desired look. The procedure is minimally invasive, with minimal downtime and discomfort, providing an immediate lift and promoting long-term collagen production.",
        link: "service-data.html",
        tableData1: "2 Hrs",
        tableData2: "Bellaviva Skin Clinic"
	},
	{
		category: "injectables",
		imgSrc1: "./assets/img/services/Rejuvenating_treatment.png",
		imgSrc2: "https://wphix.com/template/kindspa-prv/assets/img/slider/slider-05.png",
		title: "Rejuvenating Treatment",
		description1: "Discover rejuvenating treatments at Bellaviva Skin Clinic. Achieve youthful, radiant skin through advanced techniques and personalized care.",
        description2: "Transform your skin with rejuvenating treatments at Bellaviva Skin Clinic. Our advanced techniques and state-of-the-art technology offer a range of options to address fine lines, wrinkles, texture, and tone. Experience gentle exfoliation and collagen stimulation with microdermabrasion or chemical peels. Opt for laser skin rejuvenation for smoother, more youthful skin. Our skincare experts customize a comprehensive treatment plan, incorporating tailored skincare routines and lifestyle recommendations. Trust our highly trained professionals for outstanding care in a relaxing environment. Reveal your natural beauty and radiance at Bellaviva Skin Clinic. Schedule a consultation today.",
        link: "service-data.html",
        tableData1: "30 Min",
        tableData2: "Bellaviva Skin Clinic"
	},
];

	// Function to generate service items based on the provided category
function generateServiceItems(category) {
    var servicesList = document.querySelector('.services-list');
    servicesList.innerHTML = '';

    var filteredServices = services.filter(function (service) {
        return category === 'all' || service.category === category;
    });

    filteredServices.forEach(function (service) {
        var serviceItem = document.createElement('div');
        serviceItem.className = 'col-xl-4 col-lg-4 col-md-6';

        var serviceItemContent = `
            <div class="service-item mb-30">
                <div class="service-img">
                    <img src="${service.imgSrc1}" alt="">
                </div>
                <div class="service-content text-center">
                    <h4>${service.title}</h4>
                    <p>${service.description1}</p>
                    <p hidden>${service.description2}</p>
                    <table hidden>
                        <tr>
                            <td>${service.tableData1}</td>
                            <td>${service.tableData2}</td>
                        </tr>
                    </table>
                    ${
                        service.link === 'anti-ageing.html'
                        ? `<a href="anti-ageing.html" class="service-link" data-img1="${service.imgSrc1}" data-img2="${service.imgSrc2}" data-title="${service.title}" data-description1="${service.description1}" data-description2="${service.description2}" data-tableData1="${service.tableData1}" data-tableData2="${service.tableData2}"><i class="fas fa-arrow-right"></i></a>`
                        : (service.link === 'holistic.html'
                            ? `<a href="holistic.html" class="service-link" data-img1="${service.imgSrc1}" data-img2="${service.imgSrc2}" data-title="${service.title}" data-description1="${service.description1}" data-description2="${service.description2}" data-tableData1="${service.tableData1}" data-tableData2="${service.tableData2}"><i class="fas fa-arrow-right"></i></a>`
                            : `<a href="service-data.html" class="service-link" data-img1="${service.imgSrc1}" data-img2="${service.imgSrc2}" data-title="${service.title}" data-description1="${service.description1}" data-description2="${service.description2}" data-tableData1="${service.tableData1}" data-tableData2="${service.tableData2}"><i class="fas fa-arrow-right"></i></a>`
                        )
                    }
                </div>
            </div>
        `;

        serviceItem.innerHTML = serviceItemContent;
        servicesList.appendChild(serviceItem);
    });

    // Add event listeners to the service links
    var serviceLinks = document.querySelectorAll('.service-link');
    serviceLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var imgSrc1 = this.getAttribute('data-img1');
            var imgSrc2 = this.getAttribute('data-img2');
            var title = this.getAttribute('data-title');
            var description1 = this.getAttribute('data-description1');
            var description2 = this.getAttribute('data-description2');
            var tableData1 = this.getAttribute('data-tableData1');
            var tableData2 = this.getAttribute('data-tableData2');
            var linkUrl = this.getAttribute('href'); // Get the link URL

            // Save service data in session storage for access in the corresponding page
            sessionStorage.setItem('imgSrc1', imgSrc1);
            sessionStorage.setItem('imgSrc2', imgSrc2);
            sessionStorage.setItem('title', title);
            sessionStorage.setItem('description1', description1);
            sessionStorage.setItem('description2', description2);
            sessionStorage.setItem('tableData1', tableData1);
            sessionStorage.setItem('tableData2', tableData2);

            // Redirect to the corresponding page based on the link URL
            window.location.href = linkUrl;
        });
    });
}


	// Event listener for category filter
	var categoryLinks = document.querySelectorAll('.category-filter a');
	categoryLinks.forEach(function (link) {
		link.addEventListener('click', function (event) {
			event.preventDefault();
			var category = this.getAttribute('data-category');
			generateServiceItems(category);
			// Add active class to the clicked link
			categoryLinks.forEach(function (link) {
				link.classList.remove('active');
			});
			this.classList.add('active');
		});
	});

	// Initial generation of service items
	generateServiceItems('skin');
