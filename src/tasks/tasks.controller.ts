import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { updateTaskDto } from 'src/dto/update-task.dto';
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    async findAll() {  
        return this.tasksService.findAll();
    }

    @Get(':id')
    async findOne() {
        return 'Get one task';
    }

    @Post()
    async create(@Body() body: CreateTaskDto ) {
        console.log(body);
        return this.tasksService.create(body)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.tasksService.delete(id)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: updateTaskDto ) {
        return this.tasksService.update(id, body)
    }


}
