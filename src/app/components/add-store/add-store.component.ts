import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { generatedId } from 'src/app/shared/generatId';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  id: any;
  title: string;
  storeForm: FormGroup
  store = {};
  stores = [];
  findedStore: any = {};
  constructor(private fb: FormBuilder, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.stores = JSON.parse(localStorage.getItem("stores") || "[]");
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    // id existe (editing)
    if (this.id) {

      this.title = "Edit store";
      this.findedStore = this.stores.find((obj) => { return obj.id == this.id })

    }
    else { this.title = "Add store" }

    this.storeForm = this.fb.group({

      name: [""],
      adress: [""]

    })
  }

  validate() {
    if (this.id) {
      //editing
      for (let i = 0; i < this.stores.length; i++) {
        if (this.stores[i].id == this.id) {
          this.stores[i] = this.findedStore;
          break;
        }

      }
    }
    else {
      // adding
      // let stores = JSON.parse(localStorage.getItem("stores") || "[]");
      this.storeForm.value.id = generatedId(this.stores);
      this.stores.push(this.storeForm.value);
    }
    localStorage.setItem("stores", JSON.stringify(this.stores));

  }

}
