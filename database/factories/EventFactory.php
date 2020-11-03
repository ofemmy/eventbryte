<?php

namespace Database\Factories;

use App\Models\Event;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Event::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title'=>$this->faker->sentence,
            'description'=>$this->faker->text,
            'imageUrl'=>$this->faker->imageUrl($width = 640, $height = 480),
            'price'=>$this->faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 300),
            'address-line1'=>$this->faker->streetAddress,
            'zipcode'=>$this->faker->postcode,
            'city'=>$this->faker->city,
            'country'=>$this->faker->country,
            'status'=>'Draft',
            'max-attendees'=>$this->faker->numberBetween($min = 50, $max = 200),
            'startDate'=>$this->faker->dateTime,
            'endDate'=>$this->faker->dateTime,
        ];
    }
}
