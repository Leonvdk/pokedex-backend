DROP DATABASE IF EXISTS `pokedex`;

CREATE DATABASE pokedex;

USE pokedex;

CREATE TABLE `User` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(150),
  `email` varchar(150) UNIQUE,
  `password` varchar(255),
  `amountBadges` INT
);

CREATE TABLE `Lists` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `User_id` INT,
  `List_id` INT
);

CREATE TABLE `Lists_Pokemon` (
  `Lists_id` INT,
  `Pokemon_id` INT
);

CREATE TABLE `Pokemon` (
  `id` varchar(50) PRIMARY KEY
);

INSERT INTO User (fullName, email, password, amountBadges) VALUES ('Ash', 'Ash@pallettown.pkmn', 'pika', 3);