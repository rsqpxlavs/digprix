-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2018 at 07:09 PM
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
  `role_id` int(11) DEFAULT NULL,
  `purge_sessions` timestamp NULL DEFAULT NULL,
  `active` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `fname`, `lname`, `photo`, `email`, `username`, `mobile`, `password`, `remember_token`, `super_admin`, `role_id`, `purge_sessions`, `active`, `created_at`, `updated_at`) VALUES
(1, 'Sourav', 'R', 'brock.jpg', 'srv.nxr@gmail.com', 'sourav', '8013463113', '$2y$10$0ma3CMsBSnYM73TQBtWMxueqzk/YplA07tT3zVM.O39YL9JZclDuu', 'vDB7dXYU3UmhRXJKTvFTsNXxXLsaoRmH5PGZKZLjo8f8Gqr1L20k9HwTL3Cv', 1, NULL, '2018-01-01 10:28:53', 1, '2017-10-17 09:49:29', '2018-01-01 10:28:53'),
(2, 'sourav2', NULL, NULL, 'developer.srv1@gmail.com', 'sourav2', NULL, '$2y$10$ryf4oJuFf3SZ2bqedVjaIevLLml.I.oY29d3AK4vXsXsgEYn2RW0u', 'iGCMYvS9oT37sWLtWwHzcwpFBZf5m8nWPcQxYusscoPnkPKP3WEo3LQuHuHi', 0, 2, '2018-01-01 10:28:25', 1, '2017-12-04 08:32:11', '2018-01-01 10:45:51');

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
(1, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 06:19:06', '2018-01-01 06:19:06'),
(2, 2, '127.0.0.1', 0, 0, 1, 0, 0, 1, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0', 'Firefox 57', 'Windows 10', '', '2018-01-01 06:21:05', '2018-01-01 06:21:05'),
(3, 1, '127.0.0.1', 1, 0, 0, 0, 0, 0, 0, 0, 0, 'Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30', 'Android Browser 4.0.2', 'Android 4.0.2', 'Galaxy Nexus', '2018-01-01 06:55:51', '2018-01-01 06:55:51'),
(4, 1, '127.0.0.1', 0, 1, 0, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Android 4.3', 'Nexus 7', '2018-01-01 06:57:57', '2018-01-01 06:57:57'),
(5, 1, '127.0.0.1', 0, 0, 1, 0, 0, 1, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0', 'Firefox 57', 'Windows 10', '', '2018-01-01 07:13:17', '2018-01-01 07:13:17'),
(6, 1, '127.0.0.1', 0, 0, 1, 0, 0, 0, 0, 0, 1, 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko', 'Internet Explorer 11', 'Windows 10', '', '2018-01-01 07:15:44', '2018-01-01 07:15:44'),
(7, 1, '127.0.0.1', 0, 0, 1, 0, 0, 0, 1, 0, 0, 'Opera/9.80 (Macintosh; Intel Mac OS X 10.9.1) Presto/2.12.388 Version/12.16', 'Opera 12.16', 'Mac 10.9.1', '', '2018-01-01 07:16:37', '2018-01-01 07:16:37'),
(8, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 07:58:27', '2018-01-01 07:58:27'),
(9, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 08:21:06', '2018-01-01 08:21:06'),
(10, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 09:36:13', '2018-01-01 09:36:13'),
(11, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 09:36:40', '2018-01-01 09:36:40'),
(12, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 09:37:08', '2018-01-01 09:37:08'),
(13, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:00:07', '2018-01-01 10:00:07'),
(14, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:00:21', '2018-01-01 10:00:21'),
(15, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:01:24', '2018-01-01 10:01:24'),
(16, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:01:38', '2018-01-01 10:01:38'),
(17, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:02:55', '2018-01-01 10:02:55'),
(18, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:09:08', '2018-01-01 10:09:08'),
(19, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:09:16', '2018-01-01 10:09:16'),
(20, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:09:44', '2018-01-01 10:09:44'),
(21, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:09:52', '2018-01-01 10:09:52'),
(22, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:27:56', '2018-01-01 10:27:56'),
(23, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:28:06', '2018-01-01 10:28:06'),
(24, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:28:39', '2018-01-01 10:28:39'),
(25, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:28:45', '2018-01-01 10:28:45'),
(26, 2, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-01 10:46:04', '2018-01-01 10:46:04'),
(27, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-02 12:02:16', '2018-01-02 12:02:16'),
(28, 1, '127.0.0.1', 0, 0, 1, 0, 1, 0, 0, 0, 0, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36', 'Chrome 63.0.3239', 'Windows 10', '', '2018-01-03 12:38:42', '2018-01-03 12:38:42');

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
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_roles`
--

INSERT INTO `admin_roles` (`id`, `role`) VALUES
(1, 'admin'),
(2, 'employee'),
(3, 'blog_author');

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
(15, '2018_01_03_100556_add_role_col_to_admin', 10);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `admin_login_history`
--
ALTER TABLE `admin_login_history`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
