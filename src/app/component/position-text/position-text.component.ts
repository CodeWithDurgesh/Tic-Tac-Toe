import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-position-text',
  standalone: false,
  templateUrl: './position-text.component.html',
  styleUrl: './position-text.component.css',
})
export class PositionTextComponent {
  @Input() textVlaue: number = 3;
}
