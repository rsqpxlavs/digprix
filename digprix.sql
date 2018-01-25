-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 25, 2018 at 07:58 PM
-- Server version: 10.2.6-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `digprix`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(10) UNSIGNED NOT NULL,
  `fname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `super_admin` tinyint(4) NOT NULL DEFAULT 0,
  `purge_sessions` timestamp NULL DEFAULT NULL,
  `active` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `fname`, `lname`, `photo`, `email`, `username`, `mobile`, `password`, `remember_token`, `super_admin`, `purge_sessions`, `active`, `created_at`, `updated_at`) VALUES
(1, 'Sourav', 'R', 'brock.jpg', 'srv.nxr@gmail.com', 'sourav', '8013463113', '$2y$10$0ma3CMsBSnYM73TQBtWMxueqzk/YplA07tT3zVM.O39YL9JZclDuu', 'Els1pxd3CitINj206AWfTsBhdSX3BTmg5KxwnkPF3EAAC7Vx2xg9kGB1tKJy', 1, '2018-01-08 15:44:04', 1, '2017-10-17 09:49:29', '2018-01-08 15:44:04'),
(2, 'Sourav Rakshit', NULL, NULL, 'developer.srv1@gmail.com', 'sourav2', '5698555547', '$2y$10$ryf4oJuFf3SZ2bqedVjaIevLLml.I.oY29d3AK4vXsXsgEYn2RW0u', '8vZJ6x8YmYUmL7Z6OwdQAOmxKMubNYjDAdwCJ9HvKioQxAS5bGl443e9M1PK', 0, '2018-01-01 10:28:25', 1, '2017-12-04 08:32:11', '2018-01-08 13:58:47'),
(3, 'Sourav ', 'Rk', NULL, 'abc@xyz.com', 'srv111', NULL, '$2y$10$cOx2.xScU78aE22a6LP4ueC/7wSOS/gEez1opGoCbB2bD65SDBhVm', NULL, 0, '2018-01-24 05:43:31', 1, '2018-01-04 15:46:31', '2018-01-24 05:43:31'),
(4, 'Brock', 'Lesnar', NULL, 'brock@wwe.com', 'brock11', NULL, '$2y$10$JoLg7QM.6dNPwZ1dCMDbne/G60qDj/drz8E6AetXGnZ9JznjITfBW', 'wXkrzXB2BTHXepLV28ujtc8wzRIn5JXy1ePLwcrhjOVoQTxupUgC83oDbEK3', 0, NULL, 1, '2018-01-25 13:46:43', '2018-01-25 13:46:43'),
(5, 'Lorem', 'Xy', NULL, 'abc@abc.com', 'abcuser', NULL, '$2y$10$6V3/EzHpQmzFBcEKnZIbouUn0GpwwlXCKtoXXfOWgLiX8QfRUywJi', NULL, 0, NULL, 1, '2018-01-25 18:29:30', '2018-01-25 18:29:30'),
(6, 'Power', 'Ranger', NULL, 'abc@example.com', NULL, NULL, '$2y$10$nq7O4YX3jq/EfPprDEtueunrEZ/jBkdnFaOrkjuGNweykM/vHb2JW', NULL, 0, NULL, 1, '2018-01-25 18:30:38', '2018-01-25 18:30:38');

-- --------------------------------------------------------

--
-- Table structure for table `admin_login_history`
--

CREATE TABLE `admin_login_history` (
  `id` int(10) UNSIGNED NOT NULL,
  `admin_id` int(11) NOT NULL,
  `ip` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isMobile` tinyint(1) NOT NULL,
  `isTablet` tinyint(1) NOT NULL,
  `isDesktop` tinyint(1) NOT NULL,
  `isBot` tinyint(1) NOT NULL,
  `isChrome` tinyint(1) NOT NULL,
  `isFirefox` tinyint(1) NOT NULL,
  `isOpera` tinyint(1) NOT NULL,
  `isSafari` tinyint(1) NOT NULL,
  `isIE` tinyint(1) NOT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `browser` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `platform` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `device_model` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_login_history`
--

INSERT INTO `admin_login_history` (`id`, `admin_id`, `ip`, `isMobile`, `isTablet`, `isDesktop`, `isBot`, `isChrome`, `isFirefox`, `isOpera`, `isSafari`, `isIE`, `user_agent`, `browser`, `platform`, `device_model`, `created_at`, `updated_at`) VALUES
(26, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:46:04', '2018-01-01 10:46:04'),
(29, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-03 12:55:16', '2018-01-03 12:55:16'),
(30, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-04 00:45:32', '2018-01-04 00:45:32'),
(32, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-04 12:10:25', '2018-01-04 12:10:25'),
(34, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-04 15:47:21', '2018-01-04 15:47:21'),
(36, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-04 17:20:23', '2018-01-04 17:20:23'),
(37, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-08 12:35:36', '2018-01-08 12:35:36'),
(39, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-08 13:22:23', '2018-01-08 13:22:23'),
(40, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-08 13:23:33', '2018-01-08 13:23:33'),
(41, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-08 13:24:12', '2018-01-08 13:24:12'),
(42, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-08 13:24:32', '2018-01-08 13:24:32'),
(44, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-08 15:35:12', '2018-01-08 15:35:12'),
(46, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-08 15:41:52', '2018-01-08 15:41:52'),
(47, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-08 15:42:55', '2018-01-08 15:42:55'),
(48, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-08 15:43:08', '2018-01-08 15:43:08'),
(50, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-08 15:43:52', '2018-01-08 15:43:52'),
(55, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-24 10:16:12', '2018-01-24 10:16:12'),
(56, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-24 13:33:22', '2018-01-24 13:33:22'),
(57, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-24 14:15:32', '2018-01-24 14:15:32'),
(59, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-24 14:42:00', '2018-01-24 14:42:00'),
(60, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 05:31:31', '2018-01-25 05:31:31'),
(61, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 08:01:53', '2018-01-25 08:01:53'),
(62, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 09:51:48', '2018-01-25 09:51:48'),
(63, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 11:16:29', '2018-01-25 11:16:29'),
(64, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 13:57:57', '2018-01-25 13:57:57'),
(65, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 14:02:01', '2018-01-25 14:02:01'),
(66, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 14:04:28', '2018-01-25 14:04:28'),
(67, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 14:05:15', '2018-01-25 14:05:15'),
(68, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 15:11:21', '2018-01-25 15:11:21'),
(69, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 15:18:48', '2018-01-25 15:18:48'),
(70, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 17:32:33', '2018-01-25 17:32:33'),
(71, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 17:49:23', '2018-01-25 17:49:23'),
(72, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 17:49:25', '2018-01-25 17:49:25'),
(73, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 17:49:25', '2018-01-25 17:49:25'),
(74, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-25 18:47:48', '2018-01-25 18:47:48');

-- --------------------------------------------------------

--
-- Table structure for table `admin_password_resets`
--

CREATE TABLE `admin_password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `admin_roles`
--

CREATE TABLE `admin_roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'NA'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_roles`
--

INSERT INTO `admin_roles` (`id`, `role`, `display_name`) VALUES
(1, 'admin', 'Admin'),
(2, 'employee', 'Employee'),
(3, 'blog_author', 'Blog Author');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `queue`, `payload`, `attempts`, `reserved_at`, `available_at`, `created_at`) VALUES
(22, 'backend-high', '{\"displayName\":\"App\\\\Events\\\\backend\\\\account\\\\LogoutFromAllDevices\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"Illuminate\\\\Broadcasting\\\\BroadcastEvent\",\"command\":\"O:38:\\\"Illuminate\\\\Broadcasting\\\\BroadcastEvent\\\":7:{s:5:\\\"event\\\";O:47:\\\"App\\\\Events\\\\backend\\\\account\\\\LogoutFromAllDevices\\\":3:{s:14:\\\"broadcastQueue\\\";s:12:\\\"backend-high\\\";s:7:\\\"user_id\\\";s:1:\\\"3\\\";s:6:\\\"socket\\\";N;}s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1516772605, 1516772605),
(23, 'backend-high', '{\"displayName\":\"App\\\\Events\\\\backend\\\\account\\\\LogoutFromAllDevices\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"Illuminate\\\\Broadcasting\\\\BroadcastEvent\",\"command\":\"O:38:\\\"Illuminate\\\\Broadcasting\\\\BroadcastEvent\\\":7:{s:5:\\\"event\\\";O:47:\\\"App\\\\Events\\\\backend\\\\account\\\\LogoutFromAllDevices\\\":3:{s:14:\\\"broadcastQueue\\\";s:12:\\\"backend-high\\\";s:7:\\\"user_id\\\";s:1:\\\"3\\\";s:6:\\\"socket\\\";N;}s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1516772610, 1516772610);

-- --------------------------------------------------------

--
-- Table structure for table `map_admin_roles`
--

CREATE TABLE `map_admin_roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `admin_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `map_admin_roles`
--

INSERT INTO `map_admin_roles` (`id`, `admin_id`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 2, 2, '2018-01-24 08:13:27', '2018-01-23 18:30:00'),
(2, 2, 3, '2018-01-24 07:57:41', '2018-01-23 18:30:00'),
(3, 3, 2, '2018-01-24 04:59:30', '2018-01-23 18:30:00'),
(4, 4, 1, '2018-01-24 18:30:00', '2018-01-24 18:30:00'),
(5, 5, 3, NULL, NULL),
(6, 6, 2, NULL, NULL),
(7, 6, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2017_10_13_064539_create_jobs_table', 1),
(4, '2017_10_13_064741_create_failed_jobs_table', 2),
(5, '2017_10_17_083944_create_admins_table', 3),
(6, '2017_10_17_095244_create_admin_password_resets_table', 4),
(7, '2017_10_24_141511_admins_table_add_mobile_col', 5),
(8, '2017_11_06_192932_admins_table_break_name_col_to_fname_lname', 6),
(10, '2017_12_30_132512_add_purge_sessions_col_to_admins_table', 7),
(12, '2018_01_01_110822_create_admin_login_history', 8),
(13, '2018_01_01_132111_create_user_login_history', 9),
(14, '2018_01_03_100436_create_admin_roles', 10),
(15, '2018_01_03_100556_add_role_col_to_admin', 10),
(16, '2018_01_04_172020_add_role_display_name_col_to_admin_role', 11),
(17, '2018_01_24_104407_remove_role_col_from_admin_table', 12),
(18, '2018_01_24_104614_create_map_admin_roles_table', 13);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Sourav', 'developer.srv1@gmail.com', '$2y$10$2KuTXRRtJlQibaeZbAJDFOb.y2YHmIxv/nDlXFpiXXfwbqIF.2k1q', 'rTesLnETfn9ctzEZpaK5uNaI1et52bnWL0lCqlqBDJVNBryO3ViiyDKXASy8', '2017-10-13 02:59:17', '2017-10-13 03:00:52');

-- --------------------------------------------------------

--
-- Table structure for table `user_login_history`
--

CREATE TABLE `user_login_history` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `ip` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isMobile` tinyint(1) NOT NULL,
  `isTablet` tinyint(1) NOT NULL,
  `isDesktop` tinyint(1) NOT NULL,
  `isBot` tinyint(1) NOT NULL,
  `isChrome` tinyint(1) NOT NULL,
  `isFirefox` tinyint(1) NOT NULL,
  `isOpera` tinyint(1) NOT NULL,
  `isSafari` tinyint(1) NOT NULL,
  `isIE` tinyint(1) NOT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `browser` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `platform` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `device_model` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_login_history`
--

INSERT INTO `user_login_history` (`id`, `user_id`, `ip`, `isMobile`, `isTablet`, `isDesktop`, `isBot`, `isChrome`, `isFirefox`, `isOpera`, `isSafari`, `isIE`, `user_agent`, `browser`, `platform`, `device_model`, `created_at`, `updated_at`) VALUES
(1, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 07:59:03', '2018-01-01 07:59:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`),
  ADD UNIQUE KEY `admins_username_unique` (`username`);

--
-- Indexes for table `admin_login_history`
--
ALTER TABLE `admin_login_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_password_resets`
--
ALTER TABLE `admin_password_resets`
  ADD KEY `admin_password_resets_email_index` (`email`);

--
-- Indexes for table `admin_roles`
--
ALTER TABLE `admin_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `map_admin_roles`
--
ALTER TABLE `map_admin_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_login_history`
--
ALTER TABLE `user_login_history`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `admin_login_history`
--
ALTER TABLE `admin_login_history`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `admin_roles`
--
ALTER TABLE `admin_roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `map_admin_roles`
--
ALTER TABLE `map_admin_roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_login_history`
--
ALTER TABLE `user_login_history`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
