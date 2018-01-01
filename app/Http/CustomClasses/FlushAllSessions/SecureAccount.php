<?php

namespace App\Http\CustomClasses\FlushAllSessions;

interface SecureAccount
{
    /**
     * broadcast the event
     */
    public function broadcastUser();

    /**
     * put purge_sessions timestamp
     */
    public function purgeSessions();

    /**
     * logout the user and regenerate session
     */
    public function logoutTheUser();

    /**
     * perform secure account
     */
    public function secureAccount();
}
