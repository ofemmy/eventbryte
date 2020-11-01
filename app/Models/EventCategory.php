<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventCategory extends Model
{
    protected $guarded = [];
    use HasFactory;
    public function events()
    {
        return $this->hasMany('\app\Models\Event');
    }
}
