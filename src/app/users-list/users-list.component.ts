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
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
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
      .subscribe((data: any) => {
         return this.dataSource.data = data})
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public displayAddress(address: any) {
    delete address.geo
    return typeof address === 'object' ? Object.values(address).filter((value) => value !== null && value !== "").join() : address;
  }

  public openEditUserDialog(user: any): void {
    const dialogRef = this.openUserDialog();
    const arrayIncludesObject = typeof user.address === 'object';
    let finalObj;

    if (arrayIncludesObject) {
      finalObj = {
        ...user,
        address: Object.values(user.address).filter((value) => value !== null && value !== "").join()
      };
    } else {
      finalObj = user;
    }
    dialogRef.componentInstance.userFormValue = finalObj;

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.dataSource.data.findIndex((obj: { id: any; }) => obj.id === dialogRef.componentInstance.userForm.value.id);
        if (index !== -1) {
          const updatedObject = { ...this.dataSource.data[index], ...dialogRef.componentInstance.userForm.value };
          this.dataSource.data[index] = updatedObject;
          this.dataSource.data = [...this.dataSource.data];
        }
      }
    });
  }


  private openUserDialog(): MatDialogRef<EditUserModalComponent> {
    return this.dialog.open(EditUserModalComponent, {
      autoFocus: false,
      maxWidth: '627px',
      panelClass: 'admin-dialog',
      width: '98%',
    });
  }
}
