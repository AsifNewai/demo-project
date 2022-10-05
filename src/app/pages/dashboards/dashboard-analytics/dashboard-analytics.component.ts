import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from "@angular/material/sort";
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { defaultChartOptions } from '../../../../@vex/utils/default-chart-options';
import icSearch from "@iconify/icons-ic/twotone-search";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'vex-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.scss'],
  animations: [
    stagger80ms,
    scaleIn400ms,
    fadeInRight400ms,
    fadeInUp400ms,
    trigger("detailExpand", [
      state(
        "collapsed, void",
        style({ height: "0px", minHeight: "0", display: "none" })
      ),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
      transition(
        "expanded <=> void",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class DashboardAnalyticsComponent implements OnInit {

  pageViewsSeries: ApexAxisChartSeries = [{
    name: 'Page Views',
    data: [405, 800, 200, 600, 105, 788, 600, 204]
  }];

  uniqueUsersSeries: ApexAxisChartSeries = [{
    name: 'Unique Users',
    data: [356, 806, 600, 754, 432, 854, 555, 1004]
  }];

  icSearch = icSearch;
  searchCtrl = new FormControl();
  filterForm:FormGroup;
  showContent:boolean = false;
  isLoading = false;
  row = {name:'',position:1,email:'',contactNumber:'',symbol:''};
  searchList =[{name: 'a'},{name: 'abc'},{name: 'Raj'},{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<any>;
  length = 1;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  pageSize = 10;
  displayedColumns: string[] = ['select', 'position', 'name', 'email','contact', 'symbol'];
  columnsCitizen :any= [
    {
      label: "",
      property: "checkbox",
      type: "checkbox",
      visible: true,
    },
    {
      label: "ID",
      property: "position",
      type: "number",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "Name",
      property: "name",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "Email",
      property: "email",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "Contact",
      property: "contactNumber",
      type: "number",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "Symbol",
      property: "symbol",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
  ];
 
  @ViewChild("matPaginatorTaxation") paginator: MatPaginator;

  ELEMENT_DATA: any[] = [
    {position: 1, name: 'a', email: "abc@gmail.com",contactNumber:12345678 ,symbol: 'H'},
    {position: 2, name: 'abc', email: "abc@gmail.com",contactNumber:12345678,symbol: 'He'},
    {position: 3, name: 'Raj', email: "abc@gmail.com",contactNumber:12345678, symbol: 'Li'},
    {position: 4, name: 'Mary', email: "abc@gmail.com",contactNumber:12345678, symbol: 'Be'},
    {position: 5, name: 'Shelley', email: "abc@gmail.com",contactNumber:12345678, symbol: 'He'},
    {position: 6, name: 'Igor', email: "abc@gmail.com",contactNumber:12345678, symbol: 'Li'},
  ];

  dataSource = new MatTableDataSource<any>();
  currentPage = 0;
  selection = new SelectionModel<any>(false);
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  categoryList=[];
  @ViewChild("matSortCitizen", { static: false })
  set sortCitizen(value: MatSort) {
    if (this.dataSource) {
      this.dataSource.sort = value;
    }
  }

  trackByProperty<T>(index: number, column: any) {
    return column.property;
  }

  get visibleColumnsCitizen() {
    return this.columnsCitizen
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  typeList = [{type:"t1",category:["c1","c2","c3"]},{type:"t2",category:["d1","d2","d3"]},{type:"t3",category:["b1","b2","b3"]}]
  constructor(    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      id:[],
      sourceId:[],
      resolution:[],
      description:[],
      type:[],
      category:[],
      receivedDate:[],
      modifiedDate:[],
      closedDate:[],
      // contactId:[],
      modifiedBy:[],
      createdBy:[],
      isActive:[],
      closedBy:[],
    }); 

    this.filteredOptions = this.searchCtrl.valueChanges.pipe(
      map(value => {
        if(value){
          const name = typeof value === 'string' ? value : value?.name;
          let array =  name ? this._filter(name as string) : this.ELEMENT_DATA.slice();
          return array
        }
      }),
    );
  }

  set sortDeclarant(value: MatSort) {
    if (this.dataSource) {
      this.dataSource.sort = value;
    }
  }

  private _filter(name: string) {
    const filterValue = name.toLowerCase();
    let array = this.ELEMENT_DATA.filter(option => option.name.toLowerCase().includes(filterValue));
    this.dataSource.data = array
    return array;
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
  }

  getCategoryList(category){
    this.filterForm.get('category').setValue('')
    this.categoryList = category.category;
  }

  uniqueUsersOptions = defaultChartOptions({
    chart: {
      type: 'area',
      height: 100
    },
    colors: ['#ff9800']
  });

  searchValue(value){
    if(value){
      const name = typeof value === 'string' ? value : value?.name;
      let array =  name ? this._filter(name as string) : this.ELEMENT_DATA.slice();
      return array
    }else{
      this.dataSource.data = [];
      this.showContent = false;
    }
  }

  onChecked(row,isChecked){
    if(isChecked){
      this.filterForm.reset();
      this.showContent = true
      this.row = row
    }else{
      this.showContent = false
      this.row = {name:'',position:1,email:'',contactNumber:'',symbol:''}
    }
  }
}
