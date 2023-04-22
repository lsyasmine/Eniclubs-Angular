import { Component, OnInit } from '@angular/core';
import { AbsenceService } from '../core/service/absence.service';

@Component({
  selector: 'app-abscence-ens',
  templateUrl: './abscence-ens.component.html',
  styleUrls: ['./abscence-ens.component.css']
})
export class AbscenceEnsComponent implements OnInit {
  list : [];

  constructor(private absenceService: AbsenceService) { }

  ngOnInit(): void {
    this.absenceService.readModule().subscribe((response: any) => {
      this.list = response;
    })
  }

}
