import React from 'react';

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text :""
		}
		this.onTweetChange = this.onTweetChange.bind(this);
		this.addTweet = this.addTweet.bind(this);
	}

	onTweetChange(event){
		this.setState({
			text : event.target.value
		})
	}

	addTweet(event){
		this.props.onAdd(this.state);
		this.setState({
			text :""
		})
	}

	render(){

		return (
			<div>
				<table>
					<tbody >
						<tr>
							<td style={{'width':'40%'}}><input type="text" value='nurdiarto' disabled></input></td>
						</tr>
						<tr>
							<td style={{'width':'40%'}}><textarea onChange={this.onTweetChange} value={this.state.text}></textarea></td>
						</tr>
						<tr>
							<td style={{'width':'40%'}}><button onClick={this.addTweet}>Post</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Form;
