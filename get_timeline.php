<?php

	require "twitteroauth/autoload.php";
	use Abraham\TwitterOAuth\TwitterOAuth;

	$consumer_key = "v8L6qGQoK4CYEch8HUSPbmhbz";
	$consumer_secret = "tJEaM0LHhTZfucFqSlQ62Fv4xtBs3OSeCstPH8e5PIbRxJPkQ3";
	$access_token = "249921523-mKic9tBwXqpWatN1mb6YyAX3u9L2xvQyQRa2STo3";
	$access_token_secret = "JBc4gkxOCEqf0dFe2jZE5okcXl98mFTT0x0yaevMsQXve";
	$user_id = '249921523';
	$screen_name = 'nurdiarto';
	$count = 5;

	$connection = new TwitterOAuth($consumer_key, $consumer_secret, $access_token, $access_token_secret);
	$content = $connection->get("account/verify_credentials");

	// $statues = $connection->post("statuses/update", ["status" => "hello world #3"]);
	// $statues = $connection->post("statuses/destroy", ["id" => "869054072103370752"]);
	$statuses = $connection->get("statuses/user_timeline", ["count" => $count, "exclude_replies" => true, "user_id" => $user_id, "screen_name=" => $screen_name]);

	// echo "a";
	header('Access-Control-Allow-Origin: *');

	header('Access-Control-Allow-Methods: GET, POST');

	header("Access-Control-Allow-Headers: X-Requested-With");

	$tweets = array();
	foreach ($statuses as $status) {
		$content = array('id' => $status->id, 'text' => $status->text, 'user' => $status->user->screen_name, 'created_at' => $status->created_at);
		array_push($tweets, $content);
	}

	// echo "<pre>";
	// print_r($tweets);
	echo json_encode($tweets);
	// echo "<h2>Time Line</h2>";
	// for ($i=0; $i < count($statuses) ; $i++) { 
	// 	echo ($i+1).". ".$statuses[$i]->text."<br />";
	// }

?>