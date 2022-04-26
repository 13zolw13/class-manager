import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1650970648693 implements MigrationInterface {
  private readonly UsersTable = new Table({
    name: 'User',
    columns: [
      {
        name: 'id',
        type: 'int4',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'email',
        type: 'text',
        isNullable: false,
      },
      {
        name: 'password',
        type: 'text',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'date',
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'date',
        isNullable: false,
        default: 'now()',
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.UsersTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.UsersTable);
  }
}
