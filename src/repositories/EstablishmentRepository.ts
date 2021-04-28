import { Repository, EntityRepository } from 'typeorm';
import { Establishment } from '../entities/Establishment';

@EntityRepository(Establishment)
class EstablishmentsRepository extends Repository<Establishment> {}

export { EstablishmentsRepository };