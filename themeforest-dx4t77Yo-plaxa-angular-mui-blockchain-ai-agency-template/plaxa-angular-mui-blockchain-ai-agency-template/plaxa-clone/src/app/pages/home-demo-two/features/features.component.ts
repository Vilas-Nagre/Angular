import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-features',
    standalone: true,
    imports: [NgFor, RouterLink],
    templateUrl: './features.component.html',
    styleUrl: './features.component.scss'
})
export class FeaturesComponent {

    featureBox = [
        {
            icon: `flaticon-abstract-2`,
            title: `Pragmatic Product`,
            desc: `The product we develop is designed to serve systemic & prove itself sustainable for a long time. We're focused on solutions performed.`
        },
        {
            icon: `flaticon-abstract`,
            title: `Business Value`,
            desc: `The product we develop is designed to serve systemic & prove itself sustainable for a long time. We're focused on solutions performed.`
        },
        {
            icon: `flaticon-globe`,
            title: `56%`,
            desc: `Global companies invest in artificial intelligence regularly.`
        }
    ]

}