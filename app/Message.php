<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    //
    protected $fillable = [ 'user_id', 'receiver_id',  'content' ];

    public function user() {
        return $this->belongsTo('App\User');
    }

        /*  Transformation functions */
    public function transformCollection($messages)
    {
        $messagesArray = $messages->toArray();
        // return $messagesArray;
        return [
            'total' => $messagesArray['total'],
            'per_page' => intval($messagesArray['per_page']),
            'current_page' => $messagesArray['current_page'],
            'last_page' => $messagesArray['last_page'],
            'next_page_url' => $messagesArray['next_page_url'],
            'prev_page_url' => $messagesArray['prev_page_url'],
            'msg_nr_start' => $messagesArray['from'],
            'msg_nr_stop' => $messagesArray['to'],
            'data' => array_map([$this, 'transform'], $messagesArray['data'])
        ];
    }

    public  function transform($message)
    {
        // $receiver_user = User::find($message['receiver_id']);
        // $receiver_name = $receiver_user['name'];

        return [
            'id' => $message['id'],
            'user_id' => $message['user_id'],
            'receiver_id' => $message['receiver_id'],
            'content' => $message['content'],
            // 'sender_name' => $message['user']['name'],
            // 'receiver_name' => $receiver_name,
            'created_at' => $message['created_at']
        ];
    }
}
