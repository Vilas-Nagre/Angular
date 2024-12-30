import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonials',
    standalone: true,
    imports: [CarouselModule, RouterLink],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

    // Owl Carousel
    testimonialsSlides: OwlOptions = {
        items: 1,
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: true,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow-1'></i>",
			"<i class='flaticon-right-arrow-1'></i>"
		]
    }

}