import { IRouteableComponent } from "@aurelia/router";
import { inject, IRouter } from "aurelia";

@inject()
export class WelcomePage implements IRouteableComponent {
  public message = 'Welcome to Aurelia 2!';

  constructor(@IRouter private router: IRouter) {

  }
}
