import { Component, OnInit } from '@angular/core';
import { CXPService } from '../../services/cxp.service';
import { CXP } from '../../models/cxp.model';

@Component({
  selector: 'app-cxp-list',
  templateUrl: './cxp-list.component.html',
  styleUrls: ['./cxp-list.component.css']
})
export class CXPListComponent implements OnInit {
  cxps: CXP[] = [];

  constructor(private cxpService: CXPService) {}

  ngOnInit(): void {
    this.cxps = this.cxpService.getCXPs();
  }
}
