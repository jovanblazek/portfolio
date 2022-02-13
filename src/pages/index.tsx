import ReactFullpage from '@fullpage/react-fullpage'
import type { NextPage } from 'next'
import { Introduction } from 'components/Introduction'

const Home: NextPage = () => {
  return (
    <ReactFullpage
      // fullpage options
      licenseKey="YOUR_KEY_HERE"
      scrollingSpeed={1000} /* Options here */
      scrollOverflow
      render={({ state, fullpageApi }) => {
        // console.log(state)

        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Introduction />
            </div>
            <div className="section">
              <p>Section 2</p>
              <div>
                <p>
                  Section 2 child Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Qui voluptas odio aperiam sint rem atque
                  repudiandae. Totam officia aliquam maxime possimus enim dolor
                  esse laboriosam molestiae reprehenderit! Voluptas, reiciendis
                  molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Voluptatibus inventore repellat illum, perspiciatis
                  quasi est saepe similique reprehenderit optio ullam facilis
                  deleniti necessitatibus magni animi hic porro atque dolorem!
                  Iste! Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Voluptatibus inventore repellat illum, perspiciatis
                  quasi est saepe similique reprehenderit optio ullam facilis
                  deleniti necessitatibus magni animi hic porro atque dolorem!
                  Iste! Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Voluptatibus inventore repellat illum, perspiciatis
                  quasi est saepe similique reprehenderit optio ullam facilis
                  deleniti necessitatibus magni animi hic porro atque dolorem!
                  Iste! Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Voluptatibus inventore repellat illum, perspiciatis
                  quasi est saepe similique reprehenderit optio ullam facilis
                  deleniti necessitatibus magni animi hic porro atque dolorem!
                  Iste! Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Voluptatibus inventore repellat illum, perspiciatis
                  quasi est saepe similique reprehenderit optio ullam facilis
                  deleniti necessitatibus magni animi hic porro atque dolorem!
                  Iste! Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Voluptatibus inventore repellat illum, perspiciatis
                  quasi est saepe similique reprehenderit optio ullam facilis
                  deleniti necessitatibus magni animi hic porro atque dolorem!
                  Iste! Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Voluptatibus inventore repellat illum, perspiciatis
                  quasi est saepe similique reprehenderit optio ullam facilis
                  deleniti necessitatibus magni animi hic porro atque dolorem!
                  Iste!
                </p>
              </div>
            </div>
            <div className="section">
              <p>Section 3</p>
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

export default Home
