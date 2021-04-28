import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('establishment')
class Establishment {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  contact: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Establishment };
