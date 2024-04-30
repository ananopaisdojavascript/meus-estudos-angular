import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shared-ui-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-ui-lib.component.html',
  styleUrl: './shared-ui-lib.component.css',
})
export class SharedUiLibComponent {}
