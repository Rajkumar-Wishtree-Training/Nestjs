import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessagesController } from './messages.controller';
import { MessageRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers:[MessageService , MessageRepository ]
})
export class MessagesModule {}
