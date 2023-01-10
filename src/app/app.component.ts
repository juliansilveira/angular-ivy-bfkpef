import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  cont = 0;
  sumar(){
   this.cont +=1; 
  }

  reiniciar(){
    this.cont = 0;
  }
}
