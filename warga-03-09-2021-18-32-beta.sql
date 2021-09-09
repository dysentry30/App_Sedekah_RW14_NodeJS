-- MariaDB dump 10.17  Distrib 10.4.15-MariaDB, for Linux (x86_64)
--
-- Host: mysql.hostinger.ro    Database: u574849695_25
-- ------------------------------------------------------
-- Server version	10.4.15-MariaDB-cll-lve

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `warga`
--

DROP TABLE IF EXISTS `warga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `warga` (
  `id_warga` bigint(20) NOT NULL,
  `nama_warga` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jumlah_sedekah` bigint(20) DEFAULT NULL,
  `sudah_sedekah` tinyint(1) NOT NULL DEFAULT 0,
  `rt` int(20) NOT NULL,
  PRIMARY KEY (`id_warga`),
  UNIQUE KEY `id_warga` (`id_warga`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warga`
--

LOCK TABLES `warga` WRITE;
/*!40000 ALTER TABLE `warga` DISABLE KEYS */;
INSERT INTO `warga` VALUES (1,'Arlie Kirlin II',NULL,0,14),(2,'Heather Schmitt',NULL,0,14),(3,'Guy Purdy',NULL,1,12),(4,'Maxine Rice',NULL,0,10),(5,'Aaron Gutmann',NULL,0,12),(6,'Dr. Kolby Feeney DVM',NULL,0,5),(7,'Mr. Moriah Lockman',NULL,0,14),(8,'Mr. Axel Cremin',NULL,0,8),(9,'Holly Gleichner Sr.',NULL,0,9),(10,'Ferne Wintheiser',NULL,1,14),(11,'Miss Zetta Hand',NULL,0,14),(12,'Dr. Calista Wintheiser',NULL,1,9),(13,'Mercedes Bergstrom',NULL,0,10),(14,'Ansel Durgan',NULL,1,1),(15,'Dr. Cornell Emmerich IV',NULL,0,8),(16,'Sharon McCullough',NULL,1,1),(17,'Jacquelyn Mante I',NULL,0,11),(18,'Baylee Turcotte Sr.',NULL,1,10),(19,'Dr. Rex Sawayn',NULL,0,1),(20,'Keven Eichmann PhD',NULL,0,8),(21,'Dianna Kirlin',NULL,1,5),(22,'Travon Mann',NULL,0,12),(23,'Hassie Schneider',NULL,0,6),(24,'Lillie Collins',NULL,1,2),(25,'Paige Barton',NULL,1,13),(26,'Leilani Brakus',NULL,0,2),(27,'Wilburn Rolfson',NULL,1,6),(28,'Ms. Ellen Rempel II',NULL,0,11),(29,'Kole Beatty',NULL,0,1),(30,'Mellie Denesik',NULL,0,6),(31,'Dr. Maybelle Rempel PhD',NULL,0,5),(32,'Jeffry Kuhlman',NULL,0,7),(33,'Tiara Boyer',NULL,1,5),(34,'Genesis Larkin',NULL,0,14),(35,'Miss Abigayle Gislason',NULL,0,10),(36,'Miss Ena Greenholt Sr.',NULL,0,12),(37,'Mr. Emil Schulist',NULL,1,6),(38,'Frederik Lang Jr.',NULL,1,14),(39,'Anais Rowe V',NULL,0,1),(40,'Mikel Hartmann',NULL,0,10),(41,'Missouri Ritchie',NULL,1,9),(42,'Lincoln Wunsch',NULL,0,3),(43,'Richie McKenzie',NULL,1,7),(44,'Dr. Syble VonRueden MD',NULL,1,10),(45,'Adaline Muller IV',NULL,1,2),(46,'Dr. Shanny Glover I',NULL,1,13),(47,'Ernestine Dare',NULL,0,1),(48,'Jerome Strosin',NULL,1,6),(49,'Bertha Medhurst',NULL,0,14),(50,'Leola Schinner',NULL,0,6),(51,'Olen Sipes',NULL,0,14),(52,'Mack Harber',NULL,0,13),(53,'Miss Nicolette Tillman PhD',NULL,1,10),(54,'Mr. Sebastian Fadel V',NULL,0,13);
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

-- Dump completed on 2021-09-03 18:32:22
