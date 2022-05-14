import { SetMetadata } from '@nestjs/common';
import { AppAbility } from '../casl/casl-ability.factory';

interface IPolicyHandler {
  handle(ability: AppAbility, action: string, subject: any): boolean;
}

type PolicyHandler = (ability: AppAbility) => boolean;
export type Policy = PolicyHandler | IPolicyHandler;

export const CHECK_POLICIES_KEY = 'check_policy';
export const CheckPolicies = (...handlers: PolicyHandler[]) => {
  SetMetadata(CHECK_POLICIES_KEY, handlers);
};
