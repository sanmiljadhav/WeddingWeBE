import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Plans from '../components/Plans/Plans'
import Youtubecomp from '../components/YoutubeComp/Youtubecomp'
import Enquire from '../components/Enquire/Enquire'
import Indexblogcomp from '../components/IndexBlogComponent/Indexblogcomp'
import Instagramcomp from '../components/InstagramComp/Instagramcomp'
import Sociallinks from '../components/Sociallinks/Sociallinks'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Plans />
      <Youtubecomp/>
      <Enquire/>
      <Indexblogcomp/>
      <Instagramcomp/>
      <Sociallinks/>
    </div>
  )
}
