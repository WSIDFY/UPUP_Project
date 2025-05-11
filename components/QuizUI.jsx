import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/quiz.module.css';

export default function QuizUI() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [graded, setGraded] = useState(false);
  const [explanationIndex, setExplanationIndex] = useState(null);

  // 현재는 예시 데이터입니다!
  const filename = '컴퓨터 구조론';     // 파일명 받아오기
  const question = '1. 아래의 보기들 중 옳지 않은 것을 고르시오.[객관식]';  // 문제 내용 받아오기

  // 보기 문항 받아오기
  const options = [
    '첫 번째 문항이며 해당 문항은 오답입니다.',
    '두 번째 문항이며 해당 문항은 오답입니다.',
    '세 번째 문항이며 해당 문항은 오답입니다.',
    '네 번째 문항이며 해당 문항은 정답입니다.',
    '다섯 번째 문항이며 해당 문항은 오답입니다.',
  ];

  const correctIndex = 3;       // 정답문항 식별 및 정의
  
  // 채점 풀이 내용 받아오기
  const explanations = [
    '1번은 틀렸기 때문에 오답입니다.',
    '2번은 틀렸기 때문에 오답입니다.',
    '3번은 틀렸기 때문에 오답입니다.',
    '4번은 옳은 내용이기 때문에 정답입니다.',
    '5번은 틀렸기 때문에 오답입니다.',
  ];

  const handleSelect = (idx) => {
    if (!graded) {
      setSelected(idx);
    } else {
      setSelected(idx);
      setExplanationIndex(idx); // 채점 후에도 보기 클릭 시 해설 갱신
    }
  };

  const handleGrade = () => {
    if (graded) {
      // 다시 채점 모드로 전환
      setGraded(false);
      setSelected(null);
      setExplanationIndex(null);
    } else if (selected !== null) {
      // 채점
      setGraded(true);
      setExplanationIndex(selected);
    }
  };

  const goBackToFileList = () => {
    router.push('/filelist'); // 🔙 뒤로가기
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={styles.backButton} onClick={goBackToFileList}>
          ← 뒤로가기
        </button>

        <div className={styles.header}>{filename}</div>
        <div className={styles.questionBox}>{question}</div>

        <div className={styles.options}>
          {options.map((text, idx) => {
            const isSelected = selected === idx;
            const isCorrect = graded && idx === correctIndex;
            const isWrong = graded && isSelected && idx !== correctIndex;

            return (
              <div
                key={idx}
                className={`${styles.option} 
                  ${isSelected ? styles.selected : ''} 
                  ${isCorrect ? styles.correct : ''} 
                  ${isWrong ? styles.incorrect : ''}`}
                onClick={() => handleSelect(idx)}
              >
                {`${idx + 1}. ${text}`}
              </div>
            );
          })}
        </div>

        <button className={styles.button} onClick={handleGrade}>
          {graded ? '다시 풀기' : '채점하기'}
        </button>

        {graded && explanationIndex !== null && (
          <div className={styles.explanationBox}>
            <div className={styles.answerSummary}>
              {explanationIndex + 1}번 : {explanationIndex === correctIndex ? '정답' : '오답'}
            </div>
            <div className={styles.explanationHeader}>(해설)</div>
            <div>{explanations[explanationIndex]}</div>
          </div>
        )}
      </div>
    </div>
  );
}
