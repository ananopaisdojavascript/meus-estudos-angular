import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-any',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './any.component.html',
  styleUrl: './any.component.scss',
})
export class AnyComponent {}
