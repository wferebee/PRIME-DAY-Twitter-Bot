require('dotenv').config();
var axios = require('axios');
var Twitter = require('twitter');
var isPrime = require('is-prime');

var client = new Twitter({
    consumer_key: process.env.CKEY,
    consumer_secret: process.env.CSECRET,
    access_token_key: process.env.ATKEY,
    access_token_secret: process.env.ATSECRET
    });

const x = new Date().toLocaleString().split(',')[0];
var arr1 = x.split('/');

const [month, date, year] = arr1;

const eDate = parseInt(`${date}${month}${year}`);
const aDate = parseInt(`${month}${date}${year}`);

const eDateSplit = `${date}/${month}/${year}`;
const aDateSplit = `${month}/${date}/${year}`;

const tweetDate = () => {
    if (isPrime(aDate)) {
        if (isPrime(eDate)) {
            return `The date of today is PRIME in both America (${aDateSplit}) and Europe (${eDateSplit})`
        } else {
            return `The date of today is PRIME in America (${aDateSplit})`
        }
    } else if (isPrime(eDate)) {
        return `The date of today is PRIME in Europe (${eDateSplit})`

    } else {
        return `The date of today is NOT PRIME (${aDateSplit} - ${eDateSplit}) :(`
    }
}

const todaysTweet = tweetDate();

	client.post('statuses/update', {status: `${todaysTweet}`}, function(error, tweet, response){
		if(!error){
			console.log(tweet);
		} else {
            console.log(error)
        }
	})
