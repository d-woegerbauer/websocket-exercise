import { Component, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  myWebSocket!: WebSocketSubject<any>;

  constructor() { }

  text = "";
  messages: string[] = [];

  ngOnInit(): void {
    this.myWebSocket = webSocket({
      url: "ws://localhost:8080/start-websocket/grogorius",
    });

    this.myWebSocket.subscribe((value) => {
      console.log(value.toString());
      this.messages.push(value.toString());
    });
  }

  sendMessage() {
    this.myWebSocket.next(this.text);
    this.text = "";
  }

}
