import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';
import { UserPayload } from './UserPayload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
      cache: true,
      jwksRequestsPerMinute: 5,
    });
  }

  async validate(payload: any) {
    new UserPayload(payload.role, payload.sub, payload.username);
    return {
      userId: payload.sub,
      username: payload.username,
      userRole: payload.role,
    };
  }
}
