import { Component, OnInit } from '@angular/core';
declare var $: any;

import {NotificationsService} from '../../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
      this.notificationsService.notifier.subscribe(message => this.showNotification(message[0], message[1]))
  }

    showNotification(message: string, type: string){

        $.notify({
            icon: 'glyphicon glyphicon-warning-sign',
            title: 'aaaaaaaa',
            message: message

        },{
            type: type,
            timer: 1000,
            placement: {
                from: 'top',
                align: 'center'
            }
        });
    }
}
