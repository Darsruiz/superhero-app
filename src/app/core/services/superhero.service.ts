import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISuperhero } from '../interfaces/super-hero.interface';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private superheroes: ISuperhero[] = [
    {id: 1, name: 'Superhero', power:'Power'}
    {id: 2, name: 'Superhero 2', power:'Power 2'}
    {id: 3, name: 'Superhero 3', power:'Power 3'}
  ];

  constructor() { }

  getSuperheroes(): Observable<ISuperhero[]> {
    return of(this.superheroes);
  }

  getSuperheroById(id: number): Observable<ISuperhero | undefined> {
    const superhero = this.superheroes.find(hero => hero.id === id);
    return of(superhero);
  }

  getSuperheroesByName(nameSubstring: string): Observable<ISuperhero[]> {
    const filteredHeroes = this.superheroes.filter(hero => hero.name.toLowerCase().includes(nameSubstring.toLowerCase()));
    return of(filteredHeroes);
  }

  addSuperhero(superhero: ISuperhero): Observable<ISuperhero> {
    if (this.superheroes.length > 0) {
      const maxId = this.superheroes.reduce((acc, cur) => acc.id > cur.id ? acc : cur).id;
      superhero.id = maxId + 1;
    } else {
      superhero.id = 1;
    }
    this.superheroes.push(superhero);
    return of(superhero);
  }

  updateSuperhero(updatedSuperhero: ISuperhero): Observable<ISuperhero> {
    const index = this.superheroes.findIndex(hero => hero.id === updatedSuperhero.id);
    if (index !== -1) {
      this.superheroes[index] = updatedSuperhero;
    }
    return of(updatedSuperhero);
  }

  deleteSuperhero(id: number): Observable<any> {
    this.superheroes = this.superheroes.filter(hero => hero.id !== id);
    return of({ message: 'Superhero deleted successfully' });
  }
}
