import React from "react";
import { useNavigate } from "react-router-dom";
import "./CaseStudies.css";

export const caseStudies = [

    {
        title: "Risky T – A Safer Way to Transact",
        subtitle: "Empowering secure digital transactions with trust and transparency.",
        video: require("../assets/Riskyt.mp4"),
        slug: "risky-t-safe-transactions",
        description: `
      Client - Risky T  
      Industry: Financial Services / Transaction Security  
      
      Goals:  
      • Increase brand awareness in the financial services and transaction security market  
      • Drive sign-ups for the app and engagement on the platform  
      • Promote secure transaction services  
      
      Our Strategy:  
      • Content marketing highlighting security and ease of use  
      • Targeted Facebook and Instagram ads  
      • Educational content to build trust  
      
      Implementation:  
      • Video ads and carousel posts  
      • Blog posts and infographics  
      • Facebook and Instagram ad campaigns  
      • User feedback campaigns  
      
      Results: 
      • 40% increase in sign-ups  
      • 60% increase in social media engagement  
      • Higher customer trust and platform usage
      `
      },
      {
        title: "247food – See For Yourself",
        subtitle: "Delivering delicious convenience, 24/7.",
        video: require("../assets/247.mp4"),
        slug: "247food-see-for-yourself",
        description: `
      Client - 247Foods  
      Industry: Online Food Delivery and E-Commerce  
      
      Goals:
      • Increase online sales  
      • Promote products to a wider audience  
      • Build brand recognition  
      
      Our Strategy:  
      • Facebook & Instagram ad campaigns  
      • Product-focused content  
      • Customer testimonials  
      
      Implementation:  
      • 12 flyers & 5 videos  
      • Managed social content & ads  
      • Location-based targeting  
      • Community engagement  
      
      Results:  
      • 70% increase in followers  
      • 40% online sales growth  
      • 10% increase in retention
      `
      },      
      {
        title: "WoodHub 89 – Crafted for Comfort",
        subtitle: "Furniture built with precision, passion, and personality.",
        video: require("../assets/woodhub1.mp4"),
        slug: "woodhub-89-crafted-comfort",
        description: `
      Client -  WoodHub 89
      Industry: Furniture and Interior Design
      Goals:
      • 
      
      Goals:
      • Increase online visibility
      • Drive sales for furniture and interior designs
      • Build brand presence and recognition on social media
      
      Our Strategy:  
      • Develop engaging content (high-quality images, videos, and
        posts)
      • Run targeted Facebook and Instagram ads to increase brand
      visibility
      • Implement a content marketing strategy to promote seasonal
      sales and new arrivals
      
      Implementation:  
      • Produced 10 flyer designs for promotions and offers
      • Created 3 professional videos showcasing new products 
      • Set up advanced ad campaigns with targeted retargeting
      • Used carousel ads and sponsored stories to reach a broader
      audience  
      
      Results:  
      • Increased brand visibility on social media by 50%  
      • Sales increased by 30% during peak promotional periods 
      •Social media engagement improved by 40%, with higher
      interaction on posts
      `
      },      
    {
        title: "Authentic Solar City",
        subtitle: "RENEWABLE ENERGY",
        video: require("../assets/authenticsolar.mp4"),
        slug: "authentic-solar-1",
        description: `
      Client - Authentic Solar City  
      Industry: Renewable Energy (Solar Power Solutions)
      
      Goals:  
      • Increase brand awareness in the renewable energy sector  
      • Drive sales of solar energy products  
      • Educate the market about the benefits of using solar energy  
      
      Our Strategy:  
      • Focus on sustainability and energy savings through educational content  
      • Create visually engaging ads to demonstrate solar solutions  
      • Target eco-conscious individuals and businesses through Facebook and Instagram ads  
      
      Implementation:  
      • Created product showcase videos and customer testimonials  
      • Developed a targeted ad strategy to promote solar energy solutions  
      • Engaged in partnerships with environmental organizations to spread the word  
      
      Results:  
      • Increased brand awareness by 45%  
      • Sales of solar products grew by 20%  
      • 35% increase in social media engagement  
      `
      },
      
      {
        title: "Sustainable Palm – Greener Futures",
        subtitle: "Promoting eco-conscious palm oil practices for a better tomorrow.",
        video: require("../assets/sustainable1.mp4"),
        slug: "sustainable-palm-greener-futures",
        description: `
      Client -  Sustainable Palm
      Industry: Agriculture and Food Production
      
      Goals:
      • Promote the importance of sustainable palm oil
      • Increase consumer awareness about eco-friendly practices
      • Build brand loyalty and encourage ethical purchases
      
      Our Strategy:  
      • Build content around the benefits of sustainable palm oil
      • Educate consumers on eco-friendly farming practices through visual storytelling
      • Create compelling ads focusing on the environmental impact of palm oil
      
      Implementation:  
      • Developed a content strategy featuring educational videos and infographics
      • Ran ads on Facebook to highlight sustainability benefits
      • Collaborated with eco-conscious influencers to spread awareness
      • Regularly updated the audience with behind-the-scenes content about ethical production
      
      Results:  
      • Raised awareness among 10,000+ consumers about sustainable palm oil
      • Social media engagement grew by 50% 
      •Positive feedback from customers increased by 35%
      `
      },      
  ];
  
  const CaseStudies = () => {
    const navigate = useNavigate();
  
    return (
      <section className="case-section" id="cases">
        <div className="case-header">
          <h2>PROJECTS <span>CAMPAIGNS & CASE STUDIES</span></h2>
        </div>
  
        <div className="case-carousel">
          {caseStudies.map((item, index) => (
            <div
              className="case-slide"
              key={index}
              onClick={() => navigate(`/projects/${item.slug}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="case-video-wrapper">
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="case-video"
                />
                <div className="case-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default CaseStudies;
