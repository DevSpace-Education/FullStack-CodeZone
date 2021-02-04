import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Posts from '../models/Posts';

export default {
  async create(req: Request, res: Response) {
    const {title, content} = req.body;

    const postsRepository = getRepository(Posts)

    const post = postsRepository.create({title, content})

    await postsRepository.save(post);

    return res.json(post);
  },

  async index(req: Request, res: Response) {
    const postsRepository = getRepository(Posts)

    const posts = await postsRepository.find();

    return res.json(posts);
  }
}