import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Plans from '../components/Plans/Plans'
import Youtubecomp from '../components/YoutubeComp/Youtubecomp'
import Enquire from '../components/Enquire/Enquire'
import Indexblogcomp from '../components/IndexBlogComponent/Indexblogcomp'
import Instagramcomp from '../components/InstagramComp/Instagramcomp'
import Sociallinks from '../components/Sociallinks/Sociallinks'
import Whatsappicon from '../components/Whatsappicon/Whatsappicon'
import whatsappCommonFunctions from '../utils/common/whatsappbottomicon/whatsapp'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Whatsappicon/>
      <Plans />
      <Youtubecomp/>
      <Enquire/>
      <Indexblogcomp/>
      <Instagramcomp/>
      <Sociallinks/>
    </div>
  )
}
