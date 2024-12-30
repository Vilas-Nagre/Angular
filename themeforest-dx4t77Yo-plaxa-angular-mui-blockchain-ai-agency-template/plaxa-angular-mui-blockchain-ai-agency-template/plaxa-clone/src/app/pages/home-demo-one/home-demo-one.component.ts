import { Component } from '@angular/core';
import { ServicesComponent } from '../../common/services/services.component';
import { CaseStudiesComponent } from '../../common/case-studies/case-studies.component';
import { AboutUsComponent } from '../../common/about-us/about-us.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { MeetWithAnExpertComponent } from '../../common/meet-with-an-expert/meet-with-an-expert.component';
import { AwardsComponent } from '../../common/awards/awards.component';
import { IndustriesComponent } from '../../common/industries/industries.component';
import { ContactUsComponent } from '../../common/contact-us/contact-us.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { LetsTalkComponent } from '../../common/lets-talk/lets-talk.component';
import { LocationsComponent } from '../../common/locations/locations.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { BannerComponent } from './banner/banner.component';

@Component({
    selector: 'app-home-demo-one',
    standalone: true,
    imports: [BannerComponent, ServicesComponent, CaseStudiesComponent, AboutUsComponent, FeaturesComponent, MeetWithAnExpertComponent, AwardsComponent, IndustriesComponent, ContactUsComponent, BlogComponent, LetsTalkComponent, LocationsComponent, TestimonialsComponent],
    templateUrl: './home-demo-one.component.html',
    styleUrl: './home-demo-one.component.scss'
})
export class HomeDemoOneComponent {}