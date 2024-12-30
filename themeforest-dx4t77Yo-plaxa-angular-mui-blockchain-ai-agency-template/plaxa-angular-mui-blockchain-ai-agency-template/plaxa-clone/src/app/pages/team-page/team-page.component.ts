import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-team-page',
    standalone: true,
    imports: [RouterLink, PageBannerComponent, NgFor],
    templateUrl: './team-page.component.html',
    styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {

    teamCard = [
        {
            img: `assets/images/teams/team1a.jpg`,
            name: `Richard Jackson`,
            designation: `Chief Executive Officer`,
            linkedinLink: `https://www.linkedin.com/`
        },
        {
            img: `https://angular.hibootstrap.com/plaxa/assets/images/teams/team2.jpg`,
            name: `Laura Martinez`,
            designation: `Managing Director`,
            linkedinLink: `https://www.linkedin.com/`
        },
        {
            img: `https://angular.hibootstrap.com/plaxa/assets/images/teams/team3.jpg`,
            name: `Elizabeth White`,
            designation: `Managing Partner`,
            linkedinLink: `https://www.linkedin.com/`
        },
        {
            img: `https://angular.hibootstrap.com/plaxa/assets/images/teams/team4.jpg`,
            name: `Michael Anderson`,
            designation: `Chief Marketing Officer`,
            linkedinLink: `https://www.linkedin.com/`
        },
        {
            img: `https://angular.hibootstrap.com/plaxa/assets/images/teams/team5.jpg`,
            name: `Jennifer Brown`,
            designation: `Partner, CTO`,
            linkedinLink: `https://www.linkedin.com/`
        },
        {
            img: `https://angular.hibootstrap.com/plaxa/assets/images/teams/team6.jpg`,
            name: `John William`,
            designation: `Project Manager`,
            linkedinLink: `https://www.linkedin.com/`
        }
    ]

}