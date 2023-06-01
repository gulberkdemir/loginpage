import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{
  items!: MenuItem[];
  activeItem!: MenuItem;
  authorizedUserName: string = '';
  authorizedUserLastName: string = '';

  constructor(private router: Router, private messageService: MessageService) {
  }

  ngOnInit() {
    this.authorizedUserName = JSON.parse(localStorage.getItem('authorizedUserData')!).firstname;
    this.authorizedUserLastName = JSON.parse(localStorage.getItem('authorizedUserData')!).lastname;

    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
      { label: 'Vehicle', icon: 'pi pi-fw  pi-car' },
      { label: this.authorizedUserName.charAt(0).toUpperCase() + this.authorizedUserName.slice(1), icon: 'pi pi-fw  pi-user' },
      { label: 'Sign-out', icon: 'pi pi-sign-out' }
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem){
    this.activeItem! = event;
    if(this.activeItem.label=== 'Sign-out'){
      this.router.navigate(['/login']);
      localStorage.clear();
      this.messageService.add({
        key: 'myKey1',
        severity: 'success',
        summary: `User could logout successfully`,
        detail: `User could logout successfully`
      });
    }
  }

  activateLast() {
    this.activeItem = this.items[this.items.length - 1];
  }

}
