import { ReactComponent as Tumbler } from './tumblr.svg';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as Quotation } from './quote.svg';

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
		var random = Math.floor(Math.random() * this.state.quoteArray.length);
		this.setState({
			quote: this.state.quoteArray[random].qoute,
			author: this.state.quoteArray[random].author,
			color: this.state.quoteArray[random].color
		})
	}


	render() {
		const Container = { justifyContent: "center", alignItems: "center", backgroundColor: "white", textAlign: 'center', width: "480px", padding: "20px 30px 40px 40px", borderRadius: "7px" }
		const Author = { justifyContent: "center", textAlign: 'right', fontSize: "20px", color: this.state.color }
		const NewQuote = { marginLeft: "auto", fontSize: "15px", backgroundColor: this.state.color, borderRadius: "2px", height: "35px", width: "90px", alignItems: "center", }
		const Quote = { fontSize: "24px", color: this.state.color }
		const Buttons = { display: "flex", justifyContent: "space-between", alignItems: "center" }
		const Share = { display: "flex", backgroundColor: "white", gap: "6px" }
		const But1 = { display: "flex", justifyContent: "center", backgroundColor: this.state.color, fontSize: "13px", padding: "8px", border: "none", borderRadius: "2px", color: "white", width: "20px", height: "20px" }
		const But2 = { backgroundColor: this.state.color, fontSize: "13px", padding: "6px", border: "none", borderRadius: "4px", color: "white", marginTop: "3px" }

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
					<p style={Quote} id='text'><i><Quotation height={30} fill={this.state.color} /></i><strong> {this.state.quote}</strong></p>
					<p style={Author} id='author'>- {this.state.author}</p>
					<div style={Buttons}>
						<div style={Share}>
							<a href="https://twitter.com/" target="_blank"><i style={But1}><Twitter fill="white" height={20} /></i></a>
							<a href="https://www.tumblr.com/" target="_blank"><i style={But1}><Tumbler fill="white" /></i></a>
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


export default App;
