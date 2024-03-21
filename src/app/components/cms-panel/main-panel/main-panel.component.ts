import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import menuJson from '../../../models/restaurant-menu.json'
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, MatInputModule, MatFormFieldModule, MatExpansionModule, FormsModule ],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.scss'
})
export class MainPanelComponent implements OnInit{

  public menuForm:FormGroup = new FormGroup({});
  public itemForm:FormGroup = new FormGroup({});
  public editableMap: { [key: string]: boolean } = {};

  constructor(private fb: FormBuilder, private menuService: MenuService){}

  ngOnInit(): void {
    const mockitem = {
      "itemName": "mock name",
      "itemDescription": " some data",
      "itemImage": "assets/images/",
      "itemPrice": 6,
      "id": "1234"
    }
    this.addNewMenuItem("65f86faf760f66e88980db80",mockitem.itemName, mockitem)
    this.menuService.getMenuList().subscribe({
      next:res=>this.updateDataToForm(res),
      error:err=>console.log("error : ",err)
    })
  }

  updateDataToForm(menuData:any){
    menuData.forEach((menu:any)=>{
      this.menuForm.addControl(menu.menuType,this.addMenuObject(menu));
      menu.menuList.forEach((item:any)=>{
        this.addItem(menu.menuType, item);
        this.editableMap[item.itemName] = false;
      })
    })
  }

  addMenuObject(menu:any){
    return this.fb.group({
      id: menu._id,
      menuList: this.fb.array([])
    })
  }

  addItem(menuType:string, item: any): void {
    this.itemForm = this.fb.group({
      itemId: new FormControl(item._id, [Validators.required]),
      itemName: new FormControl(item.itemName, [Validators.required]),
      itemDescription: new FormControl(item.itemDescription, [Validators.required]),
      itemImage: new FormControl(item.itemImage, [Validators.required]),
      itemPrice: new FormControl(item.itemPrice, [Validators.required])
    });

    const itemFormArray = this.getItemFormArray(menuType);
    itemFormArray.push(this.itemForm);
  }

  getItemFormArray(menuType: string):FormArray {
    return this.menuForm.get(menuType)?.get('menuList') as FormArray;
  }

  getMenuKeys(menuForm:any){
    return Object.keys(menuForm.controls)
  }

  toggleEdit(key:string,item: any,flag:boolean): void {
    console.log("item name : ",item, this.menuForm.get(key)?.get('id')?.value)
    this.editableMap[item.itemName] = flag;
    const menuId = this.menuForm.get(key)?.get('id')?.value;
    console.log(this.editableMap[item.itemName])
    if(!flag){
      this.menuService.updateItem(menuId,item.value.itemId, item.value).subscribe({
        next:res=>console.log('updated the data: ',res),
        error:err=>console.log('error updating the data : ',err)
      })
    }
  }

  addNewMenuItem(menuId:string,itemName:string, item:any){
      // item.itemImage = 'assets/images/'
      // if(!item.itemDescription){
      //   item.itemDescription = ""
      // }
      this.menuService.createNewMenuItem(menuId,itemName,item).subscribe({
        next:res=>console.log("item created : ",res),
        error:err=>console.log("error : ",err)
      })
  }

  updateMenuItem(itemName: string,flag:boolean): void {
    
  }

  deleteMenuItem(key: string,item:any): void {
    console.log(key,item)
    if(!confirm("Are you sure you want to delete?")){
      return;
    }
    const menuId = this.menuForm.get(key)?.get('id')?.value;
    this.menuService.deleteItem(menuId,item.itemId).subscribe({
      next:res=>console.log("item created : ",res),
      error:err=>console.log("error : ",err)
    })
  } 

}
