import {Component, Input} from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";
import {MatInput} from "@angular/material/input";
import {PatientEntity} from "../../model/patient.entity";
import {SearchandmatchApiService} from "../../services/searchandmatch-api.service";
import {PsychologistEntity} from "../../model/psychologist.entity";
@Component({
  selector: 'app-psychologist-cards',
  standalone: true,
  imports: [MatCard, MatCardModule, NgForOf, MatDividerModule, MatInput],
  templateUrl: './psychologist-cards.component.html',
  styleUrl: './psychologist-cards.component.css'
})
export class PsychologistCardsComponent {
  @Input() psychologists: Array<PsychologistEntity> = [];
  filteredPsychologists: Array<PsychologistEntity> = [];

  constructor(private searchandmatchApiService: SearchandmatchApiService) {}
  ngOnInit(): void {
    this.searchandmatchApiService.getPsychologists().subscribe((data: any) => {
      this.psychologists = data;
      this.filteredPsychologists = [...this.psychologists];
    });
  }
  applyFilter(event:Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredPsychologists = this.psychologists.filter(psychologist =>
      psychologist.name.toLowerCase().includes(filterValue) || psychologist.lastName.toLowerCase().includes(filterValue)
    );
  }
}
