import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-features',
    standalone: true,
    imports: [NgFor, RouterLink, NgClass, NgIf],
    templateUrl: './features.component.html',
    styleUrl: './features.component.scss'
})
export class FeaturesComponent {

    featureBox = [
        {
            icon: `flaticon-abstract`,
            title: `Business Value`,
            desc: `We resolve your business challenges and offer solutions considering your current state of things and plans. Our aim is not just to make a thing but to make data become.`
        },
        {
            icon: `flaticon-abstract-1`,
            title: `The Impact First`,
            desc: `We are used to analyzing your request and formulating the task according to your exact needs to find the most relevant solution.`
        },
        {
            icon: `flaticon-abstract-3`,
            title: `Pragmatic Product`,
            desc: `The product we develop is designed to serve systemic and prove itself sustainable for a long time. We're focused on solutions, performed not in theory, but in practice.`
        }
    ]

    constructor(
        public router: Router
    ) {}

}