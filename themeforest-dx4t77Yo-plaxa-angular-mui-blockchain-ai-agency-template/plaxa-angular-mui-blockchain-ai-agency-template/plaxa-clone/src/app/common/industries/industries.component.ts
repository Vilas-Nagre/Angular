import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-industries',
    standalone: true,
    imports: [RouterLink, MatButtonModule, NgClass, NgIf, CarouselModule],
    templateUrl: './industries.component.html',
    styleUrl: './industries.component.scss'
})
export class IndustriesComponent {

    industryItem = [
        {
            title: `Real Estate`,
            link: `/industry-details`
        },
        {
            title: `Marketing`,
            link: `/industry-details`
        },
        {
            title: `Cyber Security`,
            link: `/industry-details`
        },
        {
            title: `Finance`,
            link: `/industry-details`
        },
        {
            title: `Medical Devices`,
            link: `/industry-details`
        },
        {
            title: `Education`,
            link: `/industry-details`
        },
        {
            title: `E-commerce`,
            link: `/industry-details`
        },
        {
            title: `Pharma`,
            link: `/industry-details`
        }
    ]

    constructor(
        public router: Router
    ) {}

    // Owl Carousel
    industriesSlides: OwlOptions = {
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow-1'></i>",
			"<i class='flaticon-right-arrow-1'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			515: {
				items: 2
			},
			695: {
				items: 2
			},
			992: {
                center: true,
				items: 3
			},
			1200: {
                center: true,
				items: 3
			},
			1400: {
                center: true,
                margin: 50,
				items: 3
			},
			1600: {
                center: true,
                margin: 50,
				items: 4
			}
		}
    }

}