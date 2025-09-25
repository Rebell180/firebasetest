import { inject, Injectable } from '@angular/core';
import { Firestore, collection, doc, collectionData} from '@angular/fire/firestore';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {
  
  normalNotes: Note[] = [];
  trashNotes: Note[] = [];

  items$;
  firestore: Firestore = inject(Firestore);

  constructor( ) {
    this.items$ = collectionData(this.getNotesRef());
  }

  getNotesRef() {
    return collection(this.firestore, 'notes');
  }

  getTrashRef() {
    return collection(this.firestore, 'trash');
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}
