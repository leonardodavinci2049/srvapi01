import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

export const ParamId = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest<Request>();
    return Number(request.params.id);
  },
);
