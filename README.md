# PRIME DAY Twitter Bot

 Will tweet out daily whether or not the date of the day is a prime number


# https://twitter.com/Mr_Prime_Dates

* ![Screenshot (124)](https://user-images.githubusercontent.com/53095806/112709375-6c195880-8e8f-11eb-8803-4da0e28447ef.png)


# Tech Used:

* Javascript
* Node
* Is-Prime npm package
* Twitter npm package
* Axios
* Heroku
* Heroku Scheduler (for scheduling the tweets)
* Papertrail - for app logging on Heroku
* env file - to hide sensitive material
* Procfile - so heroku could allow me to use a dyno in the correct way ( no longer in use as I get rid of the worker, I realized I did not need it because I could just use the Heroku Scheduler and the worker kept trying to tweet at random intervals causing me to use up my monthly dyno time)

