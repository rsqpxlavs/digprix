-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 28, 2018 at 03:00 PM
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
(1, 'Sourav', 'R', 'brock.jpg', 'srv.nxr@gmail.com', 'sourav', '8013463113', '$2y$10$0ma3CMsBSnYM73TQBtWMxueqzk/YplA07tT3zVM.O39YL9JZclDuu', 'cIMvXFcg2E1Y6I7o9gXmfUaXXBpaWV4UsLz3I3ITPhgrj8dPMebGY2gvIfNX', 1, '2018-01-28 13:58:14', 1, '2017-10-17 09:49:29', '2018-01-28 13:58:14'),
(2, 'Sourav Rakshit', NULL, NULL, 'developer.srv1@gmail.com', 'sourav2', '5698555547', '$2y$10$ryf4oJuFf3SZ2bqedVjaIevLLml.I.oY29d3AK4vXsXsgEYn2RW0u', '7Q8PX55NTRbpo21UPeVscYbSHbWe3905vMcyQvXnFzjsG9z9xup8yDt4CLkq', 0, '2018-01-01 10:28:25', 1, '2017-12-04 08:32:11', '2018-01-08 13:58:47'),
(3, 'Sourav ', 'Rk', NULL, 'abc@xyz.com', 'srv111', NULL, '$2y$10$/8rn8Fais1/gq353MUWghenq0a8ElnUiDxBJH4V.GXjoi2SLgJ7C.', 'ZB7AlZPX4dK2C2SpwgZzB8h2YROG02I7pjMMoakp8tGubA6eiQx9CbylJuje', 0, '2018-01-28 13:33:16', 1, '2018-01-04 15:46:31', '2018-01-28 13:33:16'),
(4, 'Brock', 'Lesnar', NULL, 'brock@wwe.com', 'brock11', NULL, '$2y$10$iK62JngJVXSYs/J7ipdaKuSO1nvblPCTVsl6Zql3qAjlV/ggXuVV6', 'xmkUJ9hk1G3sUun5ZUB9H0s1MO20Hcx3J1nyX5kYR3G673qGTv4uMQOxNdCH', 0, '2018-01-28 13:55:46', 1, '2018-01-25 13:46:43', '2018-01-28 13:55:46'),
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
(148, 2, '127.0.0.1', 0, 0, 1, 0, 0, 1, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0', 'Firefox 58', 'Windows 10', '', '2018-01-28 07:25:00', '2018-01-28 07:25:00'),
(156, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 08:35:05', '2018-01-28 08:35:05'),
(166, 2, '127.0.0.1', 0, 0, 1, 0, 0, 1, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0', 'Firefox 58', 'Windows 10', '', '2018-01-28 09:24:54', '2018-01-28 09:24:54'),
(171, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 09:27:45', '2018-01-28 09:27:45'),
(172, 4, '127.0.0.1', 0, 0, 1, 0, 0, 1, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0', 'Firefox 58', 'Windows 10', '', '2018-01-28 09:29:31', '2018-01-28 09:29:31'),
(174, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 10:02:55', '2018-01-28 10:02:55'),
(181, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 10:22:37', '2018-01-28 10:22:37'),
(182, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 10:25:01', '2018-01-28 10:25:01'),
(183, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 11:41:22', '2018-01-28 11:41:22'),
(186, 4, '127.0.0.1', 0, 0, 1, 0, 0, 1, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0', 'Firefox 58', 'Windows 10', '', '2018-01-28 12:31:00', '2018-01-28 12:31:00'),
(187, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 12:35:53', '2018-01-28 12:35:53'),
(188, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 12:38:34', '2018-01-28 12:38:34'),
(189, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:24:55', '2018-01-28 13:24:55'),
(190, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:26:13', '2018-01-28 13:26:13'),
(191, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:29:35', '2018-01-28 13:29:35'),
(192, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:30:26', '2018-01-28 13:30:26'),
(193, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:30:31', '2018-01-28 13:30:31'),
(194, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:32:54', '2018-01-28 13:32:54'),
(195, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:33:00', '2018-01-28 13:33:00'),
(203, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:44:31', '2018-01-28 13:44:31'),
(204, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:44:50', '2018-01-28 13:44:50'),
(205, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:46:42', '2018-01-28 13:46:42'),
(206, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:46:52', '2018-01-28 13:46:52'),
(207, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:47:14', '2018-01-28 13:47:14'),
(208, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:47:30', '2018-01-28 13:47:30'),
(209, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:48:50', '2018-01-28 13:48:50'),
(210, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:49:17', '2018-01-28 13:49:17'),
(211, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:50:25', '2018-01-28 13:50:25'),
(212, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:51:42', '2018-01-28 13:51:42'),
(213, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:51:58', '2018-01-28 13:51:58'),
(214, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:52:13', '2018-01-28 13:52:13'),
(215, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:52:58', '2018-01-28 13:52:58'),
(216, 3, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:53:21', '2018-01-28 13:53:21'),
(217, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:54:59', '2018-01-28 13:54:59'),
(218, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:55:20', '2018-01-28 13:55:20'),
(219, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:55:36', '2018-01-28 13:55:36'),
(220, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:57:55', '2018-01-28 13:57:55'),
(221, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:58:03', '2018-01-28 13:58:03'),
(222, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:58:34', '2018-01-28 13:58:34'),
(223, 4, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 13:58:42', '2018-01-28 13:58:42');

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
(87, 'backend-low', '{\"displayName\":\"App\\\\Events\\\\backend\\\\notify\\\\SomeoneJustLoggedIn\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"timeout\":null,\"timeoutAt\":null,\"data\":{\"commandName\":\"Illuminate\\\\Broadcasting\\\\BroadcastEvent\",\"command\":\"O:38:\\\"Illuminate\\\\Broadcasting\\\\BroadcastEvent\\\":7:{s:5:\\\"event\\\";O:45:\\\"App\\\\Events\\\\backend\\\\notify\\\\SomeoneJustLoggedIn\\\":2:{s:14:\\\"broadcastQueue\\\";s:11:\\\"backend-low\\\";s:6:\\\"socket\\\";N;}s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:5:\\\"delay\\\";N;s:7:\\\"chained\\\";a:0:{}}\"}}', 0, NULL, 1517120982, 1517120982);

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
(1, 'Sourav', 'developer.srv1@gmail.com', '$2y$10$2KuTXRRtJlQibaeZbAJDFOb.y2YHmIxv/nDlXFpiXXfwbqIF.2k1q', 'z9mFrEbLBSjI23roMiDMtfEN9YLMXxyoKxrmCQrAPoTqZ45Rto2mf8r6QmYo', '2017-10-13 02:59:17', '2017-10-13 03:00:52');

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
(2, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-27 11:42:20', '2018-01-27 11:42:20'),
(3, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-27 17:53:56', '2018-01-27 17:53:56'),
(4, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 08:17:22', '2018-01-28 08:17:22'),
(5, 1, '127.0.0.1', 0, 0, 1, 0, 0, 1, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0', 'Firefox 58', 'Windows 10', '', '2018-01-28 08:54:04', '2018-01-28 08:54:04'),
(6, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 10:19:33', '2018-01-28 10:19:33'),
(7, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 10:21:12', '2018-01-28 10:21:12'),
(8, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 10:22:20', '2018-01-28 10:22:20'),
(9, 1, '127.0.0.1', 0, 0, 1, 0, 0, 1, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0', 'Firefox 58', 'Windows 10', '', '2018-01-28 12:29:32', '2018-01-28 12:29:32'),
(10, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 12:29:39', '2018-01-28 12:29:39'),
(11, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36', 'Chrome 64.0.3282', 'Windows 10', '', '2018-01-28 12:29:47', '2018-01-28 12:29:47');

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=224;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
