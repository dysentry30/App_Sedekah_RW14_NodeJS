-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: app_sedekah_rw14
-- ------------------------------------------------------
-- Server version	8.0.26-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sedekah`
--

DROP TABLE IF EXISTS `sedekah`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sedekah` (
  `id_warga` int NOT NULL,
  `jumlah_sedekah` bigint NOT NULL,
  `sudah_sedekah` tinyint(1) NOT NULL,
  `added_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sedekah`
--

LOCK TABLES `sedekah` WRITE;
/*!40000 ALTER TABLE `sedekah` DISABLE KEYS */;
/*!40000 ALTER TABLE `sedekah` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int NOT NULL,
  `name_user` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` longtext NOT NULL,
  `permission` int NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (946137735,'Bagas Satria Nurwinanto','bagassn','sha1$817bff62$1$e40b96c2e91e8f59eb9682aa13f57b8fdcfa139d',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warga`
--

DROP TABLE IF EXISTS `warga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warga` (
  `id_warga` bigint NOT NULL,
  `nama_warga` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rt` int NOT NULL,
  PRIMARY KEY (`id_warga`),
  UNIQUE KEY `id_warga` (`id_warga`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warga`
--

LOCK TABLES `warga` WRITE;
/*!40000 ALTER TABLE `warga` DISABLE KEYS */;
INSERT INTO `warga` VALUES (1,'Arlie Kirlin II',14),(2,'Heather Schmitt',14),(3,'Guy Purdy',12),(4,'Maxine Rice',10),(5,'Aaron Gutmann',12),(6,'Dr. Kolby Feeney DVM',5),(7,'Mr. Moriah Lockman',14),(8,'Mr. Axel Cremin',8),(9,'Holly Gleichner Sr.',9),(10,'Ferne Wintheiser',14),(11,'Miss Zetta Hand',14),(12,'Dr. Calista Wintheiser',9),(13,'Mercedes Bergstrom',10),(14,'Ansel Durgan',1),(15,'Dr. Cornell Emmerich IV',8),(16,'Sharon McCullough',1),(17,'Jacquelyn Mante I',11),(18,'Baylee Turcotte Sr.',10),(19,'Dr. Rex Sawayn',1),(20,'Keven Eichmann PhD',8),(21,'Dianna Kirlin',5),(22,'Travon Mann',12),(23,'Hassie Schneider',6),(24,'Lillie Collins',2),(25,'Paige Barton',13),(26,'Leilani Brakus',2),(27,'Wilburn Rolfson',6),(28,'Ms. Ellen Rempel II',11),(29,'Kole Beatty',1),(30,'Mellie Denesik',6),(31,'Dr. Maybelle Rempel PhD',5),(32,'Jeffry Kuhlman',7),(33,'Tiara Boyer',5),(34,'Genesis Larkin',14),(35,'Miss Abigayle Gislason',10),(36,'Miss Ena Greenholt Sr.',12),(37,'Mr. Emil Schulist',6),(38,'Frederik Lang Jr.',14),(39,'Anais Rowe V',1),(40,'Mikel Hartmann',10),(41,'Missouri Ritchie',9),(42,'Lincoln Wunsch',3),(43,'Richie McKenzie',7),(44,'Dr. Syble VonRueden MD',10),(45,'Adaline Muller IV',2),(46,'Dr. Shanny Glover I',13),(47,'Ernestine Dare',1),(48,'Jerome Strosin',6),(49,'Bertha Medhurst',14),(50,'Leola Schinner',6),(51,'Olen Sipes',14),(52,'Mack Harber',13),(53,'Miss Nicolette Tillman PhD',10),(54,'Mr. Sebastian Fadel V',13),(555,'test',1);
/*!40000 ALTER TABLE `warga` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-16  3:18:08
