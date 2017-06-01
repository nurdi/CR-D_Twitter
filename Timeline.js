import React from 'react';
import $ from 'jquery';

class Timeline extends React.Component{


	deleteTweet(e){
		$.ajax({
         url: 'http://localhost:80/reactApp/delete_tweet.php',
         type: 'POST',
         data: {id: e},
         success: function(response) {
            alert('sukses');
            location.reload();
         },
         error: function(errors) {
            console.log('error');
            $('.tweets-container p:first').text('Request error');
         }
      });
	}

	render(){
		const styles= {
			id: {
				width:50,
			    justifyContent: 'center',
			    alignItems: 'center',
			    padding:0
			}
		}
		console.log('a '+this.props.tweets);
		return (
			<div>
				<table>
					<tbody >
					{this.props.tweets.map((tweet) => 
						<tr key={tweet.id}>
							<td style={{'width':'40%'}}>{tweet.text}</td>
							<td style={{'width':'40%'}}>{tweet.created_at}</td>
							<td style={{'width':'40%'}}>{tweet.user}</td>
							<td style={{'width':'40%'}}><button onClick={this.deleteTweet.bind(this, tweet.id)} >X</button></td>
						</tr>
					)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Timeline;
