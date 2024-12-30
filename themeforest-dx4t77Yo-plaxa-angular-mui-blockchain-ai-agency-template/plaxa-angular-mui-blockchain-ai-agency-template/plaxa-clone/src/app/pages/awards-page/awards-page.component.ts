import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { NgFor } from '@angular/common';
import { PartnersComponent } from '../../common/partners/partners.component';

@Component({
    selector: 'app-awards-page',
    standalone: true,
    imports: [RouterLink, PageBannerComponent, NgFor, PartnersComponent],
    templateUrl: './awards-page.component.html',
    styleUrl: './awards-page.component.scss'
})
export class AwardsPageComponent {

    awardItem = [
		{
			img: `https://angular.hibootstrap.com/plaxa/assets/images/awards/award1.png`,
			title: `Top Blockchain Developers 2023`
		},
		{
			img: `https://angular.hibootstrap.com/plaxa/assets/images/awards/award2.png`,
			title: `Top Placer Information Technology`
		},
		{
			img: `https://angular.hibootstrap.com/plaxa/assets/images/awards/award3.png`,
			title: `Top Blockchain Firm Company 2023`
		},
		{
			img: `https://angular.hibootstrap.com/plaxa/assets/images/awards/award4.png`,
			title: `Top Blockchain Companies in 2023`
		},
		{
			img: `assets/images/awards/award-badge5.png`,
			title: `Most Reviewed Big Data Company`
		},
		{
			img: `https://angular.hibootstrap.com/plaxa/assets/images/awards/award6.png`,
			title: `Top App Development Company in 2023`
		},
		{
			img: `https://angular.hibootstrap.com/plaxa/assets/images/awards/award7.png`,
			title: `Delivering the Finest Blockchain Solution`
		}
	]

}