import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'HR Information System',
      expanded: false,
      children: [
        {
          title: 'Employee',
          pathMatch: 'prefix',
          queryParams: {someUrlParam: 'true'},
          home: true,
        },
        {
          title: 'Job Desk',
        },
        {
          title: 'Compentence',
        },
        {
          title: 'Training',
        },
        {
          title: 'Forms',
        },
        {
          title: 'KPI',
          expanded: false,
          children: [
            {
              title: 'Individuals',
            },
            {
              title: 'Division',
            },
            {
              title: 'e-PA',
            }
          ]
        },
        {
          title: 'Benefit',
          expanded: false,
          children: [
            {
              title: 'Salary'
            },
            {
              title: 'Insentif'
            },
            {
              title: 'Medical Claim'
            },
            {
              title: 'Personal Loans'
            }
          ]
        },
        {
          title: 'Attendance'
        },
        {
          title: 'Leave'
        },
        {
          title: 'Outside Duty'
        }
      ],
    },
    {
      title: 'Legal Information System',
      expanded: false,
      children: [
        {
          title: 'Company Legality'
        },
        {
          title: 'MOU'
        }
      ]
    },
    {
      title: 'Master',
    },
  ];
  constructor(
    private menuService: NbMenuService
  ) { }

  ngOnInit(): void {
    this.menuService.getSelectedItem('Employee').subscribe(x => console.log(x));
  }

}
