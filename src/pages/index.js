import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import PostList from "../components/PostList"
import GetFree from "../components/GetFree"
import resumePDF from '../img/about/preston-wallace-software-engineer.pdf'

const skills = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'GraphQL',
  'Express',
  'tRPC',
  'Tailwind CSS',
  'Vue',
  'React Native',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Prisma',
  'Python',
  'REST APIs',
  'Micro Frontends',
  'Event-Driven Systems',
  'SQS',
  'Kafka',
  'AWS',
  'GCP',
  'Docker',
  'Kubernetes',
  'CI/CD',
  'Figma',
  'Git',
  'Jest',
  'HTML5',
  'CSS3',
  'Redux',
  'Cursor AI',
  'GitHub Copilot',
  'Background Agents',
];

const BlogIndex = ({ data, location }) => {
  const blogPosts = data.allMarkdownRemark?.nodes || []
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} addMargin={false} hideTitle>
      <div className="home-container">

        {/* hero section */}
        <section id="hero-area" className="hero-area-bg section-padding">
          <div className="content-container">
            <div className="row">
              <div className="hero-content">
                <div>
                  <div className="script-font">Hi I'm</div>
                  <h2>Preston Wallace</h2>
                  <div className="script-font">FULL STACK SOFTWARE ENGINEER</div>
                <ul className="social-icon wow fadeInUp" data-wow-delay="0.8s">
                  <li>
                    <a className="twitter" href="https://twitter.com/PrestonCreate"><i className="icon-social-twitter"></i></a>
                  </li>
                  <li>
                    <a className="linkedin" href="https://www.linkedin.com/in/prestonwallace/"><i className="icon-social-linkedin"></i></a>
                  </li>
                  <li>
                    <a className="google" href="https://www.youtube.com/channel/UCoiCi3NyMZ98Rj5K3vZfExw"><i className="icon-social-youtube"></i></a>
                  </li>
                </ul>

                <button className="button button-info button-medium hover-grow">
                  <a href="#about" className="btn btn-common">About Me</a>

                </button>

                  <br/>

                </div>
              </div>
            </div>
          </div>
        </section>


        {/* about section */}
        <section id="about" className="section-padding">
          <div className="flex flex-column content-container">
            <div className="sm:flex section-padding">
              <div className="basis-1/2 m-2">
                <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                  <StaticImage
                    className="profile-image"
                    formats={["auto", "webp", "avif"]}
                    src='../img/about/headshot.jpg'
                    quality={95}
                    alt="Preston Wallace"
                    style={{zIndex:'10'}}
                  />
                </div>
              </div> 
              <div className="basis-1/2 m-2">
                <div className="profile-wrapper section-padding wow fadeInRight" data-wow-delay="0.3s">
                  <div className="text-3xl font-extrabold text-gray-600">Hey there!</div>
                  <p className="section-padding">I'm Preston Wallace, a startup-tested engineer passionate about building scalable SaaS and AI systems that streamline complex, real-world workflows. I currently work as a Senior Full Stack Software Engineer at <a href="https://mountain.com/">MNTN</a>, where I lead teams building AI-powered applications using React, TypeScript, Node.js, and GraphQL. I specialize in micro frontends, event-driven systems, and architecting solutions that deliver measurable business impact - like cutting campaign build times by 90% and increasing revenue by 40%. I leverage modern AI tools like Cursor Background Agents to automate workflows and double developer efficiency.</p>
                  <div className="about-profile">
                    <ul className="admin-profile">
                      <li><span className="pro-title"> Name </span> <span className="pro-detail">Preston Wallace</span></li>
                      <li><span className="pro-title"> Phone </span> <span className="pro-detail">(805) 286-0588</span></li>
                      <li><span className="pro-title"> e-mail </span> <span className="pro-detail">wallace.preston@gmail.com</span></li>
                    </ul>
                  </div>
                  <button className="button button-info button-medium hover-grow">
                    <a href={resumePDF}><i className="icon-paper-clip"></i> Download Resume</a>
                  </button>
                  <button className="button button-danger button-medium hover-grow">
                    <a href="https://www.linkedin.com/in/prestonwallace/" ><i className="icon-speech"></i> Connect with Me</a>
                  </button>
                  
                </div>
              </div>   
            </div>
          </div>
        </section>

        {/* services section */}
        <section id="services" className="services section-padding content-container">
          <h2 className="section-title  wow flipInX" data-wow-delay="0.4s">What I do</h2>
          <div>
            <div className="services-row">
              
                <div className="services-item hover-grow" data-wow-delay="0.3s">
                  <div className="icon">
                    <i className="icon-grid"></i>
                  </div>
                  <div className="services-content">
                    <h3>Full-Stack Development</h3>
                    <p>I build scalable applications with React, TypeScript, Next.js, and tRPC on the frontend, creating micro frontends that scale with your business needs.</p>
                  </div>
                </div>
              
                <div className="services-item hover-grow" data-wow-delay="0.6s">
                  <div className="icon">
                    <i className="icon-layers"></i>
                  </div>
                  <div className="services-content">
                    <h3>AI-Powered Systems</h3>
                    <p>I architect event-driven systems using Node.js, GraphQL, SQS, and Kafka, integrating AI tools to automate workflows and boost efficiency by up to 90%.</p>
                  </div>
                </div>
              
                <div className="services-item hover-grow" data-wow-delay="0.9s">
                  <div className="icon">
                    <i className="icon-briefcase"></i>
                  </div>
                  <div className="services-content">
                    <h3>Cloud Architecture</h3>
                    <p>I deploy and manage applications on AWS and GCP using Docker, Kubernetes, and CI/CD pipelines for scalable, reliable infrastructure.</p>
                  </div>
                </div>
              
                <div className="services-item hover-grow" data-wow-delay="1.2s">
                  <div className="icon">
                    <i className="icon-bubbles"></i>
                  </div>
                  <div className="services-content">
                    <h3>Team Leadership</h3>
                    <p>I lead engineering teams, mentor developers, and drive projects that deliver measurable business impact - from 40% revenue increases to 50% reduction in merge conflicts.</p>
                  </div>
                </div>
            </div>
          </div>
        </section>




        {/* resume section */}
        <section id="experience" className="section-padding">
          <div className="content-container">
            <div className="timeline-row">
              <div className="timeline-col">
                <div className="experience wow fadeInRight" data-wow-delay="0.6s">
                  <ul className="timeline">
                    <li>
                      <i className="icon-briefcase"></i>
                      <h2 className="timelin-title">Experience</h2>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Senior Full-Stack Software Engineer (TypeScript/React)</h3>
                        <span><b>MNTN</b> | Feb 2023 - Present</span>
                        <p className="line-text">
                          - AdDNA (AI): Led 10-person team to build web scraping app (RAG), cutting campaign build time 90% and reducing churn 15%. 
                          <br/>
                          - Deliverability (AI): Built predictive budget-spend system, increasing revenue by 40% and decreasing support tickets by 25%. 
                          <br/>
                          - Designed and owned CI/CD pipeline (PR envs, Development, QA, Prod), reducing test-build-deploy time by 40%. 
                          <br/>
                          - Broke Campaign Service into micro frontends, integrating with Clerk for auth. Reduced merge conflicts by approx 50%. 
                          <br/>
                          - Leveraged Cursor Background Agents to automate PR creation, doubling developer efficiency.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Back End Software Engineer (Node/GraphQL/SQS/Kafka)</h3>
                        <span><b>MNTN</b> | Jul 2021 - Jan 2023</span>
                        <p className="line-text">
                          - Built event-driven sync (SQS, Kafka), cutting idle compute costs and saving ~$40K/mo via on-demand scaling. 
                          <br/>
                          - Bootstrapped flighted budgets feature, boosting seasonal ad revenue up to 30%. 
                          <br/>
                          - Architected Node + GraphQL APIs, improving response times by up to 90%.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Lead SWE Instructor / Curriculum Writer</h3>
                        <span><b>Multiverse, Fullstack Academy</b> | 2019 - 2023</span>
                        <p className="line-text">
                          - Wrote & delivered 12-week SWE bootcamp (Google, Verizon, Barclays), generating $10M+ revenue, achieving +70 NPS. 
                          <br/>
                          - Led up to 6 instructors, managed 10-cohort curriculum, and delivered 550+ hours content of live code demo on Web Dev.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Software Engineer (Node/Vue/REST)</h3>
                        <span><b>Liquidity Services</b> | Apr 2019 - Jul 2021</span>
                        <p className="line-text">
                          - Built warehouse management system, reducing sort time by 20% and saving $2M annually in software costs. 
                          <br/>
                          - Automated inventory data-collection tool, improving lookup efficiency by ~85%. 
                          <br/>
                          - Raised API test coverage from 0% to 70%, strengthening reliability. 
                          <br/>
                          - Integrated with external systems like Stripe, eliminating sensitive data storage in company databases.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Network Admin, Assistant Manager, Web Dev</h3>
                        <span><b>K.Jons Diamonds & Gems</b> | until 2018</span>
                        <p className="line-text">
                          - Designed and managed major version of company e-commerce site, with 1000+ items, and total inventory value of $800K. 
                          <br/>
                          - Increased traffic to site by 100%, and landed site first-position worldwide in Google SERP listings for keywords.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* education section */}
              <div className="timeline-col">
                <div className="education wow fadeInRight" data-wow-delay="0.3s">
                  <ul className="timeline">
                    <li>
                      <i className="icon-graduation"></i>
                      <h2 className="timelin-title">Education</h2>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Coursera</h3>
                        <span>Jun 2025 - Present</span>
                        <p className="line-text">Courses on AI, Data Science, Architecture, and Micro Frontends</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>LinkedIn Learning</h3>
                        <span>Jun 2022 - 2024</span>
                        <p className="line-text">Courses on TypeScript, Authentication, Deployment, Agile Development.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>AWS</h3>
                        <span>Sep 2022</span>
                        <p className="line-text">Learning AWS Cloud Practitioner Essentials, Overview of AWS Cloud, AWS Cloud concepts, AWS services, security, architecture, pricing, and support.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Cisco</h3>
                        <span>Jul 2022</span>
                        <p className="line-text">Dove deep into Cyber Best Practices, Cybersecurity, Network Vulnerabilities, Privacy And Data Confidentiality, and Threat Detection</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Binsec Academy</h3>
                        <span>Sep 2020</span>
                        <p className="line-text">Performed a comprehensive secure coding review of an ExpressJS server running on NodeJS. Dove into the depths of the most common security risks for web applications (OWASP Top 10). This course included identifying and fixing multiple vulnerabilities in the web application's source code.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Fullstack Academy</h3>
                        <span>2018-2019</span>
                        <p className="line-text">Leveled-up my Javascript skills, diving deep into Node, Express, React, and PostgreSQL. Computer Science topics included data structures, closure, prototypal inheritance, and recursion. Fullstack Academy is a top-ranked school with campuses in New York City, Chicago, and remote campuses.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>GIA (Gemological Institute of America)</h3>
                        <span>2004 - 2011</span>
                        <p className="line-text">Developed in-depth, hands-on experience with Diamond Grading and the 4Cs (color, clarity, cut and carat weight). Used the GIA Colored Stone Grading System to evaluate gemstone quality. Successfully identified colored gemstones at random, including simulants and treatments. Learned how quality, rarity and color affect value. Determined how market factors affect gem value.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3>Cuesta College</h3>
                        <span>2002 - 2008</span>
                        <p className="line-text">Associate of Arts (A.A.), General Studies, 3.83 GPA w/ High Honors</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* skills section */}
        <section id="skills" className="skills section-padding content-container">
          <h2 className="section-title  wow flipInX" data-wow-delay="0.4s">Skills</h2>
          <h4 className="section-subtitle">
            These are just a few!
          </h4>
          <div className="skills-container">
            {
              skills.map((skill, index) => {
                return (
                  <div key={index} className="skills-row">
                    <div className="skills-item hover-grow">
                      {skill}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>


        {/* blog post list */}
        <PostList posts={blogPosts} />

        {/* free download section */}
        <GetFree />
        
      </div>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Preston Wallace" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { ne: "exclusive" } } }
      limit: 3
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
          featuredImage {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 300, height: 200)
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
