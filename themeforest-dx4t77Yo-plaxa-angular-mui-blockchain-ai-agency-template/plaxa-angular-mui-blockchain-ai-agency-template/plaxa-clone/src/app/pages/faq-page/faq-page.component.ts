import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ContactUsComponent } from '../../common/contact-us/contact-us.component';

@Component({
    selector: 'app-faq-page',
    standalone: true,
    imports: [RouterLink, PageBannerComponent, MatExpansionModule, ContactUsComponent],
    templateUrl: './faq-page.component.html',
    styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {

    // Mat Expansion
    panelOpenState = false;

}