import { Observable } from 'rxjs/internal/Observable';
import { Firestore, addDoc, collection, doc, collectionData, docData, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componentes } from 'src/assets/interfaces/interfaces';


export interface Note {
  id?: string;
  title: string;
  text: string;
}
@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient, private firestore: Firestore) { }
  getMenuOptions() {
    return this.http.get<Componentes[]>('/assets/data/menu-options.json');

  }

  getNotes(): Observable<Note[]> {
    const notesRef = collection(this.firestore, 'notes');
    return collectionData(notesRef, { idField: 'id' }) as Observable<Note[]>;
  }

  getNoteById(id): Observable<Note> {
    const noteDocRef = doc(this.firestore, `notes/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<Note>;
  }

  addNote(note: Note) {
    const notesRef = collection(this.firestore, 'notes');
    return addDoc(notesRef, note);
  }
  deleteNote(note: Note) {
    const noteDocRef = doc(this.firestore, 'notes/${notes.id}');
    return deleteDoc(noteDocRef);
  }
  updateNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return updateDoc(noteDocRef, { title: note.title, text: note.text });
  }
}
