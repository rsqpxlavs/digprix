# TABLE STRUCTURES #

----------

## admins
- stores info of the admins
- `photo` col holds image name of `assets\backend\img\profile` directory
- `purge_sessions` column stores timestamp when requesting logout from all devices


##users
- customer acc details

## user\_login\_history & admin\_login\_history

- login history about device, browser, ip etc. with the help of `hisorange/browser-detect`
- user has many history
- admin has many history

## admin_roles ##
holds predefined 3 roles for admin level users, role is mapped directly into the admins table as role_id can be access from admin instance by relation - `accesslevel`