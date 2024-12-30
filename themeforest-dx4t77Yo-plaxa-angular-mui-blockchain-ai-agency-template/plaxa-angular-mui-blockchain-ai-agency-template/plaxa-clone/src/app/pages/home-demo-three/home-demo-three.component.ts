import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { OurStoryComponent } from '../../common/our-story/our-story.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { WhatWeDoComponent } from '../../common/what-we-do/what-we-do.component';
import { AwardsComponent } from '../../common/awards/awards.component';
import { CaseStudiesComponent } from '../../common/case-studies/case-studies.component';
import { WhyChoosePlaxaComponent } from '../../common/why-choose-plaxa/why-choose-plaxa.component';
import { IndustriesComponent } from '../../common/industries/industries.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { LetsTalkComponent } from '../../common/lets-talk/lets-talk.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { BlogComponent } from '../../common/blog/blog.component';

@Component({
    selector: 'app-home-demo-three',
    standalone: true,
    imports: [BannerComponent, OurStoryComponent, FeaturesComponent, WhatWeDoComponent, AwardsComponent, CaseStudiesComponent, WhyChoosePlaxaComponent, IndustriesComponent, TestimonialsComponent, LetsTalkComponent, PartnersComponent, BlogComponent],
    templateUrl: './home-demo-three.component.html',
    styleUrl: './home-demo-three.component.scss'
})
export class HomeDemoThreeComponent {}