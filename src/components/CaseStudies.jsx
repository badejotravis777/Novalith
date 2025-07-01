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
      title: "Risky T – A Safer Way to Transact",
      subtitle: "Empowering secure digital transactions with trust and transparency.",
      video: require("../assets/riskyt2.mp4"),
     
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
      title: "Authentic Solar",
      subtitle: "RENEWABLE ENERGY",
      video: require("../assets/authenticsolar1.mp4"),
     
    }
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
