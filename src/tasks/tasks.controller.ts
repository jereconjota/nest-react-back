import { Body, ConflictException, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
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
    async findOne(@Param('id') id: string) {
        const task = await this.tasksService.findOne(id);
        if (!task) {
            throw new NotFoundException('Task not found');
        }
        return task;
    }

    @Post()
    async create(@Body() body: CreateTaskDto ) {
        try {
            console.log(body);
            return await this.tasksService.create(body)
        } catch (error) {
            if (error.code === 11000) {
                return new ConflictException('Task already exists');
            }
            throw error;
        }
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const task = await this.tasksService.delete(id);
        if (!task) {
            throw new NotFoundException('Task not found');
        }
        return task;
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: updateTaskDto ) {
        const task = await this.tasksService.update(id, body);
        if (!task) {
            throw new NotFoundException('Task not found');
        }
        return task;
    }
}
