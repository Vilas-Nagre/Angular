import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ContactUsComponent } from '../../common/contact-us/contact-us.component';

@Component({
    selector: 'app-case-studies-page',
    standalone: true,
    imports: [PageBannerComponent, RouterLink, MatButtonModule, ContactUsComponent],
    templateUrl: './case-studies-page.component.html',
    styleUrl: './case-studies-page.component.scss'
})
export class CaseStudiesPageComponent {}