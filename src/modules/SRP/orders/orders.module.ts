import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { EmailsModule } from '../emails/emails.module';
import { PrismaModule } from 'src/prisma.module';
import { AwsModule } from 'src/aws/aws.module';

@Module({
  imports: [PrismaModule, EmailsModule, AwsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
