import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { TasksController } from './tasks.controller';
import { TasksProviders } from './tasks.providers';
import { TasksService } from './tasks.service';

@Module({
  modules: [DatabaseModule],
  controllers: [TasksController],
  components: [TasksService, ...TasksProviders]
})
export class TasksModule {}
