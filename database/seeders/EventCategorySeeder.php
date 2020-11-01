<?php

namespace Database\Seeders;

use App\Models\EventCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventCategorySeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories=[
            'Business/Professional',
            'Charity/Causes',
            'Community/Culture',
            'Education',
            'Fashion/Beauty',
            'Entertainment/Media',
            'Government/Politics',
            'Health/Wellness',
            'Lifestyle',
            'Music',
            'Religion/spirituality',
            'Science/Tech',
            'Sport/Fitness',
            'Travel/Outdoor',
            'Party',
            'Other'
        ];
        //Empty database first
        DB::table('event_categories')->delete();
        foreach ($categories as $category) {
            EventCategory::create(['name'=>$category]);
        }
    }
}
