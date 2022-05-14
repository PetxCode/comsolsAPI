import React from "react";
import styled from "styled-components";
const CardProps = ({ image, title, text }) => {
	return (
		<Container>
			<Image src={image} />
			<Overlay>
				<Title>{title}</Title>
				<Text>{text}</Text>
			</Overlay>
		</Container>
	);
};

export default CardProps;

const Container = styled.div`
	margin: 10px;
	width: 190px;
	height: 150px;
	border-radius: 5px;
	overflow: hidden;
	position: relative;
	@media screen and (max-width: 768px) {
		margin: 20px;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Overlay = styled.div`
	position: absolute;
	background: rgba(30, 76, 61, 0.6);
	width: 100%;
	height: 100%;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding-left: 20px;
`;

const Title = styled.div`
	color: white;
	font-weight: 700;
	font-size: 19px;
`;

const Text = styled.div`
	color: #ffb850;
	margin-bottom: 10px;
	font-size: 13px;
`;
