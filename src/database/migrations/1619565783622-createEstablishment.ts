import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createEstablishment1619565783622 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'establishment',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'description',
          type: 'varchar'
        },
        {
          name: 'contact',
          type: 'varchar'
        },
        {
          name: 'category',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'double'
        },
        {
          name: 'longitude',
          type: 'double'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('establishment');
  }

}
