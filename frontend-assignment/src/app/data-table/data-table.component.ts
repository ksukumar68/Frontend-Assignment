import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'listName', 'entities', 'action', 'details'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selectedRowIndex: number = 0;
  selectedDetails: Array<string> = [];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowSelect(data: any){
    console.log(data)
    this.selectedRowIndex = data.id;
  }

  onSelectDetails(detailsData: Array<string>){
    this.selectedDetails = detailsData;
  }

}

export interface PeriodicElement {
  date: string;
  id: number;
  listName: string;
  entities: number;
  action: string;
  details: Array<string>;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, date: '7/17/2023', listName: "Competitive Intelligence", entities: 9, action: "1", details: ["Bundl Technologies Private Limited (Swiggy)", "Hector Beverages Private Limited", "Puma Sports India Private Limited", "Dewan Housing Finance Corporation Ltd.", "Infosys Limited", "Think & Learn Private Limited", "Delhivery Private Limited", "Wow Momo Foods Private Limited", "Rebel Foods Private Limited (Faasos)", "Lendingkart Technologies Private Limited", "ID Fresh Food (India) Private Limited", "Bharathiasha Technologies Private Limited (PrivateCircle)", "Gala Precision Engineering Private Limited", "Balaji Wafers Private Limited", "Sangeetha Mobiles Private Limited", "Vodafone Idea Limited", "Vakrangee Ltd."]},
  {id: 2, date: '7/17/2023', listName: "My Vendors", entities: 9, action: "1", details: ["Bundl Technologies Private Limited (Swiggy)", "Hector Beverages Private Limited", "Puma Sports India Private Limited", "Dewan Housing Finance Corporation Ltd.", "Infosys Limited", "Think & Learn Private Limited", "Delhivery Private Limited", "Wow Momo Foods Private Limited", "Rebel Foods Private Limited (Faasos)", "Lendingkart Technologies Private Limited", "ID Fresh Food (India) Private Limited", "Bharathiasha Technologies Private Limited (PrivateCircle)", "Gala Precision Engineering Private Limited", "Balaji Wafers Private Limited", "Sangeetha Mobiles Private Limited", "Vodafone Idea Limited", "Vakrangee Ltd."]},
  {id: 3, date: '7/17/2023', listName: "My Customers", entities: 9, action: "1", details: ["Bundl Technologies Private Limited (Swiggy)", "Hector Beverages Private Limited", "Puma Sports India Private Limited", "Dewan Housing Finance Corporation Ltd.", "Infosys Limited", "Think & Learn Private Limited", "Delhivery Private Limited", "Wow Momo Foods Private Limited", "Rebel Foods Private Limited (Faasos)", "Lendingkart Technologies Private Limited", "ID Fresh Food (India) Private Limited", "Bharathiasha Technologies Private Limited (PrivateCircle)", "Gala Precision Engineering Private Limited", "Balaji Wafers Private Limited", "Sangeetha Mobiles Private Limited", "Vodafone Idea Limited", "Vakrangee Ltd."]},
  {id: 4, date: '7/17/2023', listName: "Test_30_results", entities: 9, action: "1", details: ["Bundl Technologies Private Limited (Swiggy)", "Hector Beverages Private Limited", "Puma Sports India Private Limited", "Dewan Housing Finance Corporation Ltd.", "Infosys Limited", "Think & Learn Private Limited", "Delhivery Private Limited", "Wow Momo Foods Private Limited", "Rebel Foods Private Limited (Faasos)", "Lendingkart Technologies Private Limited", "ID Fresh Food (India) Private Limited", "Bharathiasha Technologies Private Limited (PrivateCircle)", "Gala Precision Engineering Private Limited", "Balaji Wafers Private Limited", "Sangeetha Mobiles Private Limited", "Vodafone Idea Limited", "Vakrangee Ltd."]},
  {id: 5, date: '7/17/2023', listName: "To_index", entities: 9, action: "1", details: ["Bundl Technologies Private Limited (Swiggy)", "Hector Beverages Private Limited", "Puma Sports India Private Limited", "Dewan Housing Finance Corporation Ltd.", "Infosys Limited", "Think & Learn Private Limited", "Delhivery Private Limited", "Wow Momo Foods Private Limited", "Rebel Foods Private Limited (Faasos)", "Lendingkart Technologies Private Limited", "ID Fresh Food (India) Private Limited", "Bharathiasha Technologies Private Limited (PrivateCircle)", "Gala Precision Engineering Private Limited", "Balaji Wafers Private Limited", "Sangeetha Mobiles Private Limited", "Vodafone Idea Limited", "Vakrangee Ltd."]},
  {id: 6, date: '7/17/2023', listName: "KPMG Requested Companies - Listed Set_Prasada Kumar", entities: 9, action: "1", details: ["Bundl Technologies Private Limited (Swiggy)", "Hector Beverages Private Limited", "Puma Sports India Private Limited", "Dewan Housing Finance Corporation Ltd.", "Infosys Limited", "Think & Learn Private Limited", "Delhivery Private Limited", "Wow Momo Foods Private Limited", "Rebel Foods Private Limited (Faasos)", "Lendingkart Technologies Private Limited", "ID Fresh Food (India) Private Limited", "Bharathiasha Technologies Private Limited (PrivateCircle)", "Gala Precision Engineering Private Limited", "Balaji Wafers Private Limited", "Sangeetha Mobiles Private Limited", "Vodafone Idea Limited", "Vakrangee Ltd."]},
  {id: 7, date: '7/17/2023', listName: "Error Case- LTB To EBITDA Blank_Prasada Kumar", entities: 9, action: "1", details: ["Bundl Technologies Private Limited (Swiggy)", "Hector Beverages Private Limited", "Puma Sports India Private Limited", "Dewan Housing Finance Corporation Ltd.", "Infosys Limited", "Think & Learn Private Limited", "Delhivery Private Limited", "Wow Momo Foods Private Limited", "Rebel Foods Private Limited (Faasos)", "Lendingkart Technologies Private Limited", "ID Fresh Food (India) Private Limited", "Bharathiasha Technologies Private Limited (PrivateCircle)", "Gala Precision Engineering Private Limited", "Balaji Wafers Private Limited", "Sangeetha Mobiles Private Limited", "Vodafone Idea Limited", "Vakrangee Ltd."]},
  {id: 8, date: '7/17/2023', listName: "Two Companies", entities: 9, action: "1", details: ["Bundl Technologies Private Limited (Swiggy)", "Hector Beverages Private Limited", "Puma Sports India Private Limited", "Dewan Housing Finance Corporation Ltd.", "Infosys Limited", "Think & Learn Private Limited", "Delhivery Private Limited", "Wow Momo Foods Private Limited", "Rebel Foods Private Limited (Faasos)", "Lendingkart Technologies Private Limited", "ID Fresh Food (India) Private Limited", "Bharathiasha Technologies Private Limited (PrivateCircle)", "Gala Precision Engineering Private Limited", "Balaji Wafers Private Limited", "Sangeetha Mobiles Private Limited", "Vodafone Idea Limited", "Vakrangee Ltd."]},
  {id: 9, date: '7/17/2023', listName: "Custom", entities: 9, action: "1", details: ["Bundl Technologies Private Limited (Swiggy)", "Hector Beverages Private Limited", "Puma Sports India Private Limited", "Dewan Housing Finance Corporation Ltd.", "Infosys Limited", "Think & Learn Private Limited", "Delhivery Private Limited", "Wow Momo Foods Private Limited", "Rebel Foods Private Limited (Faasos)", "Lendingkart Technologies Private Limited", "ID Fresh Food (India) Private Limited", "Bharathiasha Technologies Private Limited (PrivateCircle)", "Gala Precision Engineering Private Limited", "Balaji Wafers Private Limited", "Sangeetha Mobiles Private Limited", "Vodafone Idea Limited", "Vakrangee Ltd."]},
  {id: 10, date: '7/17/2023', listName: "Mumbai", entities: 9, action: "1", details: ["Bundl Technologies Private Limited (Swiggy)", "Hector Beverages Private Limited", "Puma Sports India Private Limited", "Dewan Housing Finance Corporation Ltd.", "Infosys Limited", "Think & Learn Private Limited", "Delhivery Private Limited", "Wow Momo Foods Private Limited", "Rebel Foods Private Limited (Faasos)", "Lendingkart Technologies Private Limited", "ID Fresh Food (India) Private Limited", "Bharathiasha Technologies Private Limited (PrivateCircle)", "Gala Precision Engineering Private Limited", "Balaji Wafers Private Limited", "Sangeetha Mobiles Private Limited", "Vodafone Idea Limited", "Vakrangee Ltd."]}
];