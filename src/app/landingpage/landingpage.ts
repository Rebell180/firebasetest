import { Component } from '@angular/core';
import { FireStoreService } from '../shared/services/fire-store-service';
import { Note } from '../shared/interfaces/note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingpage',
  imports: [CommonModule],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss'
})
export class Landingpage {

  noteList: Note[] = [];
  favFilter: "all" | "fav" = "all";
  status: "notes" | "trash" = "notes";

  constructor(public fireStoreService: FireStoreService ) {
    this.noteList = this.getDummyData();
  }

  changeFavFilter(filter: "all" | "fav") {
    this.favFilter = filter;
  }

  changeTrashStatus() {

  }

  getDummyData() {
    return [];
  }

}
