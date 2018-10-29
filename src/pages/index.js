import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Mai Bhi" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>#MaiBhi</h2>
                </header>
                <p>
                  In India, it’s safer to be a cow than it is a woman. Crimes such as sexual assault, cyberstalking, 
                  and domestic violence are highly prevalent in the nation and there is mostly inaction on the government’s 
                  part to protect women from these heinous crimes. Thus, it’s time to take the matter into the people’s 
                  hands. Therefore, <strong>Mai Bhi</strong> attempted to convince the government to allow women to file harassment complaints 
                  online to make their task easier and increase the reportability of these crimes with a 
                  <a target="_blank" href="https://www.change.org/p/arvind-kejriwal-anil-baijal-rajnath-singh-allow-women-to-file-sexual-harassment-and-assault-fir-s-online"> popular petition </a> 
                  and appeals to leaders such as Rajnath Singh, the Home Minister of India. However, there was no reply or 
                  action taken by the government. Therefore, <strong>Mai Bhi</strong> has created a form where victims (or friends/family 
                  of the victims) can fill in details and file their FIR at their local police stations.
                </p>
                <p>
                Furthermore, <strong>Mai Bhi</strong> also offers a safe space for victims, and allows them to share anonymously. 
                Finally, <strong>Mai Bhi</strong> has a guideline on sexual harassment, what actions victoms might 
                take as well as the various forms of harassment.
                </p>
                <ul className="actions">
                  <li><a target="_blank" href="https://www.change.org/p/arvind-kejriwal-anil-baijal-rajnath-singh-allow-women-to-file-sexual-harassment-and-assault-fir-s-online" className="button">Join the Movement</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section id="first" className="main">
            <header className="major special">
              <h2>Reporting Sexual Harassment</h2>
            </header>
            <p>
              The Indian police is the embodiment of the atrocious situation of women’s safety in the country. 
              Already having gone through a horrifying experience, women have to then deal with insensitive policemen 
              who manhandle them and make the women feel uncomfortable, often leading to their dropping the case and 
              not even trying to pursue the road to justice and rather keeping silent due to this abuse of their rights. 
            </p>
            <p>
              And therefore, we ask that these women be allowed to file E-FIR’s, just as Delhi citizens are allowed in 
              the cases of theft, to help encourage more and more women to come out with their cases. We ask that they 
              be given a chance to file these cases without having a fear of being further discriminated against and 
              feel comfortable while doing so, thereby massively increasing the reportability of these crimes and reducing 
              the helplessness these women feel after going through one of the most traumatic life experiences one can ever 
              go through.
            </p>
            <p>
              Having said that, we recognise that the government has not taken any action upon this matter as of now and thus 
              present a form below where victims can enter their details and generate a complaint which they can submit to 
              their local police station without judgement. 
            </p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Report a Crime</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main">
            <header className="major special">
              <h2>#MeToo India</h2>
            </header>
            <p>
              The Metoo movement is perhaps one of the most important movements that can be seen in the modern world. 
              It is against the horrible crime of sexual harassment and assault and finally gives victims a safe platform 
              to talk of their traumatic experiences and address these issues which are highly prevalent in society but 
              rarely taken action on, especially in a nation like India where certain types of sexual assault (such as 
              marital rape) aren’t even illegal and women are often found responsible for their own sexual harassment or 
              assault (through bogus reasoning such as their clothing or the way in which they conduct themselves. Thus, 
              it is important that we bring these issues to light and once and for all talk of these problems and attempt 
              to bring some solutions to reduce these heinous crimes. Here are some infamous men who have been exposed in 
              their actions of abusing their power:
            </p>
            <ul className="statistics">
              <a target="_blank" href="https://www.firstpost.com/india/metoo-mj-akbars-use-of-predatory-tactics-sexual-harassment-in-newsroom-14-women-share-their-ordeal-5359861.html">
                <li className="style1">
                  <strong>MJ Akbar</strong> 
                  Journalist, Ex-Union minister<br/>
                </li>
              </a>
              <a target="_blank" href="https://www.firstpost.com/entertainment/aib-writer-actor-utsav-chakraborty-accused-of-sexual-harassment-comedy-group-takes-down-his-videos-5317711.html">
                <li className="style2">
                  <strong>Utsav Chakraborty</strong> 
                  Comedian, Writer<br/>
                </li>
              </a>
              <a target="_blank" href="https://www.firstpost.com/entertainment/sajid-khan-accused-of-sexual-harassment-in-three-metoo-allegations-actor-zain-durrani-also-named-5360181.html">
                <li className="style3">
                  <strong>Sajid Khan</strong> 
                  Filmmaker <br/>
                </li>
              </a>
              <a target="_blank" href="https://www.firstpost.com/entertainment/alok-nath-accused-of-sexual-harassment-by-sandhya-mridul-deepika-amin-after-vinta-nanda-speaks-out-5351071.html">
                <li className="style4">
                  <strong>Alok Nath</strong> 
                  Actor <br/>
                </li>
              </a>
            </ul>
            <p className="content">
              These are only a few examples of the millions of cases we see here today. The point of adding these 
              is to show every single victim out there that they are not alone, that the trauma they faced is not 
              something they MUST hide in order to save their family or community’s face. And thus, by giving them 
              a safe space, Mai Bhi attempts to bring these issues to light and once and for all talk of these problems 
              and attempt to offer some solutions to reduce these heinous crimes.
            </p>
            <footer className="major">
              <ul className="actions">
                <li><a target="_blank" href="https://www.firstpost.com/india/metoo-in-india-a-list-of-allegations-as-reported-on-social-media-and-followed-up-by-firstpost-5359961.html" className="button">More Stories</a></li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main">
            <header className="major special">
              <h2>Sexual Harassment Guidelines</h2>
            </header>
            <p>
              On  26th June, 2018, India was declared the most dangerous nation for women in the world in a survey, 
              ranking below war-ridden countries such as Syria and Afghanistan. With the rise of the #metoo movement in 
              India, it is important to address this issue that millions of women face every single day: how can we reduce 
              this plight? 
            </p>
            <p>
              But why is the situation in our country <strong>so</strong> deplorable? Three main reasons. Firstly, 
              people often don’t know what constitutes sexual harassment and if they are being sexually harassed. 
              Secondly, people don’t know what actions they can take after being sexually harassed. These lead to a 
              absence of accountability for these harassers. Furthermore, people are unaware of what sexual harassment 
              means and may sexually harass another person inadvertently. 
            </p>
            <h2>What constitutes sexual harassment?</h2>
            <p>
              As mentioned before, people are often unaware of when they have been sexually harassed and sometimes 
              let it go without taking any action. Therefore, this section serves to ensure that one knows cases 
              in which they were harassed. 
            </p>
            <p>
              You <strong><u>should</u></strong> file a complaint if you:
            </p>
            <ul>
              <li>received unwelcome physical contact or sexual advances (in the form of kissing, hugging, or fondling).</li>
              <li>received an unwanted verbal demand for sexual favours or verbal comments of a sexual nature (Including terms which were intended to be compliments but are still derogatory).</li>
              <li>received unwanted sexually explicit messages (in the form of sexually charged texts, phone calls, or unsolicited pictures of a sexual nature)</li>
              <li>received repeated unwanted invitations for dates and/or sexual intimacy even after rejecting the first few demands (this includes people whom you may know or strangers approached)</li>
              <li>received non verbal sexually-suggestive gestures (such as pointing to the pelvic region and constant whistling and leering)</li>
              <li>received unwelcome sexual comments on your appearance, age, or private life (could be insults or unwarranted comments)</li>
              <li>received any other unwelcome physical, verbal, or non-verbal sexual conduct</li>
            </ul>
            <h2>Actions you should take if harassed</h2>
            <p>
              Although there is very detailed information on what action can be taken by someone who has been harassed, 
              it is not usually explicitly known by many victims who feel helpless and never report it. Hence, here are 
              some do’s and don'ts on the actions you should take after being sexually harassed:
            </p>
            <ul>
              <li><strong>Do</strong> be aware of the legal action you can take against the harassers. Sexual harassment is considered under Section 354 of the constitution and a woman can file an F.I.R(First Information Report) at the Rapid Response Desk of the nearest Police station.</li>
              <li><strong>Don’t</strong> be persuaded to drop the case if the policeman or someone else tells you to. Remember that sexual harassment is a serious problem in our country and that the police <strong>cannot</strong> refuse to file an F.I.R. Only drop the case by your own volition if you majorly misrepresented the situation in your mind.</li>
              <li><strong>Do</strong> use the form provided here if you feel unsafe or intimidated by the police. Again, sexual harassment is a serious problem in this country and therefore, its reporting is immaterial to Indian society. Therefore, even if the police is attempting to coerce you into dropping the case or harassing you and makes it harder to file your complaint, use our form to generate a written complaint which you can file at the police station without judgement.</li>
            </ul>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
