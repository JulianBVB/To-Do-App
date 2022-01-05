import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { List } from 'src/app/models/list.models';
import { AngularFirestore } from '@angular/fire/compat/firestore';




@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(
    private firestore: AngularFirestore,

  ) { }

  board: Board = new Board('Board', [
    new List('Liste 1', [
    ])

  ]);


  ngOnInit(): void {
    this
      .firestore
      .collection('Board')
      .doc("1Aw29ipUB66LqLyIbr75")
      .valueChanges()
      .subscribe((board: any) => {

      });
  }

  /**
   * This function open a input field for a new task
   * @param listname is the ID of the task input field for the choosen list
   */
  AddNewTask(listname: string) {
    document.getElementById(listname)?.classList.remove('hidden');
  }

  /**
   * This function save the new task in the list
   * @param i is the number of the list
   * @param listnname is the ID of the div container for new task input field for the choosen list
   */
  saveNewTask(i: number, listnname: string) {
    var task: any = (<HTMLInputElement>document.getElementById(listnname + i)).value;
    this.board.lists[i].tasks.push(task);
    task = null;
  }

  /**
   * This function close the div container with the new task input field for the new list
   * @param listname is the ID of the div container for new task input field for the choosen list
   */
  deleteNewTask(listname: string) {
    document.getElementById(listname)?.classList.add('hidden');
  }

  editTask(i: number, y: number) {
    console.log(this.board.lists[i].tasks[y])
  }


  /**
   * This function delete the choosen task
   * @param i is the number of the list
   * @param y is the number of the task 
   */
  deleteTask(i: number, y: number) {
    this.board.lists[i].tasks.splice(y, 1);
  }

  /**
   * This function delete the chossen list
   * @param i is the number of the list
   */
  deleteList(i: number) {
    this.board.lists.splice(i, 1);
  }


  /**
   * This function open a input field for a new list
   */
  addNewList() {
    document.getElementById('newList')?.classList.remove('hidden');
  }

  /**
   * This function save the new list
   */
  saveNewList() {
    var newList: any = (<HTMLInputElement>document.getElementById('newListElement')).value;
    this.board.lists.push(new List(newList, [
    ]))
  }


  /**
   * This function close the field for the new list
   */
  deleteNewList() {
    document.getElementById('newList')?.classList.add('hidden');

  }




/**
 * This function is for the drag and drop function
 * @param event Drag and Drop
 */

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }



}
