import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import VoiceCard from '/imports/ui/VoiceCard';

let voices = [{
  "userImg": "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lawyersweekly.com.au%2Fimages%2FLW_Media_Library%2F594partner-profile-pic-An.jpg&f=1",
  "voice": "Sooner or later, we will have to recognise that the Earth has rights, too, to live without pollution. What mankind must know is that human beings cannot live without Mother Earth, but the planet can live without humans.",
  "username": "@sajjadiah",
  "support": "$10.47"
},{

  "userImg": "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mills.edu%2Funiquely-mills%2Fstudents-faculty%2Fstudent-profiles%2Fimages%2Fstudent-profile-gabriela-mills-college.jpg&f=1",
  "voice": "Environmental pollution is an incurable disease. It can only be prevented.",
  "username": "@suzan",
  "support": "$10.47"
},{

  "userImg": "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.christopherxjjensen.com%2Fwp-content%2Fgallery%2Fprofile-pics%2FProfile-Pic_2014-09-07_1000px.jpg&f=1",
  "voice": "The cost of our success is the exhaustion of natural resources, leading to energy crises, climate change, pollution, and the destruction of our habitat. If you exhaust natural resources, there will be nothing left for your children. If we continue in the same direction, humankind is headed for some frightful ordeals, if not extinction.",
  "username": "@hitam_hitam",
  "support": "$10.47"
},{

  "userImg": "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwritestylesonline.com%2Fwp-content%2Fuploads%2F2016%2F08%2FFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg&f=1",
  "voice": "Pollution from human activities is changing the Earth's climate. We see the damage that a disrupted climate can do: on our coasts, our farms, forests, mountains, and cities. Those impacts will grow more severe unless we start reducing global warming pollution now.",
  "username": "@kambing",
  "support": "$10.47"
},{

  "userImg": "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fthispix.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fportrait-profile-008.jpg&f=1",
  "voice": "It is unfortunately true that our generation and that of your parents have left you with a big mess that will now be yours to clean up: wars, budget challenges, pollution, global warming, battles of health care, natural disasters. They're all there for you. We're willing those to you. Are you ready?",
  "username": "@puterikayangan",
  "support": "$10.47"
},{

  "userImg": "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fzblogged.com%2Fwp-content%2Fuploads%2F2015%2F11%2F5.png&f=1",
  "voice": "The science tells us that if we fail to reduce global warming pollution, global temperatures will rise to dangerous levels and unleash devastating extreme weather events and accelerate destructive sea level rise.",
  "username": "@Joedoh",
  "support": "$10.47"
},{

  "userImg": "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F2f%2FAlesso_profile.png&f=1",
  "voice": "When I'm grateful for all the blessings, it puts away all the stress about things not in my control. Things like long hours, aging, pollution, scandals... it helps me create perspective by just focusing on being grateful. Take that moment twice a day with yourself.",
  "username": "@lizza",
  "support": "$10.47"
},{

  "userImg": "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcoolspotters.com%2Ffiles%2Fphotos%2F1356415%2Fariana-grande-profile.jpg%3F1495830741&f=1",
  "voice": "Pollution is a serious one. Water pollution, air pollution, and then solid hazardous waste pollution. And then beyond that, we also have the resources issue. Not just water resources but other natural resources, the mining resources being consumed, and the destruction of our ecosystem.",
  "username": "@ari",
  "support": "$10.47"
},{

  "userImg": "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmclaughlinip.com%2Fwp-content%2Fuploads%2F2015%2F02%2Fprofile_blank.png&f=1",
  "voice": "Sustainability is not just about adopting the latest energy-efficient technologies or turning to renewable sources of power. Sustainability is the responsibility of every individual every day. It is about changing our behaviour and mindset to reduce power and water consumption, thereby helping to control emissions and pollution levels.",
  "username": "@sam",
  "support": "$10.47"
},{

  "userImg": "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F06%2F13%2F12%2F53%2Fprofile-2398782_640.png&f=1",
  "voice": "It isn't pollution that's harming the environment. It's the impurities in our air and water that are doing it.",
  "username": "@username",
  "support": "$10.47"
}]

export default class VoiceLayout extends Component{
  render(){
    return(
      <div>
      <h1 className='center-align'>People's Voices</h1>
      {voices.map(x=>{
      return <VoiceCard userImg={x.userImg} voice={x.voice} username={x.username} />
      })}
      </div>
    );
  }
}
