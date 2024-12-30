import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-case-studies',
    standalone: true,
    imports: [RouterLink, MatButtonModule, NgClass, NgIf, CarouselModule],
    templateUrl: './case-studies.component.html',
    styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {

    constructor(
        public router: Router
    ) {}

    // Owl Carousel
    caseStudiesSlides: OwlOptions = {
        items: 1,
		nav: false,
		margin: 25,
		dots: true,
		loop: true,
		autoplay: true,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-chevron-1'></i>",
			"<i class='flaticon-chevron'></i>",
		]
    }

}