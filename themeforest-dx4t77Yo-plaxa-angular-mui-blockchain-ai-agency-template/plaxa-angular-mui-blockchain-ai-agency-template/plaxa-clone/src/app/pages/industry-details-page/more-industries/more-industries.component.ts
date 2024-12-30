import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-more-industries',
    standalone: true,
    imports: [RouterLink, MatButtonModule],
    templateUrl: './more-industries.component.html',
    styleUrl: './more-industries.component.scss'
})
export class MoreIndustriesComponent {

    industryItem = [
        {
            img: `https://angular.hibootstrap.com/plaxa/assets/images/industries/industry1.jpg`,
            title: `Real Estate`,
            link: `/industry-details`
        },
        {
            img: `https://angular.hibootstrap.com/plaxa/assets/images/industries/industry2.jpg`,
            title: `Cyber Security`,
            link: `/industry-details`
        },
        {
            img: `https://angular.hibootstrap.com/plaxa/assets/images/industries/industry3.jpg`,
            title: `Pharma`,
            link: `/industry-details`
        },
        {
            img: `https://angular.hibootstrap.com/plaxa/assets/images/industries/industry4.jpg`,
            title: `Education`,
            link: `/industry-details`
        },
        {
            img: `https://angular.hibootstrap.com/plaxa/assets/images/industries/industry5.jpg`,
            title: `Business`,
            link: `/industry-details`
        },
        {
            img: `https://angular.hibootstrap.com/plaxa/assets/images/industries/industry6.jpg`,
            title: `E-commerce`,
            link: `/industry-details`
        },
        {
            img: `https://angular.hibootstrap.com/plaxa/assets/images/industries/industry7.jpg`,
            title: `Finance`,
            link: `/industry-details`
        },
        {
            img: `https://angular.hibootstrap.com/plaxa/assets/images/industries/industry8.jpg`,
            title: `Medical Devices`,
            link: `/industry-details`
        }
    ]

}