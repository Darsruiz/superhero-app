import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ISuperhero } from 'src/app/core/interfaces/super-hero.interface';
import { SuperheroService } from 'src/app/core/services/superhero.service';
import { SuperheroDialogComponent } from '../super-hero-dialog/super-hero-dialog.component';


@Component({
  selector: 'app-superhero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.scss']
})
export class SuperHeroComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'power', 'actions'];
  dataSource = new MatTableDataSource<ISuperhero>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private superheroService: SuperheroService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadSuperheroes();
  }

  loadSuperheroes() {
    this.superheroService.getSuperheroes().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(superhero?: ISuperhero): void {
    const dialogRef = this.dialog.open(SuperheroDialogComponent, {
      width: '250px',
      data: superhero ? superhero : { name: '', power: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        superhero ? this.updateSuperhero(result) : this.addSuperhero(result);
      }
    });
  }

  addSuperhero(superhero: ISuperhero) {
    this.superheroService.addSuperhero(superhero).subscribe(() => this.loadSuperheroes());
  }

  updateSuperhero(superhero: ISuperhero) {
    this.superheroService.updateSuperhero(superhero).subscribe(() => this.loadSuperheroes());
  }

  deleteSuperhero(id: number) {
    if (confirm('esta seguro de eliminar este heroe?')) {
      this.superheroService.deleteSuperhero(id).subscribe(() => this.loadSuperheroes());
    }
  }
}
