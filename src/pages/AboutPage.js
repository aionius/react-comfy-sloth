import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis, accusantium ab vitae mollitia magni quibusdam sint
            cupiditate. Vero doloremque libero magnam quis. Assumenda fuga
            quaerat consequuntur optio maiores quas earum facere deserunt,
            magnam ut atque nesciunt, tenetur eveniet aspernatur illum labore
            velit sint temporibus nemo, asperiores soluta voluptas. Nostrum
            libero voluptates necessitatibus consequuntur natus voluptate
            quaerat veritatis perferendis dignissimos! Consequuntur obcaecati,
            accusamus corrupti, deleniti libero dolore ea totam sit asperiores
            consequatur aliquam sint amet. Soluta dolorum nam repudiandae
            pariatur quos, perspiciatis debitis officiis harum iste? Tempora
            perferendis ut fugiat labore nisi nulla error non sint ratione!
            Dolor velit veritatis quis.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
