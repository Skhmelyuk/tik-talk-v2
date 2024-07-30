import {Component, Input} from '@angular/core';
import {Profile} from "../../data/interfaces/profile.interface";
import {ImgUrlPipe} from "../../helpers/pipes/img-url.pipe";
import {ButtonComponent} from "../button/button.component";
import {TagComponent} from "../tag/tag.component";

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    ImgUrlPipe,
    ButtonComponent,
    TagComponent
  ],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
