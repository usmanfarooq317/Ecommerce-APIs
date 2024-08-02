import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    try {
      return await this.prismaService.product.create({ data: createProductDto });
    } catch (error) {
      throw new BadRequestException('Invalid input');
    }
  }

  async findAll() {
    return this.prismaService.product.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.product.findUnique({ where: { id } });
    } catch (error) {
      throw new NotFoundException('Product not found');
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      return await this.prismaService.product.update({
        where: { id },
        data: updateProductDto,
      });
    } catch (error) {
      throw new BadRequestException('Invalid input');
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.product.delete({ where: { id } });
    } catch (error) {
      throw new BadRequestException('Invalid input');
    }
  }
}
