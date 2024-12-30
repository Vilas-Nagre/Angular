import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-service-details-page',
    standalone: true,
    imports: [RouterLink, PageBannerComponent, NgFor],
    templateUrl: './service-details-page.component.html',
    styleUrl: './service-details-page.component.scss'
})
export class ServiceDetailsPageComponent {

    featureBox = [
        {
            icon: `flaticon-abstract-3`,
            title: `Marketing Solution`,
            desc: `We resolve your business challenges and offer solutions considering your current state of things and future plans.`
        },
        {
            icon: `flaticon-abstract`,
            title: `Business Onstructivism`,
            desc: `We resolve your business challenges and offer solutions considering your current state of things and future plans.`
        },
        {
            icon: `flaticon-atom`,
            title: `Business Value`,
            desc: `We resolve your business challenges and offer solutions considering your current state of things and future plans.`
        }
    ]

}