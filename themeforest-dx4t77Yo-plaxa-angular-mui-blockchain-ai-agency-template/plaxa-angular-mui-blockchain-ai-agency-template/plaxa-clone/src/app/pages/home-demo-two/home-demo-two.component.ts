import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { LocationsComponent } from './locations/locations.component';
import { FeaturesComponent } from './features/features.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { BlogComponent } from './blog/blog.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AwardsComponent } from './awards/awards.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { IndustriesComponent } from './industries/industries.component';
import { WhatWeProvideComponent } from './what-we-provide/what-we-provide.component';

@Component({
    selector: 'app-home-demo-two',
    standalone: true,
    imports: [BannerComponent, LocationsComponent, FeaturesComponent, PartnersComponent, ContactUsComponent, CaseStudiesComponent, BlogComponent, HowItWorksComponent, TestimonialsComponent, AwardsComponent, AboutUsComponent, IndustriesComponent, WhatWeProvideComponent],
    templateUrl: './home-demo-two.component.html',
    styleUrl: './home-demo-two.component.scss'
})
export class HomeDemoTwoComponent {}