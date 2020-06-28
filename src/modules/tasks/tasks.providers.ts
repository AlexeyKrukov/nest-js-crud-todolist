import { Connection } from 'mongoose';

import { TaskSchema } from './schemas/task.schema';

export const TasksProviders = [
  {
    provide: 'TaskModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Contact', TaskSchema),
    inject: ['DbConnectionToken']
  }
];
