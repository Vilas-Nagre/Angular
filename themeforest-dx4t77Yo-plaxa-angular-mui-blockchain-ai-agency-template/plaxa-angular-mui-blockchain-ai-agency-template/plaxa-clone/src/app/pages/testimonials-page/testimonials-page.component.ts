import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from './page-banner/page-banner.component';

@Component({
    selector: 'app-testimonials-page',
    standalone: true,
    imports: [RouterLink, PageBannerComponent],
    templateUrl: './testimonials-page.component.html',
    styleUrl: './testimonials-page.component.scss'
})
export class TestimonialsPageComponent {}