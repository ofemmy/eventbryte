<?php

namespace Database\Factories;

use App\Models\Event;
use App\Models\EventCategory;
use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventEventCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Model::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'event_id'=>Event::all()->random()->id,
            'eventcategory_id'=>EventCategory::all()->random()->id,
        ];
    }
}
