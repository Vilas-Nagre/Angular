import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-meet-with-an-expert',
    standalone: true,
    imports: [RouterLink, MatButtonModule],
    templateUrl: './meet-with-an-expert.component.html',
    styleUrl: './meet-with-an-expert.component.scss'
})
export class MeetWithAnExpertComponent {}