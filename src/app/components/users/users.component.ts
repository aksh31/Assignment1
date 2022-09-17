import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/shared/modal/data';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userArr:Iuser[] = [];
  constructor(private _userDataService : UserDataService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this._userDataService.getdata()
                          .subscribe(res => {
                            // console.log(res);
                            this.userArr = res;
                            console.log(this.userArr);
                          })
  }


  onClickButton(id:number){
    localStorage.setItem('userID', JSON.stringify(id));
  }



}
