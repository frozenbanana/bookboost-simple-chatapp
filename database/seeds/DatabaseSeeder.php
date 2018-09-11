<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard(); // enable mass assignment

        $this->call(MessagesTableSeeder::class);
        $this->call(UsersTableSeeder::class);

        Model::reguard(); // disable mass assignment

    }
}
