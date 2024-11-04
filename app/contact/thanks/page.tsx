"use client"

import React from 'react';
import "@/scss/thanks.scss"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from '@/components/Link';

function Thanks() {
  useGSAP(
    () => {
      gsap.from(".thank-you-page", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
    }
  );

  return (
    <main>
      <div className="thank-you-page">
        <h1>Thank You!</h1>
        <p>Your message has been successfully sent.</p>
        <p>
          I appreciate you reaching out and will get back to you as soon as
          possible. Usually, you can expect a response within 1-2 business days.
        </p>
        <Link to="/"><button className='btn btn-outline'>Return to Homepage</button></Link>
      </div>
    </main>
  );
}

export default Thanks
