import { Component, OnInit } from '@angular/core';

import messageBox from '../contracts/MessageBox';
import web3 from '../shared/web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  message$ = '';
  newMessage = '';
  account = '';
  loading = false;
  error = '';

  ngOnInit(): void {
    this.message$ = this.readMessage();
    web3.eth.getAccounts().then(listOfAccounts => {
      this.account = listOfAccounts[0];
    });
  }

  readMessage() {
    return messageBox.methods.message().call();
  }

  setMessage() {
    console.log(
      'setting message to ' + this.newMessage + ' from ' + this.account
    );
    this.loading = true;
    this.error = '';
    messageBox.methods
      .setMessage(this.newMessage)
      .send({
        from: this.account,
        gas: '1000000'
      })
      .then(
        () => {
          this.newMessage = '';
          this.message$ = this.readMessage();
          this.loading = false;
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
  }
}
