import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';
import { UsersApiService } from '../users-api.service';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../user-model';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  public displayedColumns: string[] = ['name', 'email', 'address'];
  public dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);
  public componentDestroyed$ = new Subject<void>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private userService: UsersApiService,
    private dialog: MatDialog) {
  }

  public ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  ngOnInit(): void {
    this.userService.getUsers().pipe(takeUntil(this.componentDestroyed$))
      .subscribe(data => this.dataSource.data = data)
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public openEditUserDialog(user: User): void {
    const dialogRef = this.openUserDialog();

    dialogRef.componentInstance.userFormValue = user;

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        //find the index of the changed user in the list and assign to it the new edited value
        const index = this.dataSource.data.findIndex((obj: { id: number; }) => obj.id === dialogRef.componentInstance.userForm.value.id);
        if (index !== -1) {
          const updatedObject = { ...this.dataSource.data[index], ...dialogRef.componentInstance.userForm.value };
          this.dataSource.data[index] = updatedObject;
          this.dataSource.data = [...this.dataSource.data];
        }
      }
    });
  }

  private openUserDialog(): MatDialogRef<EditUserModalComponent, string> {
    return this.dialog.open(EditUserModalComponent, {
      autoFocus: false,
      maxWidth: '627px',
      panelClass: 'admin-dialog',
      width: '98%',
    });
  }
}
