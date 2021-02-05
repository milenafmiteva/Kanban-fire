import { Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
