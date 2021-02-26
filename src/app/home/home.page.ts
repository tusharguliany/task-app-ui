import { Task } from './../models/Task';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  headerTitle = 'Task App';
  tasks: Task[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTasks().subscribe(res => {
      this.tasks = res.data.tasks;
    }, err => {
      console.error(err);
    });
  }

  getDateObject(date: string) {
    const res = new Date(Date.parse(date));
    return res.getDate() + '/' + res.getMonth() + '/' + res.getFullYear();
  }

}
