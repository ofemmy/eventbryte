<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function index()
    {
        $events = Event::paginate(10);
        foreach ($events as $ev) {
            $ev['detailsUrl'] = URL::route('events.show', $ev);
        }
        return Inertia::render('Index', [
            'events' => $events
        ]);
    }
}
