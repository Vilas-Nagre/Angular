import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-lets-talk',
    standalone: true,
    imports: [RouterLink, MatButtonModule],
    templateUrl: './lets-talk.component.html',
    styleUrl: './lets-talk.component.scss'
})
export class LetsTalkComponent {}