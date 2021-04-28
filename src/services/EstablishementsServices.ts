import { getCustomRepository, Repository } from 'typeorm';
import { Establishment } from '../entities/Establishment';
import { EstablishmentsRepository } from '../repositories/EstablishmentRepository';

interface ICreateEstablishement {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  contact: string;
  category: string;
}

class EstablishementsServices {
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
  }: ICreateEstablishement) {
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

export { EstablishementsServices };