import ReactFullpage from '@fullpage/react-fullpage'
import type { NextPage } from 'next'
import { Introduction } from 'components/Introduction'
// import sanityClient from 'utils/sanityClient'

// TODO add particles to background https://particles.js.org/docs/index.html and the use dark color pallete

const Home: NextPage = () => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      scrollOverflow
      render={() => {
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

// export async function getStaticProps() {
//   const projects = await sanityClient.fetch(`*[_type == "project"]`)

//   return {
//     props: {
//       projects,
//     },
//   }
// }

export default Home
