
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCustomer = createParamDecorator(
    (key: string, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        const customer = request.user;
        return key ? customer?.[key] : customer
    },
);