import { ChangeController } from "./controllers/ChangeController.js"

import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ChangeController],
    view: ''

  }])