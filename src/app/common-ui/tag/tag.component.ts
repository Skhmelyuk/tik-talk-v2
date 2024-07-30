import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  template: `<span class="skill">{{tag}}</span>`,
  styles: [`
    .skill {
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      border: 0.0625rem solid var(--clr-light);
      font-size: 0.75rem;
      font-weight: 700;
    }
    .skill-active {
      border: 0.0625rem solid var(--clr-primary);
      color: var(--clr-primary);
    }
  `]

})
export class TagComponent {
  @Input() tag!: string;
}
