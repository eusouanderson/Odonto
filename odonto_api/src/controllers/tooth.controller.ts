import { Controller, Post, Body, Get } from '@nestjs/common';
import { ToothService } from '../services/tooth.service';

@Controller('tooth')
export class ToothController {
  constructor(private readonly toothService: ToothService) {}

  @Post()
  create(@Body() createToothDto: { name: string; type: string; condition: string }) {
    return this.toothService.create(createToothDto);
  }
  @Get()
  findAll() {
    return this.toothService.findAll();
  }
}
