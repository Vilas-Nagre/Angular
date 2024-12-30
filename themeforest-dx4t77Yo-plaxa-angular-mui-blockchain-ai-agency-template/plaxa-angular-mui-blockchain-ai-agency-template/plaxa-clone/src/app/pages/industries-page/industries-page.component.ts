import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from './page-banner/page-banner.component';

@Component({
    selector: 'app-industries-page',
    standalone: true,
    imports: [RouterLink, PageBannerComponent],
    templateUrl: './industries-page.component.html',
    styleUrl: './industries-page.component.scss'
})
export class IndustriesPageComponent {}