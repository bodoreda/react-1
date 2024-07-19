/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {

	let [title, setTitle] = useState(['홍길동', '김영희', '박철수'])
	let [like, setLike] = useState([0, 0, 0])
	let [modal, setModal] = useState(false)

	const fn_changeTitle = (index) => {
		let copyTitle = [...title]
		copyTitle[index] = '제목 변경'+ index
		setTitle(copyTitle)
	}

	const fn_sort = () => {
		let copyTitle = [...title]
		copyTitle.sort()
		setTitle(copyTitle)
	}

	const fn_modalOnOff = () => {
		setModal(!modal)
	}

	const fn_incrementLike = (index) => {
		let copyLike = [...like]
		copyLike[index] += 1
		setLike(copyLike)
	}

	/*
		[1, 2, 3].map(()=>{console.log(1)})		// array length 만큼 console.log(1) 실행
		[1, 2, 3].map((a)=>{console.log(a)})		// function의 매개변수는 array의 원소
		[1, 2, 3].map((a)=>{return 'hi'})		// return value를 array에 array length 만큼 적재
	*/
	
	return (
		<div className="App">
			<div className="nav">
				<h4>REACT STUDY</h4>
				<button onClick={fn_sort} style={{width:'40px', height:'30px', fontSize:'10px'}}>정렬</button>
			</div>

			{
				title.map((item, i)=>{
					return (
						<div className="list" key={i}>
						<h4>
							{title[i]}
							<span onClick={()=>{fn_incrementLike(i)}}>👍</span> {like[i]}
						</h4>
						<p onClick={fn_modalOnOff}>글 내용3</p>
						<button onClick={()=>{fn_changeTitle(i)}}>수정</button>
					</div>
					)
				})
			}
			
			{/* 
			onClick={fn_incrementLike(i)} 는 컴포넌트가 렌더링 될 때 fn_incrementLike(i)를 즉시 호출한다.
			이로인해 onClick이벤트가 발생하기 전에 fn_incrementLike(i) 함수가 실행된다.
			클릭시 아무일도 일어나지 않으며, 이미 컴포넌트가 렌더링 될 때 함수가 실행되었기 때문.

			onClick={()=>{fn_incrementLike(i)}} 는 익명함수를 사용하여 fn_incrementLike(i)함수를 호출.
			클릭 이벤트가 발생할 때만 익명 함수가 호출되며, 그 안에서 fn_incrementLike(i) 함수가 실행된다. 
			*/}
			
			{
				modal == true ? <Modal/> : null
			}			
		</div>
	);
}

const Modal = () => {
	return (
		<div className="modal">
			<h4>제목</h4>
			<p>날짜</p>
			<p>내용</p>
		</div>
	)
}

export default App;
