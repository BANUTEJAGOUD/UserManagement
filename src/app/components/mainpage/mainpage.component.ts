import { Component } from '@angular/core';
import { Customer } from '../../domain';
import { CustomerService } from '../../service/customerservice.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent {

  customers: Customer[]=[];

  selectedCustomers: Customer[]=[];

  loading: boolean = true;

  visible: boolean = false;
 
  isdisabeld: boolean=false;

  
  showdialogue() {
      this.visible = true;
  }

  constructor(
      private customerService: CustomerService,
      private messageService: MessageService,
      private rtr:Router) { }

  ngOnInit() {

      const checkboxValue=localStorage.getItem('checkboxValue')
      if(checkboxValue){
          this.customers=JSON.parse(checkboxValue)
          console.log(this.customers)
      }
      else{
          this.customerService.getCustomersSmall().then((customers) => {
              this.customers = customers;
              this.customers.map(e=>{
                  e.canRead=false;
                  e.canWrite=false;
                  e.canExecute=false;
              })
      
          });
      }
      this.loading = false;
          
      if(localStorage.getItem('uname')==='admin' && localStorage.getItem('pwd')==='admin123'){
        this.isdisabeld=false;
      }
      else{
        this.isdisabeld=true;
      }
  }  


  change(id: any,select: any,row: string | number)
  {
      localStorage.setItem('checkboxValue', JSON.stringify(this.customers))
  }

  show(){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'API called succesfully' });
  }

  onSave()
  {
      this.visible=false;
  }

  logout(){
    localStorage.removeItem("uname")
    localStorage.removeItem("pwd");
    this.rtr.navigate(['login']);
  }

}
