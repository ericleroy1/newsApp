import React from "react";
import { Card } from "react-bootstrap";


function NewsItem(props) {


	return (
		<Card style={{ width: "70%" }}>
			<a href={props.url} target="_blank" rel="noreferrer" style={{color: 'black'}}>
			<div className="cardTop">
			<Card.Img className="cardPic" variant="top" src={props.image}/>
			<Card.Title className="cardTitle">{props.title}</Card.Title>
			</div>
			</a>
			<Card.Body>
				<a href={props.url} target="_blank" rel="noreferrer" style={{color: 'black'}}>
				<Card.Text>{props.content}</Card.Text>
				</a>
			</Card.Body>
		</Card>
	);
}

export default NewsItem;
