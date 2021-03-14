import { Request, Response } from 'express';
import User from '../schemas/User';

class UserController {
    public async index (req: Request, resp: Response) {
        const user = await User.find();
        console.log(user[0].fullName());

        return resp.json(user);
    }

    public async create (req: Request, resp: Response) {
        const user = await User.create(req.body);
        console.log(user);

        return resp.json(user);
    }
}

export default new UserController();
