import { Component, Input } from '@angular/core';
import { CXP } from '../../models/cxp.model';

@Component({
  selector: 'app-cxp-detail',
  templateUrl: './cxp-detail.component.html',
  styleUrls: ['./cxp-detail.component.css']
})
export class CXPDetailComponent {
  @Input() cxp: CXP | null = null;
}
