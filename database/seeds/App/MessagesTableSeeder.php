<?php

use Illuminate\Database\Seeder;
use App\Message;


class MessagesTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker\Factory::create();

        foreach(range(1,30) as $index) {
            Message::create([
                'user_id' => $faker->numberBetween($min = 1, $max = 5),
                'receiver_id' => $faker->numberBetween($min = 1, $max = 5),
                'content' => $faker->paragraph($nbSentence = 2),
            ]);
        }
    }
}
