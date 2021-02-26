import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  headerTitle = 'Add Task';
  taskFormGroup: FormGroup;
  constructor(private fb: FormBuilder, private dataService: DataService, private toastController: ToastController) { }

  ngOnInit(): void {
    this.generateForms();
  }

  generateForms(): void {
    this.taskFormGroup = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.min(6), Validators.max(15)]),
      description: this.fb.control('', [Validators.required, Validators.min(6)])
    });
  }

  getTaskFormGroup() {
    return this.taskFormGroup.controls;
  }

  handleAddTask(): void {
    if (this.taskFormGroup.valid) {
      this.dataService.createTask(this.taskFormGroup.value).subscribe(data => {
        this.presentToast('Successfully added Task');
        this.taskFormGroup.reset();
      }, err => {
        console.log(err);
      });
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
