DROP DATABASE IF EXISTS `pokedex`;

CREATE DATABASE pokedex;

USE pokedex;

CREATE TABLE `User` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(150),
  `email` varchar(150) UNIQUE,
  `password` varchar(255),
  `amountBadges` INT
);

CREATE TABLE `Pokemon` (
  `name` varchar(50) PRIMARY KEY
);

CREATE TABLE `Lists` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `listName` varchar(50),
  `User_id` INT,
  CONSTRAINT fk_user FOREIGN KEY (user_id)  
  REFERENCES User(id)  
);

CREATE TABLE `Lists_Pokemon` (
  `list_id` INT,
  `pokemon_name` varchar(50),
    CONSTRAINT fk_lists FOREIGN KEY (list_id)  
    REFERENCES Lists(id),
    CONSTRAINT fk_pokemon FOREIGN KEY (pokemon_name)  
    REFERENCES Pokemon(name)    
);


-- INSERT INTO User (name, email, password, amountBadges) VALUES ('Ash', 'Ash@pallettown.pkmn', 'pika', 3);