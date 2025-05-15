import { CanActivate, Injectable, ExecutionContext, UnauthorizedException, HttpException, HttpStatus } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "./roles-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private jwtService: JwtService, private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        try {
            const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass()
            ])
            if (!requiredRoles)
                return true
            const authHeader = req.headers.authorization
            if (!authHeader)
                throw new UnauthorizedException({ message: "Користувач не авторизований" });
            let token: string;
            if (authHeader.startsWith("Bearer ")) {
                token = authHeader.split(' ')[1]
            } else {
                token = authHeader;
            }

            if (!token) {
                throw new UnauthorizedException({ message: "Користувач не авторизований" });
            }
            const user = this.jwtService.verify(token);
            req.user = user;
            return user.roles.some(role => requiredRoles.includes(role.value));
        }
        catch (e) {
            console.error('JWT validation error:', e);
            throw new HttpException({ message: "Нема доступа" }, HttpStatus.FORBIDDEN);
        }
    }
}