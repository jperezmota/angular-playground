import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = 'testserver';
  serverCreated = false;
  servers = ['Tesserver', 'Testserver 2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    console.log("jpm21");
  }

  onUpdateServerName(event: Event){
    console.log(event);
    // this.serverName = event.target.value; //Esto funciona a pesar de que en el IDE muestra un error. Para quitar el error pues usamos el codigo de abajo. Donde casteamos el valor
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
