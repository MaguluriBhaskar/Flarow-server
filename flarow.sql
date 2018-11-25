-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 25, 2018 at 10:33 PM
-- Server version: 5.7.24-0ubuntu0.16.04.1
-- PHP Version: 7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flarow`
--

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `property_id` int(11) NOT NULL,
  `title` varchar(30) DEFAULT NULL,
  `type` varchar(5) DEFAULT NULL,
  `location` varchar(10) DEFAULT NULL,
  `image` text,
  `cost` varchar(10) DEFAULT NULL,
  `description` text,
  `width` varchar(10) DEFAULT NULL,
  `length` varchar(10) DEFAULT NULL,
  `account_id` varchar(10) DEFAULT NULL,
  `address` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `properties`
--

INSERT INTO `properties` (`property_id`, `title`, `type`, `location`, `image`, `cost`, `description`, `width`, `length`, `account_id`, `address`) VALUES
(1, 'Sai Surya Developers', 'R', '1', NULL, '2', 'sdfkjskfjsdlkfjslkjfldskjfldskfjdlsfk', '100', '2000', '1', 'lkejfdlskjflsdjflsdfjdslfkjsdlfkjsdlfsf'),
(2, 'L & T ', 'F', '2', NULL, '3', 'kdsfjlksjfldskjfldskjfldskjflsdf', '20', '20', '1', 'klsjdslkdjlaskdjlaskdjlskdajdlasd'),
(3, 'Raghu Construction s', 'A', '1', NULL, '2', 'Hdhskksksmskzmxnnz', '200', '200', '3', 'Nznxhskskksjdhd');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `gender` varchar(2) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  `address` text,
  `pincode` varchar(20) DEFAULT NULL,
  `city` varchar(5) DEFAULT NULL,
  `country` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `mobile`, `image`, `gender`, `type`, `address`, `pincode`, `city`, `country`) VALUES
(1, 'MaguluriBhaskar', 'maguluribhaskar@gmail.com', 'bhaskarbas', '9823749823', NULL, 'M', 'Seller', NULL, '98345793485', '1', '1'),
(3, 'Karthik kumar', 'gopi@carettech.com', 'bhaskarbas', '7660075515', NULL, 'M', 'Owner', NULL, '142788382', '3', '2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`property_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
