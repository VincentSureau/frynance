<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230611120937 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE quote_line (id INT AUTO_INCREMENT NOT NULL, quote_id INT NOT NULL, recipe_id INT NOT NULL, quantity DOUBLE PRECISION NOT NULL, price DOUBLE PRECISION NOT NULL, total DOUBLE PRECISION NOT NULL, INDEX IDX_43F3EB7CDB805178 (quote_id), INDEX IDX_43F3EB7C59D8A214 (recipe_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE quote_line ADD CONSTRAINT FK_43F3EB7CDB805178 FOREIGN KEY (quote_id) REFERENCES quote (id)');
        $this->addSql('ALTER TABLE quote_line ADD CONSTRAINT FK_43F3EB7C59D8A214 FOREIGN KEY (recipe_id) REFERENCES recipe (id)');
        $this->addSql('ALTER TABLE quote_recipe DROP FOREIGN KEY FK_E0301F7459D8A214');
        $this->addSql('ALTER TABLE quote_recipe DROP FOREIGN KEY FK_E0301F74DB805178');
        $this->addSql('DROP TABLE quote_recipe');
        $this->addSql('ALTER TABLE quote ADD labour_cost DOUBLE PRECISION NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE quote_recipe (quote_id INT NOT NULL, recipe_id INT NOT NULL, INDEX IDX_E0301F74DB805178 (quote_id), INDEX IDX_E0301F7459D8A214 (recipe_id), PRIMARY KEY(quote_id, recipe_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE quote_recipe ADD CONSTRAINT FK_E0301F7459D8A214 FOREIGN KEY (recipe_id) REFERENCES recipe (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE quote_recipe ADD CONSTRAINT FK_E0301F74DB805178 FOREIGN KEY (quote_id) REFERENCES quote (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE quote_line DROP FOREIGN KEY FK_43F3EB7CDB805178');
        $this->addSql('ALTER TABLE quote_line DROP FOREIGN KEY FK_43F3EB7C59D8A214');
        $this->addSql('DROP TABLE quote_line');
        $this->addSql('ALTER TABLE quote DROP labour_cost');
    }
}
