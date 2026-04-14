import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoItem } from './add-todo-item';

describe('AddTodoItem', () => {
  let component: AddTodoItem;
  let fixture: ComponentFixture<AddTodoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTodoItem],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTodoItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
