
// import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			quoteArray: [
				{
					id: 1,
					qoute: 'You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.',
					author: "Madeleine L'Engle",
					color: '#5784BA'
				},
				{
					id: 2,
					qoute: "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
					author: 'Stephen King',
					color: "#218B82"
				},
				{
					id: 3,
					qoute: 'We write to taste life twice, in the moment and in retrospect.',
					author: 'Anaïs Nin',
					color: "#C47482"

				},
				{
					id: 4,
					qoute: "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
					author: "Mark Twain",
					color: "gray"
				},
				{
					id: 5,
					qoute: "One day I will find the right words, and they will be simple.",
					author: "Jack Kerouac, The Dharma Bums",
					color: "#8DA47E"
				}
			],
			quote: '',
			author: '',
			color: ''
		}
		this.fetchAdvice = this.fetchAdvice.bind(this)
	}
	componentDidMount() {
		this.fetchAdvice();
	}
	fetchAdvice() {
		var random = Math.floor(Math.random() * (4 - 0 + 1)) + 0
		this.setState({
			quote: this.state.quoteArray[random].qoute,
			author: this.state.quoteArray[random].author,
			color: this.state.quoteArray[random].color
		})
	}


	render() {
		const Container = { justifyContent: "center", alignItems: "center", backgroundColor: "white", textAlign: 'center', width: "540px", padding: "20px 40px", borderRadius: "7px" }
		const Author = { justifyContent: "center", textAlign: 'right', fontSize: "20px", color: this.state.color }
		const NewQuote = { marginLeft: "auto", fontSize: "15px", backgroundColor: this.state.color }
		const Quote = { fontSize: "28px", color: this.state.color }
		const Buttons = { display: "flex", justifyContent: "space-between", alignItems: "center" }
		const Share = { display: "flex", fontSize: "15px", backgroundColor: this.state.color }
		const But1 = {  backgroundColor: this.state.color, fontSize: "13px" , padding: "6px", border: "none", borderRadius: "4px", color: "white"}
		const But2 = { backgroundColor: this.state.color, fontSize: "13px" , padding: "6px", border: "none", borderRadius: "4px", color: "white"}

		const Wrapper = {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			minHeight: "100vh",
			backgroundColor: this.state.color
		}
		return (
			<div style={Wrapper} id='quote-box'>
				<div style={Container}>
					<p style={Quote} id='text'>{this.state.quote}</p>
					<p style={Author} id='author'>- {this.state.author}</p>
					<div style={Buttons}>
						<div style={Share}>
							{/* <button style={But1}><FontAwesomeIcon icon={faTwitter}/><a id='tweet-quote'>Twit</a></button>
							<button style={But1}><a id='tweet-quote'>Tumbler</a></button> */}
						</div>
						<div style={NewQuote}>
							<button style={But2} id='new-quote' onClick={this.fetchAdvice}>New quote</button>
						</div>
					</div>

				</div>
			</div>
		);
	}
}



/**
 * What is the use of using constructor props and super props
 * what do you mean when you declare a constant with curly braces e.g. const {quote}
 */
export default App;
