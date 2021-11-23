import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '@lct/models/todo.model';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(value: TodoModel[], args: string): unknown {
    if (args === undefined || args === '' || args === 'All') {
      return value;
    } else if (args === 'Completed') {
      return value.filter(d => d.completed);
    } else if (args === 'Incomplete') {
      return value.filter(d => !d.completed);
    } else if (args === 'Completed Today') {
      return value.filter(d => d.completedDate !== null && new Date(d.completedDate).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0));
    }
    
    return [];
  }

}
