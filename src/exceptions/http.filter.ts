import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { HttpAdapterHost } from '@nestjs/core';
  import { writeFile } from 'fs/promises';
  import { join } from 'path';
  import { Request, Response } from 'express';
  
  @Catch(HttpException)
  export class HttpExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}
  
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
      const status = exception.getStatus();
      const message = exception.message || 'An error occurred';
  
      const body = {
        statusCode: status,
        timestamp: new Date().toISOString(),
        message,
        path: request.url,
      };
  
      this.writeHttpLog(body);
  
      const { httpAdapter } = this.httpAdapterHost;
      httpAdapter.reply(response, body, status);
    }
  
    private async writeHttpLog(data: Record<string, any>) {
      const LOGS_DIR = join(__dirname, `../../logs/${Date.now()}-log.json`);
  
      try {
        await writeFile(LOGS_DIR, JSON.stringify(data));
      } catch (err) {
        console.error('Failed to write log file', err);
      }
    }
  }
  