<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // laracasts/generators -- dev
        // Adds new php artisan make functions
        if ($this->app->environment() == 'local' ) {
            $this->app->register('Laracasts\Generators\GeneratorsServiceProvider');
        }
    }
}
