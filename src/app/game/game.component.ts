import { Component, OnInit, Input, ViewChild, AfterViewInit, OnDestroy  } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'pm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ]),
    trigger('welcomeScreenDis', [
      state('true', style({
        opacity: 1,
        transform: 'translateX(0%)'
      })),
      state('false', style({
        opacity: 0,
        transform: 'translateX(-200%)'
      })),
      transition('true => false', animate('1000ms ease-out')),
      transition('false => true', animate('1000ms ease-in'))
    ]),
    trigger('ruleScreenAppDis', [
      state('true', style({
        opacity: 1,
        transform: 'translateX(0%)'
      })),
      state('false', style({
        opacity: 0,
        transform: 'translateX(-200%)'
      })),
      transition('true => false', animate('1000ms ease-out')),
      transition('false => true', animate('1000ms ease-in'))
    ]),
    trigger('levelOneScreenAppDis', [
      state('true', style({
        opacity: 1,
        transform: 'translateX(0%)'
      })),
      state('false', style({
        opacity: 0,
        transform: 'translateX(-200%)'
      })),
      transition('true => false', animate('1000ms ease-out')),
      transition('false => true', animate('1000ms ease-in'))
    ]),
    trigger('ruleScreenAdd', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0%)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateX(-200%)'
      })),
      transition('true => false', animate('1000ms ease-out')),
      transition('false => true', animate('1000ms ease-in'))
    ]),
    trigger('levelTwoScreen', [
      state('true', style({
        opacity: 1,
        transform: 'translateX(0%)'
      })),
      state('false', style({
        opacity: 0,
        transform: 'translateX(-200%)'
      })),
      transition('true => false', animate('1000ms ease-out')),
      transition('false => true', animate('1000ms ease-in'))
    ]),
    trigger('endOfGame', [
      state('true', style({
        opacity: 1,
        transform: 'translateX(0%)'
      })), 
      state('false', style({
        opacity: 0,
        transform: 'translateX(-200%)'
      })),
      transition('true => false', animate('1000ms ease-out')),
      transition('false => true', animate('1000ms ease-in'))
    ])
  ]
})
export class GameComponent implements OnInit, AfterViewInit, OnDestroy  {
  stateFocus: string = 'inactive';
  welcomeScreenVisible: string = 'true';
  ruleScreenVisible: string = 'false';

  ruleScreenVisibleF: string = 'false';
  levelOneVisible: string = 'false';

  levelOneVisibleF: string = 'false'

  levelTwoVisible: string = 'false';

  levelTwoVisibleF: string = 'false';


  userScore: number = 0;
  userOption: string = '';
  aiScore: number = 0;
  aiOption: string = '';

  aiPlay: string[] = ['rock', 'paper', 'scissors'];
  aiPlayTwo: string[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];


  tempResultText: string = '';
  finalResultText: string = '';

  aiPlayChoiceNbr: number = -99;
  
  hint: string = '';
  solution: string = '';
  funFact: string = 'Rock Paper Scissors is considered the oldest hand game in the world. In fact, the game dates all the way back to the Chinese Han Dynasty.';

  levelTwoRule: string = 'hide';

  isGameFinished: string = 'false';

  setHint(): void {
    if (this.aiPlayChoiceNbr==0){
      this.hint = 'Do you like boxing?';
    } else if (this.aiPlayChoiceNbr==1){
      this.hint = 'Taking notes ? Why ?';
    } else if (this.aiPlayChoiceNbr == 2){
      this.hint = 'I am not good enough for grass, sorry!';
    } else if (this.aiPlayChoiceNbr==3){
      this.hint = 'Regeneration is my superpower.';
    } else if (this.aiPlayChoiceNbr==4){
      this.hint = 'Nah, that the wrong universe.';
    }
    console.log('inside hint');
  }

  setSolution(): void {
    if (this.aiPlayChoiceNbr==0){
      this.solution = 'Paper or Spock';
    } else if (this.aiPlayChoiceNbr==1){
      this.solution = 'Lizard or Scissors';
    } else if (this.aiPlayChoiceNbr == 2){
      this.solution = 'Spock or Rock';
    } else if (this.aiPlayChoiceNbr==3){
      this.solution = 'Scissors or Rock';
    } else if (this.aiPlayChoiceNbr==4){
      this.solution = 'Lizard or Paper';
    }
  }

  updateScore(){
    //this.levelTwoRule = 'show';
    //this.levelTwoRule = 'hide';
    if (this.userScore == 3){
      this.levelTwoRule = 'show';
    }
    if (this.levelTwoRule === 'show'){
      this.levelOneVisible = (this.levelOneVisible === 'true' ? 'false' : 'true');
      this.levelTwoVisible = (this.levelTwoVisible === 'true' ? 'false' : 'true');
      this.resetScore();
    } else if (this.aiScore === 3){
      //this.levelOneVisibleF = (this.levelOneVisibleF === 'true' ? 'false' : 'true');
      this.levelTwoRule = 'hide';
      this.levelOneVisible = (this.levelOneVisible === 'true' ? 'false' : 'true');
      this.isGameFinished = 'true';
      this.finalResultText = 'Unfortunately, you lost!';
      this.resetScore();
    }// else for going to the last screen if they lost
  }
  resetScore(){
    this.userScore = 0;
    this.aiScore = 0;
    this.userOption = '';
    this.aiOption = '';
    this.tempResultText = '';
    
  }
  checkAnswer(option: string): void{
    this.userOption = option;
    this.aiOption = this.aiPlay[this.aiPlayChoiceNbr];
    this.hint = '';
    this.solution = '';

    if (option == this.aiPlay[this.aiPlayChoiceNbr]){
      this.tempResultText = 'You tied!';
    } else if (option == 'rock') {
      if (this.aiPlay[this.aiPlayChoiceNbr] == 'paper') {
        this.tempResultText = 'You lost!';
        this.aiScore += 1;
      } else {
        this.tempResultText = 'You won!';
        this.userScore++;
      }
    } else if (option == 'paper') {
      if (this.aiPlay[this.aiPlayChoiceNbr] == 'rock') {
        this.tempResultText = 'You won!';
        this.userScore++;
      } else {
        this.tempResultText = 'You lost!';
        this.aiScore += 1;
      }
    } else if (option == 'scissors') {
      if (this.aiPlay[this.aiPlayChoiceNbr] == 'paper'){
        this.tempResultText = 'You won!';
        this.userScore++;
      } else {
        this.tempResultText = 'You lost!';
        this.aiScore += 1;
      }
    }

    this.updateScore();
    this.aiPlayChoiceNbr = Math.floor(Math.random() * 3);
    console.log("AI play: " + this.aiPlayChoiceNbr + " " + this.aiPlay[this.aiPlayChoiceNbr]);
    console.log(this.userScore);
  }

  updateScoreTwo () {
    
  }
  checkAnswerTwo(option: string): void{
    this.userOption = option;
    this.aiOption = this.aiPlayTwo[this.aiPlayChoiceNbr];
    this.hint = '';
    this.solution = '';

    if (option == this.aiPlayTwo[this.aiPlayChoiceNbr]) {
      this.tempResultText = 'You tied!';
    } else if (option == 'rock') {
      if (this.aiPlayTwo[this.aiPlayChoiceNbr] == 'scissors' || this.aiPlayTwo[this.aiPlayChoiceNbr] == 'lizard') {
        this.tempResultText = 'You won!';
        this.userScore++;
      } else {
        this.tempResultText = 'You lost!';
        this.aiScore += 1;
      }
    } else if (option == 'paper') {
      if (this.aiPlayTwo[this.aiPlayChoiceNbr] == 'rock' || this.aiPlayTwo[this.aiPlayChoiceNbr] == 'spock'){
        this.tempResultText = 'You won!';
        this.userScore++;
      } else {
        this.tempResultText = 'You lost!';
        this.aiScore += 1;
      }
    } else if (option == 'scissors') {
      if (this.aiPlayTwo[this.aiPlayChoiceNbr] == 'lizard' || this.aiPlayTwo[this.aiPlayChoiceNbr] == 'paper') {
        this.tempResultText = 'You won!';
        this.userScore++;
      } else {
        this.tempResultText = 'You lost!';
        this.aiScore += 1;
      }
    } else if (option == 'lizard') {
      if (this.aiPlayTwo[this.aiPlayChoiceNbr] == 'spock' || this.aiPlayTwo[this.aiPlayChoiceNbr]== 'paper') {
        this.tempResultText = 'You won!';
        this.userScore++;
      } else {
        this.tempResultText = 'You lost!';
        this.aiScore += 1;
      }
    } else if (option == 'spock') {
      if (this.aiPlayTwo[this.aiPlayChoiceNbr] == 'scissors' || this.aiPlayTwo[this.aiPlayChoiceNbr] == 'rock') {
        this.tempResultText = 'You won!';
        this.userScore++;
      } else {
        this.tempResultText = 'You lost!';
        this.aiScore += 1;
      }
    }

    this.aiPlayChoiceNbr = Math.floor(Math.random() * 5);
    console.log("AI play: " + this.aiPlayChoiceNbr + " " + this.aiPlayTwo[this.aiPlayChoiceNbr]);

    this.updateScoreTwo();
    if (this.aiScore == 3) {
      this.finalResultText = 'Unfortunately, you lost!';
    } else if (this.userScore == 3) {
      this.finalResultText = 'Congratulations, you won!';
    }

    if (this.aiScore === 3 || this.userScore == 3){
      this.isGameFinished = 'true';
      this.levelTwoVisibleF = (this.levelTwoVisibleF === 'true' ? 'false' : 'true');
    }
    
  }

  ngAfterViewInit(): void {
  }
  audio: any;
  volume: number = 0.1;
  playAudio(){
    this.audio = new Audio();
    this.audio.src = "assets/audio/music.mp3";
    this.audio.volume = this.volume;
    this.audio.load;
    this.audio.play();
  }
  ngOnDestroy(): void {
    if(this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  } 
  ngOnInit(): void {
    this.playAudio();

    this.initializeAll();
    this.aiPlayChoiceNbr = Math.floor(Math.random() * 3);
    console.log("AI play: " + this.aiPlayChoiceNbr + " " + this.aiPlay[this.aiPlayChoiceNbr]);
    //console.log("rand number: " + this.aiPlay[this.aiPlayChoiceNbr]);
  }
  initializeAll(){
    this.stateFocus = 'inactive';
    //this.welcomeScreenVisible = 'true';
    this.ruleScreenVisible = 'false';
    this.ruleScreenVisibleF = 'false';
  }
  toggleFocus(){
    this.stateFocus = (this.stateFocus === 'inactive' ? 'active' : 'inactive');
    console.log("in toggleFocus()");
  }
  toggleDisappearWelcome(){
    this.welcomeScreenVisible = (this.welcomeScreenVisible === 'true' ? 'false' : 'true');
    this.ruleScreenVisible = (this.ruleScreenVisible === 'true' ? 'false' : 'true');

    //this.ruleScreenVisibleF = (this.ruleScreenVisibleF === 'true' ? 'false' : 'true');
  }
  toggleDisappearRule(){
    this.ruleScreenVisible = (this.ruleScreenVisible === 'true' ? 'false' : 'true');
    console.log("in toggleDisapperRule()");
    this.levelOneVisible = (this.levelOneVisible === 'true' ? 'false' : 'true');
    this.aiPlayChoiceNbr = Math.floor(Math.random() * 3);
    console.log("AI play: " + this.aiPlayChoiceNbr + " " + this.aiPlay[this.aiPlayChoiceNbr]);

    //this.levelOneVisibleF = (this.levelOneVisibleF === 'true' ? 'false' : 'true');
  }
  toggleLevelOneRule(){
    this.levelOneVisible = (this.levelOneVisible === 'true' ? 'false' : 'true');
    this.levelOneVisibleF = (this.levelOneVisibleF === 'true' ? 'false' : 'true');
    this.aiPlayChoiceNbr = Math.floor(Math.random() * 5);
    console.log("AI play: " + this.aiPlayChoiceNbr + " " + this.aiPlayTwo[this.aiPlayChoiceNbr]);
    console.log("in toggleDisapperRule()");

  }
  toggleDisappearRuleTwo(){
    this.levelTwoVisible = (this.levelTwoVisible === 'true' ? 'false' : 'true');
    this.levelTwoVisibleF = (this.levelTwoVisibleF === 'true' ? 'false' : 'true');
    console.log("in toggleDisapperRule()");
    this.aiPlayChoiceNbr = Math.floor(Math.random() * 5);
    console.log("AI play: " + this.aiPlayChoiceNbr + " " + this.aiPlayTwo[this.aiPlayChoiceNbr]);

  }
  toggleLevelTwo(){
    this.levelTwoVisibleF = (this.levelTwoVisibleF === 'true' ? 'false' : 'true');
    console.log("in toggleDisapperRule()");
    this.aiPlayChoiceNbr = Math.floor(Math.random() * 5);
    console.log("AI play: " + this.aiPlayChoiceNbr + " " + this.aiPlayTwo[this.aiPlayChoiceNbr]);

  }
}




/*

import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'pm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  stateFocus: string = 'inactive';

  ngOnInit(): void {
    this.initializeAll();
  }
  initializeAll(){
    this.stateFocus = 'inactive';
  }
  toggleFocus(){
    this.stateFocus = (this.stateFocus === 'inactive' ? 'active' : 'inactive');
    console.log("in toggleFocus()");
  }
}


*/

