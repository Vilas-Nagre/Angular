import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-case-study-details-page',
    standalone: true,
    imports: [PageBannerComponent, RouterLink],
    templateUrl: './case-study-details-page.component.html',
    styleUrl: './case-study-details-page.component.scss'
})
export class CaseStudyDetailsPageComponent {}