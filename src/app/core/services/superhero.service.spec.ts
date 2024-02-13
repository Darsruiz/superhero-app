import { TestBed } from '@angular/core/testing';
import { SuperheroService } from './superhero.service';
import { ISuperhero } from '../interfaces/super-hero.interface';

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperheroService]
    });
    service = TestBed.inject(SuperheroService);

    service['superheroes'] = [
      { id: 1, name: 'Superman', power: 'Flight' },
      { id: 2, name: 'Batman', power: 'Wealth' }
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all superheroes', () => {
    service.getSuperheroes().subscribe(superheroes => {
      expect(superheroes.length).toBe(2);
    });
  });

  it('should filter superheroes by name', () => {
    service.getSuperheroesByName('man').subscribe(superheroes => {
      const allMatch = superheroes.every(hero => hero.name.toLowerCase().includes('man'));
      expect(allMatch).toBeTrue();
      expect(superheroes.length).toBeGreaterThan(0);
    });
  });

  it('should retrieve a superhero by ID', () => {
    service.getSuperheroById(1).subscribe(hero => {
      expect(hero?.id).toBe(1);
      expect(hero?.name).toBe('Superman');
    });
  });

  it('should add a new superhero', () => {
    const newSuperhero: ISuperhero = { id: 3, name: 'Wonder Woman', power: 'Super Strength' };
    service.addSuperhero(newSuperhero).subscribe(hero => {
      expect(hero).toEqual(newSuperhero);
      service.getSuperheroes().subscribe(superheroes => {
        expect(superheroes.find(h => h.id === hero.id)).toEqual(newSuperhero);
      });
    });
  });

  it('should update a superhero', () => {
    const updatedSuperhero: ISuperhero = { id: 1, name: 'Superman', power: 'Flight and Laser Eyes' };
    service.updateSuperhero(updatedSuperhero).subscribe(hero => {
      expect(hero).toEqual(updatedSuperhero);
      service.getSuperheroById(1).subscribe(updatedHero => {
        expect(updatedHero?.power).toBe('Flight and Laser Eyes');
      });
    });
  });

  it('should delete a superhero by ID', () => {
    service.deleteSuperhero(1).subscribe(() => {
      service.getSuperheroes().subscribe(superheroes => {
        expect(superheroes.some(hero => hero.id === 1)).toBeFalse();
      });
    });
  });

});
