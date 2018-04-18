import { Component } from '@angular/core';
import { ServerService } from 'app/server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*
    Here we are not subscribing to observable returned by getAppName as we did it on the others methods (storeServers, getServers...)
    this because we are using in the html we are use async pipe.
  */
  appName = this.serverService.getAppName();

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServerService){

  }

  onSave(){
    this.serverService.storeServers(this.servers).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  onGet(){
    this.serverService.getServers().subscribe(
      (servers: any[])=>{
        console.log(servers);
        this.servers = servers;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}