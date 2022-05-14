import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { Action } from '../casl/actions';
import { AppAbility, CaslAbilityFactory } from '../casl/casl-ability.factory';
import { CheckPolicies } from '../guard/authorization.interface.handler';
import { PoliciesGuard } from '../guard/policiesGuard';
@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  @ApiTags('login')
  @ApiBearerAuth()
  @Post('/login')
  @UseGuards(LocalAuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Manage, 'all'))
  async login(@Request() req) {
    // const ability = this.caslAbilityFactory.createForUser(req.user);
    // if (ability.can(Action.Manage, 'all')) {
    //   console.log('can read all');
    // }
    return this.authService.login(req.user);
  }
}
