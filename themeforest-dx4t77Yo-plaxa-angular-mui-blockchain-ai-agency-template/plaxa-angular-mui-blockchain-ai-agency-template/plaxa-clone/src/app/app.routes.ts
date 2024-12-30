import { Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { HomeDemoOneComponent } from './pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './pages/home-demo-three/home-demo-three.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ServiceDetailsPageComponent } from './pages/service-details-page/service-details-page.component';
import { CaseStudiesPageComponent } from './pages/case-studies-page/case-studies-page.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { CaseStudyDetailsPageComponent } from './pages/case-study-details-page/case-study-details-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './pages/blog-details-page/blog-details-page.component';
import { CareersPageComponent } from './pages/careers-page/careers-page.component';
import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { AwardsPageComponent } from './pages/awards-page/awards-page.component';
import { IndustriesPageComponent } from './pages/industries-page/industries-page.component';
import { IndustryDetailsPageComponent } from './pages/industry-details-page/industry-details-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './pages/terms-conditions-page/terms-conditions-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';

export const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'about-us', component: AboutUsPageComponent},
    {path: 'team', component: TeamPageComponent},
    {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'awards', component: AwardsPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'service-details', component: ServiceDetailsPageComponent},
    {path: 'case-studies', component: CaseStudiesPageComponent},
    {path: 'case-study-details', component: CaseStudyDetailsPageComponent},
    {path: 'careers', component: CareersPageComponent},
    {path: 'job-details', component: JobDetailsPageComponent},
    {path: 'industries', component: IndustriesPageComponent},
    {path: 'industry-details', component: IndustryDetailsPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'contact-us', component: ContactUsPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];