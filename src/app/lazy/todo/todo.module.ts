import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletTodoComponent } from './outlet-todo/outlet-todo.component';
import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { MaterialModule } from '@lct/ui/material.module';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [OutletTodoComponent];

@NgModule({
    declarations: [
        ...COMPONENTS,
        FilterStatusPipe
    ],
    exports: [...COMPONENTS],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule
    ]
})
export class TodoModule { }
