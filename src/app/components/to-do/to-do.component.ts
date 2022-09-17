import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ItoDo } from 'src/app/shared/modal/data';
import { ToDoService } from 'src/app/shared/services/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  toDoArr: ItoDo[] = [];
  userId!: number;

  constructor(private _toDoService: ToDoService) { }

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('userID'));
    // console.log(this.userId, typeof this.userId);
    this.fetchToDo();
  }

  fetchToDo() {
    this._toDoService.getToDo(this.userId)
      .subscribe(res => {
        this.toDoArr = res;
        // console.log(this.toDoArr);
      });
  }


  onAddNewToDO(input : string){
    let toDo:ItoDo = {
      title : input,
      completed : false,
      id : this.userId,
      userId : this.userId
    }
    this._toDoService.postToDo(toDo)
      .subscribe(res => {
        console.log(res);
        this.toDoArr.push(res);
      })
  }


  onChangeHandler(eve: Event, toDoID: number) {
    let flag;
    let event = <HTMLInputElement>eve.target;
    // console.log(event.checked);
    if (event.checked) {
      this.toDoArr.forEach(ele => {
        if (ele.id === toDoID) {
          ele.completed = true;
          flag = true;
        }
      })
    }
    else {
      this.toDoArr.forEach(ele => {
        if (ele.id === toDoID) {
          ele.completed = false;
          flag = false;
        }
      })
    }

    if (flag) {
      this._toDoService.patchToDo(toDoID, flag)
        .subscribe(res => {
          console.log("Status Changed");
        })
    }
  }


  onDeleteHandler(toDoId: number) {
    this._toDoService.deleteToDO(toDoId)
      .subscribe(res => {
        console.log("Data Deleted", res);
        this.toDoArr = this.toDoArr.filter(ele => ele.id !== toDoId);
      })
  }

}