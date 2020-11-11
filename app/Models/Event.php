<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{

    use HasFactory;
    protected $guarded = [];
    protected $with = ['user'];
    protected $hidden=[
        'created_at',
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function eventcategory()
    {
        return $this->belongsToMany('\App\Models\EventCategory');
    }
}
