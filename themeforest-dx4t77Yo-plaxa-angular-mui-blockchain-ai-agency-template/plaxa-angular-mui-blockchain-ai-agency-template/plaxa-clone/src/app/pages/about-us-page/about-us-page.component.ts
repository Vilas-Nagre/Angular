import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { WhyChoosePlaxaComponent } from '../../common/why-choose-plaxa/why-choose-plaxa.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { MeetWithAnExpertComponent } from '../../common/meet-with-an-expert/meet-with-an-expert.component';
import { AwardsComponent } from '../../common/awards/awards.component';
import { CaseStudiesComponent } from '../../common/case-studies/case-studies.component';
import { IndustriesComponent } from '../../common/industries/industries.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { ContactUsComponent } from '../../common/contact-us/contact-us.component';
import { PartnersComponent } from '../../common/partners/partners.component';

@Component({
    selector: 'app-about-us-page',
    standalone: true,
    imports: [RouterLink, PageBannerComponent, WhyChoosePlaxaComponent, FeaturesComponent, MeetWithAnExpertComponent, AwardsComponent, CaseStudiesComponent, IndustriesComponent, TestimonialsComponent, ContactUsComponent, PartnersComponent],
    templateUrl: './about-us-page.component.html',
    styleUrl: './about-us-page.component.scss'
})
export class AboutUsPageComponent {}