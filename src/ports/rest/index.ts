import { Router } from 'express';
import helloWorld from './controllers/hello-world';

const router: Router = Router();

router.get('/hello-world', helloWorld);

export default router;