import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLayoutsTable2024 implements MigrationInterface {
    name = 'CreateLayoutsTable2024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE layouts (
                id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
                orderId VARCHAR(255) NOT NULL,
                customerEmail VARCHAR(255) NOT NULL,
                firstName VARCHAR(255),
                lastName VARCHAR(255),
                eventDate DATE,
                lockDate TIMESTAMP,
                locked BOOLEAN DEFAULT FALSE,
                layoutData JSON,
                createdAt TIMESTAMP DEFAULT now(),
                updatedAt TIMESTAMP DEFAULT now()
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE layouts`);
    }
}
