
 let score= JSON.parse(localStorage.getItem('score'));

  
  if(score==null)
  {
    score=
    {
    wins: 0,
    losses: 0,
    ties: 0
    }
  }

  let consecutiveWin= 0;
  let consecutiveLose= 0;
  let consecutiveTie= 0;


function playGame(playerMove)
{
  let computerMove= '';
  let randomNumber= Math.random();

  if(randomNumber>0 && randomNumber<1/3)
  {
    computerMove= 'Rock';
  }

  else if(randomNumber>1/3 && randomNumber<2/3)
  {
    computerMove= 'Paper';
  }

  else if(randomNumber>2/3 && randomNumber<1)
  {
    computerMove= 'Scissors';
  }

  let result= '';

  if(computerMove==playerMove)
  {
    result= 'It is a tie';
  }

  else if((computerMove=='Rock' && playerMove=='Paper')||(computerMove=='Paper' && playerMove=='Scissors')||(computerMove=='Scissors' && playerMove=='Rock'))
  {
    result= 'You win!';
  }

  else
  {
    result= 'Computer wins'
  }

 
  
  
 

  if(result=='You win!')
  {
    score.wins+=1;
  }

  else if(result=='Computer wins')
  {
    score.losses+=1;
  }

  else if(result=='It is a tie')
  {
    score.ties+=1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  
  


  updateScore();

  document.getElementById('statement').innerHTML= `You chose ${playerMove}<br>Computer chose ${computerMove}<br>Thus, ${result}`;
  myModal.showModal();

  return playerMove;
 

}

function updateScore()
{

  document.getElementById('winList').innerHTML= score.wins;
  document.getElementById('winList').style.transitionDuration='0.1ms';
  document.getElementById('lossList').innerHTML= score.losses;
  document.getElementById('lossList').style.transitionDuration='0.1ms';
  document.getElementById('tieList').innerHTML= score.ties;
  document.getElementById('tieList').style.transitionDuration='0.1ms';
  
}

function rotate()
{
  let agc= document.querySelector('.btn');

  if(agc.style.transform=='rotate(0deg)')
  
  {

  agc.style.transform='rotate(360deg)';
  agc.style.transition='transform 0.3s ease';

  }

  else
  {

    agc.style.transform='rotate(0deg)';

  }

}

 updateScore();



 
