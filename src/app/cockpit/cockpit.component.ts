import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CockpitComponent implements OnInit, OnChanges {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('serverNameTextbox') servernameTB: ElementRef;

  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
    console.log("On Init fired");
  }

  ngOnChanges(){
    console.log("On Changes fired");
  }

  onAddServer(serverNameTextbox: HTMLInputElement) {
    //console.log(serverNameTextbox.value);
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    var x = this.servernameTB.nativeElement.value;
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
