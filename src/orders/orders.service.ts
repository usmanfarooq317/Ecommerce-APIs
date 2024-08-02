import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    const product = await this.prismaService.product.findUnique({
      where: { id: createOrderDto.productId },
    });

    if (!product) {
      throw new BadRequestException('Product not found');
    }

    const totalPrice = product.price * createOrderDto.quantity;

    return this.prismaService.order.create({
      data: {
        ...createOrderDto,
        totalPrice,
      },
    });
  }

  async findAll() {
    return this.prismaService.order.findMany();
  }

  async findOne(id: number) {
    const order = await this.prismaService.order.findUnique({ where: { id } });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.prismaService.order.findUnique({ where: { id } });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    const product = await this.prismaService.product.findUnique({
      where: { id: updateOrderDto.productId },
    });

    if (!product) {
      throw new BadRequestException('Product not found');
    }

    const totalPrice = product.price * updateOrderDto.quantity;

    return this.prismaService.order.update({
      where: { id },
      data: {
        ...updateOrderDto,
        totalPrice,
      },
    });
  }

  async remove(id: number) {
    const order = await this.prismaService.order.findUnique({ where: { id } });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return this.prismaService.order.delete({ where: { id } });
  }
}
