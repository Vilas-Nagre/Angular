import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partners',
    standalone: true,
    imports: [RouterLink, CarouselModule],
    templateUrl: './partners.component.html',
    styleUrl: './partners.component.scss'
})
export class PartnersComponent {

    partnerItem = [
        {
            img: `assets/images/partners/black-partner1.png`
        },
        {
            img: `assets/images/partners/black-partner2.png`
        },
        {
            img: `assets/images/partners/black-partner3.png`
        },
        {
            img: `assets/images/partners/black-partner4.png`
        },
        {
            img: `assets/images/partners/black-partner5.png`
        },
        {
            img: `assets/images/partners/black-partner6.png`
        },
        {
            img: `assets/images/partners/black-partner7.png`
        },
        {
            img: `assets/images/partners/black-partner8.png`
        }
    ]

    // Owl Carousel
    partnersSlides: OwlOptions = {
		nav: false,
		margin: 25,
		loop: true,
		dots: false,
        center: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-chevron-1'></i>",
			"<i class='flaticon-chevron'></i>",
		],
		responsive: {
			0: {
				items: 2
			},
			450: {
				items: 3
			},
			576: {
				items: 4
			},
			820: {
				items: 5
			},
			1020: {
				items: 6
			},
			1375: {
				items: 7
			},
			1550: {
				items: 8
			}
		}
    }

}