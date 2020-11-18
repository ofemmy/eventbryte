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
            $table->text('imageUrl')->nullable();
            $table->foreignId('user_id')->constrained('users');
            $table->longText('description')->nullable();
            $table->text('addressLine1')->nullable();
            $table->text('addressLine2')->nullable();
            $table->string('zipcode')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();
            $table->enum('status',['Published','Past','Draft'])->default('Draft');
            $table->enum('pricingModel',['free','paid'])->nullable();
            $table->enum('attendanceModel',['limited','unlimited'])->nullable();
            $table->enum('location',['online','venue'])->nullable();
            $table->integer('maxAttendees')->default(1000000); //1000000 is to represent unlimited attendees
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
