<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->text('imageUrl');
            $table->foreignId('user_id')->constrained('users');
            $table->longText('description');
            $table->text('address-line1');
            $table->text('address-line2')->nullable();
            $table->string('zipcode');
            $table->string('city');
            $table->string('country');
            $table->enum('status',['Published','Past','Draft'])->default('Draft');
            $table->integer('max-attendees');
            $table->integer('registered')->default(0);
            $table->double('price',5,2)->default(0.00);
            $table->dateTime('startDate');
            $table->dateTime('endDate');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
