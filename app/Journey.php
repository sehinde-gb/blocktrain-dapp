<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Journey extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
          'start', 'destination', 'cost'
    ];

    /**
     *  A journey belongs to a user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(\App\User::class);
    }


}
