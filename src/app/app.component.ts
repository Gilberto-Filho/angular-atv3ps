import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  campoTxt;
  lTxt = [];
  salvarTxt() {this.lTxt.push(this.campoTxt);}
  apagarTxt(txt) { var num = this.lTxt.indexOf(txt);
    this.lTxt.splice(num, 1)
  }
}


