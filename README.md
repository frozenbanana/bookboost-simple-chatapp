# bookboost-simple-chatapp
A simple chat app showcasing Angular and Laravel (PHP)

# Introduction
This application was made as a request from bookboost.io to showcase basic understanding in Laravel (backend) and Angular (frontend).
The app has basic chat functionality such as:

- One to One Messaging
- Authentication
- Route guarding
- Option to change reciever

A running demo can be found at: https://simple-chat-app-bookboost.herokuapp.com/

# About backend
The backend is written with the [Laravel Framework 5.7.2](https://laravel.com/).

The rouute list is as follows:

+--------+-----------+----------------------------------------------+--------------------+------------------------------------------------------------------+-------------------+
| Domain | Method    | URI                                          | Name               | Action                                                           | Middleware        |
+--------+-----------+----------------------------------------------+--------------------+------------------------------------------------------------------+-------------------+
|        | GET|HEAD  | /                                            |                    | Closure                                                          | web               |
|        | GET|HEAD  | api/authenticate                             | authenticate.index | App\Http\Controllers\AuthenticateController@index                | web,cors          |
|        | POST      | api/authenticate                             |                    | App\Http\Controllers\AuthenticateController@authenticate         | web,cors          |
|        | POST      | api/authenticate/user                        |                    | App\Http\Controllers\AuthenticateController@getAuthenticatedUser | web,cors          |
|        | GET|HEAD  | api/messages                                 | messages.index     | App\Http\Controllers\MessagesController@index                    | web,cors,jwt.auth |
|        | POST      | api/messages                                 | messages.store     | App\Http\Controllers\MessagesController@store                    | web,cors,jwt.auth |
|        | GET|HEAD  | api/messages/create                          | messages.create    | App\Http\Controllers\MessagesController@create                   | web,cors,jwt.auth |
|        | GET|HEAD  | api/messages/from/{user_id}/to/{reciever_id} |                    | App\Http\Controllers\MessagesController@getConversation          | web,cors,jwt.auth |
|        | DELETE    | api/messages/{message}                       | messages.destroy   | App\Http\Controllers\MessagesController@destroy                  | web,cors,jwt.auth |
|        | GET|HEAD  | api/messages/{message}                       | messages.show      | App\Http\Controllers\MessagesController@show                     | web,cors,jwt.auth |
|        | PUT|PATCH | api/messages/{message}                       | messages.update    | App\Http\Controllers\MessagesController@update                   | web,cors,jwt.auth |
|        | GET|HEAD  | api/messages/{message}/edit                  | messages.edit      | App\Http\Controllers\MessagesController@edit                     | web,cors,jwt.auth |
|        | GET|HEAD  | api/user                                     |                    | Closure                                                          | api,auth:api      |
|        | GET|HEAD  | api/users                                    | users.index        | App\Http\Controllers\UsersController@index                       | web,cors          |
|        | POST      | api/users                                    | users.store        | App\Http\Controllers\UsersController@store                       | web,cors          |
|        | GET|HEAD  | api/users/create                             | users.create       | App\Http\Controllers\UsersController@create                      | web,cors          |
|        | GET|HEAD  | api/users/{user}                             | users.show         | App\Http\Controllers\UsersController@show                        | web,cors          |
|        | PUT|PATCH | api/users/{user}                             | users.update       | App\Http\Controllers\UsersController@update                      | web,cors          |
|        | DELETE    | api/users/{user}                             | users.destroy      | App\Http\Controllers\UsersController@destroy                     | web,cors          |
|        | GET|HEAD  | api/users/{user}/edit                        | users.edit         | App\Http\Controllers\UsersController@edit                        | web,cors          |
+--------+-----------+----------------------------------------------+--------------------+------------------------------------------------------------------+-------------------+

The main route that is used for message service is `api/messages/from/{user_id}/to/{reciever_id}` to get a conversation between two users.

# About frontend
The frontend is written in [Angular 6.1.5](https://angular.io/)
The app overview is as follows:

![Generated with compodoc](https://imgur.com/0NbxrRR)

# Known issues
- To get new messages the frontend is requesting the api every 4000ms. It makes the chat feel unresponsive.
- The auto scrolling is also timed to the conversation update. That means the conversation is forced to scroll down every 4000 ms.
- Pagination handling is not fully implemented in frontend. After 40 messages the new messages will not be retreived.
