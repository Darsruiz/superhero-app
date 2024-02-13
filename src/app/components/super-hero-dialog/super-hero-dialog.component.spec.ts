import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperheroDialogComponent } from './super-hero-dialog.component';


describe('SuperHeroDialogComponent', () => {
  let component: SuperheroDialogComponent;
  let fixture: ComponentFixture<SuperheroDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperheroDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SuperheroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
