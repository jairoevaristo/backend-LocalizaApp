import { getCustomRepository, Repository } from 'typeorm';
import { Establishment } from '../entities/Establishment';
import { EstablishmentsRepository } from '../repositories/EstablishmentRepository';

interface ICreateEstablishment {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  contact: string;
  category: string;
}

class EstablishmentsServices {
  private establishementRepository: Repository<Establishment>;
  
  constructor() {
    this.establishementRepository = getCustomRepository(EstablishmentsRepository);
  }

  async create({
    category,
    contact,
    description,
    latitude,
    longitude,
    name
  }: ICreateEstablishment) {
    const establishment = this.establishementRepository.create({
      category,
      contact,
      description,
      latitude,
      longitude,
      name
    });

    await this.establishementRepository.save(establishment);
    return establishment;
  }
}

export { EstablishmentsServices };