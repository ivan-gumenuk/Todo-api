import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiService } from './api.service';
import { TodosDto } from './dto/todos.dto';

@Controller('api')
export class ApiController {

  constructor(private apiService: ApiService) {}

  @Get()
  getAll() {
    return this.apiService.getAll();
  }

  @Get(':id')
  getOneItem(@Param('id') id :string) {
    return this.apiService.getById(id);
  }

  @Post()
  addItem(@Body() todo: TodosDto) {
    return this.apiService.addTodo(todo);
  }

  @Delete(':id')
  remove(@Param('id') id :string) {
    return this.apiService.removeById(id);
  }

  @Put(':id')
  update(@Body() todo: TodosDto, @Param('id') id: string ) {
    return this.apiService.updateById(id, todo);
  }
}
