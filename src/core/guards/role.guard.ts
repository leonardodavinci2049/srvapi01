import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/core/decorators/roles.decorator';
import { RoleEnum } from 'src/core/enums/role.enum';

interface RequestWithUser extends Request {
  userRequest: {
    ROLE: RoleEnum;
    // Add other properties of userRequest if needed
  };
}

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const requeridRoles = this.reflector.getAllAndOverride<RoleEnum[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    // console.log({ requeridRoles });

    if (!requeridRoles) {
      return true;
    }
    // console.log('getRequest', context.switchToHttp().getRequest());
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const { userRequest } = request;

    // console.log(userRequest.ROLE);

    const rolesFilted = requeridRoles.filter(
      (role) => role === userRequest.ROLE,
    );

    return rolesFilted.length > 0;
  }
}
