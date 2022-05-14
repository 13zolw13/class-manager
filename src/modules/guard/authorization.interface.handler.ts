import { SetMetadata } from '@nestjs/common';
import { AppAbility } from '../casl/casl-ability.factory';

interface IPolicyHandler {
  handle(ability: AppAbility, action: string, subject: any): boolean;
}

type PolicyHandler = (ability: AppAbility) => boolean;
export type Policy = PolicyHandler | IPolicyHandler;


