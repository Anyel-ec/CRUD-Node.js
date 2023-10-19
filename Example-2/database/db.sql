-- SQL Server

-- create database crudnodejsmysql
CREATE DATABASE crudnodejsmysql;

-- Using BD
USE NombreDeTuBaseDeDatos;

-- Create table
CREATE TABLE Customers (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) NOT NULL,
    address NVARCHAR(255) NOT NULL,
    PHONE NVARCHAR(10) NOT NULL
);

