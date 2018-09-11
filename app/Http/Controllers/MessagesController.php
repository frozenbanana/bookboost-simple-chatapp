<?php

namespace App\Http\Controllers;

use App\Message;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MessagesController extends Controller
{
    /*
        Authentication
    */

    public function __construct() {
        $this->middleware('jwt.auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // check for page limit otherwise page limit = 5
        $pageLimit = $request->input('limit') ? $request->input('limit'):5;

        $messages = Message::with(
                ['User' => function($query) {
                    $query->select('id', 'name');   // query selects from User table id and name
                }]
                )->select('id', 'content', 'user_id', 'receiver_id')->paginate($pageLimit); // then selects from Message table id, content, ...

        return response()->json([
            'data' => (new Message)->transformCollection($messages),
        ],
            200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return "Create!";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (!$request->content or !$request->user_id or !$request->receiver_id) {
            return Response()->json([
                'error' => [
                    'message' => 'Please Provide Both content, user_id and receiver_id',
                ],
            ], 422);
        }

        $message = Message::create($request->all());

        return Response()->json([
            'message' => 'Message created succesfully',
            'data' => (new Message)->transform($message),
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $message = Message::find($id);
        $message = Message::with(
            ['User' => function ($query) {
                $query->select('id', 'name');
            }]
        )->find($id);

        if (!$message) {
            return response()->json([
                'error' => [
                    'message' => 'Message does not exist'],
            ], 404);
        }

        // get previous and next message id
        $previous = Message::where('id', '<', $message->id)->max('id');
        $next = Message::where('id', '>', $message->id)->min('id');

        return response()->json([
            'previous_id' => $previous,
            'next_id' => $next,
            'data' => (new Message)->transform($message),
            ],
            200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (!$request->content) {
            return Response()->json([
                'error' => [
                    'message' => 'Please provide new content to update message',
                ],
            ], 422);
        }

        $message = Message::find($id);
        // Updating old
        $message->content = $request->content;
        $message->save();

        return Response()->json([
            'message' => 'Message has been updated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Message::destroy($id);
        return Response()->json([
            'message' => 'Message '. $id .' has  been deleted',
        ]);

    }

        /**
     * Store a newly created resource in storage.
     *
     * @param (number, number)  ($user_id, $receiver_id)
     * @return \Illuminate\Http\Response
     */
    public function getConversation($user_id, $receiver_id)
    {
        if (!$user_id or !$receiver_id) {
            return Response()->json([
                'error' => [
                    'message' => 'Please Provide Both user_id and receiver_id',
                ],
            ], 422);
        }

        $conversation = Message::where(
             function($query)  use ($user_id){
                $query->where( 'user_id', $user_id)                          // get all messages FROM active user
                            ->orWhere('receiver_id', $user_id);              //  get all messages  TO active user
            })
            ->where( function($query) use ($receiver_id){         // INTERSECT
                $query->where( 'receiver_id', $receiver_id)         // get all messages FROM active reciever
                            ->orWhere('user_id', $receiver_id);            //  get all messages  TO active reciever;
            })
             ->select('id', 'content', 'user_id', 'receiver_id', 'created_at')
             ->orderBy('created_at', 'asc')->paginate(20);

        return Response()->json([
            'message' => 'Conversation created succesfully',
            'conversation' => (new Message)->transformCollection($conversation),
        ]);

    }
}
