import React, { Component } from 'react';

import darbyPic2 from '../../assets/images/pictures/darby/darby-2.jpg';
import Social from '../Social/Social'

import './BlogPost.scss';

class BlogPost extends Component {

    render() {
        return <>
            <div className="blog-post-wrapper">
                <div className="image">
                    {/* <img src={this.props.imgSrc} alt="item-img" /> */}
                    <img src={darbyPic2} alt="item-img" />
                </div>
                <div className="blog-content">
                    <p className="title">Meet Darby</p>
                    <p className="date">November 15, 2022</p>
                    <p className="content">
                        Hi, I’m Darby Dooda Hanson. I’m a Certified Massage Practitioner, Cranial Sacral Therapist, and Yoga Instructor practicing in North County San Diego for the past 7 years. In 2016, I quit my career as a waitress in the hospitality industry where I struggled with burnout, chronic pain, and substance abuse to pursue my passion and purpose helping others get out of pain & back into alignment – body, mind, and soul.
                        <br /> <br />
                        I launched Body By Darby 7 years ago to give back the transformational experiences that radically changed my life and allowed me to find my authentic self. I use my personal and professional experiences with chronic pain, trauma, injury recovery, depression and stress and anxiety to help others feel their best in their bodies through therapeutic massage, CST, Somatoemotional release, breathwork, meditation, and energy healing.
                        <br /> <br />
                        I grew up in San Antonio with my older sister, mom, and step dad. Like many of us, I faced some early childhood adversity and trauma. My parents divorced at an early age, my father struggled with alcoholism and depression and ultimately took his life. As a result of the unaddressed emotional wounds, I struggled with bouts of substance abuse, anxiety, depression, and chronic pain. My nervous system was stuck in fight or flight, I didn’t trust myself to make good decisions, I felt ill equipped to face life and struggled in personal and romantic relationships. Like most people who have unresolved trauma I didn’t have the tools I needed to heal and move forward, I didn't even know I was stuck.
                        <br /> <br />
                        Then, one day in my early 20’s I fell at work on my waitressing shift. Both of my feet flew out from under me and I landed right on my sacrum. My hips healed out of alignment and I had a vertical whip lash up my spine. To address the chronic back pain that developed, I began receiving various therapy from acupuncturists, chiropractors and massage therapists, all of which turned out to be life-saving techniques. These were not your ordinary bodywork sessions. These practitioners were holding a safe, non-judgmental space to process my emotions. I started having huge emotional releases during sessions that had been trapped since childhood. Once some of the trapped emotion was released from my body and nervous system, I started making huge leaps forward in my physical healing.
                        <br /> <br />
                        This is when the light bulb went off and I realized that our unprocessed emotions are directly connected to the body's ability to heal. That was the moment I realized this was my life purpose and holding space for others is what I was meant to do. A lot began to change for me. I found a support group and stopped  drinking. As I healed and mended my relationship with myself and my body, my life reflected it back to me. I felt rejuvenated, my relationships, work, life purpose, joy, and freedom flowed like water.
                        <br /> <br />
                        Today, I continue to heal, transform, and inspire others. It is a blessing to have transformed the hardships of life into the greatest gift of service I can give back to the world. I love helping others come into conscious union with their bodies, understand the messages of their body and in turn respond with kindness and compassion.
                        <br /> <br />
                        I am conscious and disciplined about implementing self-care at home and am passionate about empowering my clients to take responsibility for their healing journey by implementing self-care and lifestyle changes that support sustained shifts in health. When we carve out time to heal, we set ourselves free. We liberate our body and mind and can begin to appreciate the beauty and joy of life. When we free ourselves of pain and get to the core issue instead of chasing symptoms, our body heals, our nervous system strengthens, and we resource ourselves to take on life with confidence, optimism, and joy.
                        <br /> <br />
                        Every day I’m inspired by the magic of bodywork. It’s an indescribable feeling to be able to give back the gift that was given to me—to help bring people back into a safe and loving union with their bodies. My heart swells to witness the transformation in people's lives as pain and stress melt away and they can once again pursue their life's goals and dreams. By resolving physical, mental, emotional, and energetic restrictions and creating clear, healthy communication, we can make a happy home within ourselves.</p>
                </div>
                <div className="separator"></div>
                <div className="social">
                    <Social />
                </div>
            </div>
        </>;
    }
}

export default BlogPost;