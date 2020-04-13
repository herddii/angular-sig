import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { EmployeeService } from '../../services/employee/employee.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  context: any;
  id_karyawan: any;
  constructor(
    public storage: LocalStorage,
    public employee: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getDetail(this.id_karyawan);
  }

  getDetail(ev){
    console.log(ev);
    this.storage.getItem('token').subscribe(val =>{
      this.employee.getEmployeeDetail(val['token'],this.id_karyawan).subscribe(b => {
        console.log(b);
      })
    })

  }

}
