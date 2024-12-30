import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-awards',
    standalone: true,
    imports: [RouterLink, CarouselModule],
    templateUrl: './awards.component.html',
    styleUrl: './awards.component.scss'
})
export class AwardsComponent {

	awardItem = [
		{
			img: `assets/images/awards/award1.png`,
			title: `Top Blockchain Developers 2023`
		},
		{
			img: `assets/images/awards/award2.png`,
			title: `Top Placer Information Technology`
		},
		{
			img: `assets/images/awards/award3.png`,
			title: `Top Blockchain Firm Company 2023`
		},
		{
			img: `assets/images/awards/award4.png`,
			title: `Top Blockchain Companies in 2023`
		},
		{
			img: `assets/images/awards/award5.png`,
			title: `Most Reviewed Big Data Company`
		},
		{
			img: `assets/images/awards/award6.png`,
			title: `Top App Development Company in 2023`
		},
		{
			img: `assets/images/awards/award7.png`,
			title: `Delivering the Finest Blockchain Solution`
		}
	]

	// Owl Carousel
    awardsSlides: OwlOptions = {
		nav: false,
		margin: 25,
		dots: false,
		loop: true,
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
			550: {
				items: 3
			},
			740: {
				items: 3
			},
			965: {
				items: 4
			},
			1175: {
				items: 5
			},
			1375: {
				items: 6
			}
		}
    }

}