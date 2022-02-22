import {MigrationInterface, QueryRunner} from "typeorm";

export class sss1645503889430 implements MigrationInterface {
    name = 'sss1645503889430'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`QuestionDetails\` (\`id\` int NOT NULL AUTO_INCREMENT, \`questionDetails\` varchar(255) NOT NULL, \`questionId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`userId\` char(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` enum ('user', 'admin') NOT NULL DEFAULT 'user', UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`HintQuestion\` (\`id\` int NOT NULL AUTO_INCREMENT, \`question\` varchar(255) NOT NULL, \`informationId\` char(36) NULL, UNIQUE INDEX \`IDX_b5b03afd1d970dd432cf88a638\` (\`question\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`CandidateInformation\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`email\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`linkfb\` varchar(255) NOT NULL, \`userUserId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`AllProfessions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nameProfessions\` varchar(255) NOT NULL, \`candidateInformationId\` char(36) NULL, UNIQUE INDEX \`REL_ea39aeda08f184e3c2c1943166\` (\`candidateInformationId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`mail_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`QuestionDetails\` ADD CONSTRAINT \`FK_0220166db19d42718d859e3dae9\` FOREIGN KEY (\`questionId\`) REFERENCES \`HintQuestion\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`HintQuestion\` ADD CONSTRAINT \`FK_94acdfecfb2ca2387ba06de4c90\` FOREIGN KEY (\`informationId\`) REFERENCES \`CandidateInformation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`CandidateInformation\` ADD CONSTRAINT \`FK_035be933dcb69711893d98fc869\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`userId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`AllProfessions\` ADD CONSTRAINT \`FK_ea39aeda08f184e3c2c19431660\` FOREIGN KEY (\`candidateInformationId\`) REFERENCES \`CandidateInformation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`AllProfessions\` DROP FOREIGN KEY \`FK_ea39aeda08f184e3c2c19431660\``);
        await queryRunner.query(`ALTER TABLE \`CandidateInformation\` DROP FOREIGN KEY \`FK_035be933dcb69711893d98fc869\``);
        await queryRunner.query(`ALTER TABLE \`HintQuestion\` DROP FOREIGN KEY \`FK_94acdfecfb2ca2387ba06de4c90\``);
        await queryRunner.query(`ALTER TABLE \`QuestionDetails\` DROP FOREIGN KEY \`FK_0220166db19d42718d859e3dae9\``);
        await queryRunner.query(`DROP TABLE \`mail_entity\``);
        await queryRunner.query(`DROP INDEX \`REL_ea39aeda08f184e3c2c1943166\` ON \`AllProfessions\``);
        await queryRunner.query(`DROP TABLE \`AllProfessions\``);
        await queryRunner.query(`DROP TABLE \`CandidateInformation\``);
        await queryRunner.query(`DROP INDEX \`IDX_b5b03afd1d970dd432cf88a638\` ON \`HintQuestion\``);
        await queryRunner.query(`DROP TABLE \`HintQuestion\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`QuestionDetails\``);
    }

}
