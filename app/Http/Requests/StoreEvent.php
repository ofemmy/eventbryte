<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class StoreEvent extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $today = Carbon::today();
        return [
            'title' => 'required|unique:events|max:200',
            'coverImage' => 'nullable|file',
            'user_id' => 'required',
            'description' => 'nullable|string',
            'addressLine1' => 'nullable|string',
            'addressLine2' => 'nullable|string',
            'pricingModel'=>'nullable|string',
            'attendanceModel'=>'nullable|string',
            'location'=>'nullable|string',
            'zipcode' => 'nullable|numeric',
            'city' => 'nullable|string',
            'country' => 'nullable|string',
            'status' => ['nullable', Rule::in(['Published', 'Draft', 'Past'])],
            'maxAttendees' => 'nullable|numeric',
            'registered' => 'nullable|numeric',
            'price' => 'nullable|numeric',
            'startDate' => "required|date_format:Y-m-d H:i:s|after_or_equal:{$today}",
            'endDate' => 'required|date_format:Y-m-d H:i:s|after:startDate'
        ];
    }
}
