import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-our-story',
    standalone: true,
    imports: [RouterLink, MatButtonModule],
    templateUrl: './our-story.component.html',
    styleUrl: './our-story.component.scss'
})
export class OurStoryComponent {

    // Toggle Class
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}