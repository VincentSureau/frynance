# Fry-Nance

## Data dictionnary

|Table                      |Field         |Type    |Nullable|Comment       |
|---------------------------|--------------|--------|--------|--------------|
|doctrine_migration_versions|version       |varchar |NO      |              |
|doctrine_migration_versions|executed_at   |datetime|YES     |              |
|doctrine_migration_versions|execution_time|int     |YES     |              |
|ext_translations           |id            |int     |NO      |auto_increment|
|ext_translations           |locale        |varchar |NO      |              |
|ext_translations           |object_class  |varchar |NO      |              |
|ext_translations           |field         |varchar |NO      |              |
|ext_translations           |foreign_key   |varchar |NO      |              |
|ext_translations           |content       |longtext|YES     |              |
|ingredient                 |id            |int     |NO      |auto_increment|
|ingredient                 |name          |varchar |NO      |              |
|messenger_messages         |id            |bigint  |NO      |auto_increment|
|messenger_messages         |body          |longtext|NO      |              |
|messenger_messages         |headers       |longtext|NO      |              |
|messenger_messages         |queue_name    |varchar |NO      |              |
|messenger_messages         |created_at    |datetime|NO      |              |
|messenger_messages         |available_at  |datetime|NO      |              |
|messenger_messages         |delivered_at  |datetime|YES     |              |
|quote                      |id            |int     |NO      |auto_increment|
|quote                      |user_id       |int     |NO      |              |
|quote                      |total_recipe  |double  |NO      |              |
|quote                      |title         |varchar |NO      |              |
|quote                      |labour_cost   |double  |NO      |              |
|quote                      |total_labour  |double  |NO      |              |
|quote                      |total_price   |double  |NO      |              |
|quote                      |sell_price    |double  |NO      |              |
|quote_line                 |id            |int     |NO      |auto_increment|
|quote_line                 |quote_id      |int     |NO      |              |
|quote_line                 |recipe_id     |int     |NO      |              |
|quote_line                 |quantity      |double  |NO      |              |
|quote_line                 |price         |double  |NO      |              |
|quote_line                 |total         |double  |NO      |              |
|quote_line                 |preparation   |double  |NO      |              |
|recipe                     |id            |int     |NO      |auto_increment|
|recipe                     |user_id       |int     |NO      |              |
|recipe                     |title         |varchar |NO      |              |
|recipe                     |price         |double  |NO      |              |
|recipe                     |preparation   |int     |NO      |              |
|recipe_ingredient          |id            |int     |NO      |auto_increment|
|recipe_ingredient          |recipe_id     |int     |NO      |              |
|recipe_ingredient          |ingredient_id |int     |NO      |              |
|recipe_ingredient          |price         |double  |NO      |              |
|recipe_ingredient          |quantity      |double  |NO      |              |
|recipe_ingredient          |unit          |varchar |NO      |              |
|recipe_ingredient          |amount        |double  |NO      |              |
|recipe_ingredient          |total_price   |double  |NO      |              |
|reset_password_request     |id            |int     |NO      |auto_increment|
|reset_password_request     |user_id       |int     |NO      |              |
|reset_password_request     |selector      |varchar |NO      |              |
|reset_password_request     |hashed_token  |varchar |NO      |              |
|reset_password_request     |requested_at  |datetime|NO      |              |
|reset_password_request     |expires_at    |datetime|NO      |              |
|user                       |id            |int     |NO      |auto_increment|
|user                       |email         |varchar |NO      |              |
|user                       |roles         |json    |NO      |              |
|user                       |password      |varchar |NO      |              |
|user                       |firstname     |varchar |NO      |              |
|user                       |lastname      |varchar |NO      |              |
|user                       |is_verified   |tinyint |NO      |              |
|user                       |image_name    |varchar |YES     |              |
|user                       |updated_at    |datetime|YES     |              |

## Database Diagram
![Databasee diagram](docs/mcd_dark.png)