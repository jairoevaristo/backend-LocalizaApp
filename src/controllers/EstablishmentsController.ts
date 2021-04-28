import { Request, Response } from 'express';
import { EstablishmentsServices } from '../services/EstablishmentsServices';

class EstablishmentsController {
  async create(request: Request, response: Response) {
    const { 
      category,
      contact,
      description,
      latitude,
      longitude,
      name
    } = request.body;

    const establishmentsServices = new EstablishmentsServices();
    const establishment = await establishmentsServices.create({
      category,
      contact,
      description,
      latitude,
      longitude,
      name
    });

    return response.status(201).json(establishment);
  }
}

export { EstablishmentsController };