import React,{useState} from 'react'
import './Introduce.css'
import logo from '../images/logo.svg'
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'
const Introduce = () => {
  const difficulty =["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState('');
  const navigate=useNavigate();
  const TOTAL_QUESTIONS=10

  const startQuiz=()=>{
    if(difficultyChange){
         navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
    }
  }
  // console.log(difficultyChange,"difficultyChange")
  return (
    <div className='introduce'>
      <div className="introduce-container">
        <img src={logo} alt="" />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
        <div onClick={startQuiz} className='introduce-btn'>Quiz start</div>
      </div>
    </div>
  )
}

export default Introduce
