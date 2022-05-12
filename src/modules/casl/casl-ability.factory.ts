import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { UserPayload } from '../auth/UserPayload';
import { User } from '../users/entities/user.entity';
import { UserRole } from '../users/UserRole';
import { Action } from './actions';

type Subjects = InferSubjects<typeof User> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: UserPayload) {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    if (user.getRole === UserRole.ADMIN) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Read, 'all');
    }
    if (user.getRole === UserRole.TEACHER || user.getRole === UserRole.ADMIN) {
      can(Action.Create, 'all');
    }
    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
