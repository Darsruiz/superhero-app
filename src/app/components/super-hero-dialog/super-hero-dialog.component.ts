import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISuperhero } from 'src/app/core/interfaces/super-hero.interface';

@Component({
  selector: 'app-superhero-dialog',
  templateUrl: './super-hero-dialog.component.html',
})
export class SuperheroDialogComponent {
  superheroForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SuperheroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISuperhero
  ) {
    this.superheroForm = new FormGroup({
      id: new FormControl(data.id),
      name: new FormControl(data.name, [Validators.required, Validators.minLength(3)]),
      power: new FormControl(data.power, Validators.required),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.superheroForm.valid) {
      this.dialogRef.close(this.superheroForm.value);
    }
  }
}
