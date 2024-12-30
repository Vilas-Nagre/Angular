import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-locations',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './locations.component.html',
    styleUrl: './locations.component.scss'
})
export class LocationsComponent {

    locationBox = [
        {
            title: `New York, USA`,
            location: `USA Address - 254 Chapman Rd, Ste 208 #13379 Newark, Delaware 19702`,
            phoneNumber: `+202-9393-9393 99`
        },
        // {
        //     title: `Tokyo, Japan`,
        //     location: `Japan Address - 053 Nomin Rd, Pte 208 #032 Newark, Cummins 01022`,
        //     phoneNumber: `+965-9393-9393 99`
        // },
        // {
        //     title: `Sydney, Australia`,
        //     location: `Australia Address - 854 Jetman Rd, Let 442 #10119 Sydni, Jerins 19702`,
        //     phoneNumber: `+005-9393-9393 99`
        // }
    ]

}