import React from "react";

import SpeakerCard from "../Components/SpeakerCard";
import { Element } from "react-scroll";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import winola from "../images/2023/winola.webp";
import vivian from "../images/2023/vivian.webp";
import shan  from "../images/2023/shan.webp";
import rania from "../images/2023/rania.webp";
import nicholas from "../images/2023/nicholas.webp";
import ibnu from "../images/2023/ibnu.webp";
import daphne from "../images/2023/daphne.webp";

import valencia from '../images/2024/speakers/valencia.png'
import natasha from '../images/2024/speakers/natasha.png'
import filda from '../images/2024/speakers/filda.png'
import kezia from '../images/2024/speakers/kezia.png'
import chefbry from '../images/2024/speakers/chefbry.png'
import bryant from '../images/2024/speakers/bryant.png'
import oscar from '../images/2024/speakers/oscar.png'

import FlipImage from "../Components/FlipImgSpeaker";
import anton from '../images/2025/speakers/Anton.png'
import bagusde from '../images/2025/speakers/Bagusde.png'
import betha from '../images/2025/speakers/Betha.png'
import billy from '../images/2025/speakers/Billy.png'
import christie from '../images/2025/speakers/Christie.png'
import gisella from '../images/2025/speakers/Gisella.png'
import irawati from '../images/2025/speakers/Irawati.png'
import nicole from '../images/2025/speakers/Nicole.png'

import anton_desc from '../images/2025/speakers/desc/Anton_desc.png'
import bagusde_desc from '../images/2025/speakers/desc/Bagusde_desc.png'
import betha_desc from '../images/2025/speakers/desc/Betha_desc.png'
import billy_desc from '../images/2025/speakers/desc/Billy_desc.png'
import christie_desc from '../images/2025/speakers/desc/Christie_desc.png'
import gisella_desc from '../images/2025/speakers/desc/Gisella_desc.png'
import irawati_desc from '../images/2025/speakers/desc/Irawati_desc.png'
import nicole_desc from '../images/2025/speakers/desc/Nicole_desc.png'

export default function SpeakerSection() {
  return (
    <Element name="speaker" 
          className=" lg:mx-10 xl:mx-20"
          data-aos="fade-in"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center">

      <div className="text-center">
        <h1 className="section-title has-text-centered is-size-1-mobile">
          <b>SPEAKERS</b>
        </h1>
      
      <div className="grid grid-cols-2 mx-10 gap-y-[50px] md:gap-y-20 lg:gap-y-20 md:grid-cols-2 lg:grid-cols-3 xl:gap-y-[70px] xl:mx-[100px]">
        <FlipImage front={bagusde} back={bagusde_desc}/>
        <FlipImage front={anton} back={anton_desc}/>
        <FlipImage front={irawati} back={irawati_desc}/>
        <FlipImage front={christie} back={christie_desc}/>
        <FlipImage front={billy} back={billy_desc}/>
        <FlipImage front={nicole} back={nicole_desc}/>
        <FlipImage front={betha} back={betha_desc}/>
        <FlipImage front={gisella} back={gisella_desc}/>
      </div>

      </div>

      {/* <div className="">
>>>>>>> Stashed changes
        <div>
          <h1 className="section-title has-text-centered is-size-1-mobile">
            <b>SPEAKERS</b>
          </h1>
        </div>
          <Splide className="hidden lg:block" options={ { 
            type: 'loop',
            perPage : 3,
            focus : "center",
          } }>
          <SplideSlide >
            <SpeakerCard
              name={
                <h2 class="is-size-3 has-text-weight-bold">
                  Daphne Angelene <br /> Ophelia
                  <br />
                </h2>
              }
              genne={<img src={daphne} />}
              gennetext={
                <p className="word-format text-sm">
                  A sanguine who never fails to amuse the people around her as cheerfulness dominates her personality. None other than Daphne, a 12th grader at SMAK 1 Penabur Jakarta. She is an unapologetic empath and values how emotions play such a major role in how human brain works. She believes that everyone have bitter experience with people. In this talk, she will shift the focus of the human brain's trauma response when encountering unwanted scenarios and she aims to straighten common misbeleifs in facing antagonists in our own life story.                </p>
              }
            />
          </SplideSlide>
          <SplideSlide>
            <SpeakerCard
              name={
                <h2 class="is-size-3 has-text-weight-bold">
                  Ibnu <br />Nadzir
                  <br />
                </h2>
              }
              genne={<img src={ibnu} />}
              gennetext={
                <p className="word-format text-sm">
                  Ibnu Nadzir is a PhD student at the Anthropology Department of University College London (UCL) with research on nationalism and the startup ecosystem in Indonesia. He also has more than ten years of experience as a researcher at the Center for Research on Society and Culture-BRIN with a focus on digital anthropology studies. His publications can be found in books, scientific journals, and several media in Indonesia and abroad. Apart from that, through his scientific field, he is also actively involved in work with government institutions, NGOs and the private sector.                </p>
              }
            />
          </SplideSlide>
          <SplideSlide>         
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Nicholas  <br />Glenn
                <br />
              </h2>
            }
            genne={<img src={nicholas} />}
            gennetext={
              <p className="word-format text-sm">
                Nicholas Glenn is a corporate lawyer who has a passion for music and founded Imajikara, a nonprofit creative community that contributes to creative industry education for creative workers and underprivileged communities. As both a lawyer and a creative worker, Nicholas aims to share his perspective on how to navigate productivity with passion to achieve a healthy productivity.
              </p>
            }
            />
          </SplideSlide>
          <SplideSlide>
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Maria Rania  <br />Kusumadinata
                <br />
              </h2>
            }
            genne={<img src={rania} />}
            gennetext={
              <p className="word-format text-sm">
               Within the halls of SMAK 1 Penabur Jakarta, Maria Rania Kusumadinata is known as an ambitious, intellectually driven, and goal oriented 11th-grade student. Yet, behind the facade of ambition lies a hidden truth that not many realize—a crybaby. In a world that often celebrates stoicism and toughness, Rania has explored the power of embracing her emotions, courage to be open, honest, and sensitivie in an often unforgiving world. Through TEDxYouth@Smakone, an course of action to overcome this will be introduced by Rania through her personal stories, research ,and insights.
              </p>
            }
          />
          </SplideSlide>

          <SplideSlide>
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Shan  <br />Sebastian
                <br />
              </h2>
            }
            genne={<img src={shan} />}
            gennetext={
              <p className="word-format text-sm">
                Shan is a Head of Product at GovTech Edu Indonesia. He drives the development, launch, and scaling of Indonesia Ministry of Education & Culture’s (MoEC) digital priorities, including Kampus Merdeka, Rapor Pendidikan, and SatuData. And as he is passionate about addressing customer and stakeholder pain points through technology, Shan will share how tech has been positively impacting the Indonesian education landscape, and what you could do as youth to support.
              </p>
            }
          />
          </SplideSlide>

          <SplideSlide>
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Vivian
                <br />
              </h2>
              
            }
            genne={<img src={vivian} />}
            gennetext={
              <p className="word-format text-sm">
                Vivian is a perfectionist and strong-willed student with an unwavering desire to do extraordinary things.She aims to strive in academic settings with her determined mindset and persistent ambition. However, despite all her best efforts, she can't seem to get past the lines of being only "OK" in merely everything she accomplishes. In an environment and society where exceptionalism and greatness are all that is rewarded, it's often easy for one to lose sight of their own worth. Maybe society thinks this is the end of the world, because exceptionalism is clearly the only way she can be seen as worthy–but Vivian disagrees. In this talk, she wishes to reframe society’s culture of only recognizing the value of extraordinary contributions and to encourage people to find fulfillment in embracing mediocrity.
              </p>
            }
          />
          </SplideSlide>

          <SplideSlide>
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Winola
                <br />
                Sebastian
              </h2>
            }
            genne={<img src={winola} />}
            gennetext={
              <p className="word-format text-sm">
                Winola Sebastian is an independent artist who has a passion for art history and storytelling. Tying all of that together in various forms of content creation, Winola posts videos on Instagram and Tiktok about everything art related. She shares tutorials, factual essays and general musings while painting using different mediums in hopes to inspire others to create too.
              </p>
            }
          />
          </SplideSlide>
         </Splide>
         <Splide className="block lg:hidden" options={ {
            type: 'loop',
            perPage : 1,
            focus : "center",
            autoHeight : true,
          } }>
            <SplideSlide >
            <SpeakerCard
              name={
                <h2 class="is-size-3 has-text-weight-bold">
                  Daphne Angelene <br /> Ophelia
                  <br />
                </h2>
              }
              genne={<img src={daphne} />}
              gennetext={
                <p className="word-format text-sm">
                  A sanguine who never fails to amuse the people around her as cheerfulness dominates her personality. None other than Daphne, a 12th grader at SMAK 1 Penabur Jakarta. She is an unapologetic empath and values how emotions play such a major role in how human brain works. She believes that everyone have bitter experience with people. In this talk, she will shift the focus of the human brain's trauma response when encountering unwanted scenarios and she aims to straighten common misbeleifs in facing antagonists in our own life story.                </p>
              }
            />
          </SplideSlide>
          <SplideSlide>
            <SpeakerCard
              name={
                <h2 class="is-size-3 has-text-weight-bold">
                  Ibnu <br />Nadzir
                  <br />
                </h2>
              }
              genne={<img src={ibnu} />}
              gennetext={
                <p className="word-format text-sm">
                  Ibnu Nadzir is a PhD student at the Anthropology Department of University College London (UCL) with research on nationalism and the startup ecosystem in Indonesia. He also has more than ten years of experience as a researcher at the Center for Research on Society and Culture-BRIN with a focus on digital anthropology studies. His publications can be found in books, scientific journals, and several media in Indonesia and abroad. Apart from that, through his scientific field, he is also actively involved in work with government institutions, NGOs and the private sector.                </p>
              }
            />
          </SplideSlide>
          <SplideSlide>         
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Nicholas  <br />Glenn
                <br />
              </h2>
            }
            genne={<img src={nicholas} />}
            gennetext={
              <p className="word-format text-sm">
                Nicholas Glenn is a corporate lawyer who has a passion for music and founded Imajikara, a nonprofit creative community that contributes to creative industry education for creative workers and underprivileged communities. As both a lawyer and a creative worker, Nicholas aims to share his perspective on how to navigate productivity with passion to achieve a healthy productivity.
              </p>
            }
            />
          </SplideSlide>
          <SplideSlide>
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Maria Rania  <br />Kusumadinata
                <br />
              </h2>
            }
            genne={<img src={rania} />}
            gennetext={
              <p className="word-format text-sm">
               Within the halls of SMAK 1 Penabur Jakarta, Maria Rania Kusumadinata is known as an ambitious, intellectually driven, and goal oriented 11th-grade student. Yet, behind the facade of ambition lies a hidden truth that not many realize—a crybaby. In a world that often celebrates stoicism and toughness, Rania has explored the power of embracing her emotions, courage to be open, honest, and sensitivie in an often unforgiving world. Through TEDxYouth@Smakone, an course of action to overcome this will be introduced by Rania through her personal stories, research ,and insights.
              </p>
            }
          />
          </SplideSlide>

          <SplideSlide>
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Shan  <br />Sebastian
                <br />
              </h2>
            }
            genne={<img src={shan} />}
            gennetext={
              <p className="word-format text-sm">
                Shan is a Head of Product at GovTech Edu Indonesia. He drives the development, launch, and scaling of Indonesia Ministry of Education & Culture’s (MoEC) digital priorities, including Kampus Merdeka, Rapor Pendidikan, and SatuData. And as he is passionate about addressing customer and stakeholder pain points through technology, Shan will share how tech has been positively impacting the Indonesian education landscape, and what you could do as youth to support.
              </p>
            }
          />
          </SplideSlide>

          <SplideSlide>
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Vivian
                <br />
              </h2>
              
            }
            genne={<img src={vivian} />}
            gennetext={
              <p className="word-format text-sm">
                Vivian is a perfectionist and strong-willed student with an unwavering desire to do extraordinary things.She aims to strive in academic settings with her determined mindset and persistent ambition. However, despite all her best efforts, she can't seem to get past the lines of being only "OK" in merely everything she accomplishes. In an environment and society where exceptionalism and greatness are all that is rewarded, it's often easy for one to lose sight of their own worth. Maybe society thinks this is the end of the world, because exceptionalism is clearly the only way she can be seen as worthy–but Vivian disagrees. In this talk, she wishes to reframe society’s culture of only recognizing the value of extraordinary contributions and to encourage people to find fulfillment in embracing mediocrity.
              </p>
            }
          />
          </SplideSlide>

          <SplideSlide>
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Winola
                <br />
                Sebastian
              </h2>
            }
            genne={<img src={winola} />}
            gennetext={
              <p className="word-format text-sm">
                Winola Sebastian is an independent artist who has a passion for art history and storytelling. Tying all of that together in various forms of content creation, Winola posts videos on Instagram and Tiktok about everything art related. She shares tutorials, factual essays and general musings while painting using different mediums in hopes to inspire others to create too.
              </p>
            }
          /></SplideSlide>
         </Splide> 
      </div> */}
    </Element>
  );
}