import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroComponent } from './super-hero.component';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

describe('SuperHeroComponent', () => {
  let component: SuperHeroComponent;
  let fixture: ComponentFixture<SuperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatPaginatorModule, MatTableModule, MatInputModule, BrowserAnimationsModule],
      declarations: [ SuperHeroComponent ],
      providers: [
        {
          provide: MatDialog,
          useValue: {},
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
