import React from 'react';
import $ from 'jquery';
import { Link,Route } from 'react-router-dom';

import Timeline from './Timeline';
import Form from './Form';

class App extends React.Component{
   
   componentDidMount() {
      $.ajax({
         url: 'http://localhost:80/reactApp/get_timeline.php',
         type: 'GET',
         dataType: 'JSON',
         success: function(response) {
               this.setState({
                     list : response
               })
         }.bind(this),
         error: function(errors) {
            console.log('error');
            $('.tweets-container p:first').text('Request error');
         }
      });

   }

   constructor(props){
      super(props);     

      this.state = {
         list : []
      }
   }

   onAddTweet(e){
      $.ajax({
         url: 'http://localhost:80/reactApp/post_tweet.php',
         type: 'POST',
         data: {text: e.text},
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

   render() {
     
      console.log(this.state);
      return (
      	<div>
            <div>
               <h1>Timeline User</h1>
            </div>
            <div>
               <Timeline tweets={this.state.list} />
            </div>

            <div>
               <h1>Post Tweet</h1>
            </div>
            <div>
               <Form onAdd={this.onAddTweet.bind(this)}/>
            </div>
		</div>
      );
   }
}

export default App;