import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { NbMenuService, NbDialogService, NbDialogRef, NbContextMenuDirective } from '@nebular/theme';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  @ViewChild(NbContextMenuDirective) contextMenu: NbContextMenuDirective;

  search: string;
  martial: string;
  gender: string;
  agama: number;

  items = [
    { title: 'Edit', icon: 'edit-outline', id: '' },
    { title: 'Delete', icon: 'trash-2-outline', id: '' },
  ];
  
  data = [];
  real_data = [];
  tokenizer: string;
  page = 1;
  last_page: number;
  throttle = 2000;
  scrollDistance = 2;
  form = {
    search: '',
    gender: '',
    martial: '',
    religion: ''
  }
  employee_id: number;
  // scrollUpDistance = 2;
  

  constructor(
    public employee: EmployeeService,
    public storage: LocalStorage,
    public menuService: NbMenuService,
    public modal: NbDialogService
  ) {
    
   }

  ngOnInit() {
    this.data = [];
    this.getEmployee();
    console.log({martial: this.martial, gender: this.gender});
    setTimeout(()=>{
      this.menuService.onItemClick().subscribe((event) => {
        if (event.item.title === 'Detail') {
          console.log('as');
        }
      });
    },2000);
  }

  // open(val){
  //   console.log(val);
  // }

  async open(val) {
    this.employee_id = val;
    // this.storage.getItem('token').subscribe(val => {
    //   this.employee.getEmployeeDetail(val['token'],val).subscribe(l => {
    //     this.openModals();
    //   })
    // })
    this.contextMenu.show();
    await false;
  }

  @HostListener('document:click')
  close() {
    this.contextMenu.hide();
  }

  openModals(val){
    console.log('a');
    // this.data.forEach((a,b)=>{
    //   let c = document.getElementById('id'+b).innerHTML;
    //   console.log(c);
    // })
    
    // await this.modal.open(ModalComponent,{
    //   context: {
    //     id_karyawan: val
    //   }
    // })
  }

  async getEmployee(){
    this.storage.getItem('token').subscribe(val => {
      this.employee.getEmployee(val['token'],this.page, this.form).subscribe(data => {
        console.log(data);
          let a = data['data'].map(v => {
            return {
              employee_id: v.id_karyawan,
              employee_name: v.nama,
              employee_nik: v.nik ? v.nik : '-',
              employee_adress: v.alamat,
              employee_contact: v.no_hp,
              employee_photo: v.photo,
              employee_gender: v.jenis_kelamin,
              employee_martial: v.status_nikah
            }
          })
          this.data = this.data.concat(a);
          this.last_page = data['last_page'];
          // this.data = this.real_data;
        });
    });
  }

  getStorage(){
    this.storage.getItem('token').subscribe(val => console.log(val['token']));
  }


  searchfield(ev){
    this.page = 1;
    if(this.search.length > 3){
      this.data = [];
      this.form.search = this.search;
      this.getEmployee();
    } else if (this.search === '') {
      this.form.search = '';
      this.getEmployee();
    }
  }

  genderSearch(ev){
    this.page = 1;
    this.data = [];
    this.form.gender = ev;
    this.getEmployee();
  }

  martialSearch(ev){
    this.page = 1;
    this.data = [];
    this.form.martial = ev;
    this.getEmployee();
  }

  agamaSearch(ev){
    this.page = 1;
    this.data = [];
    this.form.religion = ev;
    this.getEmployee();
  }

  onScroll(ev){
    this.page = this.page + 1;
    this.getEmployee();
  }

  gotodetail(){
    console.log('as')
  }

}
