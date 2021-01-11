import { Injectable } from '@nestjs/common';
import { TodosDto } from './dto/todos.dto';

@Injectable()
export class ApiService {
  private dataBase = [];

  getAll() {
    if (this.dataBase.length > 0)
      return this.dataBase;
    else
      return "First add some task";
  }

  getById(id: string) {
    let res = this.dataBase.find(todo => todo.id === id);
    if (res)
      return res;
    else
      return "Not found";
  }

  addTodo(todo: TodosDto) {
    this.dataBase.push({ ...todo,
      id: Date.now().toString()
    });
    return this.dataBase;
  }

  removeById(id: string) {
    let index = this.dataBase.findIndex(todo => todo.id === id);
    if (index >= 0) {
      this.dataBase.splice(index, 1);
      return this.getAll();
    }
    else
      return 'Not found';
  }

  updateById(id: string, data: TodosDto) {
    let index = this.dataBase.findIndex(todo => todo.id === id);
    if (index >= 0) {
      this.dataBase[index] = {...data, id: id};
      return this.getAll();
    }
    else
      return 'Not found';
}
}