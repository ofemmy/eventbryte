<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\EventCategory;
use Database\Factories\EventEventCategoryFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventEventCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("event_eventcategory")->delete();
        $eventIds=DB::table('events')->pluck('id')->toArray();
        $eventCategoryIds=DB::table('event_categories')->pluck('id')->toArray();
        foreach ($eventCategoryIds as $evCat) {
            foreach (range(0,2) as $index) {
                DB::table('event_eventcategory')->insert([
                    'eventcategory_id'=>$evCat,
                    'event_id'=>$eventIds[array_rand($eventIds)],
                ]);
            }

        }
    }
}
