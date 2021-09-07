CREATE DATABASE friend_paw DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

USE friend_paw;

CREATE TABLE IF NOT EXISTS `users` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    cellNumber VARCHAR(20) NOT NULL,
    password VARCHAR(100) NOT NULL,
    address VARCHAR(100),
    houseNumber VARCHAR(10),
    city VARCHAR(40),
    email VARCHAR(50),
    phone VARCHAR(20),
    district VARCHAR(30),
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `adoptions` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    dateAdoption DATE NOT NULL,
    adaptationPeriod BOOLEAN DEFAULT false,
    collaboratorId INT(11) UNSIGNED NOT NULL,
    animalId INT(11) UNSIGNED NOT NULL,
    userId INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `collaborators-involveds-in-rescue` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    collaboratorId INT(11) UNSIGNED NOT NULL,
    rescueId INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `rescues` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    forwardedToKennel BOOLEAN DEFAULT false,
    dateOfRescue DATE NOT NULL,
    policeSupport BOOLEAN DEFAULT false,
    locale VARCHAR(100),
    BONumber VARCHAR(60),
    address VARCHAR(150) NOT NULL,
    veterinaryCareId INT(11) UNSIGNED,
    animalId INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `costs-veterinaries`(
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    veterinaryCareId INT UNSIGNED NOT NULL,
    medicament VARCHAR(50) NOT NULL,
    value FLOAT(7, 2) NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `veterinary-cares` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    needOfHospitalization BOOLEAN DEFAULT false,
    needOfMedication BOOLEAN DEFAULT false,
    dateOfVeterinaryCare DATE NOT NULL,
    totalCostOfTreatment FLOAT(7, 2),
    anamnese VARCHAR(1000),
    veterinaryName VARCHAR(50) NOT NULL,
    animalId INT NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `collaborators` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    city VARCHAR(40) NOT NULL,
    cellNumber VARCHAR(20) NOT NULL,
    dateOfBirth DATE NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `animals` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    color VARCHAR(20) NOT NULL,
    name VARCHAR(30),
    aproximateAge VARCHAR(15) NOT NULL,
    castrated BOOLEAN DEFAULT false,
    specie VARCHAR(30) NOT NULL,
    breed VARCHAR(10) DEFAULT 'Vira-lata' NOT NULL,
    surname VARCHAR(20),
    sex ENUM('M', 'F') NOT NULL,
    othersCharacteristics VARCHAR(300),
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `temporary-homes` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    date DATE NOT NULL,
    adopterName VARCHAR(50) NOT NULL,
    cellNumber VARCHAR(20) NOT NULL,
    animalId INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `interesteds-pictures` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    imageURL VARCHAR(100) NOT NULL,
    interestedInAdoptionId INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `interesteds-in-adoption` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    description VARCHAR(200) NOT NULL,
    userId INT(11) UNSIGNED NOT NULL,
    animalId INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `animal-pictures` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    imageURL VARCHAR(100) NOT NULL,
    animalId INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `donations` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    description VARCHAR(200),
    date DATE NOT NULL,
    donationType VARCHAR(15),
    amount INT(11),
    name VARCHAR(50) NOT NULL,
    cellNumber VARCHAR(20) NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `visits` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    report VARCHAR(2000) NOT NULL,
    date DATE NOT NULL,
    adoptionId INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `remote-monitorings` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    date DATE NOT NULL,
    observations VARCHAR(200),
    adoptionId INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `remote-monitoring-pictures` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    imageURL VARCHAR(100) NOT NULL,
    remoteMonitoringId INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `publications` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    startDateTime DATETIME NOT NULL, 
    endDateTime DATETIME NOT NULL, /* TODO */
    title VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    reference VARCHAR(100),
    address VARCHAR(100) NOT NULL,
    city VARCHAR(40) NOT NULL,
    publicationType ENUM('event', 'done') NOT NULL,
    district VARCHAR(30),
    animalName VARCHAR(50),
    history TEXT(2000),
    reasonRescue VARCHAR(20),
    animalId INT(11), /* Desnecessário */
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `publications-pictures` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    imageURL VARCHAR(100) NOT NULL,
    publicationId INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `complaints` (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    description VARCHAR(500) NOT NULL,
    address VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    verified BOOLEAN DEFAULT false,
    locale VARCHAR(200),
    complaintType VARCHAR(15) NOT NULL,
    city VARCHAR(40) NOT NULL,
    district VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;