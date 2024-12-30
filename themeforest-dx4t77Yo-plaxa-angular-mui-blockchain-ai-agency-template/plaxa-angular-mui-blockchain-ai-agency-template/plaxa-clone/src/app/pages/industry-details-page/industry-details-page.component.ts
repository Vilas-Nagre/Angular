import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { MoreIndustriesComponent } from './more-industries/more-industries.component';

@Component({
    selector: 'app-industry-details-page',
    standalone: true,
    imports: [RouterLink, PageBannerComponent, MoreIndustriesComponent],
    templateUrl: './industry-details-page.component.html',
    styleUrl: './industry-details-page.component.scss'
})
export class IndustryDetailsPageComponent {

    featureBox = [
        {
            title: `Process Optimization`,
            desc: `We resolve your business challenges and offer solutions considering your current state of things and future plans.`
        },
        {
            title: `Technology Solutions`,
            desc: `We resolve your business challenges and offer solutions considering your current state of things and future plans.`
        },
        {
            title: `Change Management`,
            desc: `We resolve your business challenges and offer solutions considering your current state of things and future plans.`
        }
    ]

}